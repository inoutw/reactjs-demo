const axios = require('axios')
const path = require('path')
const fs = require('fs')
const prettier = require('prettier')
const env = require('./env/env.base.json')
const spaces = '  '
const toCamelCase = str => {
	const reCamelCase = /-(\w)/g
	return str.replace(reCamelCase, (a, b) => {
		return b.toUpperCase()
	})
}

function getGenerateName(className) {
	return className.replace(/«/g, '<').replace(/»/g, '>')
}

class apiGenerator {
	constructor(serviceName) {
		this.serviceName = serviceName
		this.apiDocs = {}
		this.apiPaths = {}
		this.typeDefinitionMap = new Map()
	}

	generate() {
		let url = `https://api-dev.lajsf.com/gateway/${this.serviceName}/v2/api-docs`
		console.log('start generator ', url)
		axios
			.get(url)
			.then(res => {
				this.apiDocs = res.data
				let { definitions, paths } = this.apiDocs
				for (let path in paths) {
					if (
						path.includes('/pv/') ||
						path.includes('/pvs/') ||
						path.includes('pb/images/action/download') ||
						!path.includes('/{version}/')
					)
						continue
					let url = path.replace('/{version}/', `/${env.apiVersion}/`)
					let pathParts = url.split('/')
					let pathInfo = paths[path]
					for (let httpMethod in pathInfo) {
						let { parameters, summary, responses, produces, tags } = pathInfo[httpMethod]
						if (Array.isArray(produces) && produces[0] === 'application/octet-stream') continue
						if (Array.isArray(tags) && tags.some(t => t === 'ignore')) {
							continue
						}
						let className = ''
						if (path.includes('/action/')) {
							className = pathParts[pathParts.length - 3]
						} else if (pathParts[pathParts.length - 1].includes('{')) {
							className = pathParts[pathParts.length - 2]
						} else className = pathParts[pathParts.length - 1]

						className = toCamelCase(className)
						if (className === 'geetest') continue
						this.apiPaths[className] = this.apiPaths[className] || {}
						let responseOk = responses[200]
						try {
							if (!responseOk.schema.$ref || responseOk.schema.$ref.indexOf('Response«') < 0) throw `接口返回类型出错`
							let typeName = this.getType(responseOk)
							let methodName = path.includes('/action/') ? toCamelCase(pathParts[pathParts.length - 1]) : httpMethod
							if (this.apiPaths[className][methodName]) {
								throw `解析出相同的方法名 ${JSON.stringify(this.apiPaths[className][methodName])},${path}`
							}
							for (let p of parameters) {
								p.typeName = this.getType(p)
							}
							this.apiPaths[className][methodName] = {
								className,
								typeName,
								url,
								method: httpMethod,
								parameters,
								summary,
							}
						} catch (ex) {
							throw `${ex}${this.serviceName} path:${path} responseSchema:${JSON.stringify(responseOk)}`
						}
					}
				}
				this.generateFile()
			})
			.catch(ex => {
				console.log(url, ex)
			})
	}
	getRefType(refType, ref) {
		if (this.typeDefinitionMap.has(refType)) return this.typeDefinitionMap.get(refType).typeName
		let generatorClass = ''
		let baseClass = ''
		if (refType.indexOf('«') > -1) {
			let gen = '<T>'
			if (refType.includes(',')) gen = '<T,T1>'
			if (gen == 'Map<T,T1>') return refType
			generatorClass = refType.substr(0, refType.indexOf('«')) + '<T>'
			baseClass = refType.substr(refType.indexOf('«') + 1)
			baseClass = baseClass.substr(0, baseClass.lastIndexOf('»'))
			this.getRefType(baseClass, ref)
			if (this.typeDefinitionMap.has(generatorClass)) return getGenerateName(refType)
		}
		let definition = this.apiDocs.definitions[refType]
		if (!definition) {
			let type
			if (refType.indexOf('«') > -1) {
				console.log('invalidateTypes:' + refType)
				return refType
			} else type = this.getType({ type: refType }, ref)

			return type
		}

		let typeDefinition = {
			description: definition.description,
			typeName: refType,
			properties: {},
		}
		if (generatorClass) {
			typeDefinition.typeName = generatorClass

			this.typeDefinitionMap.set(generatorClass, typeDefinition)
		} else {
			this.typeDefinitionMap.set(refType, typeDefinition)
		}
		if (definition.type !== 'object') throw `checkType 无法识别的类型${definition.type}`
		for (let propertyName in definition.properties) {
			let property = definition.properties[propertyName]
			try {
				let tsType = this.getType(property, ref)

				if (baseClass && (tsType === baseClass || tsType === baseClass + '[]')) {
					tsType = tsType.replace(baseClass, 'T')
				}
				let name = getGenerateName(propertyName)
				typeDefinition.properties[name] = {
					name,
					type: tsType,
					description: property.description,
				}
			} catch (ex) {
				console.error(ex)
				throw `无法识别的属性类型${propertyName} ${JSON.stringify(property)} ${refType}`
			}
		}
		if (generatorClass) return getGenerateName(refType)

		return typeDefinition.typeName
	}
	generateFile() {
		const apiDir = path.join(__dirname, '..', 'src/api')
		if (!fs.existsSync(apiDir)) {
			fs.mkdirSync(apiDir)
		}
		let tsContent = [`import {httpPost,httpGet,httpPut,httpDelete} from "services/http"`]
		// let iapi = fs
		//   .readFileSync(path.join(__dirname, 'api', 'api-template.ts'), {
		//     encoding: 'utf8',
		//   })
		//   .toString()
		// tsContent.push(iapi)
		// tsContent.push('type int = number')
		// tsContent.push('type List<T> = T[]')
		tsContent.push(`type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		`)
		tsContent.push('type JsonNode = any')
		tsContent.push('type long = number')

		tsContent.push('interface KeyValueDTO<T,T1>{key:T,value:T1}')
		//生成d文件
		for (let [definition, typeInfo] of this.typeDefinitionMap) {
			//排除Map定义
			if (typeInfo.typeName === 'Map<T>') continue
			if (typeInfo.typeName.startsWith('KeyValueDTO')) continue
			if (typeInfo.typeName === 'JsonNode') continue
			tsContent.push(`export interface ${typeInfo.typeName} {`)
			for (let propertyName in typeInfo.properties) {
				let property = typeInfo.properties[propertyName]
				if (property.description) tsContent.push(`${spaces.repeat(1)}/** ${property.description} */`)
				tsContent.push(`${spaces.repeat(1)}${propertyName}?: ${property.type}`)
			}

			tsContent.push('}\n')
		}
		// fs.writeFileSync(path.join(apiDir, 'index.d.ts'), tsContent.join('\n'), 'utf8');
		//生成api文件
		let apiContent = []

		apiContent.push('export default {')
		this.generateApi(apiContent)

		apiContent.push('}')
		// let fileContent = tsContent.join('\n') + apiContent.join('\n')
		// let options = prettier.resolveConfig.sync(path.join(process.cwd(), 'prettier.config.js'))
		// fileContent = prettier.format(fileContent, { ...options, parser: 'typescript' })
		fs.writeFileSync(path.join(apiDir, this.serviceName + '.ts'), tsContent.join('\n') + apiContent.join('\n'), 'utf8')
	}
	getType(property, ref) {
		if (typeof property === 'string') {
			let refType = property.replace('#/definitions/', '')
			if (refType.includes('Response«')) {
				refType = refType.replace('Response«', '').replace('»', '')
			}

			let typeName = this.getRefType(refType, ref)
			return typeName
		}
		let { type, schema, $ref } = property
		if ($ref) return this.getType($ref, property)
		if (schema) return this.getType(schema, ref)
		switch (type) {
			case 'integer':
			case 'number':
			case 'long':
			case 'int64':
			case 'int':
			case 'bigdecimal':
				return 'number'
			case 'string':
				return 'string'
			case 'boolean':
				return 'boolean'
			case 'file':
				return 'any'
			case 'array':
			case 'list':
				let refType = this.getType(property.items)
				return `${refType}[]`
			case 'object':
				if (property.additionalProperties) return 'any'
				if (ref.$ref.includes('ReportUnit')) return 'any'
				console.warn(property, ref)

				throw new Error(`无法识别的属性类型${JSON.stringify(property)}`)
			default:
				if (type.includes(',')) {
					let typeArr = type.split(',')
					return typeArr
						.map(p => {
							if (this.apiDocs.definitions[p]) return this.getType(p, ref)
							return this.getType({ type: p })
						})
						.join(',')
				}
				throw new Error(`无法识别的属性类型1 ${type} ${JSON.stringify(property)} ${JSON.stringify(ref)}`)
		}
	}

	generateApi(arr) {
		let intent = 1
		for (let className in this.apiPaths) {
			arr.push(`${spaces.repeat(intent)}${className}: {`)
			for (let methodName in this.apiPaths[className]) {
				let apiInfo = this.apiPaths[className][methodName]
				let { url, method, parameters = [], typeName, summary } = apiInfo
				parameters = parameters.filter(
					p => p.in !== 'header' && p.in !== 'formData' && !(p.name == 'version' && p.in == 'path'),
				)
				let params = []
				let data = null
				// let paramDescriptions = []

				for (let p of parameters) {
					let required = p.required ? '' : '?'
					let nameAndType = `${p.name}${required}: ${p.typeName}`
					// if (p.description !== p.name) {
					// 	paramDescriptions.push(`@param `)
					// }
					if (p.in === 'query') {
						params.push(nameAndType)
					} else if (p.in === 'body') {
						data = nameAndType
					} else if (p.in === 'path') {
						params.push(nameAndType)
					} else if (p.in === 'formData') {
					}
				}
				let methodParams = ''
				let dataParams = ''
				let p2 = ''
				let d2 = ''
				if (params.length > 0) {
					methodParams = 'params: { ' + params.join(', ') + ' }'
					p2 = ',  {params} '
					// if (method !== "get" && !data) {
					//   d2 = ", {}";
					// }
				}
				if (data) {
					dataParams = (params.length > 0 ? ', ' : '') + `${data}`
					d2 = `, ${data.split(':')[0]}`
					if (params.length === 0) {
						d2 = `, ${data.split(':')[0]}`
					}
				} else if (method === 'post' && params.length === 0) {
					// d2 = `, {}`;
				}

				if (summary && summary !== methodName) {
					arr.push(`${spaces.repeat(intent + 1)}/**`)
					arr.push(`${spaces.repeat(intent + 1)}* ${summary}`)
					arr.push(`${spaces.repeat(intent + 1)}*/`)
				}
				url = url.replace(/\{/, '${params.')
				arr.push(
					`${spaces.repeat(intent + 1)}${methodName}(${methodParams}${dataParams}): Promise<${getGenerateName(
						typeName,
					)}> {`,
				)

				arr.push(
					`${spaces.repeat(intent + 2)}return ${toCamelCase('http-' + method)}(\`/${
					this.serviceName
					}${url}\`${d2}${p2}).then((res:any) => res.data.data)`,
				)
				arr.push(`${spaces.repeat(intent + 1)}},`)
			}
			arr.push(`${spaces.repeat(intent)}},`)
		}
	}
}

// platform-user          用户服务
// platform-behavior   		用户行为服务
// platform-support    		支撑服务

;[
	'platform-user',
	'platform-behavior',
	'platform-support',
	'platform-pay',
	'mall',
	'nutrition',
	'evaluate',
	// 'search',
	'order',
	'merchant',
	'cms',
	'financial',
	'activity',
].forEach(serviceName => {
	let api = new apiGenerator(serviceName)
	api.generate()
})

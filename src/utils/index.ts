export const isBrowser = () => typeof window !== 'undefined'
export function isWeixinBrowser() {
  return isBrowser && /micromessenger/.test(navigator.userAgent.toLowerCase())
}
const mobileReg = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i
export const isMobile = isBrowser && mobileReg.test(navigator.userAgent)

export const toClassNames = (params: { [key: string]: boolean }) => {
  let classNames = []
  for (let key in params) {
    if (params[key]) classNames.push(params[key])
  }
  return classNames.join(' ')
}
interface Tree {
  id: number
  parentId: number
  children?: Tree[]
}
export function toTreeData(data: Tree[]) {
  let cache = new Map<number, Tree>()
  let treeData = []
  for (let item of data) {
    item.children = []
    let parentItem = cache.get(item.parentId)
    if (parentItem) {
      parentItem.children.push(item)
    } else {
      treeData.push(item)
    }
    cache.set(item.id, item)
  }
  return treeData
}
export function fuzzyNumber(phoneNum: string) {
  if (!phoneNum) return
  return phoneNum.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')
}

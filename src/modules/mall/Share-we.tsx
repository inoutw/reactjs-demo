import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Carousel, WingBlank, Toast, Modal } from 'antd-mobile';
import './good.css'
import './share-we.css'
import Header from 'components/Header'
import mall, { ProductDetailVO, ProductAttributeValueVO, } from 'api/mall'
import nutrition, {  FoodHotVO, FoodNewsCookVO, CookingHomeVO, NewsInfoVO } from 'api/nutrition'
import order, { OrderReceivingAddressVO, CartMerchantItemVO, CartProductVO } from 'api/order'
import { Icon } from 'antd-mobile'
import '../../styles/swiper.min.css'
import Swiper from 'react-id-swiper';
import { CSSTransition } from 'react-transition-group'  // 引入动画库
import DownPop from 'components/DownPop'                // 指引下载弹窗
import assets from 'assets'
import { isWeixinBrowser } from 'utils'
import { withStore } from 'services/store';
import RegisterModal from 'modules/mall/components/RegisterModal';
import { withDefaultReceiver } from 'modules/mall/components/defaultReceiver';
import { useLoginContext } from 'modules/user/LoginContext';
import SpecContent from './components/SpecContent';
import { withShowSpec } from 'modules/mall/ReceiverList';
import { getWxCode } from 'utils/wxAuthorization';
import URI from 'urijs'
import platformUser from 'api/platform-user';
import { withThirdLoginData } from 'modules/mall/components/thirdLoginData';
import { withPickedSku, usePickedSku } from './components/pickedSku';
import { getDate, getDateTimeStamp } from 'utils/dateUtils';
import { closeWindow, isWeiXin, wxShare, isMobileQQ, qqShare } from 'utils/wxShare';
import { withShareProduct } from './components/shareProduct';
import PriceView from './components/PriceView';
import { openApp } from 'utils/helper';

export enum AttributeType {
	Spec = 0,    // 规格属性
	Service = 1, // 服务说明
	Params = 2,  // 商品参数
	Adapt = 3,   // 适宜人群
	Taboo = 4,   // 禁忌人群
}
// 认证类别 0 无公害 1 绿色 2 有机 3地理 4 其他 5 无
const certLogos: { [key: number]: string } = {
	0: assets.mall.harmless_logo,
	1: assets.mall.green_logo,
	2: assets.mall.organic_logo,
	3: assets.mall.geography_logo,
	4: assets.mall.others_logo,
	5: assets.mall.others_logo,
	19: assets.mall.inspection_logo,
	20: assets.mall.trademark_logo,
}
const GoodSharePage: PageComponent = props => {
	const [goodData, setGoodData] = useState({} as ProductDetailVO)
	const [shop, setShop] = useState()
	const [evaluate, setEvaluate] = useState()              //   评价数据
	const [certs, setCerts] = useState([])                                //
	const [evaluatePics, setEvaluatePics] = useState([])    //   第一条评价图片的列表
	const [detailHtml, setDetailHtml] = useState([])        //   正文部分
	const [openAppParams, setOpenAppParams] = useState({})       // 打开app 指定页面 要传给app的参数
	const withStoreReceiver = withStore('defaultReceiver', {} as OrderReceivingAddressVO)
	const loginContext = useLoginContext()
	const defaultReceiver = withStoreReceiver.getShareState()
	const pickedShareSku = usePickedSku()
	let [bottomBarType, setBottomBarType] = useState<string>()
	let [chosedSpecObj, setChosedSpecObj] = useState<any>({})

	const [chosedSpec, setChosedSpec] = useState<any>(() => {
		let sharedSku = withPickedSku.getShareState() || {};
		let skuVal = Object.values(sharedSku)

		if (!skuVal || !skuVal.length) return {}
		return sharedSku
	})

	const [showModal, setShowModal] = useState(false)
	const hasCodeFlag = useRef(false)
	const hasPustCodeFlag = useRef(false)
	useEffect(() => {
		hasCodeFlag.current = false
		hasPustCodeFlag.current = false
	})
	useEffect(() => {
		if (!isWeixinBrowser()) {
			// window.location.href = window.location.href.replace(/pay/, 'share')
		}
		// 获取 临时 code
		if (window.location.href.indexOf('code') > -1) {
			let query: any = URI(window.location.href).query(true);
			if (hasPustCodeFlag.current) {
				return
			} else {
				hasPustCodeFlag.current = true
				var vcode = window.localStorage.getItem('vcode')
				if (!!vcode && (vcode == query.code)) {
					return
				}
			}
			platformUser.userThirdLogins.checkLoginWxWeb({ code: query.code }).then(res => {
				if (!res) return
				window.localStorage.setItem('vcode', query.code)
				loginContext.login(res.loginVO)
				withThirdLoginData.setShareState(res)
			})
		} else {
			if (!hasCodeFlag.current) {
				getWxCode(window.location.href)
				hasCodeFlag.current = true
			}
		}
	}, [])
	const skuSpec = useMemo(() => {
		let res = goodData.attributes && goodData.attributes.filter(item => item.attributeType === AttributeType.Spec)
		return res
	}, [goodData.attributes])

	const cheapestSku = useMemo(() => {
		let priceArr = goodData.skus && goodData.skus.map(s => s.salePrice)
		return goodData.skus && goodData.skus.find(sku => {
			if (sku.salePrice === Math.min(...priceArr)) {
				return sku
			}
		})
	}, [goodData.skus])

	useEffect(() => {
		let sharedSku = withPickedSku.getShareState() || {};
		let skuVal = Object.values(sharedSku)
		if (Object.keys(chosedSpec).length) {
			setChosedSpecObj(chosedSpec)
		} else if (skuVal.length) {
			setChosedSpecObj(sharedSku)
		} else {
			let skuRes: any = {}
			var specsArr = cheapestSku && cheapestSku.spec && cheapestSku.spec.split('|')
			skuSpec && skuSpec.forEach(sku => {
				let skuVals = sku.value && sku.value.split(',')
				let f = specsArr && specsArr.filter(v => skuVals.includes(v))
				skuRes[sku.attributeName] = f[0]
			})
			let skuKid = cheapestSku && cheapestSku.skuKid
			setChosedSpecObj({ ...skuRes, skuKid })
		}
	}, [cheapestSku, skuSpec, setChosedSpecObj, chosedSpec])

	const [buyCount, setBuyCount] = useState()

	useEffect(() => {
		let sharedSku = withPickedSku.getShareState() || {}
		let curSku = goodData && goodData.skus && goodData.skus.find(sku => sku.skuKid === sharedSku.skuKid)
		let defaultMin = cheapestSku && cheapestSku.purchaseMin ? cheapestSku.purchaseMin : 1
		let finalNum = curSku && sharedSku.buyCount >= defaultMin ? sharedSku.buyCount : defaultMin
		setBuyCount(finalNum)

	}, [cheapestSku, goodData, chosedSpec.buyCount])

	/**
   * 商品规格只有一个时，默认添加,计算最终已选规格
   * 数据结构：
   * {容量: '100g', 颜色:'白色', buyCount: 2 }
   */
	const finalChosedSpecs = useMemo(() => {
		let singleSpecArr = skuSpec && skuSpec.filter((item: any) => item.value && item.value.split(',').length === 1)

		let chosedSpecsObj: { [key: string]: any } = { ...chosedSpecObj, ...{ buyCount } }
		singleSpecArr && singleSpecArr.forEach((item: any) => {
			chosedSpecsObj[item.attributeName] = item.value
		})
		return chosedSpecsObj
	}, [chosedSpecObj, skuSpec, buyCount])

	//按选择的规格排序组合
	let orderSpecStr = useMemo(() => {
		let orderArr = skuSpec && skuSpec.map((item: any, index: number) => {
			return finalChosedSpecs[item.attributeName]
		})
		return orderArr && orderArr.join('|')
	}, [skuSpec, finalChosedSpecs])

	//默认已选规格（回显）(已加入，显示上次选中，未加入过，默认最低价规格)
	let defaultSpecObj = useMemo(() => {
		let len = skuSpec && skuSpec.length;
		if (Object.keys(chosedSpec).length === (len + 2)) {
			return goodData.skus && goodData.skus.find(item => item.spec === orderSpecStr)
		}
		return cheapestSku
	}, [chosedSpec, orderSpecStr, skuSpec, cheapestSku, goodData.skus])
	let [specPic, setSpecPic] = useState()
	let [specPrice, setSpecPrice] = useState()

	useEffect(() => {
		setSpecPrice(defaultSpecObj && defaultSpecObj.salePrice)
		setSpecPic(defaultSpecObj && defaultSpecObj.pic)
	}, [defaultSpecObj])

	useEffect(() => {
		if (defaultReceiver && defaultReceiver.kid) return
		const loginState = loginContext.state
		let thirdLoginData = withThirdLoginData.getShareState()
		if (loginState.isLogin && thirdLoginData.binding) {
			order.orderReceivingAddresss.listAdmin().then(addrList => {
				let receiver = addrList.find(addr => addr.defaultFlag === 0)
				receiver && withDefaultReceiver.setShareState(receiver)
			})
		}
	}, [defaultReceiver, loginContext])
	useEffect(() => {
		if (!defaultReceiver.kid) return
		order.cart
			.checkRegion({
				areaCode: defaultReceiver.receivingCounty,
				cityCode: defaultReceiver.receivingCity,
				productKid: goodData.kid,
				provinceCode: defaultReceiver.receivingProvince,
			})
			.then(res => {
				// 无效的配送地，商品已下架，正常
				if (!res) setBottomBarType('invalid')
			})
			.catch(ex => { })
	}, [defaultReceiver.kid, defaultReceiver.receivingCounty, defaultReceiver.receivingCity, goodData.kid, defaultReceiver.receivingProvince])

	const deliveryArea = useMemo(() => {
		if (!defaultReceiver.kid) return ''
		return `${defaultReceiver.receivingProvinceText}${defaultReceiver.receivingCityText}${defaultReceiver.receivingCountyText}`
	}, [defaultReceiver])

	useEffect(() => {
		let prebuyState = goodData.productPrepareSimpleAppVO && goodData.productPrepareSimpleAppVO.state
		let supportType = [2, 3].includes(prebuyState) ? 'preBuyEnd' : 'normal';
		setBottomBarType(supportType)
	}, [goodData.productPrepareSimpleAppVO])


	useEffect(() => {
		if (!loginContext.state.isLogin) {
			return
		}
		if (props.match.params.kid) {
			// 获取商品基本信息
			mall.products.get({ kid: props.match.params.kid }).then(res => {
				if (!res) {
					// console.log('商品不存在,或没有数据:')
					Toast.fail('商品不存在!', 1);
					return
				}
				setGoodData(res)
				withShareProduct.setShareState({ kid: props.match.params.kid })
				if (res.attributes && res.attributes.length > 0) {
					disposeAttributeData(res.attributes)
				}
				if (res.evaluate && res.evaluate.pics) {            //  商品评价图片
					setEvaluatePics(res.evaluate.pics.split(','))
				}
				if (res.detailShowPic) {            //  商品轮播数据
					setBannerlist(res.detailShowPic.split(','))
				}
				if (res.certs) {
					setCerts(res.certs)
				}
				if (res.detailHtml) {
					const detailHtmlData = JSON.parse(res.detailHtml)
					setDetailHtml(detailHtmlData)
				}
				if (res.evaluate) {
					setEvaluate(res.evaluate)
				}
				if (res.shop) {
					setShop(res.shop)
				}
				// 获取食材  获取烹饪列表
				if (res.productFoodId) {
					getNewsCookieDataList(parseInt(res.productFoodId))   //   获取食材,获取烹饪列表,资讯
				}
				if (res.evaluate) {
					setEvaluate(res.evaluate)
				}
				if (res.shop) {
					setShop(res.shop)
				}
			})
			var openParam = {
				passprops: 'kid',
				id: props.match.params.kid,
				router: 'GoodInfo'
			}
			setOpenAppParams(openParam)
		}
	}, [props.match.params.kid, loginContext.state.isLogin])

	useEffect(() => {
		if (!goodData || !goodData.kid || !props.match.params.kid) return
		let linkUrl = `${window.location.origin}/good/pay/` + props.match.params.kid
		if (isWeiXin()) {
			wxShare({
				title: goodData.productName,
				desc: '我在营养计划app发现了一个不错的商品......',
				link: linkUrl,
				imgUrl: goodData.mainPic
			})
		}
		if (isMobileQQ()) {
			qqShare({
				title: goodData.productName,
				desc: '我在营养计划app发现了一个不错的商品......',
				link: linkUrl,
				imgUrl: goodData.mainPic
			})
		}
	}, [goodData, props.match.params.kid])


	const validAllAuth = useMemo(() => {
		let productAuth: string[] = [];
		let shopAuth = goodData.shop ? goodData.shop.auths : [];
		goodData.certs && goodData.certs.forEach((pCert) => {
			if (!pCert || !pCert.certPic) return
			productAuth = productAuth.concat(pCert.certPic)
		})
		let finalAuth = [...productAuth, ...shopAuth];

		return finalAuth.filter(auth => !!auth)
	}, [goodData])

	/**
	 * 根据食材Kid获取相关咨询和烹饪信息  /{version}/pb/food-infos/action/newscookie
	 */
	const [foodMaterial, setFoodMaterial] = useState([] as FoodHotVO[])             //   获取食材数据
	const [cookList, setCookList] = useState([] as CookingHomeVO[])                //   获取烹饪列表
	const [newsList, setNewsList] = useState([] as NewsInfoVO[])                  //   获取资讯列表
	const [foodNewsCook, setFoodNewsCook] = useState({} as FoodNewsCookVO)
	const getNewsCookieDataList = (kid: number) => {
		nutrition.foodInfos.relatedResources({ foodKids: kid + '' }).then((res) => {
			setFoodNewsCook(res)
			if (res && res.foods) {
				setFoodMaterial(res.foods)
			}
			if (res && res.cooks) {
				setCookList(res.cooks)
			}
			if (res && res.news) {
				setNewsList(res.news)
			}
		})
	}

	// 显示轮播
	const [showBanner, setShowBanner] = useState(false);                  // 是否展示烹饪详情数据
	const [bannerlist, setBannerlist] = useState([]);                     // 商品详情顶部轮播滚动数据
	const [currentSlideIndex, setCurrentSlideIndex] = useState(1)          // currentSlideIndex
	useEffect(() => {
		if (bannerlist.length > 0) {
			setShowBanner(true)
		}
		// console.log('轮播数据 - - :',bannerlist)
	}, [bannerlist]);

	// 安选滚动到指定位置
	const [navTop, setNavTop] = useState(false);                          //  是否吸顶
	const tipparams = {
		// direction: 'horizontal',
		slidesPerView: 3.8,
		spaceBetween: 20,
		freeMode: true
		// activeSlideKey:cur
	}

	// 安选滚动到指定位置
	const lenceparams = {
		// direction: 'horizontal',
		slidesPerView: 1.8,
		spaceBetween: 20,
		freeMode: true
	}

	// 跳转到指定锚点
	const [tipAnchor, setTipAnchor] = useState(0);
	const scrollToAnchor = (anchorName: string, index: number) => {
		if (anchorName) {
			let anchorElement = document.getElementById('lence-tip')
			setTipAnchor(index)
			if (anchorElement) {
				var currentOffsetTop = anchorElement.offsetTop
				if (navTop) {
					window.scrollTo({ left: 0, top: currentOffsetTop - 120, behavior: "smooth" })
				} else {
					window.scrollTo({ left: 0, top: currentOffsetTop - 20, behavior: "smooth" })
				}
			}
		}
	}

  /**
  *  打开-关闭弹窗
  */
	const [appropriateUserShow, setAppropriateUserShow] = useState(false)          // 适宜人群
	const closeAppropriatePop = () => {
		setAppropriateUserShow(false)
	}
	const openAppropriatePop = () => {
		setAppropriateUserShow(true)
	}

	const [tabooShow, setTabooShow] = useState(false)                             // 禁忌人群
	const closeTabooPop = () => {
		setTabooShow(false)
	}
	const openTabooPop = () => {
		setTabooShow(true)
	}

	const [productParamShow, setProductParamShow] = useState(false)           // 商品参数
	const closeParamPop = () => {
		setProductParamShow(false)
	}
	const openParamPop = () => {
		setProductParamShow(true)
	}

	const [productStandardsShow, setProductStandardsShow] = useState(false)   // 产品规格属性
	const closeStandardsPop = () => {
		setProductStandardsShow(false)
	}
	const openStandardsPop = () => {
		setProductStandardsShow(true)
	}
	const [serviceShow, setServiceShow] = useState(false)                     // 服务说明
	const closeServicePop = () => {
		setServiceShow(false)
	}
	const openServicePop = () => {
		setServiceShow(true)
	}
	const [adaptShow, setAdaptShow] = useState(false)                     // 服务说明
	const closeAdaptPop = () => {
		setAdaptShow(false)
	}
	const openAdaptPop = () => {
		setAdaptShow(true)
	}
  /**
   * 处理attributeType 数据
   */
	const [attributeSpec, setAttributeSpec] = useState([])             // Spec = 0,    // 规格属性
	const [attributeService, setAttributeService] = useState([])       // Service = 1, // 服务说明
	const [attributeParams, setAttributeParams] = useState([])         // Params = 2,  // 商品参数
	const disposeAttributeData = (attributes: ProductAttributeValueVO[]) => {

		let Spec = attributes.filter(item => item.attributeType === 0)
		setAttributeSpec(Spec)

		let Service = attributes.filter(item => item.attributeType === 1)
		setAttributeService(Service)

		let Params = attributes.filter(item => item.attributeType === 2)
		setAttributeParams(Params)

	}


  /**
   * 页面点击操作   打开app指定页面 或者 引导下载
   */
	// oppen app

	const [downShowPop, setDownShowPop] = useState(false)       // 显示引导弹窗
	const showDownPopHandle = (isShow: boolean) => {
		setDownShowPop(isShow)
	}
	const callback = (val: boolean) => {
		setDownShowPop(val)
	}
	const clickHandle = () => {
		const result = openApp(openAppParams)
		if (result) {
			setDownShowPop(true)
		} else {
			setDownShowPop(false)
		}
	}

	const changeBuyCount = (num: number) => {
		let tempCount = buyCount + num
		if (pickedSku.purchaseMax && tempCount > pickedSku.purchaseMax) {
			return Toast.show(`该商品最多能购买${pickedSku.purchaseMax}件`)
		}
		if (pickedSku.purchaseMin && tempCount < pickedSku.purchaseMin) {
			return Toast.show(`该商品${pickedSku.purchaseMin}件起购`)
		}
		if (tempCount < 1) {
			tempCount = 1
		}
		setBuyCount(tempCount)
		withPickedSku.setShareState({ ...pickedShareSku, buyCount: tempCount })
	}

	//拿到已选择的规格
	const getChosedSpec = (specVal: string, skuSpecData: ProductAttributeValueVO) => {
		let chosedSpecsObj = { ...finalChosedSpecs }
		chosedSpecsObj[skuSpecData.attributeName] = specVal

		let orderArr = skuSpec.map((item: any, index: number) => {
			return chosedSpecsObj[item.attributeName]
		})
		//商品详情页用“|”连接，购物车用“;”连接，目前服务端未能统一
		let orderSpecStr = orderArr.join('|')
		let orderSpecS = orderArr.join(';')
		let skuKidTmp = null
		//动态显示已选规格的图片和价格
		goodData.skus && goodData.skus.forEach(item => {
			if (item.spec === orderSpecStr || item.spec === orderSpecS) {
				skuKidTmp = item.skuKid
				if (item.pic) setSpecPic(item.pic)
				if (item.salePrice) setSpecPrice(item.salePrice)
				if (item.purchaseMin && item.purchaseMin > buyCount) setBuyCount(item.purchaseMin)
				if (item.purchaseMax && item.purchaseMax < buyCount) setBuyCount(item.purchaseMax)

			}
		})
		setChosedSpecObj({ ...chosedSpecsObj, skuKid: skuKidTmp })
		withPickedSku.setShareState({ ...pickedShareSku, skuKid: skuKidTmp, ...chosedSpecsObj })
	}

	//库存不够
	const soldOut = useCallback(() => {
		if (finalChosedSpecs && Object.keys(finalChosedSpecs).length) {
			//找到匹配的规格
			let newOrder = orderSpecStr && orderSpecStr.replace(/\|/g, ';')
			let composedSpec = goodData.skus && goodData.skus.filter(item => {
				return orderSpecStr === item.spec || newOrder === item.spec
			})
			// 没有匹配到
			if (!composedSpec.length) {
				return true
			}
			// 匹配到，看库存
			let soldOut = composedSpec.find((item: any) => {
				return item.stock < buyCount
			})
			return soldOut
		}
		return true
	}, [buyCount, finalChosedSpecs, orderSpecStr, goodData.skus])

	let pickedSku = useMemo(
		() => {

			if (!goodData || !goodData.skus) return null;

			let res = goodData.skus.find(item => {
				return orderSpecStr === item.spec
			})

			return res
		},
		[orderSpecStr, goodData],
	)
	//立即购买（微信内支持购买）
	const buyNow = useCallback((e: any) => {
		// if (!isWeixinBrowser) return

		let withThirdData = withThirdLoginData.getShareState()
		if (!withThirdData.binding) {
			setShowModal(true)
			return
		}
		setShowModal(false)

		let startSaleTime = goodData.productPrepareSimpleAppVO && goodData.productPrepareSimpleAppVO.preSaleStartTime
		let curTime = goodData.productPrepareSimpleAppVO && goodData.productPrepareSimpleAppVO.currentTime

		if (goodData.shelveFlag) return

		if (startSaleTime && getDateTimeStamp(startSaleTime) > getDateTimeStamp(curTime)) {
			Toast.show('预购活动还未开始哦')
			return
		}

		if (!defaultReceiver.kid) {
			Toast.show('请选择配送区域')
			return
		}
		let isSoldOut = soldOut()
		if (isSoldOut) {
			Toast.show('商品库存不足')
			return
		}
		let { shop, productName } = goodData
		let { kid, shopName, shopLogo } = shop
		let { skuKid, salePrice, pic, spec } = pickedSku

		let selectedSku: any = { num: buyCount, skuKid }
		let product: CartProductVO = {
			num: buyCount,
			productName,
			skuSalePrice: salePrice,
			skuPic: pic,
			skuKid,
			skuSpec: spec && spec.replace(/\|/g, ';'),
		}
		let settleData: CartMerchantItemVO = {
			merchantKid: kid,
			merchantName: shopName,
			shopLogo,
			cartProductVOList: [product],
		}


		props.history.push('/good/pay/order',
			{
				settleData: [settleData],
				selectedProducts: [selectedSku],
				isFromCart: 1,
				pickedReceiver: defaultReceiver,
			})
	}, [buyCount, defaultReceiver, goodData, pickedSku, props.history, soldOut])

	const preBuyLabel = useMemo(() => {
		if (!goodData.productPrepareSimpleAppVO) return null
		if ([2, 3].includes(goodData.productPrepareSimpleAppVO.state)) {
			return (
				<div className='preBuyWrap preBuyEnd' style={{ background: '#ccc' }}>
					预购结束
        </div>
			)
		}
		if (goodData.productPrepareSimpleAppVO.state === 1) {
			return (
				<div className='preBuyWrap'>
					预购
      </div>
			)
		}
		return null
	}, [goodData.productPrepareSimpleAppVO])
	const toReceiverList = () => {
		let withThirdData = withThirdLoginData.getShareState()
		if (!withThirdData.binding) {
			setShowModal(true)
			return
		}
		props.history.push('/mall/receiver-list')
	}

	const dismissModal = () => {
		setShowModal(false)
	}

	const skuBottomBar = useMemo(() => {
		if (!bottomBarType) return null
		switch (bottomBarType) {
			case 'preBuyEnd':
				return <div className="item buy-limit but-now-wechat actionInvalid" style={{ zIndex: 200 }}>预购结束</div>
			case 'invalid':
				return <div className="item buy-limit but-now-wechat actionInvalid" style={{ zIndex: 200 }}>不支持当前区域</div>
			default:
				return <div className="item buy-limit but-now-wechat" onClick={buyNow} style={goodData && goodData.shelveFlag ? { color: 'rgba(255,255,255,0.6)', zIndex: 200 } : { zIndex: 200 }}>立即购买</div>
		}
	}, [bottomBarType, buyNow, goodData])

	useEffect(() => {
		let thirdLoginData = withThirdLoginData.getShareState()
		if (loginContext.state.isLogin && thirdLoginData.binding) {
			setShowModal(false)
		}
	}, [loginContext.state.isLogin])
	useEffect(() => {
		if (withShowSpec.getShareState().showSpec) {
			setProductStandardsShow(true)
			withShowSpec.setShareState({ showSpec: false })
		}
	}, [])

	const handleBack = useCallback((e) => {
		closeWindow()
	}, [])
	useEffect(() => {
		pushHistory();
		window.addEventListener("popstate", handleBack, false);

		function pushHistory() {
			var state = {
				title: "",
				url: ""
			};
			window.history.pushState(state, state.title, state.url);
		}
		return () => {
			window.removeEventListener('popstate', handleBack)
		}
	}, [handleBack])
	const productShelved = useMemo(() => {
		if (!goodData.shelveFlag) return null
		return (
			<div className='shelve-down'>
				商品已下架
      </div>
		)
	}, [goodData.shelveFlag])

	const bottomBar = useMemo(() => {
		if (!goodData.productPrepareSimpleAppVO) {
			return (<div className="shop-cart-foot" >
				<div className="right-cont right-cont-wechat">
					<div className="right-cont-item- buy-new" style={goodData && goodData.shelveFlag ? { color: 'rgba(255,255,255,0.6)' } : null} onClick={() => setProductStandardsShow(true)}>立即购买</div>
				</div>
			</div>)
		}
		if ([2, 3].includes(goodData.productPrepareSimpleAppVO.state)) {
			return <div className='preSaleBar preSaleEndBar' style={{ backgroundColor: '#ccc' }}>
				预购结束
		</div>
		}
		if (goodData.productPrepareSimpleAppVO.state === 1) {
			return <div className='preSaleBar' onClick={() => setProductStandardsShow(true)}>
				参加预购
		</div>
		}
	}, [goodData])
	return (
		<div className="good-wrap good-share-we">
			<Modal visible={showModal} transparent onClose={dismissModal} maskClosable={false} wrapClassName="register-wrap">
				<RegisterModal dismissModal={dismissModal} />
			</Modal>
			{openAppParams && openAppParams.hasOwnProperty('router') ? <Header openAppParam={openAppParams} handleData={showDownPopHandle} /> : ''}
			{<DownPop isShow={downShowPop} callback={callback}></DownPop>}
			{/*轮播*/}
			<section className="swiper-cont">
				{
					!showBanner ? '' :
						<div className="topSwiper">

							<WingBlank>
								<Carousel
									infinite
									dots={false}
									afterChange={index => { setCurrentSlideIndex(index + 1) }}
								>
									{bannerlist.map((val, index) => (
										<a
											key={index}
											href="javascript:;"
											style={{ display: 'inline-block', width: '100%', height: '7.5rem' }}
										>
											<img
												src={val}
												alt=""
												style={{ width: '100%', height: '7.5rem', verticalAlign: 'top' }}
											/>
										</a>
									))}
								</Carousel>
							</WingBlank>
							<div className="collect">
								<span className="collect-number">{currentSlideIndex || 0}/{bannerlist.length || 0}</span>
							</div>
						</div>
				}
				{preBuyLabel}
				{!(goodData && goodData.salePrice) ? '' :
					<div className="price-cont">
						{goodData.productPrepareSimpleAppVO && [1, 2, 3].includes(goodData.productPrepareSimpleAppVO.state) ? <div className='preSaleLabel'>预购价</div> : null}
						<div className="newprice"><div className="yang">¥</div><div className="pricenumber">{goodData && parseInt((goodData.salePrice / 100).toFixed(2))}.</div><div className="dots">{goodData && (goodData.salePrice / 100).toFixed(2).split('.')[1]}</div></div>
						<div className="oldprice">¥{goodData && (goodData.originalPrice / 100).toFixed(2)}</div>
					</div>
				}
				{goodData.productPrepareSimpleAppVO && [1, 2, 3].includes(goodData.productPrepareSimpleAppVO.state) ? <div className='preSaleTime'>预购起始时间：{getDate(goodData.productPrepareSimpleAppVO.preSaleStartTime)}至{getDate(goodData.productPrepareSimpleAppVO.preSaleEndTime)}</div> : null}
				<div className="product-name">{goodData && goodData.productName}</div>
			</section>
			{goodData && goodData.certs && goodData.certs.length > 0 ?
				<section>
					<div className="safe-top-cont">
						<div className="txt">质量保障</div>
					</div>
					<div className="safe-linear-scroll">
						<Swiper {...tipparams}>
							{goodData.certs.map((item, index) => (
								<div key={index} className="listItem"><img src={certLogos[item.certType]} onClick={() => scrollToAnchor('screen' + item.certType, 0)} className="tipTxt" alt="" /></div>
							))}
						</Swiper>
					</div>
				</section>
				: ''}

			<section className="product-Information">
				{goodData && goodData.productPrepareSimpleAppVO ?
					<div className="infor-line">
						<div className="line-tip">发货时间</div>

						<div className="first-line">
							{goodData.productPrepareSimpleAppVO && [1, 2, 3].includes(goodData.productPrepareSimpleAppVO.state) && goodData.productPrepareSimpleAppVO.deliveryStartTime ? (
								<div className='summaryFirstLine'>
									预计{getDate(goodData.productPrepareSimpleAppVO.deliveryStartTime)}日开始发货
				</div>
							) : null}
						</div>
					</div> : null
				}
				{
					goodData && goodData.address ?
						<div className="infor-line">
							<div className="line-tip">发货</div>

							<div className="first-line">
								<div className="line-right-cont" style={{ width: '100%' }}>
									<div className="r-txt">
										<span className="local-t" >{goodData && goodData.address && goodData.address[0] && (goodData.address[0].provinceName + goodData.address[0].cityName)}</span>
										<span className='ship-fee'>快递：¥{goodData && goodData.freightFee ? (goodData.freightFee / 100).toFixed(2) : 0}</span>
									</div>
								</div>
							</div>
						</div>
						: ''}

				{attributeService && attributeService.length > 0 ?
					<div className="infor-line" onClick={openServicePop}>
						<div className="line-tip">服务说明</div>
						<div className="line-right-cont">
							<div className="r-txt">
								{
									attributeService.slice(0, 2).map((item, index) => (
										<span className="icon-txt" key={index}>
											<img className="r-txt-icon" src={require('../../assets/image/mall/Shapecopy@2x.png')} alt="" /><span>{item.attributeName}</span>
										</span>
									))
								}
							</div>
							<div className="r-arrow"><Icon type="right" size="lg" color="#CACACE" /></div>
						</div>
					</div>
					: ''}

				{attributeParams && attributeParams.length > 0 ?
					<div className="infor-line" onClick={openParamPop}>
						<div className="line-tip">商品参数</div>
						<div className="line-right-cont">
							<div className="r-txt">
								{
									attributeParams.slice(0, 3).map((item, index) => (
										<span key={index} className="param-tip">{item.attributeName} </span>
									))
								}
							</div>
							<div className="r-arrow"><Icon type="right" size="lg" color="#CACACE" /></div>
						</div>
					</div>
					: ''}
				{attributeSpec && attributeSpec.length > 0 ?
					<div className="infor-line" onClick={openStandardsPop}>
						<div className="line-tip">选择规格</div>
						<div className="line-right-cont">
							<div className="r-txt"></div>
							<div className="r-arrow"><Icon type="right" size="lg" color="#CACACE" /></div>
						</div>
					</div>
					: ''}
				{goodData.suit ?
					<div className="infor-line" onClick={openAdaptPop}>
						<div className="line-tip">适宜人群</div>
						<div className="line-right-cont">
							<div className="r-txt"></div>
							<div className="r-arrow"><Icon type="right" size="lg" color="#CACACE" /></div>
						</div>
					</div>
					: ''}
				{goodData.noSuit ?
					<div className="infor-line" onClick={openTabooPop}>
						<div className="line-tip">禁忌人群</div>
						<div className="line-right-cont">
							<div className="r-txt"></div>
							<div className="r-arrow"><Icon type="right" size="lg" color="#CACACE" /></div>
						</div>
					</div>
					: ''}
			</section>
			{/*显示商品的sku 信息  */}
			<section>
				{/* 服务说明 pop */}
				{serviceShow ?
					<div className="sercve- sercve-explain">
						<CSSTransition
							in={serviceShow} 
							timeout={1200}            
							classNames='hideBg'
							unmountOnExit
						>
							<div className="bg" onClick={closeServicePop}></div>
						</CSSTransition>
						<CSSTransition
							in={serviceShow} 
							timeout={1000} 
							classNames='fade'
							unmountOnExit
						>
							<div className="cont-">
								<div className="sercve-cont-top">
									<div className="top-left">服务说明</div>
									<div className="top-right" onClick={closeServicePop}><img className='close-icon' src={require('../../assets/image/mall/close-icon.png')} alt="" /></div>
								</div>
								{
									attributeService.map((item, index) => (
										<div className="txt-tip" key={index}>
											<div className="s-top">{item.attributeName}</div>
											<div className="s-txt">{item.value}</div>
										</div>
									))
								}
							</div>
						</CSSTransition>
					</div>

					: ''}
				{/* 商品参数 pop */}
				{productParamShow ?
					<div className="sercve- sercve-parameters">
						<CSSTransition
							in={productParamShow} 
							timeout={1200}            
							classNames='hideBg'
							unmountOnExit 
						>
							<div className="bg" onClick={closeParamPop}></div>
						</CSSTransition>

						<CSSTransition
							in={productParamShow} 
							timeout={1000} 
							classNames='fade'
							unmountOnExit
						>
							<div className="cont-">
								<div className="sercve-cont-top">
									<div className="top-left">商品参数</div>
									<div className="top-right" onClick={closeParamPop}><img className='close-icon' src={require('../../assets/image/mall/close-icon.png')} alt="" /></div>
								</div>
								<div className="lines-">
									{
										attributeParams.map((item, index) => (
											<div className="apram-line" key={index}>
												<div className="param-tip">{item.attributeName}</div>
												<div className="patam-txt">{item.value}</div>
											</div>
										))
									}
								</div>
							</div>
						</CSSTransition>
					</div>
					: ''}
				{/*商品详情规格选择  pop  */}

				{productStandardsShow ? <div className="sercve- sercve-product-sku">
					<CSSTransition
						in={productStandardsShow} 
						timeout={1200}            
						classNames='hideBg'
						unmountOnExit
					>
						<div className="bg" onClick={closeStandardsPop}></div>
					</CSSTransition>
					<CSSTransition
						in={productStandardsShow} 
						timeout={1000} 
						classNames='fade'
						unmountOnExit
					>
						<div className="cont-" id="skuModal">
							<div className="sercve-cont-top">
								<div className="top-left"></div>
								<div className="top-right" onClick={closeStandardsPop}><img className='close-icon' src={require('../../assets/image/mall/close-icon.png')} alt="" /></div>
							</div>
							<div className="pro-cont">
								<div className="product-cont">
									<div className="img-cont"><img className="img-i" src={specPic} alt="" /></div>
									<div className="pro-txt-info-">
										<div className="pro-name">{goodData && goodData.productName}</div>
										<PriceView price={specPrice} />
									</div>
								</div>
								<div className="decimals-cont">
									<div className="decimals-tip">(配送地可能会影响库存，请正确选择)</div>
									<div className="line-p" onClick={toReceiverList}>
										<div className="leftp-p">
											<img className='location-icon' src={require('../../assets/image/mall/localtion-icon.png')} alt="" />
											<span className="address-">{deliveryArea ? deliveryArea : "请选择配送区域"}</span>
										</div>
										<Icon type="right" size="lg" color="#CACACE" />
									</div>
								</div>
								<div className="divide-cont"></div>
								<div className="sku-cont-check">

									{skuSpec && skuSpec.map((item, index) =>
										<SpecContent
											skuSpecData={item}
											key={`spec${index}`}
											getChosedSpec={getChosedSpec}
											chosedSpecObj={chosedSpecObj}
										/>
									)}
								
									<div className="item-cont item-check-number">
										<div className="tip-item-cont">商品数量</div>
										<div className="change-number">
											<img className="btn-number" onClick={() => changeBuyCount(-1)} src={require('../../assets/image/mall/decrease_icon.png')} alt="" />
											<span className="number">{buyCount}</span>
											<img className="btn-number" onClick={() => changeBuyCount(+1)} src={require('../../assets/image/mall/increase_icon.png')} alt="" />
										</div>
									</div>
								</div>

								<div className="foot-add-cart-cont">
									{skuBottomBar}
								</div>

							</div>
						</div>
					</CSSTransition>
				</div> : ''
				}

				{/* 适宜人群 pop*/}
				{adaptShow ?
					<div className="sercve- sercve-explain sercve-Adapt">
						<CSSTransition
							in={adaptShow}
							timeout={1200}
							classNames='hideBg'
							unmountOnExit
						>
							<div className="bg" onClick={closeAdaptPop}></div>
						</CSSTransition>
						<CSSTransition
							in={adaptShow}
							timeout={1000}
							classNames='fade'
							unmountOnExit
						>
							<div className="cont-">
								<div className="sercve-cont-top">
									<div className="top-left">适宜人群</div>
									<div className="top-right" onClick={closeAdaptPop}><img className='close-icon' src={require('../../assets/image/mall/close-icon.png')} alt="" /></div>
								</div>
								<div className="s-txt">{goodData.suit && goodData.suit.split(',').join('、')}</div>
							</div>
						</CSSTransition>
					</div>
					: ''}


				{/* 禁忌人群 pop*/}
				{tabooShow ?
					<div className="sercve- sercve-explain sercve-taboo">
						<CSSTransition
							in={tabooShow}
							timeout={1200}
							classNames='hideBg'
							unmountOnExit 
						>
							<div className="bg" onClick={closeTabooPop}></div>
						</CSSTransition>
						<CSSTransition
							in={tabooShow}
							timeout={1000}
							classNames='fade'
							unmountOnExit
						>
							<div className="cont-">
								<div className="sercve-cont-top">
									<div className="top-left">禁忌人群</div>
									<div className="top-right" onClick={closeTabooPop}><img className='close-icon' src={require('../../assets/image/mall/close-icon.png')} alt="" /></div>
								</div>
								<div className="s-txt">{goodData.noSuit && goodData.noSuit.split(',').join('、')}</div>

							</div>
						</CSSTransition>
					</div>
					: ''}


			</section>

			<div className="divide-line"></div>
			{goodData && goodData.subTitle ? <section>
				<div className="product-abstract">
					<div className="abstract-tip">商品简介</div>
					<div className="abstract-info">{goodData.subTitle}</div>
				</div>

			</section>
				: ''}
			<div className="divide-line"></div>
			{evaluate ?
				<section>
					<div className="section-title">
						<span className="comment-title">商品评价({evaluate && evaluate.totalNum || 0})</span>
						<span className="comment-entry" onClick={clickHandle}>
							<span>查看全部评价</span> <Icon type="right" size="lg" color="#28C764" />
						</span>
					</div>
					<div className="CommentItem-cont">
						<div className="item-c">
							<div className="user-c">
								{(evaluate && evaluate.user && evaluate.user.userImg) ? <div className="user-avatar"><img src={evaluate.user.userImg} alt="" /> </div> : ''}
								<div className="user-txt">
									<div className="user-name">#{evaluate && evaluate.user && evaluate.user.userNickName}</div>
									<div className="publish-time">{evaluate && evaluate.addTime}</div>
								</div>
							</div>
							<div className="user-comment">{evaluate && evaluate.content}</div>
							{(evaluatePics && evaluatePics.length > 0) ?
								<div className="list-img">
									{
										evaluatePics.slice(0, 3).map((item, index) => (
											<img key={index} src={item} alt="" />
										))
									}
									{
										evaluatePics.length >= 3 ?
											<div className="total-number">{evaluatePics.length}P</div>
											: ''}
								</div>
								: ''}
						</div>
					</div>

					<div className="divide-line"></div>
				</section>
				: ''}

			{shop ? <section className="shop-cont">
				<div className="shop-title">店铺详情</div>
				<div className="shop-line">
					<div className="left-shop-info">
						{shop && shop.shopLogo ? <img className="shop-icon" src={shop.shopLogo} alt="" /> : ''}
						<div className="shop-txt">
							<div className="shop-name">{shop && shop.shopName}</div>
							<div className="product-number">{shop && shop.productCount}件商品</div>
						</div>
					</div>
					<div className="enterShop" onClick={clickHandle}>
						<span>进店逛逛</span><Icon type="right" size="lg" color="#CACACE" />
					</div>
				</div>

			</section> : ''}
			<div className="divide-line"></div>

			{
				validAllAuth && validAllAuth.length > 0 ?
					<section className="goods-aptitude">
						<div className="aptitude-top" id="lence-tip">
							<img src={require('../../assets/image/mall/line_left.png')} alt="" />
							<div className="aptitude-top-">商品资质</div>
							<img src={require('../../assets/image/mall/line_right.png')} alt="" />
						</div>
						{
							validAllAuth.length > 1 ?
								<Swiper  {...lenceparams}>
									{validAllAuth.map((item, index) => (
										<div key={index} id={'screen' + item} className="lenceparams- aptitude-cont">
											<img src={item} alt="" className="more-imgs-" />
										</div>
									))}
								</Swiper> : <div className="one-item aptitude-cont">
									<span className="after-"></span>
									<img src={validAllAuth[0]} alt="" />
									<span className="before-"></span>
								</div>
						}
					</section>
					: ''}
			<section>
				{detailHtml && detailHtml.length > 0 ?
					<div className="goodCert">
						{detailHtml.map((item, index) => (
							<div key={index}>
								{item.hasOwnProperty('text') ? <div className="goot-txt-info">{item.text}</div> : ''}
								{item.hasOwnProperty('image') ?
									<div className="pro-detail-img">
										<img src={item.image} alt="" />
									</div>
									: ''}
							</div>
						))
						}
					</div>
					: ''}
			</section>



			<div className="divide-line"></div>
			{foodMaterial[0] && foodMaterial[0].coverImgUrl && foodMaterial[0].tags ?
				<section className="food-material">
					<div className="food-material-top">食材</div>
					<div className="food-material-cont">
						<img src={foodMaterial[0].coverImgUrl} alt="" />
						<div className="foot-mater">
							<span className="leftp">{foodMaterial[0].chName}</span>
							<span className="rightp">{foodMaterial[0].tags}</span>
						</div>
					</div>
				</section>
				: ''}
			{
				foodNewsCook && foodNewsCook.courses && foodNewsCook.courses.length > 0 ?
					<section>
						<div className="list-cont-item">
							<div className="list-cont-item-top">专家讲堂</div>
							<div className="list-two">
								{
									foodNewsCook && foodNewsCook.courses && foodNewsCook.courses.slice(0, 2).map((item, index) => (
										<div className="item" key={index} onClick={clickHandle}>
											<div className="img-">
												<img src={item.coverPhoto} alt="" />
												<img className="play-btn" src={require('../../assets/image/mall/play-icon.png')} alt="" />
											</div>
											<div className="txt">{item.theme}</div>
										</div>
									))
								}
							</div>
						</div>
					</section> : null
			}

			{
				newsList && newsList.length > 0 ?
					<section>
						<div className="list-cont-item">
							<div className="list-cont-item-top">资讯</div>
							<div className="list-two">
								{
									newsList.slice(0, 2).map((item, index) => (
										<div key={index} className="item" onClick={clickHandle}>
											{item.type == 0 ? '' : <img className="play-btn" src={require('../../assets/image/mall/play-icon.png')} alt="" />}
											<img src={item.coverImgUrl} alt="" />
											<div className="txt">{item.title}</div>
										</div>
									))
								}
							</div>
						</div>
					</section>
					: ''
			}

			{cookList && cookList.length > 0 ?
				<section>
					<div className="list-cont-item">
						<div className="list-cont-item-top">烹饪</div>
						<div className="list-two">
							{
								cookList.slice(0, 2).map((item, index) => (
									<div key={index} className="item" onClick={clickHandle}>
										{item.type == 0 ? '' : <img className="play-btn" src={require('../../assets/image/mall/play-icon.png')} alt="" />}
										<img src={item.coverImg} alt="" />
										<div className="txt">{item.title}</div>
									</div>
								))
							}
						</div>
					</div>
				</section>
				: ''}
			<section>
				<div>
					<div className="bottomNoteWrap">
						<span className="bottomNote">- 已经到底了哦 -</span>
					</div>
				</div>
			</section>
			{productShelved}
			{bottomBar}
		</div>
	)
}
GoodSharePage.options = { disableHeader: false, wrapperClassName: '' }
export default GoodSharePage

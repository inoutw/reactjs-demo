import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react'
import Nav from 'components/nav/Nav'
import { Icon, Toast } from 'antd-mobile'
import assets from 'assets'
import order, { OrderReceivingAddressVO, CalcExpressDTO, OrderSubmitDTO, OrderSubmitVO } from 'api/order'
import { useDefaultReceiver } from './components/defaultReceiver'
import ReceiverItem from './components/ReceiverItem'
import ProductItem, { CartItem } from './components/ProductItem'
import { getIntPrice, getDecimalPrice } from 'utils/price'
import { withInvoiceResult } from './components/invoiceData'
import { useCheckStatus } from 'utils/payment'
import { useThirdLoginData } from './components/thirdLoginData'
import { wxPay } from 'utils/wxShare'
import { withShowSpec } from './ReceiverList'
import { withPickedSku } from './components/pickedSku'
const OrderConfirm: PageComponent = props => {
  const params = props.location.state
  const { settleData, selectedProducts, isFromCart } = params

  let [settleGoods, setSettleGoods] = useState<CartItem[]>(settleData)
  let [invoiceList, setInvoiceList] = useState<any[]>([])

  let defaultReceiver = useDefaultReceiver()

  const [payNo, setPayNo] = useState()
  const [orderInfo, setOrderInfo] = useState<OrderSubmitVO>()

  const thirdLoginData = useThirdLoginData()

  let totalGood = useMemo(() => {
    let count = 0
    let price = 0
    let totalShip = 0
    for (let merchant of settleGoods) {
      let ship = (merchant && merchant.shipFee) || 0
      totalShip += ship
      for (let p of merchant.cartProductVOList) {
        let tmpNum = (p && p.num) || 0
        let skuP = (p && p.skuSalePrice) || 0
        count += tmpNum
        price += skuP * tmpNum
      }
    }

    price = price + totalShip
    return [count, price]
  }, [settleGoods])

  const addrRight = useMemo(() => {
    return (
      <div className="centerWrap right-arrow">
        <Icon type="right" size="lg" color="#999" />
      </div>
    )
  }, [])
  const toChoseReceiver = (itemData: OrderReceivingAddressVO) => {
    props.history.push('/mall/receiver-list')
  }
  const [loading, setLoading] = useState(false)
  let locking = useRef(false)
  const submitOrder = useCallback(async () => {
    if (locking.current) return
    locking.current = true
    setLoading(true)
    let productList = selectedProducts.map((p: any) => {
      return { key: p.skuKid, value: p.num }
    })

    let orderParam: OrderSubmitDTO = {
      addressKid: defaultReceiver.kid,
      productList,
      isFromCart,
      invoiceList,
    }

    try {
      let res = await order.orders.submitOrder(orderParam)
      if (!res) {
        Toast.fail('订单提交失败，请稍候再试')
        setLoading(false)
        locking.current = false
        return
      }
      res && setOrderInfo(res)
      //清空invoiceData
      withInvoiceResult.setShareState({})
      withPickedSku.setShareState({})
      //调起支付

      let payParams = await order.orders.getPayParams({
        openid: thirdLoginData.openId,
        orderNoList: res.orderNoList,
        payPlatform: 2,
      })

      if (!payParams || !payParams.ext) return
      payParams && setPayNo(payParams.payNo)
      let { appId, nonceStr, signType, paySign, timeStamp } = payParams.ext
      wxPay({
        appId,
        timestamp: timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr, // 支付签名随机串，不长于 32 位
        package: payParams.ext.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign, // 支付签名
        success: function(result: any) {
          // setLoading(false)
          // 支付成功后的回调函数
          // Toast.show(`支付成功${JSON.stringify(result)}`)
          // props.history.push('/mall/pay-result', { payResult: 2, orderResult: orderInfo })
        },
        cancel: function() {
          setLoading(false)
          locking.current = false
        },
        fail: function() {
          setLoading(false)
          locking.current = false
        },
      })
    } catch (ex) {
      setLoading(false)
      Toast.fail(ex.message || '订单提交失败，请稍后再试')
      locking.current = false
    }
  }, [selectedProducts, defaultReceiver, isFromCart, invoiceList, thirdLoginData])
  useCheckStatus(payNo, (res: number) => {
    setLoading(false)
    locking.current = false
    props.history.push('/mall/pay-result', { payResult: res, orderResult: orderInfo })
  })
  useEffect(() => {
    if (!defaultReceiver || !defaultReceiver.kid) return
    let skuWithNumList: any[] = []
    params.settleData.forEach((settle: any) => {
      settle.cartProductVOList.forEach((p: any) => {
        skuWithNumList.push({ key: p.skuKid, value: p.num })
      })
    })
    let calcExpressDTO: CalcExpressDTO = {
      addressKid: defaultReceiver.kid,
      skuWithNumList,
    }
    order.orders.preSubmitCalc(calcExpressDTO).then(res => {
      let feeList = res
      let setData: CartItem[] = [...params.settleData]

      setData.map(merchant => {
        let merchantShipFee = feeList && feeList.find(fee => fee.key === merchant.merchantKid)
        if (!merchantShipFee) return null
        merchant.shipFee = merchantShipFee.value && merchantShipFee.value.expressFee
        merchant.invoiceTypeList = merchantShipFee.value && merchantShipFee.value.invoiceTypeList
        return merchant
      })
      setSettleGoods(setData)
    })
  }, [defaultReceiver, params.settleData])
  const onChoseInvoice = useCallback(res => {
    setInvoiceList(invoiceList => {
      let copy = [...invoiceList]
      let index = -1
      for (let i = 0; i < copy.length; i++) {
        if (copy[i].key === res.key) {
          index = i
        }
      }
      if (index > -1) {
        copy.splice(index, 1, res)
        return copy
      }
      return [...invoiceList, res]
    })
  }, [])
  const handleBack = () => {
    withShowSpec.setShareState({ showSpec: true })
    props.history.goBack()
  }
  return (
    <div className="order-confirm container">
      <Nav title="订单确认" onBack={handleBack}></Nav>
      <div className="body">
        {!defaultReceiver.receivingName ? (
          <ReceiverItem right={addrRight} onPickReceiver={toChoseReceiver} custClass="hideBtmBorder">
            <div className="centerWrap">
              <img className="order-loc" src={assets.mall.loc_icon} alt="" />
              <div className="addReceiverTxt"> 请填写您的收货人信息</div>
            </div>
          </ReceiverItem>
        ) : (
          <ReceiverItem
            right={addrRight}
            itemData={defaultReceiver}
            custClass="hideBtmBorder"
            onPickReceiver={toChoseReceiver}
          />
        )}
        <img src={assets.mall.address_line} alt="" style={{ width: '100%', height: '0.08rem' }} />
        <div className="borderBottom"></div>
      </div>
      <ProductItem goodData={settleGoods[0]} onChoseInvoice={onChoseInvoice} />
      <div className="borderBottom"></div>
      <div className="pay-wrap">
        <div className="pay-left">
          <img src={assets.mall.wechat_pay} alt="" className="wechat-pay-logo" />
          <span>微信支付</span>
        </div>
      </div>

      <div className="btm-note">请在60分钟内完成支付，如未支付完成该订单将自动取消</div>
      <div className="btm-bar">
        <div className="btm-left">
          共 <span>{totalGood[0]}</span> 件
        </div>
        <div className="btm-center">
          应付： <span className="price-int">¥{getIntPrice(totalGood[1])}</span>
          <span className="price-decimal">.{getDecimalPrice(totalGood[1])}</span>
        </div>
        <div className="btm-right centerWrap" onClick={submitOrder}>
          {loading ? <div className="order-loading">正在交易...</div> : '立即支付'}
        </div>
      </div>
    </div>
  )
}
export default OrderConfirm

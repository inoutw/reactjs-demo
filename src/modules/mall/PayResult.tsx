import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Nav from 'components/nav/Nav'
import { CSSTransition } from 'react-transition-group'
import assets from 'assets'
import ActionButton from './components/ActionButton'
import { openApp } from 'utils/helper'
import { OrderSubmitVO } from 'api/order'
import { formPrice } from 'utils/price'
import { withStore } from 'services/store'
import Header from 'components/Header'
import DownPop from 'components/DownPop'
import { useShareProduct } from './components/shareProduct'

export const withIgnoreState = withStore('ignoreState', {} as any)
const PayResult: PageComponent = props => {
  const [show, setShow] = useState(false)
  const orderResult: OrderSubmitVO = props.history.location.state ? props.history.location.state.orderResult : {}
  const openAppParams = useMemo(() => {
    return {
      passprops: 'defaultIndex',
      id: 1,
      router: 'OrderScreen',
    }
  }, [])

  useEffect(() => {
    ;(window as any).gio('track', 'outside_good_pay', { outside_good_pay_param: 'outside_good_pay_param' })
    setShow(show => !show)
  }, [])

  const shareProduct = useShareProduct()

  const onBack = useCallback(() => {
    let pKid = shareProduct.kid
    window.location.href = `/good/pay/${pKid}` //在这里指定其返回的地址
  }, [shareProduct])

  useEffect(() => {
    pushHistory()
    window.addEventListener('popstate', onBack, false)

    function pushHistory() {
      var state = {
        title: '',
        url: '',
      }
      window.history.pushState(state, state.title, state.url)
    }

    return () => {
      window.removeEventListener('popstate', onBack)
    }
  }, [onBack])
  // oppen app
  const [downShowPop, setDownShowPop] = useState(false)
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

  return (
    <div className="pay-result">
      <Nav
        title="支付结果"
        style={{ backgroundColor: 'transparent', color: '#fff', borderBottomWidth: 0 }}
        onBack={onBack}></Nav>
      {openAppParams && openAppParams.hasOwnProperty('router') ? (
        <Header openAppParam={openAppParams} handleData={showDownPopHandle} />
      ) : (
        ''
      )}
      {<DownPop isShow={downShowPop} callback={callback}></DownPop>}
      <div className="pay-wrap">
        <div className="receipt-top">
          <div className="bg-top" />
          <div className="success-wrap">
            <img src={assets.mall.pay_success} alt="" className="pay-success" />
            <div className="result-wrap">
              <div className="fontLg result-txt">支付成功</div>
              <div className="fontXs thx">感谢您的购买</div>
            </div>
          </div>
        </div>
        <img src={assets.mall.shadow} alt="" className="shadow" />
        <CSSTransition in={show} timeout={1000} classNames="receipt" unmountOnExit>
          <div className="paper-bg">
            <div className="paper-top">¥ {formPrice(orderResult.payAmount)}</div>
            <img src={assets.mall.separater_line} alt="" className="separater-line" />
            <div className="paper-btm">
              <div className="fontXs">订单编号：{orderResult.orderNoList && orderResult.orderNoList[0]}</div>
              <div className="fontXs">下单时间：{orderResult.placeTime}</div>
              <div className="fontXs">支付方式：微信支付</div>
            </div>
          </div>
        </CSSTransition>
        <div className="receipt-btm">{/* <img src={assets.mall.bg_btm} alt="" className="bg-btm" /> */}</div>
      </div>
      <ActionButton title="查看订单" onClick={clickHandle} customClass="check-order" normal={false} />
    </div>
  )
}
export default PayResult

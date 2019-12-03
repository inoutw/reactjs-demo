/** Create by jjh on 2019/10/15：11：01 */
import wx from 'weixin-js-sdk'
import { Toast } from 'antd-mobile'
import { httpGet } from 'services/http'

export function isWeiXin() {
  let ua = navigator.userAgent.toLowerCase()
  return !!ua.match(/micromessenger/i)
}

export function closeWindow() {
  wx.call('closeWindow')
}
export function getWXconfigInfo(link) {
  return new Promise(async (resolve, reject) => {
    let _url = ''
    if (link && link.length > 0) {
      _url = encodeURIComponent(link)
    } else {
      _url = encodeURIComponent(window.location.href.split('#')[0])
    }
    let res = await httpGet(`/platform-user/v1.0/pb/wx-mps/action/jsapi-signature?url=${_url}`)
    let body = res.data
    if (body.code !== '200') {
      reject(body.errorMsg)
    }
    resolve(body.data)
  })
}

export function getWXconfigInfoShare(link) {
  return new Promise(async (resolve, reject) => {
    let _url = ''
    if (link && link.length > 0) {
      _url = encodeURIComponent(link)
    } else {
      _url = encodeURIComponent(window.location.href.split('#')[0])
    }
    let res = await httpGet(`/platform-user/v1.0/pb/wx-mps/action/jsapi-signature?url=${_url}`)
    let body = res.data
    if (body.code !== '200') {
      reject(body.errorMsg)
    }
    resolve(body.data)
  })
}

export function isMobileQQ() {
  var ua = navigator.userAgent
  return /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(ua) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(ua)
}

export async function qqShare(params) {
  let data = await getWXconfigInfoShare(params.link)
  window.setShareInfo({
    title: params.title || '营养计划', // 分享标题
    summary: params.desc || '', // 分享内容
    pic: params.imgUrl || 'https://cdn.lajsf.com/nutrition-plan/image/default/common/470733090766851.png?w=300&h=300s', // 分享图片
    url: params.link, // // 分享链接
    // 微信权限验证配置信息，若不在微信传播，可忽略
    WXconfig: {
      swapTitleInWX: true, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）
      appId: 'wx50171b64b7dd1e91', // 公众号的唯一标识
      timestamp: data.timestamp, // 生成签名的时间戳
      nonceStr: data.noncestr, // 生成签名的随机串
      signature: data.signature, // 签名
    },
  })
}

export async function wxShare(params) {
  let data = await getWXconfigInfoShare(params.link)
  let shareData = {
    title: params.title || '营养计划',
    desc: params.desc || '',
    link: params.link,
    imgUrl:
      params.imgUrl || 'https://cdn.lajsf.com/nutrition-plan/image/default/common/470733090766851.png?w=300&h=300', // 不传设置默认分享图diz
    success: function(res) {
      // Toast.info('分享成功')
    },
    cancel: function(res) {
      Toast.info('取消分享')
    },
    fail: function(res) {
      // Toast.info(JSON.stringify(res))
    },
  }

  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx50171b64b7dd1e91', // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.noncestr, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名，见附录1   // 1.4.0 即将废弃的 API，但是仅使用上面的API设置，安卓无效 onMenuShareTimeline onMenuShareAppMessage  所以还是需要用一下
    jsApiList: [
      // 'updateAppMessageShareData',
      // 'updateTimelineShareData',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
    ], // 必填，需要使用的JS接口列表，'onMenuShareWeibo',
  })

  wx.ready(function() {
    // wx.updateAppMessageShareData(shareData)
    // wx.updateTimelineShareData(shareData)

    wx.onMenuShareTimeline(shareData)
    wx.onMenuShareAppMessage(shareData)
    wx.onMenuShareQQ(shareData)
    // wx.onMenuShareWeibo(shareData);
  })

  wx.error(function(res) {
    // Toast.info(JSON.stringify(res.errMsg))
  })
}

export async function wxPay(params) {
  let data = await getWXconfigInfo()
  if (!data) {
    Toast.show(data || '微信授权接口错误')
    return
  }
  let payData = {
    timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    nonceStr: '', // 支付签名随机串，不长于 32 位
    package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
    signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    paySign: '', // 支付签名
    success:
      params.success ||
      function(res) {
        // 取消分享也弹了该toast
        Toast('支付成功')
      },
    cancel:
      params.cancel ||
      function(res) {
        Toast('取消支付')
      },
    fail:
      params.fail ||
      function(res) {
        Toast(JSON.stringify(res))
      },
  }
  console.log('params::', params)

  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    // appId: 'wx50171b64b7dd1e91', // 必填，公众号的唯一标识
    appId: params.appId, // 必填，公众号的唯一标识
    timestamp: params.timestamp, // 必填，生成签名的时间戳
    nonceStr: params.nonceStr, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名，见附录1   // 1.4.0 即将废弃的 API，但是仅使用上面的API设置，安卓无效 onMenuShareTimeline onMenuShareAppMessage  所以还是需要用一下
    jsApiList: ['chooseWXPay'], // 必填，需要使用的JS接口列表，'onMenuShareWeibo',
  })

  wx.ready(function() {
    wx.chooseWXPay(params)
  })

  wx.error(function(res) {
    Toast(JSON.stringify(res.errMsg))
  })
}

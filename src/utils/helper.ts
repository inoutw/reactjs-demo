import nativeSchema from 'utils/toolNativeSchema'

const ua = window.navigator.userAgent
var hasClickOnce = false
var openAppParams = {
  router: '',
  passprops: '',
  id: '',
  params: '',
}
export const openApp = (param: any) => {
  openAppParams = param
  var showPop = false
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  if (!hasClickOnce) {
    hasClickOnce = true
    if (ua.toLowerCase().match(/micromessenger/i) || ua.toLowerCase().match(/WeiBo/i)) {
      // 显示弹窗
      showPop = true
    } else {
      handleOpenApp()
    }
  }
  var timer = setTimeout(() => {
    hasClickOnce = false
  }, 2000)
  return showPop
}

// 打开app
const handleOpenApp = () => {
  var schema = ''
  let params: any = ''
  let mulparams = ''
  if (openAppParams.params && openAppParams.params.length > 0) {
    //  传多个参数
    params = JSON.parse(openAppParams.params)
    for (let i in params) {
      mulparams += i + '=' + params[i] + '&'
    }
    if (mulparams.substring(mulparams.length - 1, mulparams.length) == '&') {
      mulparams = mulparams.substring(0, mulparams.length - 1)
    }
    schema = `/${openAppParams.router}?` + mulparams
  } else {
    //  传一个参数
    schema = `/${openAppParams.router}?${openAppParams.passprops}=${openAppParams.id}`
  }

  console.log('打开app 的参数', params, ' - - schema - - :', schema)
  nativeSchema.loadSchema({
    // 某个schema协议，例如login,     nutritionplan
    schema: schema,
    // schema头协议,
    protocal: 'nutritionplan://route',
    // 发起唤醒请求后，会等待loadWaiting时间，超时则跳转到failUrl，默认3000ms
    loadWaiting: 3000,
    // 唤起失败时的跳转链接，默认跳转到应用商店下载页
    failUrl:
      ua.indexOf('Android') > -1
        ? 'https://a.app.qq.com/o/simple.jsp?pkgname=com.laj.nutritionplan'
        : 'https://itunes.apple.com/cn/app/id1479391612?ls=1&mt=8',
  })
}

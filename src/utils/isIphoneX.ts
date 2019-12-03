// 判断手机是否是iPhoneX，iPhoneXR，iPhoneX_XS，iPhoneXR_XSMax手机
const isIphoneX = () => {
  var u = navigator.userAgent
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
  if (isIOS) {
    // iPhone X、iPhone XS
    var isIPhoneX =
      /iphone/gi.test(window.navigator.userAgent) &&
      window.devicePixelRatio &&
      window.devicePixelRatio === 3 &&
      window.screen.width === 375 &&
      window.screen.height === 812
    // iPhone XS Max
    var isIPhoneXSMax =
      /iphone/gi.test(window.navigator.userAgent) &&
      window.devicePixelRatio &&
      window.devicePixelRatio === 3 &&
      window.screen.width === 414 &&
      window.screen.height === 896
    // iPhone XR
    var isIPhoneXR =
      /iphone/gi.test(window.navigator.userAgent) &&
      window.devicePixelRatio &&
      window.devicePixelRatio === 2 &&
      window.screen.width === 414 &&
      window.screen.height === 896
    if (isIPhoneX) {
      return true
    } else if (isIPhoneXSMax) {
      return true
    } else if (isIPhoneXR) {
      return true
    } else {
      return false
      //不是上面几款iphone
    }
  }
}
export default isIphoneX

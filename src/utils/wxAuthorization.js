import platformUser from '../api/platform-user'
import { WithLogin } from 'modules/user/LoginContext'
import { isWeixinBrowser } from 'utils'

export function getWxCode(path) {
  if (!isWeixinBrowser()) return
  let AppID = 'wx50171b64b7dd1e91'
  const local = path || 'http://m-dev.lajsf.com/good/pay/460741120131072'
  let url =
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    AppID +
    '&redirect_uri=' +
    encodeURIComponent(local) +
    '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
  console.log(' - - url - - : ', url)
  window.location.href = url
}

export function refreshToken() {
  // 从本地获取 refreshToken || token
  let loginVo = WithLogin.getShareState()
  console.log(' - - -  obj - - : ', loginVo)
  var authTokenVO = { refreshToken: '', token: '' }
  if (loginVo.authInfo) {
    authTokenVO = {
      refreshToken: loginVo.authInfo.refreshToken || '',
      token: loginVo.authInfo.token || '',
    }
  }
  console.log(' - - authTokenVO - - - :', authTokenVO)
  platformUser.auth.refreshToken(authTokenVO).then(res => {
    //  刷新 token devType 要传 5   后面支付也要传
    console.log(' - - 刷新 authToken - - :', res)
    if (res) {
      // 将获取到的token 存到本地
      WithLogin.setShareState({ ...loginVo, authInfo: { ...res } })
    } else {
    }
  })
}

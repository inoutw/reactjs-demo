/** Create by jjh on 2019/11/6：10：29 */
import axios from 'axios'
import env from 'constants/env.json'
class JsBridge {
  _send2Native = message => {
    if (typeof message === 'object') {
      message = JSON.stringify(message)
    }
    if (!this.isNative()) {
      console.warn('非原生环境', message)
    }
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      window.ReactNativeWebView.postMessage(message)
    } else {
      window.postMessage(message, window.origin)
    }
  }
  receiveData = event => {
    try {
      if (typeof event === 'object' && !event.invokeId) return
      // if (typeof event !== "string" || event.indexOf("invokeId") < 0 ) {
      // 	// typeof rawData === "string" && alert('rawData:##' + rawData + 'typeof:' + typeof rawData);
      // 	return;
      // }
      let data = event
      if (typeof event === 'string') {
        data = JSON.parse(event)
      }
      if (data.nativeEvent) {
        return this.handleNativeMessage(data)
      }
      var invokeId = data.invokeId
      var callback = this.callbacks[invokeId]
      if (!callback) {
        return
      }
      if (data.code === 200 || data.code === '200') {
        return callback.resolve(data.data)
      } else {
        callback.reject(data)
      }
      delete this.callbacks[invokeId]
    } catch (ex) {
      alert(ex + ': rawData' + event)
    }
  }
  callbacks = {}
  send2Native = (invokeName, data) => {
    return new Promise((resolve, reject) => {
      var message = {
        invokeName,
        data,
      }
      var invokeId = new Date().getTime().toString()
      message.invokeId = invokeId
      this.callbacks[invokeId] = {
        resolve: resolve,
        reject: reject,
      }
      this._send2Native(message)
    })
  }
  registerNative = invokeName => {
    return data => {
      return this.send2Native(invokeName, data)
    }
  }

  isNative = () => {
    return !!(
      window.ReactNativeWebView ||
      (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.ReactNativeWebView)
    )
  }
}
var jsBridge = new JsBridge()
const yryz = {
  login: jsBridge.registerNative('login'),
  goBack: jsBridge.registerNative('goBack'),
  httpHeader: jsBridge.registerNative('httpHeader'),
  payOrder: jsBridge.registerNative('payOrder'),
  payRequest: jsBridge.registerNative('payRequest'),
  receiveData: jsBridge.receiveData,
  isNative: jsBridge.isNative,
  isLoaded: jsBridge.registerNative('isLoaded'),
  share: jsBridge.registerNative('share'),
  popToRoot: jsBridge.registerNative('popToRoot'),
  shareTestSubject: jsBridge.registerNative('shareTestSubject'),
  statusBarHeight: jsBridge.registerNative('statusBarHeight'),
}
window.yryz = yryz
export default yryz
export function environmentIsNative() {
  return jsBridge.isNative()
}

// 通过用户id获取活动数据
export async function userByIdActivityData(id,token,devType,acId) {
  var userId = id || ''
  var token = token || ''
  var devType = devType || ''
  return await axios({
    url: env.httpBaseUrl + '/activity/v1.0/pb/activitys/' + acId + '?kid=' + acId,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'tenantId': 'nutrition-plan',
      'devType': devType || 3,
      'userId': userId,
      'token': token
    },
  }).then(data =>  data.data.data)

}
// 用户id 报名参加活动
export async function userByIdSignIn(id,token,devType,acId) {
  var token = token || ''
  var userId = id || ''
  var devType = devType || ''
  if (id) {
      await axios({
      url: env.httpBaseUrl + '/activity/v1.0/pt/activity-enrolls/action/enroll?activityId=' + acId,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'tenantId': 'nutrition-plan',
        'devType': devType,
        'userId': userId,
        'token': token
      },
    }).then(
      data => {},
      err => {
        console.log(err)
      },
    )
  }
}

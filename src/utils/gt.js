import { httpPost, httpGet } from 'services/http.ts'

function initGeetestAsync(data) {
  return new Promise((resolve, reject) => {
    window.initGeetest({ ...data, next_width: '5rem' }, captchaObj => resolve(captchaObj))
  })
}

function validateCaptcha(captchaObj, params) {
  return new Promise((resolve, reject) => {
    // 将验证按钮插入到宿主页面中captchaBox元素内
    document.querySelector('#captchaBox').style.opacity = 0.1
    captchaObj.appendTo('#captchaBox')
    captchaObj.onReady(function() {
      setTimeout(() => document.querySelector('#captchaBox').firstElementChild.click(), 300)
      //
    })
    captchaObj.onSuccess(async function() {
      let result = captchaObj.getValidate()
      let checkParams = {
        verifyKey: params.verifyKey,
        ...result,
      }
      let checkRes = await httpPost(`/platform-support/v1.0/pb/geetest/action/check`, checkParams)
      if (checkRes.data.status === 'success') {
        let getCodeRes2 = await httpGet(`/platform-support/v1.0/pb/verify/action/getCode`, { params })
        resolve(getCodeRes2)
      }
    })
    captchaObj.onError(function() {
      reject()
    })
  })
}

export async function geetTestVerifyCode(params) {
  let getCodeRes = await httpGet(`/platform-support/v1.0/pb/verify/action/getCode`, { params })

  if (getCodeRes.data.code == '1003') {
    let gtdataRes = await httpGet(`/platform-support/v1.0/pb/geetest/action/pre-process`, {
      params: { verifyKey: params.verifyKey },
    })
    let captchaObj = await initGeetestAsync(gtdataRes.data)
    return validateCaptcha(captchaObj, params)
  } else {
    return getCodeRes
  }
}

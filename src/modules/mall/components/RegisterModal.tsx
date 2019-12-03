import React, { useState, useRef, useMemo, useEffect } from 'react'
import InlineItem from './InlineItem'
import ActionButton from './ActionButton'
import assets from 'assets'
import { Toast } from 'antd-mobile'
import platformSupport from 'api/platform-support'
import platformUser, { LoginVO, BindingPhoneDTO, ThirdLoginVO, WxWebBindingPhoneDTO } from 'api/platform-user'
import { useLoginContext } from 'modules/user/LoginContext'
import { withThirdLoginData, useThirdLoginData } from './thirdLoginData'
import { geetTestVerifyCode } from 'utils/gt'
const RegisterModal: React.FC<{ dismissModal?: Function }> = ({ dismissModal, ...props }) => {
  const [locking, setLocking] = useState(false)
  const [countDown, setCountDown] = useState<number>(60)
  const [phoneNum, setPhoneNum] = useState<string>('')
  const [sendCodeText, setSendCodeText] = useState<string>('获取验证码')
  const [phoneErrTxt, setPhoneErrTxt] = useState<string>()
  const [code, setCode] = useState<string>('')
  const timing = useRef(null)
  /** 发送验证码倒计时 */
  const handleCountDown = () => {
    setLocking(true)
    Toast.loading('正在获取验证码')
    timing.current = setInterval(() => {
      setCountDown(countDown => {
        countDown -= 1
        // let sendCodeTextTmp = `${countDown}s后重新获取 `
        if (countDown === 0) {
          setLocking(false)
          // sendCodeTextTmp = '获取验证码'
          clearInterval(timing.current)
          return 60
        }
        // setSendCodeText(sendCodeTextTmp)
        return countDown
      })
    }, 1000)
  }
  const sendCodeLabel = useMemo(() => {
    if (countDown < 60 && countDown > 0) return `${countDown}s后重新获取`
    return '获取验证码'
  }, [countDown])
  /** 发送验证码 */
  const handleSendCode = async () => {
    // console.warn('==发送验证码==', type)
    if (locking) return
    const regexPhone = /^1\d{10}$/
    if (!regexPhone.test(phoneNum)) {
      setPhoneErrTxt('请输入正确的手机号')
      return
    }
    setPhoneErrTxt('')
    handleCountDown()
    let params = {
      serviceCode: 5,
      verifyKey: phoneNum,
      verifyType: '0',
    }
    let res = await geetTestVerifyCode(params)
    if (res.data && res.data.code == '200') {
      return
    }
    Toast.fail(res.data && res.data.msg ? res.data.msg : '网络出小差了')
  }
  const loginContext = useLoginContext()
  const thirdData = useThirdLoginData()
  const withThirdData = withThirdLoginData
  const confirm = () => {
    if (phoneErrTxt || !code) return
    if (!thirdData.loginVO || !thirdData.loginVO.user || !thirdData.loginVO.user.userId) return
    let param: WxWebBindingPhoneDTO = {
      userId: thirdData.loginVO.user.userId,
      // thirdId: thirdData.thirdId,
      // thirdId: 'o-X1O1E6z6oGAoXpUdSBw-TbkzKA',
      userPhone: phoneNum,
      veriCode: code,
    }
    platformUser.userThirdLogins
      .wxwebBindingPhone(param)
      .then((res: ThirdLoginVO) => {
        if (!res) {
          Toast.fail('验证码错误')
          return
        }
        ;(window as any).gio('track', 'outside_good_register', { outside_good_sign: 'outside_good_sign' })
        dismissModal()
        loginContext.login(res.loginVO)
        withThirdData.setShareState(res)
      })
      .catch(err => {
        let errRes = err.userInfo || {}
        Toast.fail(errRes.msg || '网络出小差啦')
      })
  }
  const inputCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value
    if (val && val.length > 4) {
      val = val.slice(0, 4)
    }
    setCode(val)
  }
  const inputPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value
    if (inputVal && inputVal.length > 11) {
      inputVal = inputVal.slice(0, 11)
    }
    setPhoneNum(inputVal)
  }
  const myFunction = useRef(null)

  useEffect(() => {
    var u = navigator.userAgent
    var flag

    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isIOS) {
      document.body.addEventListener('focusin', () => {
        //软键盘弹起事件
        flag = true
        clearTimeout(myFunction.current)
      })
      document.body.addEventListener('focusout', () => {
        //软键盘关闭事件
        flag = false
        if (!flag) {
          myFunction.current = setTimeout(function() {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) //重点  =======当键盘收起的时候让页面回到原始位置(这里的top可以根据你们个人的需求改变，并不一定要回到页面顶部)
          }, 200)
        } else {
          return
        }
      })
    } else {
      return
    }
  }, [])
  return (
    <div className="register-modal">
      <div className="close-icon-wrap" onClick={() => dismissModal()}>
        <img className="close-icon" src={assets.mall.close_icon} alt="" />
      </div>
      <img src={assets.mall.np_brand} alt="" className="np-brand" />
      <div className="phone-err">{phoneErrTxt}</div>
      <div className="phone-row" style={{ marginTop: '0.1rem' }}>
        <input type="tel" placeholder="请输入手机号" maxLength={11} value={phoneNum} onChange={inputPhone} />
        <span onClick={handleSendCode}>{sendCodeLabel}</span>
      </div>
      <div className="phone-row">
        <input type="tel" placeholder="请输入验证码" maxLength={4} onChange={inputCode} value={code} />
      </div>
      <ActionButton title="确定" customClass="submit-btn" onClick={confirm} />
      <div id="captchaBox"></div>
    </div>
  )
}
export default RegisterModal

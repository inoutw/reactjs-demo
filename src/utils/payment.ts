import PayApi from 'api/platform-pay'
import { useRef, useEffect, useCallback } from 'react'
enum PayStatus {
  Bad_Query = 0, //非法查询
  Handling = 1, //处理中
  Success = 2, //成功
  Failed = 3, //失败
}
let baseTime = 100
export const useCheckStatus = (payNo: string, callback: Func<number>) => {
  const timer = useRef(null)
  const cbRef = useRef(callback)
  useEffect(() => {
    cbRef.current = callback
  })

  const startCheck = useCallback((payNo: string) => {
    if (!payNo) return
    if (timer.current) return
    let count = 0
    async function checkStatus() {
      let payStatus = await PayApi.payInfos.payStatus({ payNo })
      // 状态是处理中（未及时拿到支付结果），需要多次轮询，按指数递增间隔时间
      if (payStatus === PayStatus.Handling) {
        count++
        timer.current = setTimeout(checkStatus, Math.pow(2, count - 1) * baseTime)
      } else {
        cbRef.current(payStatus)
      }
    }
    checkStatus()
  }, [])

  //原生返回后需要查询订单状态
  useEffect(() => {
    startCheck(payNo)
    return () => {
      timer.current && clearTimeout(timer.current)
      timer.current = null
    }
  }, [payNo, startCheck])
}

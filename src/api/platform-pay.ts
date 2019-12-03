import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface IospayNotifyVO {
  /** 支付单号 */
  payNo?: string
  /** 凭据 */
  receipt?: string
  /** 交易ID */
  transactionId?: string
}

export interface PayVO {
  /** 支付单号 */
  payNo?: string
  /** 支付密码 */
  payPassword?: string
}
export default {
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/platform-pay/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  notifys: {
    /**
    * 苹果支付回调
    */
    iospay(iospayNotifyVO: IospayNotifyVO): Promise<boolean> {
      return httpPost(`/platform-pay/v1.0/pt/notifys/action/iospay`, iospayNotifyVO).then((res:any) => res.data.data)
    },
  },
  payInfos: {
    /**
    * 余额支付接口
    */
    pay(payVO: PayVO): Promise<boolean> {
      return httpPost(`/platform-pay/v1.0/pt/pay-infos/action/pay`, payVO).then((res:any) => res.data.data)
    },
    /**
    * 查询支付订单状态：0-非法查询 1-处理中 2-成功 3-失败
    */
    payStatus(params: { payNo: string }): Promise<number> {
      return httpGet(`/platform-pay/v1.0/pt/pay-infos/action/pay-status`,  {params} ).then((res:any) => res.data.data)
    },
  },
}
import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface LecturerAccountPeriodDetailTemp {
  /** 实付金额 */
  actualAmount?: number
  /** 课程名称 */
  courseName?: string
  /** 课程价格 */
  coursePrice?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 汇率 */
  exchangeRate?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 讲师账期表id */
  lecturerAccountPeriod?: number
  /** 讲师唯一标识 */
  lecturerId?: number
  /** 讲师应结 */
  lecturerRepay?: number
  /** 订单完成时间 */
  orderCompletionTime?: string
  /** 订单编号 */
  orderId?: number
  /** 支付来源：1-IOS 2-ANDROID 3-WEB 4-MINI_PROGRAM */
  paySource?: number
  /** 支付通道：1-支付宝，2-微信，3-苹果，4-银联，5-中国银联（提现） */
  paymentChannel?: number
  /** 支付流水号 */
  paymentSerialNo?: string
  /** 平台应得 */
  platformInto?: number
  /** 是否入账 0.新建  1.已入账  */
  processFlag?: number
  /** 费率 */
  rate?: number
}

export interface PageList<T> {
  /** 数据总条数，前端接口可忽略改字段 */
  count?: number
  /** 数据集合 */
  entities?: T[]
  /** 当前页码 */
  pageNo?: number
  /** 每页条数 */
  pageSize?: number
}

export interface LecturerAccountPeriodDetail {
  /** 实付金额 */
  actualAmount?: number
  /** 课程名称 */
  courseName?: string
  /** 课程价格 */
  coursePrice?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 费率 */
  exchangeRate?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 讲师账期表id */
  lecturerAccountPeriodId?: number
  /** 讲师唯一标识 */
  lecturerId?: number
  /** 讲师应结 */
  lecturerRepay?: number
  /** 订单完成时间 */
  orderCompletionTime?: string
  /** 订单编号 */
  orderId?: number
  /** 支付来源：1-IOS 2-ANDROID 3-WEB 4-MINI_PROGRAM */
  paySource?: number
  /** 支付通道：1-支付宝，2-微信，3-苹果，4-银联，5-中国银联（提现） */
  paymentChannel?: number
  /** 支付流水号 */
  paymentSerialNo?: string
  /** 平台应得 */
  platformInto?: number
  /** 是否入账 0.新建  1.已入账  */
  processFlag?: number
  /** 费率 */
  rate?: number
}

export interface MerchantAccountPeriodDetailTemp {
  /** 商品总金额 */
  commodityAmount?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 运费 */
  freight?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商户结算账期表id */
  merchantAccountPeriodId?: number
  /** 商户id */
  merchantId?: number
  /** 订单完成时间 */
  orderCompletionTime?: string
  /** 订单id */
  orderKid?: number
  /** 订单编号 */
  orderNo?: string
  /** 订单总数 */
  orderNum?: number
  /** 订单类型 1.商城订单收入  2.退款支出 */
  orderType?: number
  /** 支付通道：1-支付宝，2-微信，3-苹果，4-银联，5-中国银联（提现） */
  paymentChannel?: number
  /** 支付流水号 */
  paymentSerialNo?: string
  /** 平台应得 */
  platformInto?: number
  /** 是否入账 0.新建  1.已入账  */
  processFlag?: number
  /** 商品id */
  productId?: number
  /** 商品名称 */
  productName?: string
  /** 商品数量 */
  productNum?: number
  /** 商品单价 */
  productPrice?: number
  /** 费率 */
  rate?: number
  /** 退款金额 */
  refundAmount?: number
  /** 退款编号 */
  refundNo?: string
  /** 结算金额 */
  settlementAmount?: number
  /** SKU_ID */
  skuId?: number
  /** 总金额 */
  totalAmount?: number
}

export interface MerchantAccountPeriodDetail {
  /** 商品总金额 */
  commodityAmount?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 运费 */
  freight?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商户结算账期表id */
  merchantAccountPeriodId?: number
  /** 商户id */
  merchantId?: number
  /** 订单完成时间 */
  orderCompletionTime?: string
  /** 订单id */
  orderKid?: number
  /** 订单编号 */
  orderNo?: string
  /** 订单总数 */
  orderNum?: number
  /** 订单类型 1.商城订单收入  2.退款支出 */
  orderType?: number
  /** 支付通道：1-支付宝，2-微信，3-苹果，4-银联，5-中国银联（提现） */
  paymentChannel?: number
  /** 支付流水号 */
  paymentSerialNo?: string
  /** 平台应得 */
  platformInto?: number
  /** 是否入账 0.新建  1.已入账  */
  processFlag?: number
  /** 商品id */
  productId?: number
  /** 商品名称 */
  productName?: string
  /** 商品数量 */
  productNum?: number
  /** 商品单价 */
  productPrice?: number
  /** 费率 */
  rate?: number
  /** 退款金额 */
  refundAmount?: number
  /** 退款编号 */
  refundNo?: string
  /** 结算金额 */
  settlementAmount?: number
  /** SKU_ID */
  skuId?: number
  /** 总金额 */
  totalAmount?: number
}

export interface MerchantAccountPeriod {
  /** 账期编号 */
  accountNumber?: string
  /** 账期 */
  accountPeriodTime?: string
  /** 已结算金额 */
  alreadySettlementAmount?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 结算金额 */
  currentSettlementAmount?: number
  /** 发票表kid */
  invoiceKid?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 负债 */
  liability?: number
  /** 商户标识码 */
  merchantCode?: string
  /** 商户id */
  merchantId?: number
  /** 商户名称 */
  merchantName?: string
  /** 订单交易金额 */
  orderAmount?: number
  /** 订单数 */
  orderNumber?: number
  /** 待结算时间 */
  pendingTime?: string
  /** 状态 1.已出账  2.已对账 3.待结算  4.已结算 */
  periodStatus?: number
  /** 对账时间 */
  reconciliationTime?: string
  /** 退款金额 */
  refundAmount?: number
  /** 退款单数 */
  refundNumber?: number
  /** 结算类型 1.周  2.半月 3.月 */
  settlementCycle?: number
  /** 结算结束日期 */
  settlementEndDate?: string
  /** 结算开始日期 */
  settlementStartDate?: string
  /** 结算时间 */
  settlementTime?: string
  /** 店铺名称 */
  shopName?: string
  /** 盖章附件 */
  signFile?: string
  /** 未结算金额 */
  unsettlementAmount?: number
}
export default {
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/financial/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  lecturerAccountPeriodDetailTemps: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<LecturerAccountPeriodDetailTemp>> {
      return httpGet(`/financial/v1.0/pt/lecturer-account-period-detail-temps/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  lecturerAccountPeriodDetails: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<LecturerAccountPeriodDetail>> {
      return httpGet(`/financial/v1.0/pt/lecturer-account-period-details/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  merchantAccountPeriodDetailTemps: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<MerchantAccountPeriodDetailTemp>> {
      return httpGet(`/financial/v1.0/pt/merchant-account-period-detail-temps/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  merchantAccountPeriodDetails: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<MerchantAccountPeriodDetail>> {
      return httpGet(`/financial/v1.0/pt/merchant-account-period-details/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  merchantAccountPeriods: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<MerchantAccountPeriod>> {
      return httpGet(`/financial/v1.0/pt/merchant-account-periods/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
}
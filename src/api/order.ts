import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface CartAddOrBuyCheckDTO {
  /** 区code */
  areaCode?: string
  /** 市code */
  cityCode?: string
  /** 商品id */
  productKid?: number
  /** 省code */
  provinceCode?: string
}

export interface ExpressListVO {
  /** 快递公司编号 */
  expressCode?: string
  /** 快递公司名 */
  expressName?: string
}

export interface CartAddDTO {
  /** cartKid 更新购物车用 */
  cartKid?: number
  /** 添加多少个/修改成多少 */
  num?: number
  /** skuId */
  skuKid?: number
}

export interface Cart {
  /** 添加时间 */
  addTime?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 是否删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商户id */
  merchantKid?: number
  /** 购买数量 */
  num?: number
  /** 产品id */
  productKid?: number
  /** sku id */
  skuKid?: number
  /** 买家id */
  userId?: number
}

export interface CartListVO {
  /** 按照无效归类 */
  cartInvalidVOList?: CartProductInvalidVO[]
  /** 按照商户归类 */
  cartMerchantItemVOList?: CartMerchantItemVO[]
}

export interface CartProductInvalidVO {
  /** 购物车kid */
  cartKid?: number
  /** 商品kid */
  productKid?: number
  /** 商品名称 */
  productName?: string
  /** 商品失效原因 */
  reason?: string
  /** skuKid */
  skuKid?: number
  /** 封面 */
  skuPic?: string
}

export interface CartMerchantItemVO {
  /** 购物车商品列表 */
  cartProductVOList?: CartProductVO[]
  /** 商户kid */
  merchantKid?: number
  /** 商户名称 */
  merchantName?: string
  /** 店铺logo */
  shopLogo?: string
}

export interface CartProductVO {
  /** 规格属性 */
  attributes?: ProductAttributeValueVO[]
  /** 购物车kid */
  cartKid?: number
  /** 数量 */
  num?: number
  /** 商品kid */
  productKid?: number
  /** 商品名称 */
  productName?: string
  /** skuId */
  skuKid?: number
  /** sku封面 */
  skuPic?: string
  /** sku售价 */
  skuSalePrice?: number
  /** sku展示字符串 例:300g;原味 */
  skuSpec?: string
  /** 商品所有sku规格列表 */
  skus?: ProductSkuVO[]
}

export interface ProductAttributeValueVO {
  /** 商品属性ID */
  attributeId?: number
  /** 属性名 */
  attributeName?: string
  /** 属性类型  0 规格属性 1 服务说明 2 商品参数 3 适宜人群 4 禁忌人群 */
  attributeType?: number
  /** 属性类型  0 规格属性 1 服务说明 2 商品参数 3 适宜人群 4 禁忌人群 */
  attributeTypeName?: string
  /** 手动添加规格或参数的值，参数单值，规格有多个时以逗号隔开 */
  value?: string
}

export interface ProductSkuVO {
  /** 规格图片 */
  pic?: string
  /** 购物车sku限购信息 */
  productSkuLimitVO?: ProductSkuLimitVO
  /** 销售价格 */
  salePrice?: number
  /** skuId */
  skuKid?: number
  /** 销售规格 */
  spec?: string
  /** 库存 */
  stock?: number
}

export interface ProductSkuLimitVO {
  /** 限购数量 */
  purchaseMax?: number
  /** 起购数量 */
  purchaseMin?: number
}

export interface InvoiceDetailCreateDTO {
  /** 地址 */
  address?: string
  /** 申请来源 0 营养贝订单 1 商户服务费 */
  applySource?: number
  /** 申请类型 1.企业 2.个人 */
  applyType?: number
  /** 银行账号 */
  bankCode?: string
  /** 开户银行 */
  bankName?: string
  /** 关联数据id集合(申请开票的数据Kid集合：如营养贝kid) 逗号隔开 */
  dataKid?: string
  /** 邮箱 */
  email?: string
  /** 发票抬头 */
  invoiceHead?: string
  /** 所有者id 用户传用户kid  商户传商户kid */
  ownerKid?: number
  /** 电话 */
  phone?: string
  /** 收票人电话 */
  receiverPhone?: string
  /** 税号 */
  taxCode?: string
  /** 价税合计 */
  totalMoney?: string
}

export interface InvoiceDetail {
  /** 地址 */
  address?: string
  /** 价额合计 */
  amount?: string
  /** 申请来源 0 营养贝订单 1 商户服务费 */
  applySource?: number
  /** 申请类型 1.企业 2.个人 */
  applyType?: number
  /** 银行账号 */
  bankCode?: string
  /** 开户银行 */
  bankName?: string
  /** 创建时间 */
  createDate?: string
  /** 开票类型 0 正常发票  1冲红发票 */
  createType?: number
  /** 创建人ID */
  createUserId?: number
  /** 关联数据id集合 逗号隔开 */
  dataKid?: string
  /** 是否删除 */
  delFlag?: number
  /** 邮箱 */
  email?: string
  /** 开票时间 */
  endDate?: string
  /** 发票号码 */
  invoiceCode?: string
  /** 发票抬头 */
  invoiceHead?: string
  /** 开红票时对应正票id */
  invoiceKid?: number
  /** 发票代码 */
  invoiceNum?: string
  /** 发票状态 0 待开票 1已开票 2开票失败 */
  invoiceState?: number
  /** 发票类型 0 增值税普通发票 */
  invoiceType?: number
  /** 发票地址 */
  invoiceUrl?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 电话 */
  phone?: string
  /** 税额合计 */
  tax?: string
  /** 税号 */
  taxCode?: string
  /** 价税合计 */
  totalMoney?: string
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

export interface InvoiceProductDetail {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 是否删除 */
  delFlag?: number
  /** 发票kid */
  invoiceKid?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商品金额 */
  productAmount?: string
  /** 商品编码 */
  productCode?: string
  /** 商品名称 */
  productName?: string
  /** 商品数量 */
  productNum?: string
  /** 商品单价 */
  productPrice?: string
  /** 商品税率 */
  productSlv?: string
  /** 商品简码 */
  productTag?: string
  /** 商品税额 */
  productTax?: string
}

export interface MyInvoice {
  /** 开户行名称 */
  bankName?: string
  /** 银行卡号 */
  cardNo?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 是否删除 */
  delFlag?: number
  /** 发票类型 1.电子普通发票 2.纸质普通发票 3.纸质专用发票 */
  invoiceType?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 联系电话 */
  phone?: string
  /** 收票人地址 */
  receiverAddress?: string
  /** 收票人邮箱 */
  receiverEmail?: string
  /** 收票人电话 */
  receiverPhone?: string
  /** 注册地址 */
  regAddress?: string
  /** 税号 */
  taxNo?: string
  /** 发票抬头 */
  title?: string
  /** 抬头类型 1.企业 2.个人 */
  titleType?: number
  /** 用户id */
  userId?: number
}

export interface ExpressVO {
  /** 快递公司名 */
  company?: string
  /** 快递员手机号 */
  courierPhone?: string
  /** 快递详细信息列表 */
  detailVOS?: ExpressDetailVO[]
  /** 商品数量 */
  goodsCount?: string
  /** 商品图片 */
  goodsImage?: string
  /** 快递单号 */
  no?: string
  /** 手机号 */
  phone?: string
  /** 1表示此快递单的物流信息不会发生变化，此时您可缓存下来；0表示有变化的可能性 */
  status?: string
}

export interface ExpressDetailVO {
  /** 物流事件发生的时间 */
  datetime?: string
  /** 物流事件的描述 */
  remark?: string
  /** 快件当时所在区域 */
  zone?: string
}

export interface OrderInvoice {
  /** 发票金额 */
  amount?: number
  /** 申请时间 */
  applyTime?: string
  /** 开户行名称 */
  bankName?: string
  /** 银行卡号 */
  cardNo?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 是否删除 */
  delFlag?: number
  /** 发票类型 1.电子普通发票 2.纸质普通发票 3.纸质专用发票 */
  invoiceType?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商户id */
  merchantId?: number
  /** 订单kid */
  orderKid?: number
  /** 订单编号 */
  orderNo?: string
  /** 联系电话 */
  phone?: string
  /** 收票人地址 */
  receiverAddress?: string
  /** 收票人邮箱 */
  receiverEmail?: string
  /** 收票人电话 */
  receiverPhone?: string
  /** 注册地址 */
  regAddress?: string
  /** 来源 1.商城订单 */
  source?: number
  /** 税号 */
  taxNo?: string
  /** 发票抬头 */
  title?: string
  /** 抬头类型 1.企业 2.个人 */
  titleType?: number
  /** 用户id */
  userId?: number
}

export interface OrderReceivingAddress {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 默认地址标识  0默认 1非默认 */
  defaultFlag?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 邮政编码 */
  postCode?: string
  /** 详细地址 */
  receivingAddresDetail?: string
  /** 收货地址市 */
  receivingCity?: string
  /** 收货地址区 */
  receivingCounty?: string
  /** 收货人姓名 */
  receivingName?: string
  /** 收货人手机号 */
  receivingPhone?: string
  /** 收货地址省 */
  receivingProvince?: string
  /** 用户id */
  userId?: number
}

export interface OrderReceivingAddressDeleteDTO {
  /** 分布式唯一ID */
  kid?: number
}

export interface OrderReceivingAddressVO {
  /** 默认地址标识  0默认 1非默认 */
  defaultFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 邮政编码 */
  postCode?: string
  /** 详细地址 */
  receivingAddresDetail?: string
  /** 收货地址市 */
  receivingCity?: string
  /** 收货地址市  回显 */
  receivingCityText?: string
  /** 收货地址区 */
  receivingCounty?: string
  /** 收货地址区  回显 */
  receivingCountyText?: string
  /** 收货人姓名 */
  receivingName?: string
  /** 收货人手机号 */
  receivingPhone?: string
  /** 收货地址省 */
  receivingProvince?: string
  /** 收货地址省  回显 */
  receivingProvinceText?: string
}

export interface CalcExpressVO {
  /** 商品对应:运费金额 */
  feeOfProductList?: KeyValueDTO<long,long>[]
  /** 商家对应运费列表 商户kid:运费金额 */
  merchantFeeList?: KeyValueDTO<long,long>[]
  /** 总运费 */
  totalFee?: number
}

export interface CalcExpressDTO {
  /** 地址id */
  addressKid?: number
  /** sku :  数量 */
  skuWithNumList?: KeyValueDTO<long,int>[]
}

export interface OrderDetailAppVO {
  /** 详细的收获地址 */
  addressDetail?: string
  /** 评价状态 1.待评价 2.已评价 3.已追评 */
  evaluateStatus?: number
  /** 运费 */
  expressAmount?: number
  /** 发票类型 1.电子普通发票 2.纸质普通发票 3.纸质专用发票 */
  invoiceType?: number
  /** 最新的物流信息 */
  latestExpressInfo?: string
  /** 最新的物流信息时间 */
  latestExpressTime?: string
  /** 商户kid */
  merchantKid?: number
  /** 商户名称 */
  merchantName?: string
  /** 改价金额 */
  modifiedAmount?: number
  /** 改邮费金额 */
  modifiedExpressAmount?: number
  /** 订单kid */
  orderKid?: number
  /** 订单列表商品列表 */
  orderListVOProductVOList?: OrderListVOProductVO[]
  /** 订单编号 */
  orderNo?: string
  /** 实付金额 */
  payAmount?: number
  /** 支付平台描述 */
  payPlatformDesc?: string
  /** 支付状态表 1.待支付 2已支付 */
  payStatus?: number
  /** 支付时间 */
  payTime?: string
  /** 支付超时时间 单位:秒 */
  payTimeoutSeconds?: number
  /** 电话号码(已脱敏) */
  phone?: string
  /** 下单时间 */
  placeTime?: string
  /** 商品预售信息 */
  productPrepareSimpleAppVO?: ProductPrepareSimpleAppVO
  /** 收货人 */
  receiver?: string
  /** 店铺logo */
  shopLogo?: string
  /** 订单状态 */
  status?: number
  /** 订单状态描述 */
  statusDesc?: string
  /** 总金额 */
  totalAmount?: number
  /** 总数量 */
  totalNum?: number
}

export interface OrderListVOProductVO {
  /** 数量 */
  num?: number
  /** 订单详情kid */
  orderDetailKid?: number
  /** 实际支付金额 */
  payAmount?: number
  /** 商品kid */
  productKid?: number
  /** 商品名称 */
  productName?: string
  /** 退款编号 */
  refundNo?: string
  /**  退款订单状态 1.待商家同意 2.待用户发货 3.待商家确任收货 4 已完成  5 商家拒绝 6退款中 7 退款成功 8 退款失败 9.已取消 */
  refundStatus?: number
  /** 退款状态描述 0.可申请退款 1.退款中 2.退款成功  */
  refundStatusDesc?: string
  /** skuKid */
  skuKid?: number
  /** sku封面 */
  skuPic?: string
  /** sku展示字符串 例:300g;原味 */
  skuSpec?: string
  /** 单价 */
  unitAmount?: number
}

export interface ProductPrepareSimpleAppVO {
  /** 审核状态 1.待审核 3.审核通过 4.审核驳回 */
  auditStatus?: number
  /** 服务器当前时间 */
  currentTime?: string
  /** 发货开始时间 */
  deliveryStartTime?: string
  /** 预售id */
  kid?: number
  /** 预售结束时间 */
  preSaleEndTime?: string
  /** 预售开始时间 */
  preSaleStartTime?: string
  /** 状态  1.预售中 2.已取消 3.已结束 */
  state?: number
}

export interface OutputPayVO {
  /** 支付金额(分) */
  amount?: number
  /** 创建时间 */
  createDate?: string
  /** 支付SDK所需参数 */
  ext?: any
  /** 支付单号 */
  payNo?: string
}

export interface OrderPrePayDTO {
  /** 微信小程序支付openid */
  openid?: string
  /** 订单编号列表 */
  orderNoList?: string[]
  /** 支付平台 1.支付宝 2.微信 */
  payPlatform?: number
}

export interface OrderListAppVO {
  /** 评价状态 1.待评价 2.已评价 3.已追评 */
  evaluateStatus?: number
  /** 商户kid */
  merchantKid?: number
  /** 商户名称 */
  merchantName?: string
  /** 订单发票kid */
  orderInvoiceKid?: number
  /** 订单kid */
  orderKid?: number
  /** 订单列表商品列表 */
  orderListVOProductVOList?: OrderListVOProductVO[]
  /** 订单编号 */
  orderNo?: string
  /** 应付金额 */
  payAmount?: number
  /** 支付状态表 1.待支付 2已支付 */
  payStatus?: number
  /** 商品预售信息 */
  productPrepareSimpleAppVO?: ProductPrepareSimpleAppVO
  /** 店铺logo */
  shopLogo?: string
  /**  订单状态 1.待付款 2.待发货 3.待收货 4.已完成 5.已关闭 */
  status?: number
  /** 订单状态描述 */
  statusDesc?: string
  /** 总金额 */
  totalAmount?: number
  /** 总数量 */
  totalNum?: number
}

export interface OrderSubmitConfirmVO {
  /** 当前地址购买该商户商品所需运费 */
  expressFee?: number
  /** 商家支持的发票类型 列表 1.电子普通发票 2.纸质普通发票 3.纸质专用发票 */
  invoiceTypeList?: number[]
}

export interface OrderEvaluationSubmitDTO {
  /** 描述相符 */
  descScore?: number
  /** 物流服务 */
  expressScore?: number
  /** 订单kid */
  orderKid?: number
  /** 服务态度 */
  serviceScore?: number
  /** 商品评价 */
  submitProductDTO?: OrderEvaluationSubmitProductDTO[]
}

export interface OrderEvaluationSubmitProductDTO {
  /** 是否匿名 1 匿名 0不匿名 */
  anonymous?: number
  /** 评价内容 */
  content?: string
  /** 评价 1.好评 2.中评 3.差评 */
  grade?: number
  /** 评价图片列表 */
  imgs?: string[]
  /** sku kid */
  skuKid?: number
}

export interface OrderSubmitVO {
  /** 订单号列表 */
  orderNoList?: string[]
  /** 支付金额 */
  payAmount?: number
  /** 支付超时时间 */
  payTimeoutSeconds?: number
  /** 下单时间 */
  placeTime?: string
}

export interface OrderSubmitDTO {
  /** 地址kid */
  addressKid?: number
  /** 物流类型 key=商户kid value=物流类型0:快递 ,1:ems 2:平邮 */
  expressType?: KeyValueDTO<long,int>[]
  /** 发票列表 商户kid:<发票kid:发票类型>(1.电子普通发票 2.纸质普通发票 3.纸质专用发票) */
  invoiceList?: KeyValueDTO<long,KeyValueDTO<long,int>>[]
  /** 是否来自购物车 0.是1.不是 */
  isFromCart?: number
  /** 商品列表 key=商品skuKid value=数量  */
  productList?: KeyValueDTO<long,int>[]
}

export interface QuestionnaireBuyDTO {
  /** 支付额 */
  amount?: number
  /** 商品ID */
  commodityId?: number
  /** 支付渠道1-支付宝，2-微信，3-苹果，4-银联，5-中国银联（提现），6-余额 */
  payChannel?: number
}

export interface QuestionnaireOrderVO {
  /** 商品id */
  commodityId?: number
  /** 商品名称 */
  commodityName?: string
  /** 商品原价格 */
  commodityPrice?: number
  /** 创建时间 */
  createDate?: string
  /** 订单号 */
  orderNo?: string
  /** 支付渠道1-支付宝，2-微信，3-苹果，4-银联，5-中国银联（提现），6-余额 */
  payChannel?: number
  /** 支付时间 */
  payTime?: string
  /** 付款金额 */
  paymentAmount?: number
  /** 价格编码 1-问卷编码 2-vip 3-套餐KID */
  priceCode?: string
  /** 价格类型 1-问卷 2-会员 3-套餐 */
  priceType?: number
  /** 价格是否任然有效,无效则不能再次购买，true有效 false无效 */
  priceValid?: boolean
  /** 有效时间结束 */
  validTimeEnd?: string
  /** 有效时间开始 */
  validTimeStart?: string
}

export interface RefundExpressDTO {
  /** 退货地址 */
  refundAddress?: string
  /** 退货物流 */
  refundExpress?: string
  /** 退货物流单号 */
  refundExpressNo?: string
  /** 退款订单kid */
  refundKid?: number
  /** 退货收货人手机号 */
  refundPhone?: string
}

export interface RefundOrderApplyDTO {
  /** 订单详情id */
  orderDetailKid?: number
  /** 订单kid */
  orderKid?: number
  /** 退款说明 */
  refundExplain?: string
  /** 退款金额  单位 分 */
  refundMoney?: number
  /** 退款原因 */
  refundReason?: string
  /** 退款类型  0仅退款  1退货退款 */
  refundType?: number
  refundVouchers?: string[]
  /** 用户id */
  userId?: number
  /** APP用户手机号 */
  userPhone?: string
}

export interface RefundOrderDetailAppVO {
  /** 创建时间 */
  createDate?: string
  /** 分布式唯一ID */
  kid?: number
  /** 商品数量 */
  num?: string
  /** 订单编号 查询条件冗余 */
  orderNo?: string
  /** 原价 */
  orginUnitAmount?: string
  /** 商品图片 */
  productImage?: string
  /** 商品id */
  productKid?: string
  /** 商品名 */
  productName?: string
  /** 退款金额  单位 分 */
  refundMoney?: number
  /** 退款订单号 */
  refundNo?: string
  /** 退款原因 */
  refundReason?: string
  /** 退款备注 */
  refundRemark?: string
  /** 退款订单状态 1.待商家同意 2.待用户发货 3.待商家确任收货   5 商家拒绝 6退款中 7 退款成功 8 退款失败 9.已取消 */
  refundStatus?: number
  /** 退款类型  0仅退款  1退货退款 */
  refundType?: number
  /** 退款凭证 */
  refundVoucher?: string[]
  /** 倒计时剩余秒 */
  seconds?: number
  /** 商品规格属性名 */
  skuSpecAttr?: string
  /** 商品规格 */
  specifications?: string
  /** 现价 */
  unitAmount?: string
}

export interface RefundEntryVO {
  /** 退款类型  0仅退款  1退货退款 */
  refundType?: number
}

export interface RefundOrderListAppVO {
  /** 分布式唯一ID */
  kid?: number
  /** 店铺id */
  merchantKid?: number
  /** 商品数量 */
  num?: string
  /** 订单明细id */
  orderDetailId?: number
  /** 原价 */
  orginUnitAmount?: string
  /** 支付金额  --可退款金额 */
  payAmount?: number
  /** 商品图片 */
  productImage?: string
  /** 商品id */
  productKid?: string
  /** 商品名 */
  productName?: string
  /** 订单商品预售信息 */
  productPrepareSimpleAppVO?: ProductPrepareSimpleAppVO
  /** 退款订单状态 1.待商家同意 2.待用户发货 3.待商家确任收货   5 商家拒绝 6退款中 7 退款成功 8 退款失败 9.已取消 */
  refundStatus?: number
  /** 退款类型  0仅退款  1退货退款 */
  refundType?: number
  /** 店铺logo */
  shopLogo?: string
  /** 店铺名 */
  shopName?: string
  /** 商品规格 */
  specifications?: string
  /** 现价 */
  unitAmount?: string
}

export interface ShellOrderPrePayDTO {
  /** 支付渠道 1.支付宝 2.微信 3.ios */
  payChannel?: number
  /** 营养贝数目 */
  shellNum?: number
}

export interface ShellValueVO {
  /** 金额：分 */
  amount?: number
  /** ios用 */
  productIdentifier?: string
  /** 数值 */
  shellNum?: number
}

export interface ShellRechargeOrder {
  /** 营养贝金额 */
  amount?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 是否删除 */
  delFlag?: number
  /** 发票id */
  invoiceId?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 支付营养贝金额 */
  payAmount?: number
  /** 支付渠道 1.支付宝 2.微信 3.ios */
  payChancel?: number
  /** 支付成功 */
  payTime?: string
  /** 下单时间 */
  placeTime?: string
  /** 营养贝数目 */
  shellNum?: number
  /** 来源 1-IOS 2-ANDROID */
  sources?: number
  /** 充值订单状态 1.待支付 2.已支付 3.已取消 */
  state?: number
  /** userid */
  userId?: number
}

export interface LecturerProfitDetailVO {
  /** 金额 */
  amount?: number
  courseId?: number
  /** 课程名称 */
  courseName?: string
  /** 用户id */
  userId?: number
  /** 付款用户 */
  userName?: string
}

export interface CourseBuyDTO {
  /** 课程类型1录播2直播 */
  courseType?: number
  /** 课程id */
  kid?: number
  /** 支付渠道1-支付宝，2-微信，3-苹果，4-银联，5-中国银联（提现） */
  payChannel?: number
  /** 支付来源：1-IOS 2-ANDROID 3-WEB 4-MINI_PROGRAM */
  paySource?: number
  /** 付款金额 */
  payment?: number
  /** 价格 */
  price?: number
}

export interface TableReportBuyDTO {
  /** 支付额 */
  amount?: number
  /** 商品ID */
  commodityId?: number
  /** 商品类型4单次5会员 */
  commodityType?: number
  /** 支付渠道1-支付宝，2-微信，3-苹果，4-银联，5-中国银联（提现），6-余额 */
  payChannel?: number
}
export default {
  cart: {
    /**
    * 区域检查 
    */
    checkRegion(cartAddOrBuyCheckDTO: CartAddOrBuyCheckDTO): Promise<boolean> {
      return httpPost(`/order/v1.0/pb/cart/action/checkRegion`, cartAddOrBuyCheckDTO).then((res:any) => res.data.data)
    },
    /**
    * 添加商品至购物车并返回购物车数量
    */
    add(cartAddDTO: CartAddDTO): Promise<number> {
      return httpPost(`/order/v1.0/pt/cart/action/add`, cartAddDTO).then((res:any) => res.data.data)
    },
    /**
    * 编辑购物车 (1.修改当前购物车对象的skuid对应的数量 将num改为0 2.修改当前购物车对象的skuid 传需要替换的skuid)
    */
    edit(cartAddDTO: CartAddDTO): Promise<Cart> {
      return httpPost(`/order/v1.0/pt/cart/action/edit`, cartAddDTO).then((res:any) => res.data.data)
    },
    /**
    *  查询购物车商品数量 
    */
    getNum(): Promise<number> {
      return httpPost(`/order/v1.0/pt/cart/action/getNum`).then((res:any) => res.data.data)
    },
    /**
    * 购物车列表
    */
    list(): Promise<CartListVO> {
      return httpGet(`/order/v1.0/pt/cart/action/list`).then((res:any) => res.data.data)
    },
    /**
    * 删除购物车商品 只传cartKid 并返回购物车数量
    */
    remove(cartAddDTOList: CartAddDTO[]): Promise<number> {
      return httpPost(`/order/v1.0/pt/cart/action/remove`, cartAddDTOList).then((res:any) => res.data.data)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/order/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  orderExpress: {
    /**
    * 查询快递列表Express
    */
    listAdmin(): Promise<List<ExpressListVO>> {
      return httpGet(`/order/v1.0/pb/order-express/action/list-admin`).then((res:any) => res.data.data)
    },
    /**
    * 物流详情
    */
    queryExpress(params: { orderId: number }): Promise<ExpressVO> {
      return httpGet(`/order/v1.0/pt/order-express/action/query-express`,  {params} ).then((res:any) => res.data.data)
    },
  },
  invoiceDetails: {
    /**
    * 营养贝开票
    */
    createForShell(invoiceDetailCreateDTO: InvoiceDetailCreateDTO): Promise<boolean> {
      return httpPost(`/order/v1.0/pt/invoice-details/action/createForShell`, invoiceDetailCreateDTO).then((res:any) => res.data.data)
    },
    /**
    * APP端分页查询发票记录
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<InvoiceDetail>> {
      return httpGet(`/order/v1.0/pt/invoice-details/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  invoiceProductDetails: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<InvoiceProductDetail>> {
      return httpGet(`/order/v1.0/pt/invoice-product-details/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  myInvoices: {
    /**
    * app新增或者更新发票信息
    */
    addOrUpdate(myInvoice: MyInvoice): Promise<MyInvoice> {
      return httpPost(`/order/v1.0/pt/my-invoices/action/addOrUpdate`, myInvoice).then((res:any) => res.data.data)
    },
    /**
    * app查询我的所有发票
    */
    listApp(): Promise<List<MyInvoice>> {
      return httpGet(`/order/v1.0/pt/my-invoices/action/list-app`).then((res:any) => res.data.data)
    },
    /**
    * app通过发票类型查找发票  抬头类型 1.企业 2.个人
    */
    querByTitleType(params: { type?: number }): Promise<MyInvoice> {
      return httpGet(`/order/v1.0/pt/my-invoices/action/querByTitleType`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app通过发票类型查找发票  ,发票类型1.电子普通发票 2.纸质普通发票 3.纸质专用发票
    */
    queryByType(params: { type?: number }): Promise<MyInvoice> {
      return httpGet(`/order/v1.0/pt/my-invoices/action/queryByType`,  {params} ).then((res:any) => res.data.data)
    },
  },
  orderInvoices: {
    /**
    * app通过订单id查找订单发票
    */
    queryByOrderKid(params: { orderKid: number }): Promise<OrderInvoice> {
      return httpGet(`/order/v1.0/pt/order-invoices/action/queryByOrderKid`,  {params} ).then((res:any) => res.data.data)
    },
  },
  orderReceivingAddresss: {
    /**
    * 新增OrderReceivingAddress
    */
    post(orderReceivingAddress: OrderReceivingAddress): Promise<boolean> {
      return httpPost(`/order/v1.0/pt/order-receiving-addresss`, orderReceivingAddress).then((res:any) => res.data.data)
    },
    /**
    * 删除OrderReceivingAddress
    */
    delete(deleteDTO: OrderReceivingAddressDeleteDTO): Promise<boolean> {
      return httpDelete(`/order/v1.0/pt/order-receiving-addresss/action/delete`, deleteDTO).then((res:any) => res.data.data)
    },
    /**
    * 查询列表
    */
    listAdmin(): Promise<List<OrderReceivingAddressVO>> {
      return httpGet(`/order/v1.0/pt/order-receiving-addresss/action/list-admin`).then((res:any) => res.data.data)
    },
    /**
    * 设置默认地址OrderReceivingAddress
    */
    updateDefaultFlagById(params: { defaultFlag: number, kid: number }): Promise<boolean> {
      return httpPut(`/order/v1.0/pt/order-receiving-addresss/action/updateDefaultFlagById`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询单个OrderReceivingAddress
    */
    get(params: { kid: number }): Promise<OrderReceivingAddressVO> {
      return httpGet(`/order/v1.0/pt/order-receiving-addresss/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 编辑OrderReceivingAddress
    */
    put(params: { kid: number }, orderReceivingAddress: OrderReceivingAddress): Promise<boolean> {
      return httpPut(`/order/v1.0/pt/order-receiving-addresss/${params.kid}`, orderReceivingAddress,  {params} ).then((res:any) => res.data.data)
    },
  },
  orders: {
    /**
    * app计算邮费
    */
    calcExpress(calcExpressDTO: CalcExpressDTO): Promise<CalcExpressVO> {
      return httpPut(`/order/v1.0/pt/orders/action/calcExpress`, calcExpressDTO).then((res:any) => res.data.data)
    },
    /**
    * app取消订单
    */
    cancel(params: { orderKid?: number }): Promise<boolean> {
      return httpGet(`/order/v1.0/pt/orders/action/cancel`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app确认收货
    */
    confirm(params: { orderKid?: number }): Promise<boolean> {
      return httpGet(`/order/v1.0/pt/orders/action/confirm`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app查询订单详情
    */
    detailClient(params: { orderKid: number }): Promise<OrderDetailAppVO> {
      return httpGet(`/order/v1.0/pt/orders/action/detail-client`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app获取支付参数
    */
    getPayParams(orderPrePayDTO: OrderPrePayDTO): Promise<OutputPayVO> {
      return httpPut(`/order/v1.0/pt/orders/action/getPayParams`, orderPrePayDTO).then((res:any) => res.data.data)
    },
    /**
    * app查询订单列表
    */
    listClient(params: { pageNo?: number, pageSize?: number, tableType?: number }): Promise<PageList<OrderListAppVO>> {
      return httpGet(`/order/v1.0/pt/orders/action/list-client`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app订单确认页数据计算 返回:商家-商家与订单相关的信息
    */
    preSubmitCalc(calcExpressDTO: CalcExpressDTO): Promise<List<KeyValueDTO<long,OrderSubmitConfirmVO>>> {
      return httpPut(`/order/v1.0/pt/orders/action/preSubmitCalc`, calcExpressDTO).then((res:any) => res.data.data)
    },
    /**
    * app删除订单
    */
    removeFinishedOrder(params: { orderKid?: number }): Promise<boolean> {
      return httpGet(`/order/v1.0/pt/orders/action/removeFinishedOrder`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app提交订单评价
    */
    submitEvaluation(orderEvaluationSubmitDTO: OrderEvaluationSubmitDTO): Promise<boolean> {
      return httpPost(`/order/v1.0/pt/orders/action/submitEvaluation`, orderEvaluationSubmitDTO).then((res:any) => res.data.data)
    },
    /**
    * app下单
    */
    submitOrder(orderSubmitDTO: OrderSubmitDTO): Promise<OrderSubmitVO> {
      return httpPut(`/order/v1.0/pt/orders/action/submitOrder`, orderSubmitDTO).then((res:any) => res.data.data)
    },
  },
  questionnaireOrders: {
    /**
    * 购买问卷
    */
    buy(questionnaireBuyDTO: QuestionnaireBuyDTO): Promise<OutputPayVO> {
      return httpPost(`/order/v1.0/pt/questionnaire-orders/action/buy`, questionnaireBuyDTO).then((res:any) => res.data.data)
    },
    /**
    * 查询购买问卷详情
    */
    detail(params: { orderNo: string }): Promise<QuestionnaireOrderVO> {
      return httpGet(`/order/v1.0/pt/questionnaire-orders/action/detail`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询购买问卷分页列表
    */
    orderPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<QuestionnaireOrderVO>> {
      return httpGet(`/order/v1.0/pt/questionnaire-orders/action/order-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  refundExpresss: {
    /**
    * 填写退款物流
    */
    post(refundExpressDTO: RefundExpressDTO): Promise<boolean> {
      return httpPost(`/order/v1.0/pt/refund-expresss`, refundExpressDTO).then((res:any) => res.data.data)
    },
  },
  refundOrders: {
    /**
    * 申请退款
    */
    applyRefund(refundOrder: RefundOrderApplyDTO): Promise<string> {
      return httpPost(`/order/v1.0/pt/refund-orders/action/apply-refund`, refundOrder).then((res:any) => res.data.data)
    },
    /**
    * app退款订单详情
    */
    refundDetailApp(params: { refundKid: number }): Promise<RefundOrderDetailAppVO> {
      return httpGet(`/order/v1.0/pt/refund-orders/action/refund-detail-app`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app退款订单详情
    */
    refundDetailAppNo(params: { refundNo: string }): Promise<RefundOrderDetailAppVO> {
      return httpGet(`/order/v1.0/pt/refund-orders/action/refund-detail-app-no`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 退款入口选择
    */
    refundEntry(params: { orderId: number }): Promise<RefundEntryVO> {
      return httpGet(`/order/v1.0/pt/refund-orders/action/refund-entry`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app退款订单列表
    */
    refundListApp(params: { pageNo: number, pageSize: number }): Promise<PageList<RefundOrderListAppVO>> {
      return httpGet(`/order/v1.0/pt/refund-orders/action/refund-list-app`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 撤销申请退款
    */
    revokeApplyRefund(params: { refundOrderKid: number }): Promise<boolean> {
      return httpGet(`/order/v1.0/pt/refund-orders/action/revoke-apply-refund`,  {params} ).then((res:any) => res.data.data)
    },
  },
  shellRechargeOrders: {
    /**
    * 用户是否满足开票金额限制
    */
    canInvoice(): Promise<boolean> {
      return httpGet(`/order/v1.0/pt/shell-recharge-orders/action/canInvoice`).then((res:any) => res.data.data)
    },
    /**
    * App创建营养贝充值订单并返回支付参数
    */
    create(shellOrderPrePayDTO: ShellOrderPrePayDTO): Promise<OutputPayVO> {
      return httpPost(`/order/v1.0/pt/shell-recharge-orders/action/create`, shellOrderPrePayDTO).then((res:any) => res.data.data)
    },
    /**
    * App获取营养贝面值列表
    */
    getAllShellValue(): Promise<List<ShellValueVO>> {
      return httpGet(`/order/v1.0/pt/shell-recharge-orders/action/getAllShellValue`).then((res:any) => res.data.data)
    },
    /**
    * App获取未开发票的营养贝充值列表
    */
    getShellForInvoiceByUserId(): Promise<List<ShellRechargeOrder>> {
      return httpGet(`/order/v1.0/pt/shell-recharge-orders/action/getShellForInvoiceByUserId`).then((res:any) => res.data.data)
    },
    /**
    * 用户可开票金额总和
    */
    getTotalInvoice(): Promise<number> {
      return httpGet(`/order/v1.0/pt/shell-recharge-orders/action/getTotalInvoice`).then((res:any) => res.data.data)
    },
  },
  virtualCommodityOrderDetails: {
    /**
    * app讲师收益详情
    */
    listApp(params: { courseType: string, pageNo?: number, pageSize?: number }): Promise<PageList<LecturerProfitDetailVO>> {
      return httpGet(`/order/v1.0/pt/virtual-commodity-order-details/action/list-app`,  {params} ).then((res:any) => res.data.data)
    },
  },
  virtualCommodityOrders: {
    /**
    * 购买课程
    */
    buyCourse(dto: CourseBuyDTO): Promise<OutputPayVO> {
      return httpPost(`/order/v1.0/pt/virtual-commodity-orders/action/buyCourse`, dto).then((res:any) => res.data.data)
    },
    /**
    * 购买餐桌看营养报告
    */
    buyTableNutrition(dto: TableReportBuyDTO): Promise<OutputPayVO> {
      return httpPost(`/order/v1.0/pt/virtual-commodity-orders/action/buyTableNutrition`, dto).then((res:any) => res.data.data)
    },
    getLecturerOrderSum(): Promise<number> {
      return httpGet(`/order/v1.0/pt/virtual-commodity-orders/action/getLecturerOrderSum`).then((res:any) => res.data.data)
    },
  },
}
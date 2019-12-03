import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface MerchantLoginAuthVO {
  loginName?: string
  /** 商户名称 */
  merchantName?: string
  name?: string
  permissionCodeList?: string[]
  roles?: string[]
  tenantId?: string
  token?: string
  userId?: number
}

export interface ManagerLoginVO {
  loginName?: string
  password?: string
  validateCode?: string
}

export interface MerchantShopVO {
  /** 资质 */
  auths?: MerchantAuth[]
  behavior?: UserBehaviorResult
  /** 服务电话 */
  businessPhone?: string
  /** 营业执照 */
  businessRvPdf?: string
  /** 开店时间 */
  createDate?: string
  /** 商户店铺id */
  kid?: number
  /** 生产许可证 */
  licensePdf?: string
  /** 服务地址 */
  location?: string
  /** 商户名称 */
  merchantName?: string
  /** 商品数量 */
  productCount?: number
  /** 店铺logo */
  shopLogo?: string
  /** 店铺名 */
  shopName?: string
  /** 店铺状态 */
  shopStatus?: number
}

export interface MerchantAuth {
  /** 扫描件 */
  authPdf?: string
  /** 认证类型1.ISO9000,2.HACCP,3.ISO22000,4.HALAL认证，5.动物防疫条件合格证，6.定点屠宰证 */
  authType?: number
  /** 创建时间 */
  createDate?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  merchantId?: number
}

export interface UserBehaviorResult {
  /** 是否评论（0否，1是） */
  commentFlag?: number
  /** 自定义（0否，1是） */
  customMapper?: any
  /** 是否收藏（0否，1是） */
  favoriteFlag?: number
  /** 是否完成（0否，1是） */
  finishFlag?: number
  /** 是否关注（0否，1是） */
  followFlag?: number
  /** 是否加入（0否，1是） */
  joinFlag?: number
  /** 是否点赞（0否，1是） */
  likeFlag?: number
  /** 是否分享（0否，1是） */
  shareFlag?: number
  /** 目标资源唯一标识 */
  targetKid?: string
  /** 是否阅读（0否，1是） */
  viewFlag?: number
}
export default {
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/merchant/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  managerUsers: {
    /**
    * 商户后台用户登录
    */
    login(loginUser: ManagerLoginVO): Promise<MerchantLoginAuthVO> {
      return httpPost(`/merchant/v1.0/pb/manager-users/action/login`, loginUser).then((res:any) => res.data.data)
    },
  },
  merchants: {
    /**
    * app查询单个店铺基础信息
    */
    shopBaseInfo(params: { kid: number }): Promise<MerchantShopVO> {
      return httpGet(`/merchant/v1.0/pb/merchants/action/shopBaseInfo`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询单个店铺详细信息
    */
    shopDetailInfo(params: { kid: number }): Promise<MerchantShopVO> {
      return httpGet(`/merchant/v1.0/pb/merchants/action/shopDetailInfo`,  {params} ).then((res:any) => res.data.data)
    },
  },
}
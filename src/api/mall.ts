import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface BrandStoryEvaluatesAndTagsVO {
  evaluates?: BrandStoryEvaluateVO[]
  tags?: BrandStoryTagVO[]
}

export interface BrandStoryEvaluateVO {
  /** 头像 */
  avartar?: string
  brandStoryId?: number
  /** 内容 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 商品图片 */
  goodsPic?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  products?: Product[]
  /** 推荐商品id */
  recommodGoodsIds?: string
  /** 用户昵称 */
  userName?: string
}

export interface Product {
  /** 审核状态 1.待审 2.审核中 3.通过 4.驳回 5.撤回 */
  auditStatus?: number
  /** 商品品牌ID */
  brandId?: number
  /** 平台提成 百分制 */
  commissionRate?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 详情网页内容 */
  detailHtml?: string
  /** 展示图片 */
  detailShowPic?: string
  /** 展示视频 */
  detailShowVideo?: string
  /** 商品运费模板ID */
  feightTemplateId?: number
  /** 注册商标 */
  icon?: string
  /** 分布式唯一ID */
  kid?: number
  /** 是否专家推荐 */
  kol?: boolean
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 封面图片 */
  mainPic?: string
  /** 商户ID */
  merchantId?: number
  /** 原价【冗余SKU最低价】 */
  originalPrice?: number
  /** 出产检验报告 */
  produceCheckReportPic?: string
  /** 商品所属二级分类ID */
  productCategoryId?: number
  /** 商品所属一级分类ID */
  productCategoryIdParent?: number
  /** 商品认证，冒号分隔  0 无公害 1 绿色 2 有机 3地理 */
  productCerts?: string
  /** 商品食材ID */
  productFoodId?: string
  /** 商品名 */
  productName?: string
  /** 商品识别码 */
  productNo?: string
  /** 推荐排序 */
  recommandSort?: number
  /** 促销价格【冗余SKU最低价】 */
  salePrice?: number
  /** 销量 */
  sales?: number
  /** 上架时间 */
  shelveDate?: string
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 简介 */
  subTitle?: string
  /** 资质预警状态： 0 正常 1 预警 */
  warningStatusCert?: number
  /** 库存预警状态： 0 正常 1 预警 */
  warningStatusStock?: number
}

export interface BrandStoryTagVO {
  behavior?: UserBehaviorResult
  /** 品牌故事id */
  brandStoryId?: number
  /** 创建时间 */
  createDate?: string
  /** 点赞数 */
  favoriteCount?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 标签名 */
  tagName?: string
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

export interface BrandStoryAppVO {
  behavior?: UserBehaviorResult
  /** 品牌简介 */
  brandIntroduce?: string
  /** 品牌logo */
  brandLogo?: string
  /** 品牌名称 */
  brandName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识1删除0未删除 */
  delFlag?: number
  /** 品牌故事详情 */
  detailHtml?: string
  evaluates?: BrandStoryEvaluate[]
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  products?: Product[]
  /** 推荐商品 */
  recommendGoodsIds?: string
  /** 关联店铺 */
  shopId?: number
  shopScore?: number
  /** slogan */
  slogan?: string
}

export interface BrandStoryEvaluate {
  /** 头像 */
  avartar?: string
  brandStoryId?: number
  /** 内容 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 商品图片 */
  goodsPic?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 推荐商品id */
  recommodGoodsIds?: string
  /** 用户昵称 */
  userName?: string
}

export interface BrandStory {
  /** 品牌简介 */
  brandIntroduce?: string
  /** 品牌logo */
  brandLogo?: string
  /** 品牌名称 */
  brandName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识1删除0未删除 */
  delFlag?: number
  /** 品牌故事详情 */
  detailHtml?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 推荐商品 */
  recommendGoodsIds?: string
  /** 关联店铺 */
  shopId?: number
  /** slogan */
  slogan?: string
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

export interface ProductCategoryVO {
  /** 类目名称 */
  categoryName?: string
  /** 图标url */
  icon?: string
  /** kid */
  kid?: number
  /** 标签KID */
  labelKid?: number
  /** 标签名称 */
  labelName?: string
  /** 父级kid */
  parentKid?: number
  /** 排序编号 */
  sortNum?: number
  /** 百科简介 */
  wikiIntro?: string
}

export interface ProductCategoryGradeVO {
  /** 标签归类vo */
  categoryLabelVO?: CategoryLabelVO[]
  /** 类目名称 */
  categoryName?: string
  /** 图标url */
  icon?: string
  /** kid */
  kid?: number
  /** 标签KID */
  labelKid?: number
  /** 标签名称 */
  labelName?: string
  /** 父级kid */
  parentKid?: number
  /** 排序编号 */
  sortNum?: number
  /** 百科简介 */
  wikiIntro?: string
}

export interface CategoryLabelVO {
  labelChildren?: ProductCategoryGradeVO[]
  labelName?: string
}

export interface ProductCategoryWikiVO {
  kid?: number
  /** 百科详情 k:v对象数组 k表示标题 v表示内容 */
  wikiDetail?: string
  /** 百科简介 */
  wikiIntro?: string
}

export interface ProductEvaluationListVO {
  /** 评价时间 */
  addTime?: string
  /** 1 匿名 0不匿名 */
  anonymous?: number
  /** 评论内容 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 1删除0正常 */
  delFlag?: number
  /** 1.好评 2.中评 3差评 */
  grade?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商户id */
  merchantId?: number
  /** 商户名称 */
  merchantName?: string
  /** 订单kid */
  orderKid?: number
  /** 评论图片 */
  pics?: string
  /** 商品id */
  productId?: number
  /** 商品名称 */
  productName?: string
  /** 店铺名称 */
  shopName?: string
  /** skukid */
  skuKid?: number
  /** sku图片 */
  skuPic?: string
  /** sku规格 */
  skuSpec?: string
  /** sku规格属性 */
  skuSpecAttr?: string
  /** 用户信息 */
  user?: UserSimpleVO
  /** 评价人 */
  userId?: number
}

export interface UserSimpleVO {
  /** 星座 */
  constellation?: string
  /** 现居地 */
  livingPlace?: string
  /** 用户角色集合 */
  roles?: UserRole[]
  /** 用户背景图片 */
  userBgImg?: string
  /** 出生年月日 */
  userBirthday?: string
  /** 用户性别 0女/1男 */
  userGenders?: number
  /** 用户账户id */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 昵称 */
  userNickName?: string
  /** 用户签名 */
  userSignature?: string
  /** 马甲状态 0-普通用户 1-马甲 */
  vestFlag?: number
}

export interface UserRole {
  /** 角色 */
  role?: string
  /** 角色头衔 */
  roleTitle?: string
}

export interface ProductEvaluationVO {
  /** 评价列表 */
  entities?: ProductEvaluationListVO[]
  /** 好评数 */
  goodNum?: number
  /** 有图数量 */
  hasPicNum?: number
  /** 中评数 */
  mediumNum?: number
  /** 差评数 */
  negativeNum?: number
  /** 总评数 */
  totalNum?: number
}

export interface ProductEvaluationQueryDTO {
  /** 评论table类型 0全部 1好评 2中评 3差评 4有图 */
  evaluateType?: number
  /** 商户id */
  merchantId?: number
  /** 商户名称 */
  merchantName?: string
  /** 页码 */
  pageNo?: number
  /** 页面大小 */
  pageSize?: number
  /** 商品id */
  productId?: number
  /** 商品名称 */
  productName?: string
  /** 店铺名称 */
  shopName?: string
}

export interface ShopDetailVO {
  entities?: ProductVO[]
  /** 商户店铺id */
  merchantId?: number
  /** 商品数量 */
  productCount?: number
  /** 商户店铺图标 */
  shopLogo?: string
  /** 店铺名称 */
  shopName?: string
}

export interface ProductVO {
  /** 三品 */
  grades?: string
  /** 商品业务id */
  kid?: number
  /** 缩略图 */
  mainPic?: string
  /** 商户店铺id */
  merchantId?: number
  /** 原价 */
  originalPrice?: number
  /** 商品名称 */
  productName?: string
  /** 售价 */
  salePrice?: number
  /** 一标 */
  standard?: string
}

export interface ProductAppVO {
  /** 三品 */
  grades?: string
  /** 分布式唯一ID */
  kid?: number
  /** 封面图片 */
  mainPic?: string
  /** 原价【冗余SKU最低价】 */
  originalPrice?: number
  /** 预售结束时间 */
  preSaleEndTime?: string
  /** 预售开始时间 */
  preSaleStartTime?: string
  /** 状态  1.预售中 2.已取消 3.已结束 */
  preSaleState?: number
  /** 商品名 */
  productName?: string
  /** 促销价格【冗余SKU最低价】 */
  salePrice?: number
  /** 一标 */
  standard?: string
}

export interface ProductDetailForAuditTempVO {
  /** 商品发货地 */
  address?: ProductAddressDetaiVO[]
  /** 商品参数 */
  attributes?: ProductAttributeValueVO[]
  /** 审核状态 1.待审 2.审核中 3.通过 4.驳回 5.撤回 */
  auditStatus?: number
  /** 商品品牌ID */
  brandId?: number
  /** 认证类别 0 无公害 1 绿色 2 有机 3地理 4 其他 5 无 */
  certs?: ProductCertificationTemp[]
  /** 平台提成 百分制 */
  commissionRate?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 详情网页内容 */
  detailHtml?: string
  /** 展示图片 */
  detailShowPic?: string
  /** 展示视频 */
  detailShowVideo?: string
  /** 商品运费模板ID */
  feightTemplateId?: number
  /** 运费模板名称 */
  feightTemplateName?: string
  /** 注册商标 */
  icon?: string
  /** 分布式唯一ID */
  kid?: number
  /** 是否专家推荐 */
  kol?: boolean
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 封面图片 */
  mainPic?: string
  /** 商户ID */
  merchantId?: number
  /** 商户名 */
  merchantName?: string
  /** 禁忌人群 */
  noSuit?: string
  /** 原价【冗余SKU最低价】 */
  originalPrice?: number
  /** 出产检验报告 */
  produceCheckReportPic?: string
  /** 商品所属二级分类ID */
  productCategoryId?: number
  /** 商品所属一级分类ID */
  productCategoryIdParent?: number
  /** 分类名称 */
  productCategoryName?: string
  /** 商品认证，冒号分隔  0 无公害 1 绿色 2 有机 3地理 */
  productCerts?: string
  /** 商品食材ID */
  productFoodId?: string
  /** 食材名称 */
  productFoodName?: string
  /** 商户ID */
  productId?: number
  /** 商品名 */
  productName?: string
  /** 商品识别码 */
  productNo?: string
  /** 展示视频 */
  productVideo?: ProductVideo
  /** 推荐排序 */
  recommandSort?: number
  /** 促销价格【冗余SKU最低价】 */
  salePrice?: number
  /** 销量 */
  sales?: number
  /** 上架时间 */
  shelveDate?: string
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** sku规格列表 */
  skuDetail?: ProductSkuTemp[]
  /** 简介 */
  subTitle?: string
  /** 适宜人群 */
  suit?: string
  /** 资质预警状态： 0 正常 1 预警 */
  warningStatusCert?: number
  /** 库存预警状态： 0 正常 1 预警 */
  warningStatusStock?: number
}

export interface ProductAddressDetaiVO {
  /** 具体街道地址 */
  addrDetail?: string
  /** 区编码 */
  areaCode?: string
  areaName?: string
  /** 市编码 */
  cityCode?: string
  cityName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商品ID */
  productId?: number
  /** 省编码 */
  provinceCode?: string
  provinceName?: string
  /** 支持运送里程数【生鲜类】 */
  shippingRange?: number
  /** 支持运送区域编码集合，逗号隔开 */
  shippingRegion?: string
  /** 区域名称 */
  shippingRegionArea?: Area[]
  /** 运费模板别名 */
  shippingTemplateDesc?: string
  /** 排序 */
  sort?: number
}

export interface Area {
  /** 行政代码 */
  areaCode?: number
  /** 下一级地区集合 */
  childArea?: Area[]
  /** 区号 */
  cityCode?: string
  /** 创建时间 */
  createDate?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 纬度 */
  lat?: number
  /** 层级 */
  level?: number
  /** 经度 */
  lng?: number
  /** 组合名 */
  mergerName?: string
  /** 名称 */
  name?: string
  /** 父级行政代码 */
  parentCode?: number
  /** 拼音 */
  pinyin?: string
  /** 大区编码  0华东 1华北 2华中 3华南 4东北 5西北 6西南 7港澳台 */
  regionCode?: number
  /** 简称 */
  shortName?: string
  /** 邮政编码 */
  zipCode?: number
}

export interface ProductAttributeValueVO {
  /** 商品属性ID */
  attributeId?: number
  /** 属性名 */
  attributeName?: string
  /** 属性规则 */
  attributeRule?: string
  /** 属性类型  0 规格属性 1 服务说明 2 商品参数 3 适宜人群 4 禁忌人群 */
  attributeType?: number
  /** 属性类型  0 规格属性 1 服务说明 2 商品参数 3 适宜人群 4 禁忌人群 */
  attributeTypeName?: string
  /** 是否必填 0 必填 1 非必填 */
  attributeValue?: string
  /** 手动添加规格或参数的值，参数单值，规格有多个时以逗号隔开 */
  value?: string
}

export interface ProductCertificationTemp {
  /** 批准量产/年 */
  allowYield?: number
  /** 认证有效截止时间 */
  certEndDate?: string
  /** 认证资质名【其他认证类别】 */
  certName?: string
  /** 证书 & 检测报告 */
  certPic?: string
  /** 认证类别 0 无公害 1 绿色 2 有机 3地理 4 其他 5 无 */
  certType?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 标志编号 */
  markCode?: string
  /** 商品ID */
  productId?: number
}

export interface ProductVideo {
  /** 封面 */
  coverImgUrl?: string
  /** 时长 */
  duration?: number
  /** 视频URL */
  video?: string
}

export interface ProductSkuTemp {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商户id */
  merchantId?: number
  /** 原价 */
  originalPrice?: number
  /** 规格图片 */
  pic?: string
  /** 商品ID */
  productId?: number
  /** 限购数量 */
  purchaseMax?: number
  /** 起购数量 */
  purchaseMin?: number
  /** 销售价格 */
  salePrice?: number
  /** 销量 */
  sales?: number
  /** sku编码 */
  skuCode?: string
  /** 销售规格 */
  spec?: string
  /** 销售规格属性ID */
  specAttrId?: string
  /** 销售规格属性名称 */
  specAttrName?: string
  /** 库存 */
  stock?: number
  /** 库存 */
  stockOld?: number
  /** 体积 */
  volume?: number
  /** 重量 */
  weight?: number
}

export interface ProductPageDetailVO {
  /** 商品发货地 */
  address?: ProductAddress[]
  /** 商品参数 */
  attributes?: ProductAttributeValueVO[]
  /** 审核状态 1.待审 2.审核中 3.通过 4.驳回 5.撤回 */
  auditStatus?: number
  /** 商品品牌ID */
  brandId?: number
  /** 认证类别 0 无公害 1 绿色 2 有机 3地理 4 其他 5 无 */
  certs?: ProductCertification[]
  /** 平台提成 百分制 */
  commissionRate?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 详情网页内容 */
  detailHtml?: string
  /** 展示图片 */
  detailShowPic?: string
  /** 展示视频 */
  detailShowVideo?: string
  /** 商品运费模板ID */
  feightTemplateId?: number
  /** 注册商标 */
  icon?: string
  /** 分布式唯一ID */
  kid?: number
  /** 是否专家推荐 */
  kol?: boolean
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 封面图片 */
  mainPic?: string
  /** 商户ID */
  merchantId?: number
  /** 商户名 */
  merchantName?: string
  /** 禁忌人群 */
  noSuit?: string
  /** 原价【冗余SKU最低价】 */
  originalPrice?: number
  /** 出产检验报告 */
  produceCheckReportPic?: string
  /** 商品所属二级分类ID */
  productCategoryId?: number
  /** 商品所属一级分类ID */
  productCategoryIdParent?: number
  /** 商品认证，冒号分隔  0 无公害 1 绿色 2 有机 3地理 */
  productCerts?: string
  /** 商品食材ID */
  productFoodId?: string
  /** 商品名 */
  productName?: string
  /** 商品识别码 */
  productNo?: string
  /** 展示视频 */
  productVideo?: ProductVideo
  /** 推荐排序 */
  recommandSort?: number
  /** 促销价格【冗余SKU最低价】 */
  salePrice?: number
  /** 销量 */
  sales?: number
  /** 上架时间 */
  shelveDate?: string
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** sku规格列表 */
  skuDetail?: ProductSkuTemp[]
  /** 简介 */
  subTitle?: string
  /** 适宜人群 */
  suit?: string
  /** 资质预警状态： 0 正常 1 预警 */
  warningStatusCert?: number
  /** 库存预警状态： 0 正常 1 预警 */
  warningStatusStock?: number
}

export interface ProductAddress {
  /** 具体街道地址 */
  addrDetail?: string
  /** 区编码 */
  areaCode?: string
  areaName?: string
  /** 市编码 */
  cityCode?: string
  cityName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商品ID */
  productId?: number
  /** 省编码 */
  provinceCode?: string
  provinceName?: string
  /** 支持运送里程数【生鲜类】 */
  shippingRange?: number
  /** 支持运送区域编码集合，逗号隔开 */
  shippingRegion?: string
  /** 运费模板别名 */
  shippingTemplateDesc?: string
  /** 排序 */
  sort?: number
}

export interface ProductCertification {
  /** 批准量产/年 */
  allowYield?: number
  /** 认证有效截止时间 */
  certEndDate?: string
  /** 认证资质名【其他认证类别】 */
  certName?: string
  /** 证书 & 检测报告 */
  certPic?: string
  /** 认证类别 0 无公害 1 绿色 2 有机 3地理 4 其他 5 无 */
  certType?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 标志编号 */
  markCode?: string
  /** 商品ID */
  productId?: number
}

export interface ProductDetailVO {
  /** 发货地 */
  address?: ProductAddressVO[]
  /** 商品属性 */
  attributes?: ProductAttributeValueVO[]
  /** 用户行为数据 */
  behavior?: UserBehaviorResult
  /** 认证类别 0 无公害 1 绿色 2 有机 3地理 4 其他 5 无 */
  certs?: CertVO[]
  /** 详情网页内容 */
  detailHtml?: string
  /** 展示图片 */
  detailShowPic?: string
  /** 查询一个评价和总数 */
  evaluate?: ProductEvaluationSingletonVO
  /** 运费 首件 */
  freightFee?: number
  /** 注册商标 */
  icon?: string
  /** 分布式唯一ID */
  kid?: number
  /** 封面图片 */
  mainPic?: string
  /** 禁忌人群 */
  noSuit?: string
  /** 原价【冗余SKU最低价】 */
  originalPrice?: number
  /** 出产检验报告 */
  produceCheckReportPic?: string
  /** 商品食材ID */
  productFoodId?: string
  /** 商品名 */
  productName?: string
  /** 商品预售信息 */
  productPrepareSimpleAppVO?: ProductPrepareSimpleAppVO
  /** 展示视频 */
  productVideo?: ProductVideo
  /** 促销价格【冗余SKU最低价】 */
  salePrice?: number
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
  /** 店铺信息 */
  shop?: ProductDetailShopVO
  /** sku规格列表 */
  skus?: ProductSkuVO[]
  /** 简介 */
  subTitle?: string
  /** 适宜人群 */
  suit?: string
}

export interface ProductAddressVO {
  /** 具体街道地址 */
  addrDetail?: string
  /** 市编码 */
  cityCode?: string
  /** 市名字 */
  cityName?: string
  /** 省编码 */
  provinceCode?: string
  /** 省名字 */
  provinceName?: string
  /** 排序 */
  sort?: number
}

export interface CertVO {
  /** 认证类别名 */
  certName?: string
  /** 证书 & 检测报告 */
  certPic?: string[]
  /** 认证类别  */
  certType?: number
}

export interface ProductEvaluationSingletonVO {
  /** 评价时间 */
  addTime?: string
  /** 1 匿名 0不匿名 */
  anonymous?: number
  /** 评论内容 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 1删除0正常 */
  delFlag?: number
  /** 1.好评 2.中评 3差评 */
  grade?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 商户id */
  merchantId?: number
  /** 商户名称 */
  merchantName?: string
  /** 订单kid */
  orderKid?: number
  /** 评论图片 */
  pics?: string
  /** 商品id */
  productId?: number
  /** 商品名称 */
  productName?: string
  /** 店铺名称 */
  shopName?: string
  /** skukid */
  skuKid?: number
  /** sku图片 */
  skuPic?: string
  /** sku规格 */
  skuSpec?: string
  /** sku规格属性 */
  skuSpecAttr?: string
  /** 总评价数 */
  totalNum?: number
  /** 用户信息 */
  user?: UserSimpleVO
  /** 评价人 */
  userId?: number
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

export interface ProductDetailShopVO {
  /** 资质 */
  auths?: string[]
  /** 商户id */
  kid?: number
  /** 商品数量 */
  productCount?: number
  /** 店铺logo */
  shopLogo?: string
  /** 店铺名 */
  shopName?: string
  /** 店铺状态 1启用0禁用 */
  shopStatus?: number
}

export interface ProductSkuVO {
  /** 原价 */
  originalPrice?: number
  /** 规格图片 */
  pic?: string
  /** 限购数量 */
  purchaseMax?: number
  /** 起购数量 */
  purchaseMin?: number
  /** 销售价格 */
  salePrice?: number
  /** 销量 */
  sales?: number
  /** skuKid */
  skuKid?: number
  /** 销售规格 */
  spec?: string
  /** 库存 */
  stock?: number
  /** 体积 */
  volume?: number
  /** 重量 */
  weight?: number
}
export default {
  brandStorys: {
    /**
    * APP端查询品牌故事她眼中的店
    */
    getBrandStoryTagAndEvaluates(params: { kid: number }): Promise<BrandStoryEvaluatesAndTagsVO> {
      return httpGet(`/mall/v1.0/pb/brand-storys/action/getBrandStoryTagAndEvaluates`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询详情数据
    */
    getDetail(params: { kid: number }): Promise<BrandStoryAppVO> {
      return httpGet(`/mall/v1.0/pb/brand-storys/action/getDetail`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据(首页接口)
    */
    listIndex(): Promise<PageList<BrandStory>> {
      return httpGet(`/mall/v1.0/pb/brand-storys/action/list-index`).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<BrandStory>> {
      return httpGet(`/mall/v1.0/pb/brand-storys/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/mall/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  productCategorys: {
    /**
    * 客户端查询类目列表(平级且已排序) parentKid=0时只查询一级类目，传其他则查询相应的，不传表示查询所有
    */
    listClient(params: { parentKid?: number }): Promise<List<ProductCategoryVO>> {
      return httpGet(`/mall/v1.0/pb/product-categorys/action/list-client`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 客户端查询类目列表(对类目分层后再进行标签分组且已排序)
    */
    listGradeLabel(): Promise<List<ProductCategoryGradeVO>> {
      return httpGet(`/mall/v1.0/pb/product-categorys/action/list-grade-label`).then((res:any) => res.data.data)
    },
    /**
    * App查询类目百科详情
    */
    queryWikiDetail(params: { kid: number }): Promise<ProductCategoryWikiVO> {
      return httpGet(`/mall/v1.0/pb/product-categorys/action/queryWikiDetail`,  {params} ).then((res:any) => res.data.data)
    },
  },
  productEvaluations: {
    /**
    * 商品详情页查询评价详情
    */
    detailApp(params: { kid: number }): Promise<ProductEvaluationListVO> {
      return httpGet(`/mall/v1.0/pb/product-evaluations/action/detail-app`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 商品详情页查询评价列表
    */
    listApp(productEvaluationQueryDTO: ProductEvaluationQueryDTO): Promise<ProductEvaluationVO> {
      return httpPost(`/mall/v1.0/pb/product-evaluations/action/list-app`, productEvaluationQueryDTO).then((res:any) => res.data.data)
    },
  },
  products: {
    convertFoodIdRef(): Promise<boolean> {
      return httpGet(`/mall/v1.0/pb/products/action/convertFoodIdRef`).then((res:any) => res.data.data)
    },
    /**
    * app查询店铺商品及店铺基本信息
    */
    getShopDetailInfo(params: { keyWord?: string, merchantId?: number, pageNo?: number, pageSize?: number, sortRise?: number, sortType?: number }): Promise<ShopDetailVO> {
      return httpGet(`/mall/v1.0/pb/products/action/getShopDetailInfo`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app首页商品列表查询分页
    */
    listApp(params: { pageNo?: number, pageSize?: number }): Promise<PageList<ProductAppVO>> {
      return httpGet(`/mall/v1.0/pb/products/action/list-app`,  {params} ).then((res:any) => res.data.data)
    },
    show(params: { kid: number }): Promise<ProductDetailForAuditTempVO> {
      return httpGet(`/mall/v1.0/pb/products/action/show`,  {params} ).then((res:any) => res.data.data)
    },
    showRelease(params: { kid: number }): Promise<ProductPageDetailVO> {
      return httpGet(`/mall/v1.0/pb/products/action/showRelease`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP商品详情
    */
    get(params: { kid: number }): Promise<ProductDetailVO> {
      return httpGet(`/mall/v1.0/pb/products/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  brandStoryEvaluates: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<BrandStoryEvaluate>> {
      return httpGet(`/mall/v1.0/pt/brand-story-evaluates/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
}
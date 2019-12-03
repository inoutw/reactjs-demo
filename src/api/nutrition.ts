import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface BannerInfoVO {
  /** 跳转资源 */
  gotoSource?: string
  /** 跳转类型 0:商品 1:店铺 2:分类列表 3:搜索结果列表 4:H5页面 5:无跳转 */
  gotoType?: number
  /** 图片地址 */
  imageSource?: string
  /** banner图名称 */
  name?: string
  /** 展示位置  0:首页咨询轮播 1:首页食材轮播 2:首页食谱轮播 3:讲堂轮播 4:商城轮播  */
  position?: number
  /** 排序值 */
  sort?: number
}

export interface ClassifyInfo {
  /** 分类编码 */
  classifyCode?: string
  /** 分类名称 */
  classifyName?: string
  /** 分类类型 */
  classifyType?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 上下架标识 0:上架 1:下架 */
  hotFlag?: number
  /** 图片url */
  imgUrl?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 父级标识 */
  parentKid?: number
  /** 推荐分类  0:不推荐 1:推荐 */
  recommendFlag?: number
  /** 上下架标识 0:上架 1:下架 */
  shaveFlag?: number
  /** 排序值 */
  sort?: number
  /** 官网web端显示标识 0:不显示 1:显示 */
  webFlag?: number
}

export interface CookingHotClassifyVO {
  /** 食谱分类名称 */
  classifyName?: string
  /** 食谱分类图片 */
  imgUrl?: string
  /** kid */
  kid?: number
}

export interface CookingHomeVO {
  /** 行为状态 */
  behaviorResult?: UserBehaviorResult
  /** 分类id */
  classifyKid?: number
  /** 食谱封面图 */
  coverImg?: string
  /** 时长 */
  duration?: number
  /** kid */
  kid?: number
  /** 图片或视频的url */
  resourceUrl?: string
  /** 行为数量 */
  statisticResult?: StatisticResult
  /** 标题 */
  title?: string
  /** 文件类型( 0:图文  1:视频 ) */
  type?: number
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

export interface StatisticResult {
  /** 评论数 */
  commentCount?: number
  /** 自定义打点统计数 */
  customMapper?: any
  /** 收藏数 */
  favoriteCount?: number
  /** 完成数 */
  finishCount?: number
  /** 关注数 */
  followCount?: number
  /** 参加数 */
  joinCount?: number
  /** 点赞数 */
  likeCount?: number
  /** 分享数 */
  shareCount?: number
  /** 目标资源唯一标识 */
  targetKid?: string
  /** 目标资源类型 */
  targetType?: string
  /** 浏览数 */
  viewCount?: number
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

export interface CookingInfoVO {
  /** 视频结束广告链接 */
  adUrl?: string
  behaviorResult?: UserBehaviorResult
  /** 分类id */
  classifyKid?: number
  cookingCompList?: CookingComp[]
  /** 封面图 */
  coverImg?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 时长 */
  duration?: number
  /** 结束时间 */
  endTime?: string
  /** 食材id */
  foodKid?: number
  /** 热门标识 0:否 1:是 */
  hotFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 推荐亮点 */
  merits?: string
  /** 推荐标识 0:否 1:是 */
  recommendFlag?: number
  /** 图片或视频的url */
  resourceUrl?: string
  /** 上下架标识 0:上架 1:下架 */
  shaveFlag?: number
  /** 排序值 */
  sort?: number
  /** 开始时间 */
  startTime?: string
  statisticResult?: StatisticResult
  /** 制作步骤 */
  step?: string
  /** 标签 */
  tags?: string
  /** 标题 */
  title?: string
  /** 0图文 1视频 */
  type?: number
}

export interface CookingComp {
  /** 食谱id */
  cookingKid?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 食材id */
  foodKid?: number
  /** 食材名称 */
  foodName?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 质量 */
  quality?: string
  /** 规格 */
  unit?: string
}

export interface CourseCategory {
  /** 分类名称 */
  categoryName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 是否删除1是0否 */
  delFlag?: number
  /** 图标 */
  icon?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 排序编号 */
  sortNo?: number
}

export interface CourseAppPageVO {
  entities?: CourseListItemVO[]
  pageNo?: number
  pageSize?: number
}

export interface CourseListItemVO {
  /** 是否已经购买 */
  buyFlag?: boolean
  /** 评论数 */
  commentCount?: number
  /** 是否完结0前端不显示1更新中2完结 */
  completed?: number
  /** 课程价格 */
  coursePrice?: number
  /** 课程类型1视频2音频3直播 */
  courseType?: number
  /** 封面图片 */
  coverPhoto?: string
  createDate?: string
  /** 是否已经购买0未登录1已购买2未购买 */
  hasPaid?: number
  /** 是否热门1是0否 */
  hotFlag?: number
  /** 加入学习人数 */
  joinCount?: number
  kid?: number
  /** 讲师id */
  lecturer?: number
  /** 在线人数 */
  onlines?: number
  /** 讲数/小节数 */
  sectionCount?: number
  startTime?: string
  /** 课程副主题 */
  subTheme?: string
  /** 课程主题 */
  theme?: string
  /** 讲师 */
  user?: UserBaseInfo
  /** 浏览数 */
  viewCount?: number
}

export interface UserBaseInfo {
  /** 活动渠道码 */
  activityChannelCode?: string
  /** 应用渠道码(客户端渠道包) */
  appChannel?: string
  /** 城市编码 */
  cityCode?: string
  /** 星座 */
  constellation?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效  1:删除 */
  delFlag?: number
  /** 家乡 */
  hometown?: string
  /** 身份证号 */
  idCard?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 现居地 */
  livingPlace?: string
  /** 邀请码 */
  myInviteCode?: string
  /** 极光设备唯一id */
  registrationId?: string
  /** 年龄 */
  userAge?: number
  /** 用户背景图片 */
  userBgImg?: string
  /** 出生年月日 */
  userBirthday?: string
  /** 用户简介 */
  userDesc?: string
  /** 用户扩展字段 */
  userExt?: string
  /** 用户性别 0-女 1-男 */
  userGenders?: number
  /** 用户id */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 姓名 */
  userName?: string
  /** 昵称 */
  userNickName?: string
  /** 用户手机号码 */
  userPhone?: string
  /** 用户二维码地址 */
  userQr?: string
  /** 用户签名 */
  userSignature?: string
  /** 用户状态 0-正常 1-冻结 2-注销 */
  userStatus?: number
  /** 马甲状态 0-普通用户 1-马甲 */
  vestFlag?: number
}

export interface CourseLearnStatisticDTO {
  /** 章节id */
  chapterKid?: number
  /** 课程id */
  courseId?: number
  /** 讲师id */
  lecturerId?: number
}

export interface CourseAppPageDTO {
  /** 课程分类0或者null不限分类 */
  category?: number
  /** 课程类型1视频2音频3直播0不限 */
  courseType?: number
  /** 是否热门 */
  hotFlag?: number
  /** 搜索关键字 */
  keyWord?: string
  /** 页码 */
  pageNo?: number
  /** 每页数量 */
  pageSize?: number
  /** 是否收费0不限1收费2免费 */
  payFlag?: number
  /** 登录用户id */
  userId?: number
}

export interface CourseProgressDTO {
  /** 课程id */
  courseId?: number
  data?: CourseProgressItemDTO[]
  /** 用户id */
  userId?: number
}

export interface CourseProgressItemDTO {
  /** 章 */
  chapter?: number
  /** 进度 */
  progress?: number
  /** 节 */
  section?: number
}

export interface CourseIndexVO {
  /** 购买标识 0 未购买 1已购买 */
  buyFlag?: number
  /** 评论数 */
  commentCount?: number
  /** 是否完结 0前端不显示 1更新中 2完结 */
  completed?: number
  /** 课程价格 */
  coursePrice?: number
  /** 课程类型 1视频 2音频 */
  courseType?: number
  /** 课程封面 */
  coverPhoto?: string
  /** 课程kid */
  kid?: number
  /** 讲师头像 */
  lecturerIconImg?: string
  /** 讲师Id */
  lecturerId?: number
  /** 讲师名称 */
  lecturerName?: string
  /** 讲师单位 */
  lecturerUnit?: string
  /** 排序 */
  sort?: number
  /** 副主题 */
  subTheme?: string
  /** 主题 */
  theme?: string
  /** 总讲数 */
  totalLession?: number
  /** 浏览数 */
  viewCount?: number
}

export interface CourseAppDetailVO {
  /** 是否已经购买 */
  buyFlag?: boolean
  /** 课程分类 */
  category?: string
  /** 评论数 */
  commentCount?: number
  /** 是否完结0前端不显示1更新中2完结 */
  completed?: number
  /** 课程价格 */
  coursePrice?: number
  /** 课程标签 */
  courseTag?: string
  /** 课程类型1视频2音频 */
  courseType?: number
  /** 课程封面 */
  coverPhoto?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 是否删除 */
  delFlag?: number
  /** 结束时间 */
  endTime?: string
  entities?: AppChapter[]
  /** 收藏数 */
  favoriteCount?: number
  /** 是否已经购买0未登录1已购买2未购买 */
  hasPaid?: number
  /** 是否热门 */
  hotFlag?: number
  /** 课程亮点 */
  introduction?: string
  /** 加入学习数 */
  joinCount?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 讲师 */
  lecturer?: number
  /** 是否精选 0:不推荐 1:推荐 */
  recommandFlag?: number
  /** 讲数 */
  sectionCount?: number
  /** 状态 */
  shelveFlag?: number
  /** 开始时间 */
  startTime?: string
  /** 状态 */
  status?: number
  /** 副主题 */
  subTheme?: string
  /** 主题 */
  theme?: string
  user?: UserBaseInfo
  /** 正在观看人数 */
  watchingCount?: number
}

export interface AppChapter {
  sections?: CourseChapterVO[]
  title?: string
}

export interface CourseChapterVO {
  /** 章编号 */
  chapter?: number
  /** 课程id */
  courseId?: number
  /** 创建时间 */
  createDate?: string
  /** 截取资源路径 */
  cutResourceUrl?: string
  /** 时长 */
  duration?: number
  /** 首帧图 */
  firstFramePicture?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 讲师名称 */
  lecturerName?: string
  /** 播放进度 */
  progress?: number
  /** 节编号 */
  section?: number
  /** 资源类型1视频2音频 */
  sourceType?: number
  /** 资源路径 */
  sourceUrl?: string
  /** 标题 */
  title?: string
  /** 讲师单位 */
  unit?: string
  /** 学习人数 */
  viewCount?: number
}

export interface FoodCompPartVO {
  /** 营养成分 */
  compPartVOList?: CompPartVO[]
  /** 概述 */
  description?: string
  /** 食材kid */
  foodKid?: number
  /** 食材名称 */
  foodName?: string
}

export interface CompPartVO {
  /** 成分名称 */
  name?: string
  /** 标准单位 */
  normalUnit?: string
  /** 标准值 */
  normalValue?: string
  /** 百分比 */
  percentage?: number
}

export interface FoodCompVO {
  /** 食材分类 */
  classifyName?: string
  /** 概述 */
  description?: string
  /** 食材营养成分 */
  foodCompInfoVOList?: FoodCompInfoVO[]
  /** 食材kid */
  foodKid?: number
  /** 食材名称 */
  foodName?: string
  /** 食材标签 */
  tags?: string
}

export interface FoodCompInfoVO {
  /** 成分别名 */
  alias?: string
  /** 计算单位 */
  calcdUnit?: string
  /** 计算值 */
  calcdValue?: number
  /** 成份名称 */
  name?: string
  /** 标准单位 */
  normalUnit?: string
  /** 标准值 */
  normalValue?: string
}

export interface FoodListVO {
  /** 食材名称 */
  chName?: string
  /** 字母首字母 */
  firstSpell?: string
  /** kid */
  kid?: number
  /** 禁忌人群 */
  noSuit?: string
  /** 适宜人群 */
  suit?: string
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

export interface FoodMulitVO {
  foodKids?: number[]
}

export interface FoodInfoWithUnitVO {
  /** 中文名 */
  chName?: string
  /** 分类标识 */
  classifyKid?: number
  /** 分类名称 */
  classifyName?: string
  /** 封面图 */
  coverImgUrl?: string
  /** 概述 */
  description?: string
  /** 食材明细 */
  detail?: string
  /** 详情图 */
  detailImgUrls?: string
  /** 功效作用 */
  effect?: string
  /** 英文名 */
  enName?: string
  /** 拼音首字母 */
  firstSpell?: string
  /** 禁忌 */
  forbid?: string
  /** kid */
  kid?: number
  /** 储藏建议 */
  preserve?: string
  /** 选购建议 */
  suggest?: string
  /** 适宜人群 */
  suitable?: string
  /** 标签 */
  tags?: string
  /** 食材单元 */
  units?: FoodUnitConvert[]
  /** 使用方法 */
  usageInfo?: string
}

export interface FoodUnitConvert {
  /** 换算单位 */
  convertUnit?: string
  /** 换算值 */
  convertValue?: number
  /** 创建时间 */
  createDate?: string
  /** 默认标识 0:非默认 1:默认 */
  defaultFlag?: number
  /** 删除标识 */
  delFlag?: number
  /** 食材kid */
  foodKid?: number
  /** 计量单位 */
  foodUnit?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
}

export interface FoodSearchVO {
  /** 中文名 */
  chName?: string
  /** kid */
  kid?: number
  /** 禁忌人群 */
  noSuit?: string
  /** 适宜人群 */
  suit?: string
}

export interface FoodHotVO {
  /** 食材名称 */
  chName?: string
  /** 封面图 */
  coverImgUrl?: string
  /** kid */
  kid?: number
  /** 标签 */
  tags?: string
}

export interface FoodIndexVO {
  /** 中文名 */
  chName?: string
  /** 封面图 */
  coverImgUrl?: string
  /** 能量 */
  energy?: string
  /** kid */
  kid?: number
  /** 标签 */
  tags?: string
}

export interface FoodNewsCookVO {
  /** 食材相关烹饪信息 */
  cooks?: CookingHomeVO[]
  /** 食材相关课堂信息 */
  courses?: CourseLiveEsInfo[]
  /** 食材info */
  foods?: FoodHotVO[]
  /** 食材相关咨询信息 */
  news?: NewsListVO[]
}

export interface CourseLiveEsInfo {
  /** 课程分类 */
  category?: string
  /** 是否完结 */
  completed?: number
  /** 课程价格 */
  coursePrice?: number
  /** 课程类型 1:视频 2:音频 3:直播 */
  courseType?: number
  /** 课程封面 */
  coverPhoto?: string
  createDate?: string
  /** 结束时间 */
  endTime?: string
  /** 是否热门 0:正常 1:热门 */
  hotFlag?: number
  /** kid */
  id?: number
  /** 课程亮点 */
  introduction?: string
  /** 讲师 */
  lecturer?: number
  /** 是否精选 0:不推荐 1:推荐 */
  recommandFlag?: number
  /** 开始时间 */
  startTime?: string
  /** 状态 */
  status?: number
  /** 名称 */
  subTheme?: string
  /** 名称 */
  theme?: string
}

export interface NewsListVO {
  /** 收藏数 */
  collectNumber?: number
  /** 评论数 */
  commentsNumber?: number
  /** 封面图 */
  coverImgUrl?: string
  /** 生成时间 */
  createDate?: string
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 摘要 */
  description?: string
  /** 时长 */
  duration?: number
  /** 灌水浏览数 */
  falseViewNumber?: number
  /** 食材kid */
  foodKid?: number
  /** 热门标识 0:否 1:是 */
  hotFlag?: number
  /** kid */
  kid?: number
  /** 锁定标识 0公开 1锁定 */
  lastUpdateUserId?: number
  /** 锁定标识 0公开 1锁定 */
  lockFlag?: number
  /** 实际浏览数 */
  realViewNumber?: number
  /** 资源类型 news、advert */
  resourceType?: string
  /** 上下架标识 0:上架 1:下架 */
  shaveFlag?: number
  /** 来源 */
  source?: string
  /** 点赞数 */
  thumbupNumber?: number
  /** 标题 */
  title?: string
  /** 置顶标识 0:否 1:是 */
  topFlag?: number
  /** 资源类型 0图文 1视频 */
  type?: number
  /** 资源url */
  url?: string
  /** 查看原文 0:允许 1:禁止 */
  viewFlag?: number
}

export interface FoodInfo {
  /** 食材别称 */
  aliasName?: string
  /** 中文名 */
  chName?: string
  /** 分类标识 */
  classifyKid?: number
  /** 分类名称 */
  classifyName?: string
  /** 封面图 */
  coverImgUrl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 概述 */
  description?: string
  /** 食材明细 */
  detail?: string
  /** 详情图 */
  detailImgUrls?: string
  /** 功效作用 */
  effect?: string
  /** 英文名 */
  enName?: string
  /** 拼音首字母 */
  firstSpell?: string
  /** 食材编码 */
  foodCode?: string
  /** 禁忌 */
  forbid?: string
  /** 热门标识(0默认,1热门) */
  hotFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 储藏建议 */
  preserve?: string
  /** 上下架标识 0:上架 1:下架 */
  shaveFlag?: number
  /** 排序值 */
  sort?: number
  /** 选购建议 */
  suggest?: string
  /** 适宜人群 */
  suitable?: string
  /** 标签 */
  tags?: string
  /** 使用方法 */
  usageInfo?: string
}

export interface FoodInfoVO {
  /** 中文名 */
  chName?: string
  /** 分类标识 */
  classifyKid?: number
  /** 分类名称 */
  classifyName?: string
  /** 推荐菜谱 */
  cookingHomeVOList?: CookingHomeVO[]
  /** 封面图 */
  coverImgUrl?: string
  /** 概述 */
  description?: string
  /** 食材明细 */
  detail?: string
  /** 详情图 */
  detailImgUrls?: string
  /** 英文名 */
  enName?: string
  /** 拼音首字母 */
  firstSpell?: string
  /** 营养元素 */
  foodCompPartVO?: FoodCompPartVO
  /** kid */
  kid?: number
  /** 储藏建议 */
  preserve?: string
  /** 选购建议 */
  suggest?: string
  /** 标签 */
  tags?: string
  /** 使用方法 */
  usageInfo?: string
  /** 行为状态 */
  userBehaviorResult?: UserBehaviorResult
}

export interface LectureLiveChatDataVO {
  /** 信息内容 图片或者音频保存资源url地址 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 音频时长 */
  duration?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  lecturerIconImg?: string
  lecturerName?: string
  /** 直播kid */
  liveKid?: number
  /** 聊天室id */
  roomId?: number
  /** 信息类型 0:文字 1:图片 2:音频 */
  type?: number
}

export interface LectureLiveAuditRecord {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 分类kid */
  liveKid?: number
  /** 备注 */
  remark?: string
  /** 审核标识 0:已通过 1:已驳回 2:审核中 */
  status?: number
}

export interface LectureLiveConfig {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 直播开始前X小时无法编辑 */
  noEdit?: number
  /** 价格1 */
  price1?: number
  /** 价格2 */
  price2?: number
  /** 价格3 */
  price3?: number
  /** 价格4 */
  price4?: number
  /** 价格5 */
  price5?: number
  /** 价格 */
  prices?: number[]
  /** 讲师直播单次录音时长 */
  record?: number
  /** 直播开始前X小时发送开播提醒 */
  remind?: number
  /** 时间1 */
  time1?: string
  /** 时间2 */
  time2?: string
  /** 时间3 */
  time3?: string
  /** 时间4 */
  time4?: string
  /** 时间5 */
  time5?: string
  /** 时间 */
  times?: string[]
}

export interface LectureLiveIndexVO {
  /** 开始时间 */
  beginTime?: string
  /** 结束时间 */
  endTime?: string
  /** kid */
  kid?: number
  /** 直播名称 */
  name?: string
  /** 在线人数 */
  online?: number
  /** 直播简介 */
  remark?: string
  /** 擅长领域 */
  special?: string
  /** 直播状态 1:预告 2:正在直播 3已结束 */
  status?: number
  /** 讲师id */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 讲师姓名 */
  userName?: string
  /** 讲师单位 */
  userUnit?: string
}

export interface LectureLiveVO {
  /** 审核不通过理由 */
  auditRemark?: string
  /** 审核标识 0:待审核 1:已通过 2:已驳回 3:审核中 */
  auditStatus?: number
  /** 开始时间 */
  beginTime?: string
  /** 当前用户是否购买 0:未购买 1:已购买 */
  buyFlag?: number
  /** 是否可编辑 */
  canEdit?: boolean
  /** 分类kid */
  classifyKid?: number
  /** 分类名称 */
  classifyName?: string
  /** 详情 */
  detail?: string
  /** 结束标识 0:未结束 1:已结束 */
  endFlag?: number
  /** 结束时间 */
  endTime?: string
  /** 热门 0:不热门 1:热门 */
  hotFlag?: number
  /** 直播封面 */
  liveImg?: string
  /** 直播kid */
  liveKid?: number
  /** 直播名称 */
  liveName?: string
  /** 在线人数 */
  onlines?: number
  /** 直播收费 0:收费 1:免费 */
  payFlag?: number
  /** 直播亮点 */
  point?: string
  /** 价格 */
  price?: number
  /** 报名人数 */
  registers?: number
  /** 直播简介 */
  remark?: string
  /** 聊天室创建者kid */
  roomCreator?: number
  /** 聊天室id */
  roomId?: number
  /** 聊天室名称 */
  roomName?: string
  /** 擅长领域 */
  special?: string
  /** 用户id */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 姓名 */
  userName?: string
  /** 昵称 */
  userNickName?: string
  /** 二维码 */
  userQr?: string
  /** 讲师单位 */
  userUnit?: string
  /** 播放次数/已学习人数 */
  views?: number
}

export interface LectureLive {
  /** 开始时间 */
  beginTime?: string
  /** 分类kid */
  classifyKid?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 详情 */
  detail?: string
  /** 结束标识 0:未结束 1:已结束 */
  endFlag?: number
  /** 结束时间 */
  endTime?: string
  /** 热门 0:不热门 1:热门 */
  hotFlag?: number
  /** 图片地址 */
  imageSource?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 直播名称 */
  name?: string
  /** 直播收费 0:收费 1:免费 */
  payFlag?: number
  /** 亮点 */
  point?: string
  /** 价格 */
  price?: number
  /** 是否需要推送 0:不推送 1:推送 */
  pushFlag?: number
  /** 推荐 0:不推荐 1:推荐 */
  recommandFlag?: number
  /** 直播简介 */
  remark?: string
  /** 审核标识 0:待审核 1:已通过 2:已驳回 3:审核中 */
  status?: number
}

export interface LecturerArticleVO {
  /** 内容 */
  content?: string
  contentUrl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0正常 1删除 */
  delFlag?: number
  followFlag?: number
  iconImg?: string
  /** 封面图 */
  imageSource?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 上下架 0:上架 1:下架 */
  shaveFlag?: number
  /** 标题 */
  title?: string
  /** 讲师kid */
  userId?: number
  /** 讲师姓名 */
  userName?: string
  viewCount?: number
}

export interface LecturerDynamic {
  /** 内容 */
  content?: string
  /** 封面图资源url */
  coverImage?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识： 0：正常 1：删除 */
  delFlag?: number
  /** 时长 */
  duration?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 图片或者视频资源url */
  source?: string
  /** 讲师kid */
  userId?: number
}

export interface LecturerInfo {
  /** 粉丝人数 */
  fansNumber?: number
  /** 关注标签 2:互相关注 1:我关注的 0:未关注 */
  followFlag?: number
  /** 学习人数 */
  learnNumber?: number
  /** 总讲数 */
  totalLecture?: number
  /** 总收益 */
  totalRevenue?: number
  /** 讲师背景图片 */
  userBgImg?: string
  /** 讲师简介 */
  userDesc?: string
  /** 扩展字段  擅长领域 */
  userExt?: string
  /** 用户id */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 姓名 */
  userName?: string
  /** 昵称 */
  userNickName?: string
}

export interface NewsInfoVO {
  /** 广告信息 */
  advertInfo?: AdvertInfo
  /** 作者 */
  author?: string
  /** 行为状态 */
  behaviorResult?: UserBehaviorResult
  /** 分类id */
  classifyKid?: number
  /** 分类名称 */
  classifyName?: string
  /** 内容 */
  content?: string
  /** 封面图 */
  coverImgUrl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人 */
  createUserId?: number
  /** 摘要 */
  description?: string
  /** 时长 */
  duration?: number
  /** 食材kid */
  foodKid?: number
  /** 热门标识 0否 1是 */
  hotFlag?: number
  /** kid */
  kid?: number
  /** 锁定标识 0公开 1锁定 */
  lastUpdateUserId?: number
  /** 外链地址 */
  linkUrl?: string
  /** 锁定标识 0公开 1锁定 */
  lockFlag?: number
  /** 资源类型 news、advert */
  resourceType?: string
  /** 来源 */
  source?: string
  /** 打点数 */
  statisticResult?: StatisticResult
  /** 标签 */
  tags?: string
  /** 标题 */
  title?: string
  /** 置顶标识 0否 1是 */
  topFlag?: number
  /** 资源类型 0图文 1视频 */
  type?: number
  /** 排版  1:置顶排序 2:大图样式 3:3图样式 4:有图样式 */
  typeSetting?: number
  /** 资源url */
  url?: string
  /** 查看原文标识 0:可以 1:不可以 */
  viewFlag?: number
}

export interface AdvertInfo {
  /** 封面图 */
  coverImgUrl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 备注描述 */
  description?: string
  /** 时长 */
  duration?: number
  /** 热门标识(0默认,1热门) */
  hotFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 布局类型 */
  layout?: number
  /** 跳转类型(in:内链,out:外链) */
  linkType?: string
  /** 跳转地址 */
  linkUrl?: string
  /** 模块编码 */
  moduleCode?: string
  /** 模块名称 */
  moduleName?: string
  /** 来源地址 */
  resourceAddress?: string
  /** 资源类型 0图片 1视频 */
  resourceType?: number
  /** 资源url */
  resourceUrl?: string
  /** 上下架标识(0上架,1下架) */
  shaveFlag?: number
  /** 模块唯一标识 */
  targetKid?: number
  /** 标题 */
  title?: string
}

export interface NewsClassifyVO {
  /** 分类名称 */
  classifyName?: string
  /** kid */
  kid?: number
}

export interface PersonalInfoVO {
  /** 删除标识 0:有效  1:删除 */
  delFlag?: number
  /** 我的动态数量 */
  dynamicNumber?: number
  /** 关注我的数量 */
  focusNumber?: number
  /** 我关注的数量 */
  followNumer?: number
  /** kid */
  kid?: number
  /** 极光设备唯一id */
  registrationId?: string
  /** 我的关注状态 0未关注，1我关注的，2关注我的，3互相关注 */
  relation?: number
  /** 用户角色集合 */
  roles?: UserRole[]
  /** 年龄 */
  userAge?: number
  /** 用户背景图片 */
  userBgImg?: string
  /** 出生年月日 */
  userBirthday?: string
  /** 用户简介 */
  userDesc?: string
  /** 用户性别 0-女 1-男 */
  userGenders?: number
  /** 用户id */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 姓名 */
  userName?: string
  /** 昵称 */
  userNickName?: string
  /** 用户手机号码 */
  userPhone?: string
  /** 用户二维码地址 */
  userQr?: string
  /** 用户签名 */
  userSignature?: string
  /** 用户状态 0-正常 1-冻结 2-注销 */
  userStatus?: number
}

export interface UserRole {
  /** 角色 */
  role?: string
  /** 角色头衔 */
  roleTitle?: string
}

export interface SysNotice {
  /** 消息内容 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除，0未删除，1已删除 */
  delFlag?: number
  /** 描述 */
  description?: string
  /** 封面图片 */
  imageUrls?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 状态，0未发布，1已发布 */
  pubStatus?: number
  /** 发送时间 */
  pubTime?: string
  /** 发送类型，pubNow立即发布，pubLay定时发布 */
  pubType?: string
  /** 跳转类型，sysContent，sysBanner-x */
  resourceType?: string
  /** 接受对象 */
  tags?: string
  /** 消息标题 */
  title?: string
}

export interface ClassifyUserInfoVO {
  /** 分类标签Kid */
  classifyIds?: number[]
  /** 用户KID */
  userId?: number
}

export interface CustomerInfoVO {
  /** 客服头像 */
  customerHeadImage?: string
  /** 客服ID，客户端使用此ID判断新增还是更新 */
  customerId?: string
  /** 客服名称 */
  customerName?: string
  /** 客服类型 */
  customerType?: string
  /** 客服URL访问地址 */
  customerUrl?: string
  /** 页面类型 */
  pageType?: string
}

export interface FoodBindTag {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0正常 1已删除 */
  delFlag?: number
  /** 食材kid */
  foodKid?: number
  /** 食材名 */
  foodName?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 标准值 */
  normalValue?: string
  /** 标签kid */
  tagKid?: number
  /** 使用状态 0启用 1禁用 */
  useFlag?: number
}

export interface ReportRecommandVO {
  course?: CourseIndexVO[]
  foodList?: FoodCompSuggestVO[]
  news?: NewsListVO[]
}

export interface FoodCompSuggestVO {
  /** 封面图 */
  coverImgUrl?: string
  /** 食材营养成分 */
  foodCompInfoVO?: FoodCompInfoVO
  /** 食材kid */
  foodKid?: number
  /** 食材名称 */
  foodName?: string
}

export interface CompareUnitDTO {
  /** 报告kid */
  reportKid?: number
  /** 比较模板 */
  tpls?: CompareUnitTpl[]
  /** 类型 1:有推荐食材 2:无推荐食材 */
  type?: number
}

export interface CompareUnitTpl {
  compareRange?: CompareData
  conditionValue?: string
  exactValue?: string
  key?: string
  name?: string
}

export interface CompareData {
  max?: string
  min?: string
  unit?: string
}

export interface FoodTag {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0正常 1已删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 营养素kid */
  nutrientKid?: number
  /** 排序占比   */
  sortRatio?: number
  /** 排序方式  0低到高 1高到低 */
  sortType?: number
  /** 小组名称 */
  tagName?: string
  /** 使用状态 0启用 1禁用 */
  useFlag?: number
}

export interface ImChatRoomEx {
  /** 公告，长度限制4096个字符 */
  announcement?: string
  /** 直播地址，长度限制1024个字符 */
  broadcasturl?: string
  /** 聊天室主账号accid = userKid */
  creator?: string
  /** 扩展字段，最长4096字符 */
  ext?: string
  /** 聊天室名称，长度限制128个字符 */
  name?: string
  onlineusercount?: number
  /** 队列管理权限：0:所有人都有权限变更队列，1:只有主播管理员才能操作变更。默认0 */
  queuelevel?: number
  /** true或false，false:关闭聊天室；true:打开聊天室 */
  valid?: boolean
}

export interface ImChatRoomMute {
  /** 必填 true或false 默认ture true为禁言 false为不禁言 */
  mute?: boolean
  /** 非必填  true或false，默认true */
  needNotify?: string
  /** 非必填 通知扩展字段 */
  notifyExt?: string
  /** 必填  操作者accid，必须是管理员或创建者 */
  operator?: number
  /** 必填 聊天室id */
  roomid?: number
  /** 必填 租户id */
  tenantId?: string
}

export interface LectureLiveChatData {
  /** 信息内容 图片或者音频保存资源url地址 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 音频时长 */
  duration?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 直播kid */
  liveKid?: number
  /** 聊天室id */
  roomId?: number
  /** 信息类型 0:文字 1:图片 2:音频 */
  type?: number
}

export interface LectureLiveChatRoom {
  /** 公告 */
  announcement?: string
  /** 直播地址 */
  broadcasturl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 聊天室创建者kid */
  creator?: number
  /** 扩展字段 */
  ext?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 直播kid */
  liveKid?: number
  /** 聊天室名称 */
  name?: string
  /** 聊天室id */
  roomId?: number
}

export interface LectureLiveEditDTO {
  /** 开始时间 */
  beginTime?: string
  /** 分类kid */
  classifyKid?: number
  /** 详情 */
  detail?: string
  /** 图片地址 */
  imageSource?: string
  /** 分布式唯一ID */
  kid?: number
  /** 直播名称 */
  name?: string
  /** 直播收费 0:收费 1:免费 */
  payFlag?: number
  /** 亮点 */
  point?: string
  /** 价格 */
  price?: number
  /** 是否需要推送 0:不推送 1:推送 */
  pushFlag?: number
  /** 直播简介 */
  remark?: string
}

export interface LecturerAnswer {
  /** 回答内容 */
  answer?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识： 0:正常 1:删除 */
  delFlag?: number
  /** 时长 */
  duration?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 讲师kid */
  lecturerId?: number
  /** 讲师名称 */
  lecturerName?: string
  /** 直播kid */
  liveId?: number
  /** 问题kid */
  questionId?: number
  /** 图片或者音频资源 */
  source?: string
  /** 回答类型 1:纯文字 2:图片 3:音频 */
  sourceType?: number
}

export interface LecturerQuestion {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识： 0:正常 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 讲师kid */
  lecturerId?: number
  /** 直播kid */
  liveId?: number
  /** 问题内容 */
  question?: string
  /** 回复标识： 0:未回复 1:已回复 */
  questionStatus?: number
  /** 提问者kid */
  userId?: number
  /** 提问者名称 */
  userName?: string
}

export interface LecturerQuestionVO {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识： 0:正常 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 讲师kid */
  lecturerId?: number
  /** 直播kid */
  liveId?: number
  /** 问题内容 */
  question?: string
  /** 回复标识： 0:未回复 1:已回复 */
  questionStatus?: number
  /** 提问者头像 */
  userIconImg?: string
  /** 提问者kid */
  userId?: number
  /** 提问者名称 */
  userName?: string
}

export interface LectureFAQ {
  /** 回答 */
  answer?: string
  /** 回答时间 */
  answerCreateDate?: string
  /** 时长 */
  duration?: string
  /** 讲师Kid */
  lecturerId?: number
  /** 讲师名称 */
  lecturerName?: string
  /** 直播kid */
  liveId?: number
  /** 问题 */
  question?: string
  /** 提问时间 */
  questionCreateDate?: string
  /** 资源 */
  source?: string
  /** 回答类型 1:纯文字 2:图片 3:音频 */
  sourceType?: string
  /** 提问者头像 */
  userIconImg?: string
  /** 提问者Kid */
  userId?: number
  /** 提问者姓名 */
  userName?: string
}

export interface NewsKeyword {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0未删除 1已删除 */
  delFlag?: string
  /** 关键字 */
  keywordName?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
}

export interface PaidCourseVO {
  /** 课程价格 */
  coursePrice?: number
  /** 课程类型 1视频 2音频 3直播 */
  courseType?: number
  /** 课程封面 */
  coverPhoto?: string
  /** 删除标识 0未删除 1删除 */
  delFlag?: number
  /** 课程kid */
  kid?: number
  /** 讲师头像 */
  lecturerIconImg?: string
  /** 讲师Id */
  lecturerId?: number
  /** 讲师名称 */
  lecturerName?: string
  /** 讲师单位 */
  lecturerUnit?: string
  /** 购买日期 */
  payDate?: string
  /** 购买价格 */
  payment?: number
  /** 上下架标识  0上架  1下架 */
  shelveFlag?: number
  /** 主题 */
  theme?: string
}

export interface PersonCourseVO {
  /** 是否购买 0未购买 1已购买 */
  bayFlag?: number
  /** 是否完结 */
  completed?: number
  /** 课程价格 */
  coursePrice?: number
  /** 课程类型 1:视频 2:音频 3:直播 */
  courseType?: number
  /** 课程封面 */
  coverPhoto?: string
  /** 创建时间 */
  createDate?: string
  /** 结束时间 */
  endTime?: string
  id?: number
  /** 课程亮点 */
  introduction?: string
  /** 讲师userId */
  lecturer?: number
  /** 讲师名称 */
  lecturerName?: string
  /** 讲师单位 */
  lecturerUnit?: string
  /** 开始时间 */
  startTime?: string
  /** 状态 */
  status?: number
  theme?: string
}

export interface ProductEsInfo {
  certTypeList?: number[]
  deliveryCityCodeList?: string[]
  id?: number
  kol?: number
  mainPic?: string
  originalPrice?: number
  preSaleEndTime?: string
  preSaleStartTime?: string
  /** 状态  1.预售中 2.已取消 3.已结束 */
  preSaleState?: number
  productCategoryId?: number
  productName?: string
  recommandSort?: number
  salePrice?: number
  sales?: number
  shelveDate?: string
}

export interface ShopModel {
  /** 图片 */
  imageUrl?: string
  /** 数据Kid */
  kid?: number
  /** 店铺名 */
  shopName?: string
}

export interface UserDietInfo {
  /** 成份 */
  dietComps?: DietComp[]
  /** 名称 */
  dietName?: string
  /** 食谱总重量(可选，打卡) */
  dietWeight?: number
  /** 份数 */
  quality?: number
  /** 食谱单位(份/克) */
  qualityUnit?: string
  /** 食谱标识（可选，打卡) */
  recipeKid?: number
  userDietCompList?: UserDietComp[]
}

export interface DietComp {
  /** 标识 */
  foodKid?: number
  /** 名称 */
  foodName?: string
  /** 可选单位集 */
  optionalUnits?: OptionalUnit[]
  /** 膳食分量占比 */
  percent?: number
  /** 默认单位(个/碗/盘.....) */
  unit?: string
  /** 摄入量 */
  weight?: number
}

export interface OptionalUnit {
  /** 换算单位 */
  convertUnit?: string
  /** 换算值 */
  convertValue?: number
  /** 默认标识 0:非默认 1:默认 */
  defaultFlag?: number
  /** 计量单位 */
  foodUnit?: string
}

export interface UserDietComp {
  /** 标识 */
  foodKid?: number
  /** 名称 */
  foodName?: string
  kid?: number
  /** 可选单位集 */
  optionalUnits?: OptionalUnit[]
  /** 膳食分量占比 */
  percent?: number
  /** 默认单位(个/碗/盘.....) */
  unit?: string
  /** 摄入量 */
  weight?: number
}

export interface UserRecipesDTO {
  /** 食材 */
  comp?: UserRecipesCompDTO[]
  /** 食谱标识 */
  kid?: number
  /** 食谱名称 */
  name?: string
}

export interface UserRecipesCompDTO {
  del?: boolean
  /** 食材Kid */
  foodKid?: number
  /** 标识 */
  kid?: number
  /** 名称 */
  name?: string
  /** 单位(g/kg/...) */
  unit?: string
  /** 摄入量 */
  weight?: number
}

export interface UserRecipesComp {
  /** 计算单位 */
  calcdUnit?: string
  /** 计算值 */
  calcdValue?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 食材标识 */
  foodKid?: number
  /** 食材标识 */
  foodName?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 标准单位 */
  normalUnit?: string
  /** 标准值 */
  normalValue?: number
  /** 食材占比 */
  percent?: number
  /** 食谱标识 */
  recipesKid?: number
}

export interface UserRecipesInfo {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 食谱名称 */
  recipeName?: string
}

export interface UserSuggestionInfo {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0正常1删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 图片url */
  resourceUrl?: string
  /** 反馈内容 */
  suggestionContent?: string
  /** 用户id */
  userId?: number
}
export default {
  bannerInfos: {
    /**
    * 根据位置信息获取banner图 位置 0:首页咨询轮播 1:首页食材轮播 2:首页食谱轮播 3:讲堂轮播 4:商城轮播 6:小组轮播 7:新首页轮播 8:智慧营养轮播
    */
    getbyposition(params: { position: number }): Promise<List<BannerInfoVO>> {
      return httpGet(`/nutrition/v1.0/pb/banner-infos/action/getbyposition`,  {params} ).then((res:any) => res.data.data)
    },
  },
  classifyInfos: {
    /**
    * 根据分类类型查询数据
    */
    typeList(params: { type: string }): Promise<List<ClassifyInfo>> {
      return httpGet(`/nutrition/v1.0/pb/classify-infos/action/typeList`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * web端获取官网上架的分类
    */
    web(params: { type: string }): Promise<List<ClassifyInfo>> {
      return httpGet(`/nutrition/v1.0/pb/classify-infos/action/web`,  {params} ).then((res:any) => res.data.data)
    },
  },
  classifyUserInfos: {
    /**
    * 获取当前用户所选分类标签
    */
    getclassify(): Promise<List<ClassifyInfo>> {
      return httpGet(`/nutrition/v1.0/pb/classify-user-infos/action/getclassify`).then((res:any) => res.data.data)
    },
    /**
    * 保存当前用户所选分类标签
    */
    saveclassify(info: ClassifyUserInfoVO): Promise<boolean> {
      return httpPut(`/nutrition/v1.0/pt/classify-user-infos/action/saveclassify`, info).then((res:any) => res.data.data)
    },
  },
  cookingInfos: {
    /**
    * App食谱分类列表
    */
    cookingClassifyList(): Promise<List<CookingHotClassifyVO>> {
      return httpGet(`/nutrition/v1.0/pb/cooking-infos/action/cookingClassifyList`).then((res:any) => res.data.data)
    },
    /**
    * App食谱热门分类列表
    */
    cookingHotClassify(): Promise<List<CookingHotClassifyVO>> {
      return httpGet(`/nutrition/v1.0/pb/cooking-infos/action/cookingHotClassify`).then((res:any) => res.data.data)
    },
    /**
    * 首页烹饪列表分页查询
    */
    list(params: { pageNo?: number, pageSize?: number }): Promise<PageList<CookingHomeVO>> {
      return httpGet(`/nutrition/v1.0/pb/cooking-infos/action/list`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * App根据分类id查询所有食谱
    */
    listByClassifyKid(params: { classifyKid: number, pageNo?: number, pageSize?: number }): Promise<PageList<CookingHomeVO>> {
      return httpGet(`/nutrition/v1.0/pb/cooking-infos/action/listByClassifyKid`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * App根据食材id推荐菜谱
    */
    recommendListByFoodId(params: { foodKid: number }): Promise<List<CookingHomeVO>> {
      return httpGet(`/nutrition/v1.0/pb/cooking-infos/action/recommendListByFoodId`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * App推荐菜谱
    */
    recommendPage(params: { foodKid?: number, pageNo?: number, pageSize?: number }): Promise<PageList<CookingHomeVO>> {
      return httpGet(`/nutrition/v1.0/pb/cooking-infos/action/recommendPage`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * App查询详情
    */
    get(params: { kid: number }): Promise<CookingInfoVO> {
      return httpGet(`/nutrition/v1.0/pb/cooking-infos/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  courseCategorys: {
    /**
    * app获取课程分类CourseCategory
    */
    listApp(params: { categoryName?: string, createDate?: string, createUserId?: number, delFlag?: number, icon?: string, kid?: number, lastUpdateDate?: string, lastUpdateUserId?: number, pageNo?: number, pageSize?: number, sortNo?: number }): Promise<PageList<CourseCategory>> {
      return httpGet(`/nutrition/v1.0/pb/course-categorys/action/list-app`,  {params} ).then((res:any) => res.data.data)
    },
  },
  courses: {
    /**
    * app首页课程列表
    */
    indexCourse(): Promise<CourseAppPageVO> {
      return httpGet(`/nutrition/v1.0/pb/courses/action/indexCourse`).then((res:any) => res.data.data)
    },
    /**
    * 课程加入学习打点记数
    */
    learnStatistic(dto: CourseLearnStatisticDTO): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pb/courses/action/learnStatistic`, dto).then((res:any) => res.data.data)
    },
    /**
    * app精彩课程查看更多
    */
    moreWonderfulCourses(params: { keyWord?: string, pageNo: number, pageSize: number }): Promise<CourseAppPageVO> {
      return httpGet(`/nutrition/v1.0/pb/courses/action/moreWonderfulCourses`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app分类查询接口
    */
    queryByConditon(dto: CourseAppPageDTO): Promise<CourseAppPageVO> {
      return httpPost(`/nutrition/v1.0/pb/courses/action/queryByConditon`, dto).then((res:any) => res.data.data)
    },
    /**
    * 记录课程播放记录
    */
    recordProgress(dto: CourseProgressDTO): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pb/courses/action/recordProgress`, dto).then((res:any) => res.data.data)
    },
    /**
    * 首页 top更多接口
    */
    topten(): Promise<List<CourseIndexVO>> {
      return httpGet(`/nutrition/v1.0/pb/courses/action/topten`).then((res:any) => res.data.data)
    },
    /**
    * 首页 top3接口
    */
    topthree(): Promise<List<CourseIndexVO>> {
      return httpGet(`/nutrition/v1.0/pb/courses/action/topthree`).then((res:any) => res.data.data)
    },
    /**
    * app讲堂首页精彩课程
    */
    wonderfulCourses(): Promise<CourseAppPageVO> {
      return httpGet(`/nutrition/v1.0/pb/courses/action/wonderfulCourses`).then((res:any) => res.data.data)
    },
    /**
    * app查询单个Course详情
    */
    get(params: { kid: number }): Promise<CourseAppDetailVO> {
      return httpGet(`/nutrition/v1.0/pb/courses/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  foodComps: {
    /**
    * 根据食材id查询食材部分营养成分
    */
    compPartByFoodKid(params: { foodKid: number }): Promise<FoodCompPartVO> {
      return httpGet(`/nutrition/v1.0/pb/food-comps/action/compPartByFoodKid`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 根据食材id查询食材营养成分
    */
    selectByFoodKid(params: { foodKid: number }): Promise<FoodCompVO> {
      return httpGet(`/nutrition/v1.0/pb/food-comps/action/selectByFoodKid`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 专业报告-问题详情食材关联查询
    */
    getEvaluateFoodCompSuggest(dto: CompareUnitDTO): Promise<ReportRecommandVO> {
      return httpPost(`/nutrition/v1.0/pt/food-comps/action/getEvaluateFoodCompSuggest`, dto).then((res:any) => res.data.data)
    },
  },
  foodInfos: {
    /**
    * App查询所有食材
    */
    all(): Promise<string> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/all`).then((res:any) => res.data.data)
    },
    /**
    * App根据分类id查询所有食材
    */
    allByClassifyKid(params: { classifyKid: number }): Promise<string> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/allByClassifyKid`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 分页查询所有食材
    */
    foodAll(params: { pageNo?: number, pageSize?: number }): Promise<PageList<FoodListVO>> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/foodAll`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 分页查询所有食材
    */
    foodAllList(): Promise<List<FoodListVO>> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/foodAllList`).then((res:any) => res.data.data)
    },
    /**
    * 通过分类id查询食材信息
    */
    foodListByClassifyKid(params: { classifyKid: number }): Promise<List<FoodListVO>> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/foodListByClassifyKid`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询食材分类
    */
    foodTypeList(): Promise<List<ClassifyInfo>> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/foodTypeList`).then((res:any) => res.data.data)
    },
    /**
    * 通过食材id查询推荐商品
    */
    getproduct(vo: FoodMulitVO): Promise<List<ProductAppVO>> {
      return httpPost(`/nutrition/v1.0/pb/food-infos/action/getproduct`, vo).then((res:any) => res.data.data)
    },
    /**
    * selectFoodInfoWithUnitById
    */
    infoWithUnits(params: { kid: number }): Promise<FoodInfoWithUnitVO> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/infoWithUnits`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 通过食材名称搜索(兼容模糊)
    */
    keyWord(params: { keyWord: string }): Promise<List<FoodSearchVO>> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/keyWord`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 热门食材列表
    */
    listByHot(): Promise<List<FoodHotVO>> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/listByHot`).then((res:any) => res.data.data)
    },
    /**
    * 分页查询所有食材
    */
    newindex(params: { pageNo?: number, pageSize?: number }): Promise<PageList<FoodIndexVO>> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/newindex`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 通过foodKids获取相关咨询、课堂和烹饪信息
    */
    relatedResources(params: { foodKids: string }): Promise<FoodNewsCookVO> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/related-resources`,  {params} ).then((res:any) => res.data.data)
    },
    selectByName(params: { foodName: string }): Promise<FoodInfo> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/action/selectByName`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * App查询详情
    */
    get(params: { kid: number }): Promise<FoodInfoVO> {
      return httpGet(`/nutrition/v1.0/pb/food-infos/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/nutrition/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  lectureLiveChatDatas: {
    /**
    * 服务端分页查询直播聊天室讲师数据
    */
    listPage(params: { liveKid: number, pageNo?: number, pageSize?: number }): Promise<PageList<LectureLiveChatDataVO>> {
      return httpGet(`/nutrition/v1.0/pb/lecture-live-chat-datas/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 服务端新增直播聊天室讲师数据
    */
    post(lectureLiveChatData: LectureLiveChatData): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pt/lecture-live-chat-datas`, lectureLiveChatData).then((res:any) => res.data.data)
    },
  },
  lectureLives: {
    /**
    * APP查询是否可编辑
    */
    canEdit(params: { kid: number }): Promise<boolean> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/can-edit`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP直播课程名称判断重复,true:重复,false:不重复
    */
    checkName(params: { name: string }): Promise<boolean> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/check-name`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP查询直播课审核信息
    */
    getAudit(params: { kid: number }): Promise<LectureLiveAuditRecord> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/get-audit`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP查询直播课设置
    */
    getConfig(): Promise<LectureLiveConfig> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/get-config`).then((res:any) => res.data.data)
    },
    /**
    * 首页直播课展示
    */
    index(): Promise<LectureLiveIndexVO> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/index`).then((res:any) => res.data.data)
    },
    /**
    * APP查询聚合详情
    */
    info(params: { kid: number }): Promise<LectureLiveVO> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/info`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP未开播分页列表
    */
    listFuture(params: { pageNo?: number, pageSize?: number }): Promise<PageList<LectureLiveVO>> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/list-future`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP直播中分页列表
    */
    listOnline(params: { pageNo?: number, pageSize?: number }): Promise<PageList<LectureLiveVO>> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/list-online`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP往期分页列表
    */
    listPast(params: { pageNo?: number, pageSize?: number }): Promise<PageList<LectureLiveVO>> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/action/list-past`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP编辑时查询详情
    */
    get(params: { kid: number }): Promise<LectureLive> {
      return httpGet(`/nutrition/v1.0/pb/lecture-lives/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP新增
    */
    post(lectureLive: LectureLive): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pt/lecture-lives`, lectureLive).then((res:any) => res.data.data)
    },
    /**
    * APP删除
    */
    delete(params: { kid: number }): Promise<boolean> {
      return httpGet(`/nutrition/v1.0/pt/lecture-lives/action/delete`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP编辑
    */
    put(params: { kid: number }, editDTO: LectureLiveEditDTO): Promise<boolean> {
      return httpPut(`/nutrition/v1.0/pt/lecture-lives/${params.kid}`, editDTO,  {params} ).then((res:any) => res.data.data)
    },
  },
  lecturerArticles: {
    /**
    * 分页查询讲师文章
    */
    list(params: { pageNo?: number, pageSize?: number, userId: number }): Promise<PageList<LecturerArticleVO>> {
      return httpGet(`/nutrition/v1.0/pb/lecturer-articles/action/list`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 服务端查询详情文章查询
    */
    get(params: { kid: number }): Promise<LecturerArticleVO> {
      return httpGet(`/nutrition/v1.0/pb/lecturer-articles/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  lecturerDynamics: {
    /**
    * 服务端查询分页讲师动态
    */
    list(params: { pageNo?: number, pageSize?: number, userId: number }): Promise<PageList<LecturerDynamic>> {
      return httpGet(`/nutrition/v1.0/pb/lecturer-dynamics/action/list`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 服务端讲师动态新增
    */
    add(dynamic: LecturerDynamic): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pt/lecturer-dynamics/action/add`, dynamic).then((res:any) => res.data.data)
    },
    /**
    * 服务端讲师动态删除
    */
    delete(params: { id: number }): Promise<boolean> {
      return httpDelete(`/nutrition/v1.0/pt/lecturer-dynamics/${params.id}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  lecturerInfos: {
    /**
    * 讲师个人信息（用户视角）
    */
    get(params: { id: string }): Promise<LecturerInfo> {
      return httpGet(`/nutrition/v1.0/pb/lecturer-infos/${params.id}`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 讲师个人信息（讲师个人视角）
    */
    getlecturer(): Promise<LecturerInfo> {
      return httpGet(`/nutrition/v1.0/pt/lecturer-infos/action/getlecturer`).then((res:any) => res.data.data)
    },
  },
  newsInfos: {
    /**
    * 新首页置顶资讯
    */
    newindex(params: { pageNo?: number, pageSize?: number }): Promise<PageList<NewsInfoVO>> {
      return httpGet(`/nutrition/v1.0/pb/news-infos/action/newindex`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app根据类型Code查询资讯列表
    */
    newsByCode(params: { classifyCode: string, pageNo?: number, pageSize?: number }): Promise<PageList<NewsInfoVO>> {
      return httpGet(`/nutrition/v1.0/pb/news-infos/action/news-by-code`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app根据类型id查询资讯列表
    */
    newsByClassifyKidList(params: { classifyKid: number, pageNo?: number, pageSize?: number }): Promise<PageList<NewsInfoVO>> {
      return httpGet(`/nutrition/v1.0/pb/news-infos/action/newsByClassifyKidList`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app资讯分类首页
    */
    newsClssify(): Promise<List<NewsClassifyVO>> {
      return httpGet(`/nutrition/v1.0/pb/news-infos/action/newsClssify`).then((res:any) => res.data.data)
    },
    /**
    * app资讯详情
    */
    get(params: { kid: number }): Promise<NewsInfoVO> {
      return httpGet(`/nutrition/v1.0/pb/news-infos/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  personalCenter: {
    /**
    * 个人中心普通用户个人主页
    */
    index(params: { id: number }): Promise<PersonalInfoVO> {
      return httpGet(`/nutrition/v1.0/pb/personal-center/action/index`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心我的课程
    */
    mycourse(params: { pageNo?: number, pageSize?: number }): Promise<PageList<PaidCourseVO>> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/action/mycourse`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心我的收藏-烹饪
    */
    myfavoritesCooking(params: { pageNo?: number, pageSize?: number }): Promise<PageList<CookingInfoVO>> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/action/myfavorites-cooking`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心我的收藏-课程
    */
    myfavoritesCourse(params: { pageNo?: number, pageSize?: number }): Promise<PageList<PersonCourseVO>> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/action/myfavorites-course`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心我的收藏-食材
    */
    myfavoritesFood(params: { pageNo?: number, pageSize?: number }): Promise<PageList<FoodIndexVO>> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/action/myfavorites-food`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心我的收藏-资讯
    */
    myfavoritesNews(params: { pageNo?: number, pageSize?: number }): Promise<PageList<NewsInfoVO>> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/action/myfavorites-news`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心我的收藏-商品
    */
    myfavoritesProduct(params: { pageNo?: number, pageSize?: number }): Promise<PageList<ProductEsInfo>> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/action/myfavorites-product`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心我的收藏-店铺
    */
    myfavoritesShop(params: { pageNo?: number, pageSize?: number }): Promise<PageList<ShopModel>> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/action/myfavorites-shop`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心课程播放历史记录
    */
    myhistory(params: { pageNo?: number, pageSize?: number }): Promise<PageList<CourseChapterVO>> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/action/myhistory`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心我的个人信息
    */
    get(params: { id: number }): Promise<PersonalInfoVO> {
      return httpGet(`/nutrition/v1.0/pt/personal-center/${params.id}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  sysNotices: {
    /**
    * APP端查询详情
    */
    get(params: { kid: number }): Promise<SysNotice> {
      return httpGet(`/nutrition/v1.0/pb/sys-notices/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  customers: {
    /**
    * 获取客服地址信息
    */
    info(params: { customerType: string, pageType: string, resourceId?: string }): Promise<CustomerInfoVO> {
      return httpGet(`/nutrition/v1.0/pt/customers/action/info`,  {params} ).then((res:any) => res.data.data)
    },
  },
  foodBindTags: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<FoodBindTag>> {
      return httpGet(`/nutrition/v1.0/pt/food-bind-tags/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  foodTags: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<FoodTag>> {
      return httpGet(`/nutrition/v1.0/pt/food-tags/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  imChatrooms: {
    /**
    * 查询聊天室信息
    */
    get(params: { needOnlineUserCount: boolean, roomid: number }): Promise<ImChatRoomEx> {
      return httpGet(`/nutrition/v1.0/pt/im-chatrooms`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 聊天室整体禁言
    */
    mute(mute: ImChatRoomMute): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pt/im-chatrooms/action/mute`, mute).then((res:any) => res.data.data)
    },
  },
  lectureLiveChatRooms: {
    /**
    * 服务端关闭聊天室
    */
    close(chatRoom: LectureLiveChatRoom): Promise<boolean> {
      return httpPut(`/nutrition/v1.0/pt/lecture-live-chat-rooms/action/close`, chatRoom).then((res:any) => res.data.data)
    },
  },
  lecturerAnswers: {
    /**
    * 服务端新增回答
    */
    post(lecturerAnswer: LecturerAnswer): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pt/lecturer-answers`, lecturerAnswer).then((res:any) => res.data.data)
    },
  },
  lecturerQuestions: {
    /**
    * 服务端新增问题
    */
    post(lecturerQuestion: LecturerQuestion): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pt/lecturer-questions`, lecturerQuestion).then((res:any) => res.data.data)
    },
    /**
    * 服务端讲师我的问题列表
    */
    list(params: { liveId?: number, pageNo?: number, pageSize?: number }): Promise<PageList<LecturerQuestionVO>> {
      return httpGet(`/nutrition/v1.0/pt/lecturer-questions/action/list`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 服务端用户问题列表及回复
    */
    listbylecturer(params: { lecturerId: number, liveId?: number, pageNo?: number, pageSize?: number }): Promise<PageList<LectureFAQ>> {
      return httpGet(`/nutrition/v1.0/pt/lecturer-questions/action/listbylecturer`,  {params} ).then((res:any) => res.data.data)
    },
  },
  newsKeywords: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<NewsKeyword>> {
      return httpGet(`/nutrition/v1.0/pt/news-keywords/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  userRecipe: {
    /**
    * 用户查询自己的某个食谱
    */
    get(params: { kid: number }): Promise<UserDietInfo> {
      return httpGet(`/nutrition/v1.0/pt/user-recipe`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 用户新增食谱
    */
    post(userRecipesDTO: UserRecipesDTO): Promise<number> {
      return httpPost(`/nutrition/v1.0/pt/user-recipe`, userRecipesDTO).then((res:any) => res.data.data)
    },
    /**
    * 用户修改食谱
    */
    put(userRecipesDTO: UserRecipesDTO): Promise<boolean> {
      return httpPut(`/nutrition/v1.0/pt/user-recipe`, userRecipesDTO).then((res:any) => res.data.data)
    },
    /**
    * 删除自己的用户食谱
    */
    delete(params: { kid: number }): Promise<boolean> {
      return httpDelete(`/nutrition/v1.0/pt/user-recipe/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  userRecipeComp: {
    /**
    * 删除自己的食谱食材
    */
    delete(params: { kid: number }): Promise<boolean> {
      return httpDelete(`/nutrition/v1.0/pt/user-recipe-comp/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  userRecipes: {
    /**
    * 用户查询自己的用户食谱
    */
    get(): Promise<List<UserDietInfo>> {
      return httpGet(`/nutrition/v1.0/pt/user-recipes`).then((res:any) => res.data.data)
    },
    /**
    * 用户查询自己的用户食谱数量
    */
    getTotal(): Promise<number> {
      return httpGet(`/nutrition/v1.0/pt/user-recipes/action/getTotal`).then((res:any) => res.data.data)
    },
  },
  userRecipesComps: {
    /**
    * 用户新增食谱食材
    */
    create(userRecipesComp: UserRecipesComp): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pt/user-recipes-comps/action/create`, userRecipesComp).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<UserRecipesComp>> {
      return httpGet(`/nutrition/v1.0/pt/user-recipes-comps/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  userRecipesInfos: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<UserRecipesInfo>> {
      return httpGet(`/nutrition/v1.0/pt/user-recipes-infos/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  userSuggestionInfos: {
    /**
    * APP端新增意见反馈
    */
    add(userSuggestionInfo: UserSuggestionInfo): Promise<boolean> {
      return httpPost(`/nutrition/v1.0/pt/user-suggestion-infos/action/add`, userSuggestionInfo).then((res:any) => res.data.data)
    },
  },
}
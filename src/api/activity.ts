import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface ActivityConferenceConfig {
  limitFlag?: boolean
  timeFlag?: boolean
}

export interface ActivityEnrollVO {
  /** 活动业务标识 */
  activityId?: number
  /** 审核时间 */
  authTime?: string
  /** 用户ID */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 昵称 */
  userNickName?: string
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

export interface ActivityTopVO {
  /** 活动ID */
  activityId?: number
  /** 打卡数 */
  daily?: number
  /** 打卡修改时间 */
  dailyUpdateDate?: string
  /** 话题评论数 */
  dynamicComment?: number
  /** 话题ID */
  dynamicId?: number
  /** 话题点赞数 */
  dynamicLike?: number
  /** 话题名称 */
  dynamicTitle?: string
  /** 用户ID */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 昵称 */
  userNickName?: string
  /** 用户手机号 */
  userPhone?: string
}

export interface Activity {
  /** 活动开始时间 */
  activityBeginTime?: string
  /** 活动结束时间 */
  activityEndTime?: string
  /** 活动名称 */
  activityName?: string
  /** 活动时间是否显示，0显示1不显示 */
  activityTimeShowFlag?: number
  /** 活动类型，mall商城social社交 */
  activityType?: string
  /** 背景色 */
  backColor?: string
  /** 底部名称 */
  bottomName?: string
  /** 底部是否显示 */
  bottomShowFlag?: number
  /** 底部跳转类型 */
  bottomType?: string
  /** 底部跳转地址 */
  bottomUrl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识，0未删除1已删除 */
  delFlag?: number
  /** 头部图片地址 */
  headImage?: string
  /** 头部跳转类型 */
  headType?: string
  /** 头部跳转地址 */
  headUrl?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 规则内容 */
  ruleContent?: string
  /** 规则是否显示，0显示1不显示 */
  ruleShowFlag?: number
  /** 上下架标识，0上架1下架 */
  shelveFlag?: number
  /** 报名开始时间 */
  signupBeginTime?: string
  /** 报名审核状态，-1未报名0未审核1已审核2被拒绝 */
  signupCheckFlag?: number
  /** 报名是否需要审核，0是1否 */
  signupCheckType?: number
  /** 报名结束时间 */
  signupEndTime?: string
  /** 报名时间是否显示，0显示1不显示 */
  signupTimeShowFlag?: number
}

export interface ActivityVO {
  /** 活动开始时间 */
  activityBeginTime?: string
  /** 活动结束时间 */
  activityEndTime?: string
  /** 活动名称 */
  activityName?: string
  /** 活动时间是否显示，0显示1不显示 */
  activityTimeShowFlag?: number
  /** 活动类型，mall商城social社交 */
  activityType?: string
  /** 背景色 */
  backColor?: string
  /** 底部名称 */
  bottomName?: string
  /** 底部是否显示 */
  bottomShowFlag?: number
  /** 底部跳转类型 */
  bottomType?: string
  /** 底部跳转地址 */
  bottomUrl?: string
  /** 审核通过数 */
  checks?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识，0未删除1已删除 */
  delFlag?: number
  /** 头部图片地址 */
  headImage?: string
  /** 头部跳转类型 */
  headType?: string
  /** 头部跳转地址 */
  headUrl?: string
  /** 报名数 */
  joins?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 规则内容 */
  ruleContent?: string
  /** 规则是否显示，0显示1不显示 */
  ruleShowFlag?: number
  /** 上下架标识，0上架1下架 */
  shelveFlag?: number
  /** 审核通过前几位用户图像 */
  sigChecks?: string[]
  /** 报名开始时间 */
  signupBeginTime?: string
  /** 报名审核状态，-1未报名0未审核1已审核2被拒绝 */
  signupCheckFlag?: number
  /** 报名是否需要审核，0是1否 */
  signupCheckType?: number
  /** 报名结束时间 */
  signupEndTime?: string
  /** 报名时间是否显示，0显示1不显示 */
  signupTimeShowFlag?: number
  /** 报名前几位用户图像 */
  signups?: string[]
  /** 活动的标签集合 */
  tags?: ActivityTag[]
}

export interface ActivityTag {
  /** 所属活动kid */
  activityKid?: number
  /** 内容排列方式 */
  contentArrange?: string
  /** 内容形式 */
  contentType?: string
  /** 标签的内容集合 */
  contents?: ActivityContent[]
  /** 创建时间 */
  createDate?: string
  /** 删除标识，0未删除1已删除 */
  delFlag?: number
  /** 跳转类型 */
  jumpType?: number
  /** 更多内容跳转地址 */
  jumpUrl?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 标签名是否显示，0显示1不显示 */
  nameShowFlag?: number
  /** 快捷导航栏是否显示，0显示1不显示 */
  navShowFlag?: number
  /** 排序号 */
  sort?: number
  /** 标签名称 */
  tagName?: string
  /** 活动的排行集合 */
  tops?: ActivityTopVO[]
}

export interface ActivityContent {
  /** 内容 */
  content?: string
  /** 内容形式 */
  contentType?: number
  /** 创建时间 */
  createDate?: string
  /** 删除标识，0未删除1已删除 */
  delFlag?: number
  /** 图片地址 */
  imageUrl?: string
  /** 跳转类型 */
  jumpType?: string
  /** 跳转地址 */
  jumpUrl?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 排序号 */
  sort?: number
  /** 所属标签kid */
  tagKid?: number
}
export default {
  activityConferences: {
    /**
    * APP领取
    */
    create(params: { activity_code?: string, code: string, phone: string }): Promise<boolean> {
      return httpGet(`/activity/v1.0/pb/activity-conferences/action/create`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP查询活动详情
    */
    detail(params: { activity_code?: string }): Promise<ActivityConferenceConfig> {
      return httpGet(`/activity/v1.0/pb/activity-conferences/action/detail`,  {params} ).then((res:any) => res.data.data)
    },
  },
  activityEnrolls: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { activityId: number, pageNo?: number, pageSize?: number, status?: number }): Promise<PageList<ActivityEnrollVO>> {
      return httpGet(`/activity/v1.0/pb/activity-enrolls/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端报名处理
    */
    enroll(params: { activityId: number }): Promise<boolean> {
      return httpPost(`/activity/v1.0/pt/activity-enrolls/action/enroll`,  {params} ).then((res:any) => res.data.data)
    },
  },
  activityTops: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { activityId: number, pageNo?: number, pageSize?: number, type: string }): Promise<PageList<ActivityTopVO>> {
      return httpGet(`/activity/v1.0/pb/activity-tops/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  activitys: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<Activity>> {
      return httpGet(`/activity/v1.0/pb/activitys/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询详情
    */
    get(params: { kid: number }): Promise<ActivityVO> {
      return httpGet(`/activity/v1.0/pb/activitys/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/activity/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  activityContents: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<ActivityContent>> {
      return httpGet(`/activity/v1.0/pt/activity-contents/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  activityTags: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<ActivityTag>> {
      return httpGet(`/activity/v1.0/pt/activity-tags/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
}
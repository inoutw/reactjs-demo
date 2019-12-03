import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface CommentContentDTO {
  /** 审核标识（0无需审核/审核通过，1待审核，2审核拒绝） */
  auditFlag?: number
  behaviorResult?: UserBehaviorResult
  /** 评论类型（1 正常评论，2马甲评论，3灌水（机器人）评论 */
  commentType?: string
  /** 评论内容 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 评论作者唯一标识 */
  createUserId?: string
  /** 评论作者用户类型（1正常用户，2马甲用户，3机器人用户） */
  createUserType?: string
  /** 当前用户对象 */
  creator?: CommentUserDTO
  /** 删除标识 */
  delFlag?: number
  /** 热度值 */
  hotValue?: number
  /** 评论唯一标识 */
  kid?: number
  /** 父级用户对象 */
  parent?: CommentUserDTO
  /** 父级评论标识 */
  parentKid?: number
  /** 父级评论作者标识 */
  parentUserId?: string
  /** 评论作者用户类型（1正常用户，2马甲用户，3机器人用户） */
  parentUserType?: string
  /** 根级评论标识 */
  rootKid?: number
  statisticResult?: StatisticResult
  /** 子评论总数 */
  subTotalCount?: number
  /** 子评论集合 */
  subs?: CommentContentDTO[]
  /** 目标资源唯一标识 */
  targetKid?: string
  /** 目标资源类型 */
  targetType?: string
  /** 目标资源作者标识 */
  targetUserId?: string
  /** 租户唯一标识 */
  tenantId?: string
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

export interface CommentUserDTO {
  /** 头像地址 */
  headImgUrl?: string
  /** 用户角色 */
  roles?: UserRole[]
  /** 用户唯一标识 */
  userId?: string
  /** 用户昵称 */
  userNickName?: string
}

export interface UserRole {
  /** 角色 */
  role?: string
  /** 角色头衔 */
  roleTitle?: string
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

export interface CommentInputDTO {
  /** 审核类型(0无需审核 1待审核) */
  auditFlag?: number
  /** 评论类型 */
  commentType?: string
  /** 评论内容 */
  content?: string
  /** 父级评论标识 */
  parentKid?: number
  /** 目标资源唯一标识 */
  targetKid?: string
  /** 目标资源类型 */
  targetType?: string
  /** 目标资源作者标识 */
  targetUserId?: string
}

export interface CommentQueryDTO {
  auditFlag?: number
  commentKids?: number[]
  commentTypes?: string[]
  content?: string
  endTime?: string
  includeReply?: boolean
  pageNo?: number
  pageSize?: number
  startTime?: string
  targetKid?: string
  targetType?: string
  targetUserId?: string
  tenantId?: string
  userId?: string
}

export interface UserBehaviorInput {
  /** 行为类型（自定义） */
  actionType?: string
  /** 目标资源关联唯一标识（扩展） */
  relationKid?: string
  /** 是否同步更新（如需要及时反馈结果数据，则为true，false为先内存打点再同步更新,非实时统计要求建议false */
  sync?: boolean
  /** 目标资源唯一标识 */
  targetKid?: string
  /** 目标资源类型（和业务方moduleCode保持一致） */
  targetType?: string
  /** 目标资源作者标识 */
  targetUserId?: string
}

export interface UserBehaviorDto {
  /** 目标资源ID */
  targetKids?: string[]
  /** 目标资源类型 */
  targetType?: string
}
export default {
  commentInfo: {
    /**
    * 查询评论子评论内容
    */
    searchChild(params: { commentKid: string, pageNo?: number, pageSize?: number }): Promise<PageList<CommentContentDTO>> {
      return httpGet(`/platform-behavior/v1.0/pb/comment-info/action/search-child`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询资源预览评论内容(首页)
    */
    searchPreview(params: { schemeType?: string, size?: number, targetKid: string[], targetType: string }): Promise<Map<string,PageList<CommentContentDTO>>> {
      return httpGet(`/platform-behavior/v1.0/pb/comment-info/action/search-preview`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询资源根评论内容
    */
    searchRoot(params: { pageNo?: number, pageSize?: number, schemeType?: string, targetKid: string, targetType: string }): Promise<PageList<CommentContentDTO>> {
      return httpGet(`/platform-behavior/v1.0/pb/comment-info/action/search-root`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 添加评论(用户)
    */
    post(inputDTO: CommentInputDTO): Promise<number> {
      return httpPost(`/platform-behavior/v1.0/pt/comment-info`, inputDTO).then((res:any) => res.data.data)
    },
    /**
    * 查询资源作者是自己的评论
    */
    searchAuthor(dto: CommentQueryDTO): Promise<PageList<CommentContentDTO>> {
      return httpPost(`/platform-behavior/v1.0/pt/comment-info/action/search-author`, dto).then((res:any) => res.data.data)
    },
    /**
    * 查询自己评论内容
    */
    searchUser(dto: CommentQueryDTO): Promise<PageList<CommentContentDTO>> {
      return httpPost(`/platform-behavior/v1.0/pt/comment-info/action/search-user`, dto).then((res:any) => res.data.data)
    },
    /**
    * 删除评论(用户)
    */
    delete(params: { commentKid: string }): Promise<number> {
      return httpDelete(`/platform-behavior/v1.0/pt/comment-info/${params.commentKid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/platform-behavior/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  statistic: {
    /**
    * 获取打点计数信息(单条-明细)
    */
    customArgs(params: { infoKey: string, subArgs?: string[], targetKid: string, targetType: string }): Promise<number> {
      return httpGet(`/platform-behavior/v1.0/pb/statistic/action/custom-args`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 获取打点计数信息(批量)
    */
    multiple(params: { infoKeys?: string[], targetKids: string[], targetType: string }): Promise<List<StatisticResult>> {
      return httpGet(`/platform-behavior/v1.0/pb/statistic/action/multiple`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 获取打点计数信息(单条)
    */
    simple(params: { infoKeys?: string[], targetKid: string, targetType: string }): Promise<StatisticResult> {
      return httpGet(`/platform-behavior/v1.0/pb/statistic/action/simple`,  {params} ).then((res:any) => res.data.data)
    },
  },
  userBehavior: {
    /**
    * 添加关系
    */
    post(body: UserBehaviorInput): Promise<number> {
      return httpPost(`/platform-behavior/v1.0/pt/user-behavior`, body).then((res:any) => res.data.data)
    },
    /**
    * 取消关系
    */
    delete(body: UserBehaviorInput): Promise<number> {
      return httpDelete(`/platform-behavior/v1.0/pt/user-behavior`, body).then((res:any) => res.data.data)
    },
    /**
    * 查看通用关系 (用户）
    */
    simple(userBehaviorDto: UserBehaviorDto): Promise<List<UserBehaviorResult>> {
      return httpPost(`/platform-behavior/v1.0/pt/user-behavior/action/simple`, userBehaviorDto).then((res:any) => res.data.data)
    },
  },
}
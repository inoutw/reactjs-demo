import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
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
  cover?: string
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
  /** 资源url */
  jsonLink?: string
  /** kid */
  kid?: number
  /** 外链地址 */
  link?: string
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

export interface ClassifyInfo {
  /** 分类编码 */
  classifyCode?: string
  /** 分类介绍 */
  classifyIntroduce?: string
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
  /** 热门标识 0:否 1:是 */
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
  /** 分类推荐 0是不推荐 1是推荐 */
  recommendFlag?: number
  /** 上下架标识 0:上架 1:下架 */
  shaveFlag?: number
  /** 是否展示打卡 ,0 不展示 1展示 */
  showDaily?: number
  /** 排序值 */
  sort?: number
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

export interface GroupDynamicVO {
  /** 是否评论（0否，1是） */
  commentFlag?: number
  /** 评论数 */
  comments?: number
  /** 动态内容(json)，包括文本和图片 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 是否收藏（0否，1是） */
  favoriteFlag?: number
  /** 收藏数 */
  favorites?: number
  /** 当前用户是否关注发布者,-1本人,0未关注,1已关注,3互相关注 */
  followFlag?: number
  /** 是否仅小组成员可见 0:否 1:是 */
  groupFlag?: number
  /** 所属小组KID */
  groupKid?: number
  /** 热门 0:不热门 1:热门 */
  hotFlag?: number
  /** 动态图片 */
  images?: string
  /** 当前用户是否是动态发布小组的成员,0:不是 1:是 */
  inGroupFlag?: number
  /** 唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 是否点赞（0否，1是） */
  likeFlag?: number
  /** 点赞数 */
  likes?: number
  /** 屏蔽 0:不屏蔽 1:屏蔽 */
  shieldFlag?: number
  /** 动态文本 */
  texts?: string
  /** 动态标题 */
  title?: string
  /** 置顶 0:不置顶 1:置顶 */
  topFlag?: number
  /** 创建人ID */
  userId?: number
  /** 创建人图像 */
  userImg?: string
  /** 创建人名称 */
  userName?: string
  /** 创建人昵称 */
  userNickName?: string
  /** 浏览数 */
  views?: number
}

export interface GroupDynamicPageVO {
  /** 是否评论（0否，1是） */
  commentFlag?: number
  /** 评论数 */
  comments?: number
  /** 创建时间 */
  createDate?: string
  /** 是否收藏（0否，1是） */
  favoriteFlag?: number
  /** 收藏数 */
  favorites?: number
  /** 是否仅小组成员可见 0:否 1:是 */
  groupFlag?: number
  /** 所属小组KID */
  groupKid?: number
  /** 所属小组名称 */
  groupName?: string
  /** 动态图片 */
  images?: string
  /** 唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 是否点赞（0否，1是） */
  likeFlag?: number
  /** 点赞数 */
  likes?: number
  /** 屏蔽 0:不屏蔽 1:屏蔽 */
  shieldFlag?: number
  /** 动态标题 */
  title?: string
  /** 置顶 0:不置顶 1:置顶 */
  topFlag?: number
  /** 创建人ID */
  userId?: number
  /** 创建人图像 */
  userImg?: string
  /** 创建人名称 */
  userName?: string
  /** 创建人昵称 */
  userNickName?: string
  /** 浏览数 */
  views?: number
}

export interface GroupUserVO {
  /** 创建时间 */
  createDate?: string
  /** 删除标识 0正常 1已删除 */
  delFlag?: number
  /** 关联小组id */
  groupId?: number
  /** 小组用户角色 0 普通用户 1 管理员 2 组长 */
  groupUserRole?: number
  /** 小组用户角色 0 普通用户 1 管理员 2 组长 */
  groupUserRoleName?: string
  kid?: number
  /** 状态(0无关系,1我关注的,2关注我的,3互相关注) */
  status?: number
  /** 成员状态 0正常 1移出 */
  useFlag?: number
  userId?: number
  /** 头像 */
  userImg?: string
  /** 用户手机号 */
  userPhone?: string
  /** 关联app用户id姓名 */
  username?: string
  /** 马甲状态 0-普通用户 1-马甲 */
  vestFlagName?: string
}

export interface GroupAppHomeVO {
  /** 今日打卡人数 */
  clockInCount?: number
  /** 小组背景卡 格式：#000000 */
  groupBackgroundCard?: string
  /** 小组简介 */
  groupDescribe?: string
  /** 小组头像 */
  groupImage?: string
  /** 小组名称 */
  groupName?: string
  /** 小组公告 */
  groupNotice?: string
  /** 小组类别 */
  groupTypeName?: string
  /** 小组成员数量 */
  groupUserCount?: number
  /** 小组成员昵称 */
  groupUserNickname?: string
  /** 小组用户角色 0 普通用户 1 管理员 2 组长 */
  groupUserRole?: number
  /** 小组KID */
  kid?: number
  /** 是否展示打卡 ,0 不展示 1展示 */
  showDaily?: number
  /** 最新加入的5位组员 */
  users?: GroupAppUserVO[]
  /** 当前用户加入状态 1 已加入 0未加入 */
  wasJoin?: number
}

export interface GroupAppUserVO {
  /** kid */
  kid?: number
  /** 组员头像 */
  userImage?: string
}

export interface GroupAppPopVO {
  /** 话题发布时间 */
  createDate?: string
  /** 小组背景卡 格式：#000000 */
  groupBackgroundCard?: string
  /** 小组简介 */
  groupDescribe?: string
  /** 最新话题kid */
  groupDynamicKid?: number
  /** 小组头像 */
  groupImage?: string
  /** 小组名称 */
  groupName?: string
  /** 小组公告 */
  groupNotice?: string
  /** 小组成员数量 */
  groupUserCount?: number
  /** 小组成员昵称 */
  groupUserNickname?: string
  /** 小组用户角色 0 普通用户 1 管理员 2 组长 */
  groupUserRole?: number
  /** 小组用户前三头像 */
  joinUserImage?: string[]
  /** 小组KID */
  kid?: number
  /** 话题发布计时 单位秒 */
  second?: number
  /** 话题标题 */
  title?: string
  /** 用户头像 */
  userImage?: string
  /** 用户名 */
  userName?: string
  /** 当前用户加入状态 1 已加入 0未加入 */
  wasJoin?: number
}

export interface GroupAppBaseVO {
  /** 小组背景卡 格式：#000000 */
  groupBackgroundCard?: string
  /** 小组简介 */
  groupDescribe?: string
  /** 小组头像 */
  groupImage?: string
  /** 小组名称 */
  groupName?: string
  /** 小组公告 */
  groupNotice?: string
  /** 小组成员数量 */
  groupUserCount?: number
  /** 小组成员昵称 */
  groupUserNickname?: string
  /** 小组用户角色 0 普通用户 1 管理员 2 组长 */
  groupUserRole?: number
  /** 小组KID */
  kid?: number
  /** 当前用户加入状态 1 已加入 0未加入 */
  wasJoin?: number
}

export interface HelpDetails {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 状态 0是启用 1是禁用 */
  disabledFlag?: number
  /** 帮助详情内容 */
  helpContent?: string
  /** 帮助详情标题 */
  helpTitle?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 类型ID */
  typeId?: number
}

export interface HelpDetailsVO {
  contentStatusName?: string
  contentUrl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 状态 0是启用 1是禁用 */
  disabledFlag?: number
  /** 帮助详情内容 */
  helpContent?: string
  /** 帮助详情标题 */
  helpTitle?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 类型ID */
  typeId?: number
  typeName?: string
}

export interface HelpType {
  /** 问题数量 */
  askNum?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 状态 0是启用 1是禁用 */
  disabledFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 排序值 */
  sort?: number
  /** 类型名称 */
  typeName?: string
}

export interface NutritionLibrary {
  /** 基本问题 */
  basicIssue?: string
  /** 内容状态  0是待添加  1是已添加 */
  contentStatus?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 描述 */
  description?: string
  /** 膳食营养 */
  dietaryNutrition?: string
  /** 疾病防治 */
  diseasePrevention?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 问卷编码 */
  libraryCode?: string
  /** 问答库名称 */
  libraryName?: string
  /** 其他 */
  other?: string
  /** 分类推荐 0是不推荐 1是推荐 */
  recommendFlag?: number
  /** 标签 */
  tag?: string
}

export interface GroupDynamicAddVO {
  /** 动态内容(json)，包括文本和图片 */
  content?: string
  /** 是否仅小组成员可见(0否1是) */
  groupFlag?: number
  /** 所属小组KID */
  groupKids?: number[]
  /** 动态图片(逗号分隔) */
  images?: string
  /** 动态文本 */
  texts?: string
  /** 动态标题 */
  title?: string
}

export interface GroupDynamic {
  /** 动态内容(json)，包括文本和图片 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 是否仅小组成员可见 0:否 1:是 */
  groupFlag?: number
  /** 所属小组KID */
  groupKid?: number
  /** 热门 0:不热门 1:热门 */
  hotFlag?: number
  /** 热度值 */
  hotValue?: number
  /** 动态图片 */
  images?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 屏蔽 0:不屏蔽 1:屏蔽 */
  shieldFlag?: number
  /** 动态文本 */
  texts?: string
  /** 动态标题 */
  title?: string
  /** 置顶 0:不置顶 1:置顶 */
  topFlag?: number
}

export interface GroupDynamicEditDTO {
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 所属小组KID */
  groupKid?: number
  /** 热门 0:不热门 1:热门 */
  hotFlag?: number
  /** 唯一ID */
  kid?: number
  /** 屏蔽 0:不屏蔽 1:屏蔽 */
  shieldFlag?: number
  /** 置顶 0:不置顶 1:置顶 */
  topFlag?: number
}

export interface GroupUser {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0正常 1已删除 */
  delFlag?: number
  /** 关联小组id */
  groupId?: number
  /** 小组用户角色 0 普通用户 1 管理员 2 组长 */
  groupUserRole?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 打卡日期 */
  markDate?: string
  /** 成员状态 0正常 1移出 */
  useFlag?: number
  /** 关联app用户id */
  userId?: number
  /** 昵称 */
  userNickName?: string
  /** 马甲状态 0-普通用户 1-马甲 */
  vestFlag?: number
}

export interface GroupAppDetialVO {
  /** 小组背景卡 格式：#000000 */
  groupBackgroundCard?: string
  /** 小组简介 */
  groupDescribe?: string
  /** 小组头像 */
  groupImage?: string
  /** 小组名称 */
  groupName?: string
  /** 小组公告 */
  groupNotice?: string
  /** 小组类别 */
  groupTypeName?: string
  /** 小组成员数量 */
  groupUserCount?: number
  /** 小组成员昵称 */
  groupUserNickname?: string
  /** 小组用户角色 0 普通用户 1 管理员 2 组长 */
  groupUserRole?: number
  /** 小组KID */
  kid?: number
  /** 当前用户加入状态 1 已加入 0未加入 */
  wasJoin?: number
}

export interface GroupAppJoinListVO {
  /** 加入的小组数量 */
  count?: number
  /** 小组列表 */
  groupList?: GroupAppBaseVO[]
}

export interface GroupAppJoinAllListVO {
  /** 小组数量 */
  count?: number
  /** 小组列表 */
  groupList?: GroupAppRoleVO[]
}

export interface GroupAppRoleVO {
  /** 小组背景卡 格式：#000000 */
  groupBackgroundCard?: string
  /** 小组简介 */
  groupDescribe?: string
  /** 小组头像 */
  groupImage?: string
  /** 小组名称 */
  groupName?: string
  /** 小组公告 */
  groupNotice?: string
  /** 小组成员数量 */
  groupUserCount?: number
  /** 小组成员昵称 */
  groupUserNickname?: string
  /** 小组用户角色 0 普通用户 1 管理员 2 组长 */
  groupUserRole?: number
  /** 小组KID */
  kid?: number
  /** 使用状态 0启用 1禁用 */
  useFlag?: number
  /** 当前用户加入状态 1 已加入 0未加入 */
  wasJoin?: number
}

export interface GroupAppAddDTO {
  /** 小组背景卡 格式：#000000 */
  groupBackgroundCard?: string
  /** 小组简介 */
  groupDescribe?: string
  /** 小组头像 */
  groupImage?: string
  /** 小组名称 */
  groupName?: string
  /** 小组公告 */
  groupNotice?: string
  /** 小组类别 关联id */
  groupTypeKid?: number
  /** 小组成员昵称 */
  groupUserNickname?: string
}

export interface Group {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0正常 1已删除 */
  delFlag?: number
  /** 小组背景卡 */
  groupBackgroundCard?: string
  /** 小组简介 */
  groupDescribe?: string
  /** 小组头像 */
  groupImage?: string
  /** 小组名称 */
  groupName?: string
  /** 小组公告 */
  groupNotice?: string
  /** 小组类别 关联id */
  groupTypeKid?: number
  /** 小组成员数量 */
  groupUserCount?: number
  /** 小组成员昵称 */
  groupUserNickname?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 推荐排序 */
  sortNum?: number
  /** 使用状态 0启用 1禁用 */
  useFlag?: number
}

export interface GroupAppUpdateDTO {
  /** 小组简介 */
  groupDescribe?: string
  /** 小组头像 */
  groupImage?: string
  /** 小组名称 */
  groupName?: string
  /** 小组公告 */
  groupNotice?: string
  /** 小组成员昵称 */
  groupUserNickname?: string
  /** 小组Kid */
  kid?: number
}

export interface SpiderSource {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0正常 1已删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后更新时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 最后更新时间 */
  projectName?: string
  /** 0上架1下架 */
  shelveFlag?: number
  /** 来源 */
  sourceName?: string
  /** 租户ID nutrition-plan */
  tenantId?: string
}

export interface UserDynamic {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 动态KID */
  groupDynamicId?: number
  /** 小组ID */
  groupId?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 用户ID */
  userId?: number
}
export default {
  articles: {
    /**
    * app资讯详情
    */
    get(params: { kid: number }): Promise<NewsInfoVO> {
      return httpGet(`/cms/v1.0/pb/articles/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  classifyInfos: {
    /**
    * APP首页小组分类
    */
    homePage(): Promise<PageList<ClassifyInfo>> {
      return httpGet(`/cms/v1.0/pb/classify-infos/action/home-page`).then((res:any) => res.data.data)
    },
    /**
    * APP更多小组分类
    */
    morePage(params: { classifyName?: string, delFlag?: number, pageNo?: number, pageSize?: number }): Promise<PageList<ClassifyInfo>> {
      return httpGet(`/cms/v1.0/pb/classify-infos/action/more-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<ClassifyInfo>> {
      return httpGet(`/cms/v1.0/pt/classify-infos/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  groupDynamics: {
    /**
    * APP查询详情
    */
    detail(params: { kid: number }): Promise<GroupDynamicVO> {
      return httpGet(`/cms/v1.0/pb/group-dynamics/action/detail`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 小组详情页最热动态
    */
    hot(params: { dynamicKid?: number, groupId: number, pageNo?: number, pageSize?: number }): Promise<PageList<GroupDynamicPageVO>> {
      return httpGet(`/cms/v1.0/pb/group-dynamics/action/hot`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询组内
    */
    listGroup(params: { dynamicKid?: string, groupKid?: string, ops?: string, pageNo?: number, pageSize?: number }): Promise<PageList<GroupDynamicPageVO>> {
      return httpGet(`/cms/v1.0/pb/group-dynamics/action/list-group`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询热门
    */
    listHot(params: { pageNo?: number, pageSize?: number }): Promise<PageList<GroupDynamicPageVO>> {
      return httpGet(`/cms/v1.0/pb/group-dynamics/action/list-hot`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询最新
    */
    listNew(params: { pageNo?: number, pageSize?: number }): Promise<PageList<GroupDynamicPageVO>> {
      return httpGet(`/cms/v1.0/pb/group-dynamics/action/list-new`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询个人动态
    */
    listPersonal(params: { pageNo?: number, pageSize?: number, userId: number }): Promise<PageList<GroupDynamicPageVO>> {
      return httpGet(`/cms/v1.0/pb/group-dynamics/action/list-personal`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP批量新增
    */
    batchCreate(groupDynamic: GroupDynamicAddVO): Promise<number> {
      return httpPost(`/cms/v1.0/pt/group-dynamics/action/batch-create`, groupDynamic).then((res:any) => res.data.data)
    },
    /**
    * APP新增
    */
    create(groupDynamic: GroupDynamic): Promise<boolean> {
      return httpPost(`/cms/v1.0/pt/group-dynamics/action/create`, groupDynamic).then((res:any) => res.data.data)
    },
    /**
    * APP删除
    */
    delete(params: { kid: number }): Promise<boolean> {
      return httpGet(`/cms/v1.0/pt/group-dynamics/action/delete`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询关注
    */
    listFollow(params: { pageNo?: number, pageSize?: number }): Promise<PageList<GroupDynamicPageVO>> {
      return httpGet(`/cms/v1.0/pt/group-dynamics/action/list-follow`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 个人中心-我的收藏-话题
    */
    myfavorites(params: { pageNo?: number, pageSize?: number }): Promise<PageList<GroupDynamicPageVO>> {
      return httpGet(`/cms/v1.0/pt/group-dynamics/action/myfavorites`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP置顶/屏蔽
    */
    update(editDTO: GroupDynamicEditDTO): Promise<boolean> {
      return httpPut(`/cms/v1.0/pt/group-dynamics/action/update`, editDTO).then((res:any) => res.data.data)
    },
  },
  groupUsers: {
    /**
    * 小组成员打卡查看接口
    */
    dailyUser(params: { dailyStatus: number, groupId: number, pageNo?: number, pageSize?: number }): Promise<PageList<GroupUserVO>> {
      return httpGet(`/cms/v1.0/pb/group-users/action/daily-user`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 小组成员查询接口
    */
    groupMembers(params: { kid: number, pageNo?: number, pageSize?: number }): Promise<PageList<GroupUserVO>> {
      return httpGet(`/cms/v1.0/pb/group-users/action/group-Members`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 小组设置/取消管理员接口
    */
    adminUpdate(groupUser: GroupUser): Promise<boolean> {
      return httpPut(`/cms/v1.0/pt/group-users/action/admin-update`, groupUser).then((res:any) => res.data.data)
    },
    /**
    * app 申请加入小组
    */
    appJoin(params: { groupKid: number }): Promise<boolean> {
      return httpGet(`/cms/v1.0/pt/group-users/action/app-join`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app 是否有加入小组
    */
    appWasjoin(): Promise<boolean> {
      return httpGet(`/cms/v1.0/pt/group-users/action/app-wasjoin`).then((res:any) => res.data.data)
    },
    /**
    * 小组成员退出接口
    */
    exitGroup(groupUser: GroupUser): Promise<boolean> {
      return httpPut(`/cms/v1.0/pt/group-users/action/exit-group`, groupUser).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<GroupUser>> {
      return httpGet(`/cms/v1.0/pt/group-users/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 移除小组成员接口
    */
    removeUser(groupUser: GroupUser): Promise<boolean> {
      return httpPut(`/cms/v1.0/pt/group-users/action/remove-user`, groupUser).then((res:any) => res.data.data)
    },
    /**
    * 小组成员管理查询接口
    */
    searchMembers(params: { kid: number, pageNo?: number, pageSize?: number }): Promise<PageList<GroupUserVO>> {
      return httpGet(`/cms/v1.0/pt/group-users/action/search-Members`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 小组转让接口
    */
    transferUser(groupUser: GroupUser): Promise<boolean> {
      return httpPut(`/cms/v1.0/pt/group-users/action/transfer-user`, groupUser).then((res:any) => res.data.data)
    },
  },
  groups: {
    /**
    * app主页
    */
    appHome(params: { groupKid: number }): Promise<GroupAppHomeVO> {
      return httpGet(`/cms/v1.0/pb/groups/action/app-home`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app 本周人气小组
    */
    appPop(): Promise<List<GroupAppPopVO>> {
      return httpGet(`/cms/v1.0/pb/groups/action/app-pop`).then((res:any) => res.data.data)
    },
    /**
    * h5 小组主页
    */
    htmlHome(params: { groupKid: number }): Promise<GroupAppHomeVO> {
      return httpGet(`/cms/v1.0/pb/groups/action/html-home`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app根据分类查询
    */
    listType(params: { pageNo?: number, pageSize?: number, typeKid: number }): Promise<PageList<GroupAppBaseVO>> {
      return httpGet(`/cms/v1.0/pb/groups/action/list-type`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app管理详情
    */
    appDetail(params: { groupKid: number }): Promise<GroupAppDetialVO> {
      return httpGet(`/cms/v1.0/pt/groups/action/app-detail`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app 关注--我加入的小组
    */
    appMyjoingroup(): Promise<GroupAppJoinListVO> {
      return httpGet(`/cms/v1.0/pt/groups/action/app-myjoingroup`).then((res:any) => res.data.data)
    },
    /**
    * app 关注--我加入的小组 --全部
    */
    appMyjoingroupAll(params: { pageNo: number, pageSize: number, roleType: number }): Promise<GroupAppJoinAllListVO> {
      return httpGet(`/cms/v1.0/pt/groups/action/app-myjoingroup-all`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app 关注--未加入小组
    */
    appNojoin(params: { pageNo?: number, pageSize?: number }): Promise<List<GroupAppBaseVO>> {
      return httpGet(`/cms/v1.0/pt/groups/action/app-nojoin`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app新增
    */
    create(groupAppAddDTO: GroupAppAddDTO): Promise<number> {
      return httpPost(`/cms/v1.0/pt/groups/action/create`, groupAppAddDTO).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<Group>> {
      return httpGet(`/cms/v1.0/pt/groups/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * app编辑
    */
    update(groupAppUpdateDTO: GroupAppUpdateDTO): Promise<boolean> {
      return httpPut(`/cms/v1.0/pt/groups/action/update`, groupAppUpdateDTO).then((res:any) => res.data.data)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/cms/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  helpDetailss: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number, typeId: number }): Promise<PageList<HelpDetails>> {
      return httpGet(`/cms/v1.0/pb/help-detailss/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 平台帮助查看
    */
    selectById(params: { kid: number }): Promise<HelpDetailsVO> {
      return httpGet(`/cms/v1.0/pb/help-detailss/action/selectById`,  {params} ).then((res:any) => res.data.data)
    },
  },
  helpTypes: {
    /**
    * 分类名称
    */
    findAll(): Promise<List<HelpType>> {
      return httpGet(`/cms/v1.0/pb/help-types/action/findAll`).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<HelpType>> {
      return httpGet(`/cms/v1.0/pb/help-types/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  nutritionLibrarys: {
    /**
    * 智慧营养问答库首页更多
    */
    homeMore(params: { pageNo?: number, pageSize?: number, tag: string }): Promise<PageList<NutritionLibrary>> {
      return httpGet(`/cms/v1.0/pb/nutrition-librarys/action/home-more`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 智慧营养问答库搜索
    */
    keyWord(params: { libraryName?: string }): Promise<List<NutritionLibrary>> {
      return httpGet(`/cms/v1.0/pb/nutrition-librarys/action/keyWord`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 智慧营养问答库首页展示
    */
    listPage(): Promise<PageList<NutritionLibrary>> {
      return httpGet(`/cms/v1.0/pb/nutrition-librarys/action/listPage`).then((res:any) => res.data.data)
    },
    /**
    * 智慧营养问答库标签展示
    */
    searchHome(): Promise<List<NutritionLibrary>> {
      return httpGet(`/cms/v1.0/pb/nutrition-librarys/action/search-home`).then((res:any) => res.data.data)
    },
    /**
    * 查看疾病信息
    */
    selectById(params: { kid: number }): Promise<NutritionLibrary> {
      return httpGet(`/cms/v1.0/pb/nutrition-librarys/action/selectById`,  {params} ).then((res:any) => res.data.data)
    },
  },
  spiderSources: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<SpiderSource>> {
      return httpGet(`/cms/v1.0/pt/spider-sources/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  userDynamics: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<UserDynamic>> {
      return httpGet(`/cms/v1.0/pt/user-dynamics/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
}
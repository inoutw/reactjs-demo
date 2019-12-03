import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface ManagerLoginAuthVO {
  loginName?: string
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

export interface NoticeCenter {
  /** 地点 */
  address?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标记 */
  delFlag?: number
  /** 时长 */
  duration?: number
  /** 结束时间 */
  endTime?: string
  /** 图片Url地址 */
  imgUrl?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 活动名称 */
  name?: string
  /** 播放模式 0:无 1:独播 2:插播 */
  playMode?: number
  /** 活动说明 */
  remark?: string
  /** 资源类型 0活动 1视频 */
  resourceType?: number
  /** 上下架标识 0上架 1下架 */
  shelveFlag?: number
  /** 排序 */
  sort?: number
  /** 间隔轮次 */
  spacing?: number
  /** 主办方 */
  sponsor?: string
  /** 开始时间 */
  startTime?: string
  /** 活动类型 0无 1分享 2培训 3娱乐 4活动 5会议 6其他 */
  type?: number
  /** 视频Url地址 */
  videoUrl?: string
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

export interface UpgradeInfoVO {
  /** 0不用清理缓存 1需清理缓存 */
  clearCacheFlag?: number
  /** 设备类型1苹果 2安卓 */
  devType?: number
  /** 下载地址 */
  downloadUrl?: string
  /** 0非强制升级 1强制升级 */
  forceUpgradeFlag?: number
  /** 0不用退出登录 1退出登录 */
  logoutFlag?: number
  /** 新版本号 */
  newAppVersion?: string
  /** 0无新版本 1有新版本 */
  upgradeFlag?: number
  /** 升级提醒信息 */
  upgradeNotice?: string
}

export interface VerifyCode {
  /** 业务类型由接入方自定义,例如:1.注册、2 .登录、3.找回密码、4注册/登录、5其他等、6找回支付密码 */
  serviceCode?: number
  /** 验证码，校验时传入 */
  verifyCode?: string
  /** 发送目标手机号 */
  verifyKey?: string
  /** 发送类型 0-手机号/1-邮箱 */
  verifyType?: string
}

export interface PushMessage {
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
  /** 消息推送时间 */
  messageDate?: string
  /** 消息ID */
  messageId?: string
  /** 消息类型，客户端根据此类型做消息展示归类 */
  messageType?: string
  /** 极光任务ID */
  pushJobId?: number
  /** 资源数据 */
  resource?: string
  /** 资源类型 */
  resourceType?: string
}

export interface SensitiveWordVO {
  /** 替换字符，默认* */
  replaceWord?: string
  /** 原始文本内容 */
  text?: string
}
export default {
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/platform-support/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  managerUsers: {
    /**
    * 管理后台登录
    */
    login(loginUser: ManagerLoginVO): Promise<ManagerLoginAuthVO> {
      return httpPost(`/platform-support/v1.0/pb/manager-users/action/login`, loginUser).then((res:any) => res.data.data)
    },
  },
  noticeCenters: {
    /**
    * APP查询分页NoticeCenter
    */
    list(params: { pageNo?: number, pageSize?: number }): Promise<PageList<NoticeCenter>> {
      return httpGet(`/platform-support/v1.0/pb/notice-centers/action/list`,  {params} ).then((res:any) => res.data.data)
    },
  },
  upgrades: {
    /**
    * APP更新升级查询
    */
    check(): Promise<UpgradeInfoVO> {
      return httpGet(`/platform-support/v1.0/pb/upgrades/action/check`).then((res:any) => res.data.data)
    },
  },
  verify: {
    /**
    * 验证(手机)验证码
    */
    check(codeDTO: VerifyCode): Promise<number> {
      return httpPost(`/platform-support/v1.0/pb/verify/action/check`, codeDTO).then((res:any) => res.data.data)
    },
    /**
    * 获取(手机)验证码
    */
    getCode(params: { serviceCode?: number, verifyCode?: string, verifyKey?: string, verifyType?: string }): Promise<number> {
      return httpGet(`/platform-support/v1.0/pb/verify/action/getCode`,  {params} ).then((res:any) => res.data.data)
    },
  },
  pushMessages: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { messageType: string, pageNo?: number, pageSize?: number }): Promise<PageList<PushMessage>> {
      return httpGet(`/platform-support/v1.0/pt/push-messages/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  sensitiveWords: {
    /**
    * 校验文本中是否包含敏感词
    */
    check(sensitiveWordVO: SensitiveWordVO): Promise<boolean> {
      return httpPost(`/platform-support/v1.0/pt/sensitive-words/action/check`, sensitiveWordVO).then((res:any) => res.data.data)
    },
    /**
    * 检查并返回文本中的敏感词
    */
    match(sensitiveWordVO: SensitiveWordVO): Promise<Set<string>> {
      return httpPost(`/platform-support/v1.0/pt/sensitive-words/action/match`, sensitiveWordVO).then((res:any) => res.data.data)
    },
    /**
    * 替换文本中的敏感词并返回
    */
    replace(sensitiveWordVO: SensitiveWordVO): Promise<string> {
      return httpPost(`/platform-support/v1.0/pt/sensitive-words/action/replace`, sensitiveWordVO).then((res:any) => res.data.data)
    },
  },
}
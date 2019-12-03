import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface AuthTokenVO {
  /** 用于刷新token的令牌 */
  refreshToken?: string
  /** token */
  token?: string
}

export interface CooperationOrganizationVO {
  /** 名称 */
  name?: string
  /** 类型 */
  type?: string
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

export interface LecturerListVO {
  /** 创建时间 */
  createDate?: string
  /** 关注状态 0无关系 1我关注的 2关注我的 3互相关注 */
  followFlag?: number
  /** kid */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 讲师推荐 0不推荐 1推荐 */
  recommendFlag?: number
  /** 专家推荐 0不推荐 1推荐 */
  recommendHome?: number
  /** 排序值 */
  sortFlag?: number
  /** 简介 */
  userDesc?: string
  /** 用户id */
  userId?: number
  /** 头像 */
  userImg?: string
  /** 姓名 */
  userName?: string
  /** 手机号码 */
  userPhone?: string
  /** 讲师擅长领域 */
  userSpecial?: string
  /** 讲师单位 */
  userUnit?: string
}

export interface LoginVO {
  /** token信息 */
  authInfo?: AuthTokenVO
  /** 用户基本信息 */
  user?: UserBaseInfoVO
}

export interface UserBaseInfoVO {
  /** 活动渠道码 */
  activityChannelCode?: string
  /** 应用渠道码(客户端渠道包) */
  appChannel?: string
  /** 城市编码 */
  cityCode?: string
  /** 讲师佣金率 */
  commissionRate?: number
  /** 星座 */
  constellation?: string
  /** 合同照片 */
  contractPhotoUrl?: string
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
  /** 讲师运营人员 */
  operationDirector?: string
  /** 运营电话 */
  operatorPhone?: string
  /** 极光设备唯一id */
  registrationId?: string
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

export interface UserRole {
  /** 角色 */
  role?: string
  /** 角色头衔 */
  roleTitle?: string
}

export interface PwdLoginDTO {
  /** 密码 */
  password?: string
  /** 手机号 */
  phone?: string
}

export interface VerifyCodeLoginDTO {
  /** 手机号 */
  phone?: string
  /** 验证码 */
  verifyCode?: string
  /** 验证码业务类型(2.登录,4注册/登录) */
  verifyServiceCode?: number
}

export interface RegisterDTO {
  /** 活动渠道码 */
  activityChannelCode?: string
  /** 现居地 */
  livingPlace?: string
  /** 出生年月日 */
  userBirthday?: string
  /** 注册渠道 */
  userChannel?: string
  /** 用户扩展属性 */
  userExt?: string
  /** 用户性别 0-女 1-男 2-其他 */
  userGenders?: number
  /** 用户头像 */
  userImg?: string
  /** 姓名 */
  userName?: string
  /** 昵称 */
  userNickName?: string
  /** 手机号 */
  userPhone?: string
  /** 登录密码 */
  userPwd?: string
  /** 邀请码 */
  userRegInviterCode?: string
  /** 验证码 */
  veriCode?: string
  /** 验证码业务类型(1.注册,4注册/登录) */
  verifyServiceCode?: number
}

export interface ResetPasswordDTO {
  /** 新密码 */
  newPassword?: string
  /** 手机号 */
  phone?: string
  /** 验证码 */
  verifyCode?: string
}

export interface ThirdLoginDTO {
  /** 第三方令牌 */
  accessToken?: string
  /** 第三方唯一id */
  openId?: string
  /** 第三方类型 0，微信 1，微博 2，qq */
  type?: number
}

export interface UserActivityPhoneAttributes {
  /** 活动渠道 */
  activityChannel?: string
  /** 创建时间 */
  createDate?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 采集的手机属性 */
  phoneAttributes?: string
}

export interface UserRelationVO {
  /** 星座 */
  constellation?: string
  /** 是否关注（0未关注,1已关注,3互相关注） */
  followFlag?: number
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

export interface ThirdLoginVO {
  binding?: boolean
  /** 登录校验标识 */
  checkFlag?: boolean
  /** 用户登录信息 */
  loginVO?: LoginVO
  /** 第三方用户openId */
  openId?: string
  /** 第三方用户id */
  thirdId?: string
}

export interface BindingPhoneDTO {
  /** 绑定类型0-weixin  1-weibo 2-qq 3-weixinWeb */
  loginType?: number
  /** 第三方账户id */
  thirdId?: string
  /** 手机号 */
  userPhone?: string
  /** 验证码 */
  veriCode?: string
}

export interface WxJsapiSignature {
  appid?: string
  noncestr?: string
  signature?: string
  timestamp?: number
  url?: string
}

export interface LecturerAccountPeriodVO {
  /** 账期编号 */
  accountNumber?: string
  balance?: number
  balanceIos?: number
  /** 合同照片 */
  contractPhotoUrl?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 结算金额 */
  currentSettlementAmount?: number
  /** ios结算金额 */
  currentSettlementAmountIos?: number
  /** 当期结算日期 */
  currentSettlementDate?: string
  /** 讲师佣金率 */
  feeRate?: number
  /** 分布式唯一ID */
  kid?: number
  /** 上期结算日期 */
  lastSettlementDate?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 讲师唯一标识 */
  lecturerId?: number
  lecturerName?: string
  operationalDirector?: string
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
  /** 其他已结算金额 */
  settlementAmount?: number
  /** ios已结算金额 */
  settlementAmountIos?: number
  /** 结算周期 1.周  2.半月 3.月 */
  settlementCycle?: number
  /** 结算时间 */
  settlementTime?: string
  /** 税率 */
  taxRate?: number
  /** 税收类型1税前2税后 */
  taxType?: number
  /** 未结算金额 */
  unsettlementAmount?: number
}

export interface ShellAccountLogDTO {
  /** 交易动作 1.增加 2.减少 */
  actionType?: number
  /** 交易金额 */
  amount?: number
  /** 业务描述 */
  bizDesc?: string
  /** 业务标题 */
  bizTitle?: string
  /** 1.充值 2.购买课程 3.收益 4.提现 */
  bizType?: number
  /** 交易时间 精确到毫秒 */
  transactionTime?: string
}

export interface ShellAccountLogAppQueryDTO {
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 下单时间结束 */
  timeEnd?: string
  /** 下单时间开始 */
  timeStart?: string
}

export interface EditPasswordDTO {
  /** 新密码 */
  newPassword?: string
  /** 旧密码 */
  oldPassword?: string
}

export interface LogoutDTO {
  /** 极光设备唯一id */
  registrationId?: string
}

export interface BindPushVO {
  /** 极光设备唯一id */
  registrationId?: string
}

export interface UpdateUserDTO {
  /** 城市编码 */
  cityCode?: string
  /** 星座 */
  constellation?: string
  /** 家乡 */
  hometown?: string
  /** 身份证号 */
  idCard?: string
  /** 现居地 */
  livingPlace?: string
  /** 推荐讲师 0:不推荐 1:推荐 */
  recommendFlag?: number
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
  /** 头像 */
  userImg?: string
  /** 姓名 */
  userName?: string
  /** 昵称 */
  userNickName?: string
  /** 用户身份 */
  userRole?: string
  /** 用户身份头衔 */
  userRoleTitle?: string
  /** 用户签名 */
  userSignature?: string
}

export interface UserDeviceLoginLog {
  /** 客户端版本号 */
  clientVersion?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 0正常1删除 */
  delFlag?: number
  /** 设备id */
  deviceId?: string
  /** 设备名称 */
  deviceName?: string
  /** 在线设备类型 */
  deviceType?: string
  /** ip地址 */
  ip?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后登录时间 */
  lastLoginDate?: string
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 坐标经度 */
  loginX?: number
  /** 坐标纬度 */
  loginY?: number
  /** 刷新token */
  refreshToken?: string
  /** token */
  token?: string
  /** 用户ID */
  userId?: number
}

export interface UserRegisterPhoneAttributes {
  /** 创建时间 */
  createDate?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 采集的手机属性 */
  phoneAttributes?: string
}

export interface UserRelationDTO {
  /** 目标用户ID */
  targetUserId?: number
}

export interface UserTagInfo {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0：未删除 1：已删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 标签名称 */
  tagName?: string
  /** 用户人数 */
  userNumber?: number
}

export interface CheckLoginPhoneDTO {
  /** 业务类型由接入方自定义,例如:1.注册、2 .登录、3.找回密码、4注册/登录、5其他等 */
  serviceCode?: number
  /** 手机号 */
  userPhone?: string
  /** 验证码 */
  veriCode?: string
}

export interface ThirdUserAccountVO {
  /** 第三方用户相关信息,map中的key的说明wx:微信账户 ,wb:微博用户,qq:qq用户 */
  map?: any
  /** 用户手机号 */
  userPhone?: string
}

export interface ThirdUserBindingVO {
  /** 绑定标识 */
  bindingFlag?: boolean
  userThirdLogin?: UserThirdLogin
}

export interface UserThirdLogin {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0正常 1删除 */
  delFalg?: number
  /** 第三方账户性别1男2女 */
  gender?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 登录类型0-weixin  1-weibo 2-qq 3-weixinWeb */
  loginType?: number
  /** 三方账户昵称 */
  nickName?: string
  /** 第三方账户openId */
  openId?: string
  /** 第三方账户id */
  thirdId?: string
  /** 用户id */
  userId?: number
  /** 第三方账户头像 */
  userImg?: string
}

export interface ThirdUserBindingDTO {
  /** 微信授权code */
  code?: string
  /** 绑定账户类型 0:微信,1:微博，2:qq 3:(weixinWeb)微信公众号 */
  type?: number
}

export interface WxWebBindingPhoneDTO {
  /** userId */
  userId?: number
  /** 手机号 */
  userPhone?: string
  /** 验证码 */
  veriCode?: string
}
export default {
  auth: {
    /**
    * 刷新token
    */
    refreshToken(authTokenVO: AuthTokenVO): Promise<AuthTokenVO> {
      return httpPost(`/platform-user/v1.0/pb/auth/action/refreshToken`, authTokenVO).then((res:any) => res.data.data)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/platform-user/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  lecturerInfos: {
    /**
    * 查询合作机构
    */
    listCooperationOrganization(params: { pageNo?: number, pageSize?: number }): Promise<PageList<CooperationOrganizationVO>> {
      return httpGet(`/platform-user/v1.0/pb/lecturer-infos/action/list-cooperation-organization`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 首页推荐专家分页接口
    */
    listRecomend(params: { pageNo?: number, pageSize?: number }): Promise<PageList<LecturerListVO>> {
      return httpGet(`/platform-user/v1.0/pb/lecturer-infos/action/list-recomend`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 营养健康学院推荐关注讲师列表接口
    */
    listRecommendFollow(params: { pageNo?: number, pageSize?: number }): Promise<PageList<LecturerListVO>> {
      return httpGet(`/platform-user/v1.0/pb/lecturer-infos/action/list-recommend-follow`,  {params} ).then((res:any) => res.data.data)
    },
  },
  userAccounts: {
    /**
    * 校验手机号是否存在
    */
    checkPhone(params: { phone: string }): Promise<boolean> {
      return httpGet(`/platform-user/v1.0/pb/user-accounts/action/checkPhone`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 手机号密码登录
    */
    loginByPassword(pwdLoginDTO: PwdLoginDTO): Promise<LoginVO> {
      return httpPost(`/platform-user/v1.0/pb/user-accounts/action/loginByPassword`, pwdLoginDTO).then((res:any) => res.data.data)
    },
    /**
    * 手机号短信登录
    */
    loginByVerifyCode(verifyCodeLoginDTO: VerifyCodeLoginDTO): Promise<LoginVO> {
      return httpPost(`/platform-user/v1.0/pb/user-accounts/action/loginByVerifyCode`, verifyCodeLoginDTO).then((res:any) => res.data.data)
    },
    /**
    * 手机号注册
    */
    registerByPhone(registerDTO: RegisterDTO): Promise<LoginVO> {
      return httpPost(`/platform-user/v1.0/pb/user-accounts/action/registerByPhone`, registerDTO).then((res:any) => res.data.data)
    },
    /**
    * 手机号注册&登录
    */
    registerOrLoginByPhone(registerDTO: RegisterDTO): Promise<LoginVO> {
      return httpPost(`/platform-user/v1.0/pb/user-accounts/action/registerOrLoginByPhone`, registerDTO).then((res:any) => res.data.data)
    },
    /**
    * 重置密码
    */
    resetPassword(resetPasswordDTO: ResetPasswordDTO): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pb/user-accounts/action/resetPassword`, resetPasswordDTO).then((res:any) => res.data.data)
    },
    /**
    * 三方登录
    */
    thirdLogin(thirdLoginDTO: ThirdLoginDTO): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pb/user-accounts/action/thirdLogin`, thirdLoginDTO).then((res:any) => res.data.data)
    },
    /**
    * 修改密码
    */
    editPassword(editPasswordDTO: EditPasswordDTO): Promise<boolean> {
      return httpPut(`/platform-user/v1.0/pt/user-accounts/action/editPassword`, editPasswordDTO).then((res:any) => res.data.data)
    },
    /**
    * 设置支付密码
    */
    editPayPassword(editPasswordDTO: EditPasswordDTO): Promise<boolean> {
      return httpPut(`/platform-user/v1.0/pt/user-accounts/action/editPayPassword`, editPasswordDTO).then((res:any) => res.data.data)
    },
    /**
    * 获取设置过支付密码设置标识 0未设置 1已设置
    */
    getPayPwdFlag(): Promise<number> {
      return httpGet(`/platform-user/v1.0/pt/user-accounts/action/getPayPwdFlag`).then((res:any) => res.data.data)
    },
    /**
    * 用户退出登录
    */
    logout(logoutDTO: LogoutDTO): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pt/user-accounts/action/logout`, logoutDTO).then((res:any) => res.data.data)
    },
    /**
    * 重置支付密码
    */
    resetPayPassword(resetPasswordDTO: ResetPasswordDTO): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pt/user-accounts/action/resetPayPassword`, resetPasswordDTO).then((res:any) => res.data.data)
    },
  },
  userBaseInfos: {
    /**
    * 校验昵称是否存在
    */
    checkNickName(params: { userNickName: string }): Promise<boolean> {
      return httpGet(`/platform-user/v1.0/pb/user-base-infos/action/checkNickName`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 绑定Jpush注册ID
    */
    bindJpushId(bindPushVO: BindPushVO): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pt/user-base-infos/action/bindJpushId`, bindPushVO).then((res:any) => res.data.data)
    },
    /**
    * 编辑用户信息（APP）
    */
    updateForApp(updateUserDTO: UpdateUserDTO): Promise<boolean> {
      return httpPut(`/platform-user/v1.0/pt/user-base-infos/action/updateForApp`, updateUserDTO).then((res:any) => res.data.data)
    },
  },
  userPhoneAttributes: {
    /**
    * 用户渠道属性提交
    */
    submit(userActivityPhoneAttributes: UserActivityPhoneAttributes): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pb/user-phone-attributes/action/submit`, userActivityPhoneAttributes).then((res:any) => res.data.data)
    },
    /**
    * 用户注册属性和渠道属性匹配
    */
    register(userRegisterPhoneAttributes: UserRegisterPhoneAttributes): Promise<string> {
      return httpPost(`/platform-user/v1.0/pt/user-phone-attributes/action/register`, userRegisterPhoneAttributes).then((res:any) => res.data.data)
    },
  },
  userRelationFollows: {
    /**
    * 关注列表
    */
    listByUserId(params: { followType: string, pageNo?: number, pageSize?: number, targetUserId: number }): Promise<PageList<UserRelationVO>> {
      return httpGet(`/platform-user/v1.0/pb/user-relation-follows/action/listByUserId`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 关注列表
    */
    list(params: { followType: string, pageNo?: number, pageSize?: number }): Promise<PageList<UserRelationVO>> {
      return httpGet(`/platform-user/v1.0/pt/user-relation-follows/action/list`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 关注
    */
    star(userRelationDTO: UserRelationDTO): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pt/user-relation-follows/action/star`, userRelationDTO).then((res:any) => res.data.data)
    },
    /**
    * 取消关注
    */
    unStar(userRelationDTO: UserRelationDTO): Promise<boolean> {
      return httpDelete(`/platform-user/v1.0/pt/user-relation-follows/action/unStar`, userRelationDTO).then((res:any) => res.data.data)
    },
  },
  userThirdLogins: {
    /**
    * APP端查第三方登录校验--qq
    */
    checkLoginQq(params: { accessToken: string }): Promise<ThirdLoginVO> {
      return httpGet(`/platform-user/v1.0/pb/user-third-logins/action/check-login-qq`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查第三方登录校验--微信
    */
    checkLoginWx(params: { code: string }): Promise<ThirdLoginVO> {
      return httpGet(`/platform-user/v1.0/pb/user-third-logins/action/check-login-wx`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 微信公众号登录第三方登录校验--微信公众号登录
    */
    checkLoginWxWeb(params: { code: string }): Promise<ThirdLoginVO> {
      return httpGet(`/platform-user/v1.0/pb/user-third-logins/action/check-login-wx-web`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查第三方登录--注册并绑定手机号
    */
    registerBindingPhone(bindingPhoneDTO: BindingPhoneDTO): Promise<ThirdLoginVO> {
      return httpPost(`/platform-user/v1.0/pb/user-third-logins/action/register-binding-phone`, bindingPhoneDTO).then((res:any) => res.data.data)
    },
    /**
    * APP取消第三方账户绑定
    */
    cancelThirdUserBinding(params: { Type: number }): Promise<boolean> {
      return httpGet(`/platform-user/v1.0/pt/user-third-logins/action/cancel-third-user-binding`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP更改手机号
    */
    changeLoginPhone(checkLoginPhoneDTO: CheckLoginPhoneDTO): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pt/user-third-logins/action/change-login-phone`, checkLoginPhoneDTO).then((res:any) => res.data.data)
    },
    /**
    * APP更改手机号校验
    */
    checkLoginPhone(checkLoginPhoneDTO: CheckLoginPhoneDTO): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pt/user-third-logins/action/check-login-phone`, checkLoginPhoneDTO).then((res:any) => res.data.data)
    },
    /**
    * APP查询用户信息
    */
    getUserAccountMsg(): Promise<ThirdUserAccountVO> {
      return httpGet(`/platform-user/v1.0/pt/user-third-logins/action/get-user-account-msg`).then((res:any) => res.data.data)
    },
    /**
    * APP第三方账户绑定
    */
    thirdUserBinding(thirdUserBindingDTO: ThirdUserBindingDTO): Promise<ThirdUserBindingVO> {
      return httpPost(`/platform-user/v1.0/pt/user-third-logins/action/third-user-binding`, thirdUserBindingDTO).then((res:any) => res.data.data)
    },
    /**
    * APP端查第三方登录--微信公众号绑定手机号
    */
    wxwebBindingPhone(wxWebBindingPhoneDTO: WxWebBindingPhoneDTO): Promise<ThirdLoginVO> {
      return httpPost(`/platform-user/v1.0/pt/user-third-logins/action/wxweb-binding-phone`, wxWebBindingPhoneDTO).then((res:any) => res.data.data)
    },
  },
  wxMps: {
    /**
    * 微信公众号jsapi加签名
    */
    jsapiSignature(params: { url: string }): Promise<WxJsapiSignature> {
      return httpGet(`/platform-user/v1.0/pb/wx-mps/action/jsapi-signature`,  {params} ).then((res:any) => res.data.data)
    },
  },
  lecturerAccountPeriods: {
    /**
    * APP端确认收益
    */
    confirmProfit(kids: number[]): Promise<boolean> {
      return httpPost(`/platform-user/v1.0/pt/lecturer-account-periods/action/confirmProfit`, kids).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<LecturerAccountPeriodVO>> {
      return httpGet(`/platform-user/v1.0/pt/lecturer-account-periods/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  shellAccountLogs: {
    /**
    * app端查询用户营养贝账户明细
    */
    listPage(dto: ShellAccountLogAppQueryDTO): Promise<PageList<ShellAccountLogDTO>> {
      return httpPut(`/platform-user/v1.0/pt/shell-account-logs/action/list-page`, dto).then((res:any) => res.data.data)
    },
  },
  shellAccounts: {
    /**
    * app获取消费账户可用营养贝数目
    */
    getAvaliableNum(): Promise<number> {
      return httpGet(`/platform-user/v1.0/pt/shell-accounts/action/getAvaliableNum`).then((res:any) => res.data.data)
    },
    /**
    * app获取收益账户可用营养贝数目
    */
    getIncomeAvaliableNum(): Promise<number> {
      return httpGet(`/platform-user/v1.0/pt/shell-accounts/action/getIncomeAvaliableNum`).then((res:any) => res.data.data)
    },
  },
  userDeviceLoginLogs: {
    /**
    * APP端设备删除接口
    */
    delete(params: { kid: number }): Promise<boolean> {
      return httpGet(`/platform-user/v1.0/pt/user-device-login-logs/action/delete`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端管理登录详情接口
    */
    detail(params: { kid: number }): Promise<UserDeviceLoginLog> {
      return httpGet(`/platform-user/v1.0/pt/user-device-login-logs/action/detail`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    *  APP端查询设备数据
    */
    divList(): Promise<List<UserDeviceLoginLog>> {
      return httpGet(`/platform-user/v1.0/pt/user-device-login-logs/action/div-list`).then((res:any) => res.data.data)
    },
  },
  userTagInfos: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<UserTagInfo>> {
      return httpGet(`/platform-user/v1.0/pt/user-tag-infos/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
}
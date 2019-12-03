import {httpPost,httpGet,httpPut,httpDelete} from "services/http"
type int = number;
		type List<T> = Array<T>
		type Collection<T> = Array<T>
		
type JsonNode = any
type long = number
interface KeyValueDTO<T,T1>{key:T,value:T1}
export interface EvaluateVipRecordDTO {
  /** 购买时间 */
  buyTime?: string
  /** 套餐编码，多个英文逗号分隔 */
  packageCodes?: string
  /** 编码 */
  recordCode?: string
  /** 名称 */
  recordName?: string
  /** 类型（1-问卷，2-会员，3-套餐） */
  recordType?: number
  /** 时间单位 */
  timeUnit?: string
  /** 用户ID */
  userId?: number
  /** 有效时间 */
  validTime?: number
}

export interface EvaluateClassifyHomePage {
  /** 用户购买状态信息 */
  buyRecord?: EvaluateQuestionnaireRecordVO
  /** 分类编码 */
  classifyCode?: string
  /** 分类名称 */
  classifyName?: string
  /** 计数 */
  count?: number
  /** 描述 */
  description?: string
  /** 免费状态，true免费 false收费 */
  free?: boolean
  /** 图片ICON */
  imgUrl?: string
  /** 原价格 */
  originalPrice?: number
  /** 价格期限 */
  pricePeriod?: string
  /** 现价格 */
  salePrice?: number
  /** 显示计数（0不显示 1显示） */
  showCount?: number
  /** 显示价格（0不显示 1显示） */
  showPrice?: number
  /** 排序（越小越靠前） */
  sort?: number
  /** 类型（1问卷 2分类 3预告） */
  type?: number
}

export interface EvaluateQuestionnaireRecordVO {
  /** 开始时间 */
  beginTime?: string
  /** 购买状态（true购买过 false未购买过） */
  bought?: boolean
  /** 综合截止时间 */
  endTime?: string
  /** 是否有效（true有效 false无效） */
  valid?: boolean
}

export interface EvaluateClassifyNode {
  /** 用户购买状态信息 */
  buyRecord?: EvaluateQuestionnaireRecordVO
  /** 子节点 */
  children?: EvaluateClassifyNode[]
  /** 总问卷数 */
  count?: number
  /** 免费状态，true免费 false收费 */
  free?: boolean
  id?: string
  /** 图标ICON */
  imgUrl?: string
  /** 业务唯一ID */
  kid?: number
  /** 分类/问卷名称 */
  name?: string
  /** 套餐状态，true套餐 false非套餐 */
  packageFlag?: boolean
  parentId?: string
  /** 父级ID */
  parentKid?: number
  /** 问卷有效价格信息 */
  priceInfo?: EvaluateClassifyPriceItemValidVO
  /** 类型 1分类 2问卷 */
  type?: number
  /** 分类/问卷编码 */
  value?: string
}

export interface EvaluateClassifyPriceItemValidVO {
  /** 原价格 */
  originalPrice?: number
  /** 价格编码 */
  priceCode?: string
  /** 分类价格信息表KID */
  priceKid?: number
  /** 价格类型 1 问卷 2 会员 3套餐 */
  priceType?: number
  /** 现价格 */
  salePrice?: number
  /** 时间单位 */
  timeUnit?: string
  /** 有效时间 */
  validTime?: number
}

export interface EvaluateClassifyPriceVO {
  /** 用户购买状态信息 */
  buyRecord?: EvaluateQuestionnaireRecordVO
  /** 问卷编码，多个英文逗号分隔 */
  classifyCodes?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 排序（越小越靠前） */
  displaySort?: number
  /** 价格条目 */
  itemList?: EvaluateClassifyPriceItem[]
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 价格类型 1 问卷 2 会员 3套餐 */
  priceType?: number
  /** 商品介绍 */
  saleDesc?: string
  /** 售卖商品名称 */
  saleName?: string
  /** 上架状态：0->上架；1->下架 */
  shelveFlag?: number
}

export interface EvaluateClassifyPriceItem {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 排序 */
  displaySort?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 原价格 */
  originalPrice?: number
  /** 分类价格信息表KID */
  priceKid?: number
  /** 现价格 */
  salePrice?: number
  /** 时间单位 */
  timeUnit?: string
  /** 有效时间 */
  validTime?: number
}

export interface ReportTotal {
  /** 分类编码 */
  classifyCode?: string
  /** 分类名称 */
  classifyName?: string
  /** 报告组 */
  groups?: ReportGroup[]
  /** 成员年龄 */
  memberAge?: number
  /** 成员性别 */
  memberGender?: number
  /** 成员名称 */
  memberName?: string
  /** 报告唯一标识 */
  reportKid?: number
  /** 报告名称 */
  reportName?: string
  /** 报告类型 */
  reportType?: string
}

export interface ReportGroup {
  description?: string
  display?: boolean
  groupCode?: string
  groupName?: string
  iconUrl?: string
  sort?: number
  units?: ReportUnit<IReportUnitData>[]
}

export interface IReportUnitData {
}

export interface ReportUnit<T> {
  data?: T[]
  description?: string
  display?: boolean
  evaluates?: ReportUnitResult[]
  unitCode?: string
  unitGroup?: string
  unitName?: string
}

export interface ReportUnitResult {
  /** 建议 */
  advice?: string
  key?: string
  name?: string
  /** 风险 */
  risk?: string
  /** 状态类型 */
  stateType?: string
  /** 提示 */
  tips?: string
}

export interface EvaluateVipRecordVO {
  /** 开始时间 */
  beginTime?: string
  /** 购买状态（true购买过 false未购买过） */
  bought?: boolean
  /** 综合截止时间 */
  endTime?: string
  /** 地理位置计数统计 */
  statistic?: ReportStatisticResultVO
  /** 是否有效（true有效 false无效） */
  valid?: boolean
  /** 宣传视频 */
  video?: EvaluateHomePageVideoVO
  /** 会员状态（true会员 false非会员） */
  vip?: boolean
}

export interface ReportStatisticResultVO {
  /** 当前城市范围计数 */
  cityWideCount?: number
  /** 国家范围计数 */
  countryWideCount?: number
}

export interface EvaluateHomePageVideoVO {
  /** 封面图 */
  coverImg?: string
  /** 时长（秒） */
  duration?: number
  /** 资源地址 */
  resourceUrl?: string
}

export interface NounClass {
  /** 分类名称 */
  className?: string
  /** 排序 */
  classOrder?: number
  /** 状态,0-未启用，1-启用 */
  classStatus?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 除标识 0:有效 1:删除 */
  delFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
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

export interface NounInfo {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 除标识 0:有效 1:删除 */
  delFlag?: number
  /** 解释内容 */
  explainContent?: string
  /** 食物表图片 */
  foodTable?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 所属分类 */
  nounClass?: number
  /** 名词英文 */
  nounEn?: string
  /** 名词名称 */
  nounName?: string
  /** 名词状态,0-未启用,1-已启用 */
  nounStatus?: number
}

export interface DailyBloodSugarDTO {
  /** 餐后血糖 */
  afterMeal?: number
  /** 空腹血糖 */
  beforeMeal?: number
  /** 打卡日历时间 */
  markDate?: string
}

export interface DailyBloodSugar {
  /** 餐后血糖 */
  afterMeal?: number
  /** 空腹血糖 */
  beforeMeal?: number
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
  /** 打卡日历时间 */
  markDate?: string
  /** 家庭成员ID */
  memberKid?: number
}

export interface DailyBloodSugarListVO {
  /** 餐后最大值 */
  afterMax?: number
  /** 餐后最小值 */
  afterMin?: number
  /** 餐前最大值 */
  beforeMax?: number
  /** 餐前最小值 */
  beforeMin?: number
  /** 打卡列表 */
  list?: DailyBloodSugarVO[]
}

export interface DailyBloodSugarVO {
  /** 餐后血糖 */
  afterMeal?: number
  /** 空腹血糖 */
  beforeMeal?: number
  /** 打卡日历时间 */
  markDate?: string
}

export interface BodyDataVo {
  /** 记录日期 */
  date?: string
  /** 记录值 */
  record?: number
  /** 记录类型 */
  type?: number
}

export interface DailyBodyDataForm {
  /** 身体各项数据 */
  bodyDates?: BodyData[]
  /** 日期 */
  date?: string
}

export interface BodyData {
  /** 今日数据 */
  record?: number
  /** 目标数据 */
  targetRecord?: number
  /** 记录类型(1身高、2体重、3胸围、4腰围、5臀围、6手臂围、7大腿围、8小腿围、9体脂率、10BMI、11腰臀比、12腰高比) */
  type?: number
}

export interface DailyBodyDataVo {
  /** 改变数值 */
  change?: number
  /** 最大记录值 */
  maxRecord?: number
  /** 最小记录值 */
  minRecord?: number
  /** 记录数据 */
  recordData?: DailyBodyRecordVo[]
  /** 记录天数量 */
  recordDate?: number
  /** 目标数值 */
  targetRecord?: number
}

export interface DailyBodyRecordVo {
  /** 记录日期 */
  markDate?: string
  /** 记录数值 */
  record?: number
}

export interface DailyDietDTO {
  /** 成份 */
  dietComps?: DietComp[]
  /** 名称 */
  dietName?: string
  /** 饮食类型 1 早餐、2 早加餐、 3 午餐、 4 午加餐  5 晚餐 6 晚加餐 */
  dietType?: number
  /** 商品食材ID */
  foodId?: number
  /** 分布式唯一ID */
  kid?: number
  /** 打卡日历时间 */
  markDate?: string
  /** 标准单位 */
  normalUnit?: string
  /** 标准值 */
  normalValue?: number
  /** 菜谱类型 1 系统菜谱 2 用户自定义菜谱 */
  ownerType?: number
  /** 自定义规格数量 */
  quality?: number
  /** 自定义规格 */
  qualityUnit?: string
  /** 菜谱ID */
  recipesId?: number
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

export interface DailyDietListForm {
  /** 早餐 */
  breakfast?: MealDiet[]
  /** 早加餐 */
  breakfastPlus?: MealDiet[]
  /** 晚餐 */
  dinner?: MealDiet[]
  /** 晚加餐 */
  dinnerPlus?: MealDiet[]
  /** 午餐 */
  lunch?: MealDiet[]
  /** 午加餐 */
  lunchPlus?: MealDiet[]
}

export interface MealDiet {
  dailyKid?: number
  /** 成份 */
  dietComps?: DietComp[]
  /** 名称 */
  dietName?: string
  /** 食谱总重量(可选，打卡) */
  dietWeight?: number
  /** 菜谱类型 1 系统菜谱 2 用户自定义菜谱 */
  ownerType?: number
  /** 份数 */
  quality?: number
  /** 食谱单位(份/克) */
  qualityUnit?: string
  /** 食谱标识（可选，打卡) */
  recipeKid?: number
}

export interface DailyDietForm {
  /** 早餐 */
  breakfast?: Diet[]
  /** 早加餐 */
  breakfastPlus?: Diet[]
  /** 晚餐 */
  dinner?: Diet[]
  /** 晚加餐 */
  dinnerPlus?: Diet[]
  /** 午餐 */
  lunch?: Diet[]
  /** 午加餐 */
  lunchPlus?: Diet[]
}

export interface Diet {
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
}

export interface DailyKcalVO {
  /** 早餐 */
  breakfast?: DietMainInfo
  /** 早加餐 */
  breakfastPlus?: DietMainInfo
  /** 晚餐 */
  dinner?: DietMainInfo
  /** 晚加餐 */
  dinnerPlus?: DietMainInfo
  /** 午餐 */
  lunch?: DietMainInfo
  /** 午加餐 */
  lunchPlus?: DietMainInfo
  /** 运动 */
  sports?: DietMainInfo
}

export interface DietMainInfo {
  /** 酒精 */
  alcohol?: number
  /** 个人摄入的能量公式  =  碳水化合物 g* 4 + 脂肪* 9  +蛋白质g+4  + 酒精* 7 */
  calories?: number
  /** 碳水化合物 */
  carbohydrates?: number
  /** 脂肪 */
  fat?: number
  /** 蛋白质 */
  protein?: number
}

export interface EvaluateDietPlanVO {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 类型 0 标准膳食计划 1 自定义 */
  dietType?: string
  /** 疾病分类 */
  diseaseClassify?: string
  /** 疾病编码 */
  diseaseCode?: string
  /** 疾病名称 */
  diseaseName?: string
  /** 能量 */
  energy?: number
  /** 能量最高值 */
  energyMax?: number
  /** 能量最低值 */
  energyMin?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 膳食餐次数据 */
  mealList?: EvaluateDietPlanDetailVO[]
  /** 蛋白质 */
  protein?: number
  /** 蛋白质最高值 */
  proteinMax?: number
  /** 蛋白质最低值 */
  proteinMin?: number
  /** 报告ID */
  reportKid?: number
  /** 友情提示 */
  tips?: string
  /** 总碳水化合物 */
  totalCarbohydrate?: number
  /** 总能量 */
  totalEnergy?: number
  /** 总脂肪 */
  totalFat?: number
  /** 总血糖负荷 */
  totalGlycemicLoad?: number
  /** 总蛋白质 */
  totalProtein?: number
}

export interface EvaluateDietPlanDetailVO {
  /** 膳食数据 */
  foodList?: EvaluateDietPlanDetail[]
  /** 餐次（1-早餐 2-早加餐 3-中餐 4-中加餐 5-晚餐 6-晚加餐） */
  mealTimes?: number
}

export interface EvaluateDietPlanDetail {
  /** 碳水化合物 */
  carbohydrate?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 膳食计划KID */
  dietPlanKid?: number
  /** 能量 */
  energy?: number
  /** 交换份类别1 能量 2 蛋白质 */
  exchangeType?: number
  /** 脂肪 */
  fat?: number
  /** 食材类别KID */
  foodClassify?: number
  /** 食材分类名称 */
  foodClassifyName?: string
  /** 食材份数 */
  foodCopies?: number
  /** 食材KID */
  foodId?: number
  /** 食材名称 */
  foodName?: string
  /** 食材重量 */
  foodWeight?: number
  /** 血糖负荷 */
  glycemicLoad?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 餐次（1-早餐 2-早加餐 3-中餐 4-中加餐 5-晚餐 6-晚加餐） */
  mealTimes?: number
  /** 蛋白质 */
  protein?: number
  /** 展示字段 */
  showFields?: string
  /** 排序 */
  sort?: number
}

export interface DailyReportCollect {
  /** 打卡类型 */
  classifyCode?: string
  /** 打卡名称 */
  classifyName?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 内容 */
  description?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 打卡时间 */
  markerDate?: string
  /** 用户标识 */
  memberKid?: number
  /** 变更次数 */
  modifyCount?: number
}

export interface DailyReport {
  /** 内容 */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 打卡唯一标识 */
  drKid?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 单元项 */
  unitCode?: string
  /** 单元名称 */
  unitName?: string
}

export interface DailySportDTO {
  /** 运动描述 */
  description?: string
  /** kcal */
  kcal?: number
  /** 主键 */
  kid?: number
  /** 打卡日历时间 */
  markDate?: string
  /** 成员单位 */
  memberKid?: number
  /** 运动时间，单位:分钟 */
  runTime?: number
  /** 运动项目 */
  sportsEvents?: string
}

export interface DailySportsBaseVO {
  /** 运动项 */
  sports?: DailySportsBase[]
  /** 运动类型 */
  sportsEvents?: string
}

export interface DailySportsBase {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 运动描述 */
  description?: string
  /** 身体活动强度 */
  kcalValue?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 运动类型唯一标识 */
  sportTypeKid?: number
  /** 运动项目 */
  sportsEvents?: string
  /** 运动图片标识 */
  sportsLogUrl?: string
}

export interface DailySportVO {
  /** 运动描述 */
  description?: string
  /** 每一个运动项目根据体重和时间算出来的卡路里 */
  kcalValue?: number
  kid?: number
  /** 打卡日历时间 */
  markDate?: string
  /** 成员单位 */
  memberKid?: number
  /** 运动时间，单位:分钟 */
  runTime?: number
  /** 运动项目 */
  sportsEvents?: string
  /** 运动图片标识 */
  sportsLogUrl?: string
}

export interface DailyStep {
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
  /** 打卡日历时间 */
  markDate?: string
  /** 成员单位 */
  memberKid?: number
  /** 计算步数 */
  steps?: number
}

export interface DailyStepVO {
  /** 全局唯一ID */
  kid?: number
  /** 打卡日历时间 */
  markDate?: string
  /** 计算步数 */
  steps?: number
}

export interface DailyWater {
  /** 饮水量 */
  capacity?: number
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
  /** 打卡日历时间 */
  markDate?: string
  /** 成员单位 */
  memberKid?: number
}

export interface DailyWaterVO {
  /** 饮水量 */
  capacity?: number
  /** 全局唯一ID */
  kid?: number
  /** 打卡日历时间 */
  markDate?: string
}

export interface SmartNutritionVO {
  /** 摄入能量和目标能量 */
  dailyIntakeNutrition?: DailyIntakeNutritionVO
  /** 默认营养计划标题 */
  defaultNutritionTitle?: string
  evaluate?: boolean
  /** 卡路里 */
  kcal?: number
  weightManagement?: boolean
}

export interface DailyIntakeNutritionVO {
  /** 卡路里/能量 当前值 单位 卡 */
  caloriesExactValue?: number
  /** 卡路里/能量 摄入参考值标准值 单位 卡 */
  caloriesMin?: number
  /** 碳水化合物 当前值 单位 g */
  carbohydratesExactValue?: number
  /** 碳水化合物 摄入参考值标准值 单位 g */
  carbohydratesMin?: number
  /** 脂肪 当前值 单位 g */
  fatExactValue?: number
  /** 脂肪 摄入参考值标准值 单位 g */
  fatMin?: number
  /** 蛋白质 当前值 单位 g */
  proteinExactValue?: number
  /** 蛋白质 摄入参考值标准值 单位 g */
  proteinMin?: number
}

export interface DailyDataVO {
  /** 血糖 */
  bloodSugar?: DailyBloodSugar
  /** 身体数据 */
  dailyBodyData?: BodyDataVo[]
  /** 是否糖尿病人 */
  diabetes?: boolean
  /** 是否显示管理营养计划入口 */
  display?: boolean
  /** 摄入营养 */
  intakeNutrition?: DailyIntakeNutritionVO
  /** 卡路里 */
  kcal?: DailyKcalVO
  /** 步数 */
  step?: DailyStepVO
  /** 问卷状态(0:未做问卷,1:做过问卷) */
  type?: number
  /** 摄入水 */
  water?: DailyWaterVO
}

export interface DailyRecordVO {
  /** 打卡日报返回为日报kid,运动以及膳食返回memberKid */
  data?: number
  /** 日期 */
  recordDate?: string
}

export interface DailyReportVO {
  /** 报告单元 */
  reportUnits?: ReportUnit<IReportUnitData>[]
  /** 报告类型(1:良好营养;2:糖尿病;3:减重;4:增重;) */
  type?: number
}

export interface DiseaseNutritionAdvise {
  /** 建议信息 */
  adviseInfo?: string
  /** 食物分类 */
  classify?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 疾病编码 */
  diseaseCode?: string
  /** 疾病名称 */
  diseaseName?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 食材名称 */
  material?: string
  /** 营养素名称 */
  nutrient?: string
}

export interface UserBackVisitForm {
  /** 是否符合实际 */
  actual?: Answer
  /** 建议 */
  advise?: string
  /** 联系手机号 */
  contactPhone?: boolean
  /** 联系短信 */
  contactPhoneMsg?: boolean
  /** 联系微信号 */
  contactWeChat?: boolean
  /** 评估名称 */
  evaluateName?: string
  /** 评估编号(KID) */
  evaluateNo?: number
  /** 是否健康问卷 */
  healthy?: boolean
  /** 是否改善饮食 */
  improveDiet?: Answer
  /** 是否摄入蔬菜 */
  intakeVeg?: Answer
  /** 是否符合操作 */
  operable?: Answer
  /** 是否保持活动次数适量 */
  sportCountKeep?: Answer
  /** 是否保持活动时长适量 */
  sportDurationKeep?: Answer
}

export interface Answer {
  flag?: boolean
  reason?: string
}

export interface EvaluateBackVisitListVO {
  evaluateName?: string
  evaluateNo?: number
  healthy?: boolean
}

export interface EvaluateMemberExt {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 身高（cm） */
  height?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 成员唯一标识 */
  memberKid?: number
  /** 受孕状态 */
  pregnant?: number
  /** 运动次数 */
  sportCount?: number
  /** 运动时长 */
  sportDuration?: number
  /** 饮用水摄入量 */
  waterQuality?: number
  /** 体重（kg） */
  weight?: number
}

export interface EvaluateMember {
  /** 地址编码 */
  addressCode?: string
  /** 地址 */
  addressName?: string
  /** 出生年月 */
  birthday?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 成员性别 */
  gender?: number
  /** 分布式唯一ID */
  kid?: number
  /** 劳动强度 */
  labourLevel?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 所属标识 0:否 1:是 */
  ownFlag?: number
  /** 成员姓名 */
  userName?: string
  /** 用户手机 */
  userPhone?: string
}

export interface NextForm {
  /** 动态编码 */
  dynamicCode?: string
  /** 表单编码 */
  formCode?: string
}

export interface UserQuestionnaireNext {
  /** 问卷分类编码 */
  classifyCode?: string
  /** 当前表单记录 */
  currPart?: UserQuestionnairePart<JsonNode>
  /** 历史表单记录 */
  historyPart?: UserQuestionnairePart<JsonNode>[]
  /** 当前成员标识 */
  memberKid?: number
}

export interface UserQuestionnairePart<T> {
  /** 数据 */
  data?: T
  /** 动态编码 */
  dynamicCode?: string
  /** 表单编码 */
  formCode?: string
  /** 表单排序 */
  fromIndex?: number
  /** 是否跳过 */
  skip?: boolean
}

export interface DynamicQuestionnaireResult {
  /** 动态标准集 */
  dynamicForm?: DynamicQuestionnaireCollect
  /** 扩展信息表单编码 */
  extForm?: string[]
  /** 成员信息 */
  member?: EvaluateMember
  /** 成员扩展信息 */
  memberExt?: EvaluateMemberExtForm
}

export interface DynamicQuestionnaireCollect {
  /** 动态编码 */
  dynamicCode?: string
  /** 动态名称 */
  dynamicName?: string
  /** 表单集 */
  formArray?: Form[]
  /** 参考类型 */
  referFlag?: number
  /** 引导文案 */
  statement?: DynamicQuestionnaireStatement
  /** 版本号 */
  version?: number
}

export interface Form {
  /** 编码 */
  formCode?: string
  /** 编码 */
  formName?: string
  /** 类型:input/select/combox/chips */
  formType?: string
  /** 验证 */
  input?: Input
  /** 验证 */
  validate?: Validate
}

export interface Input {
  /** 备注说明 */
  description?: string
  /** 选项值 */
  optionArray?: Option[]
  /** 占位符 */
  placeholder?: string
  /** 前缀 */
  prefix?: string
  /** 后缀 */
  suffix?: string
  /** 问题 */
  title?: string
}

export interface Option {
  /** 选项名 */
  name?: string
  /** 选项值 */
  value?: string
}

export interface Validate {
  /** 最大长度 */
  maxLength?: number
  /** 最大值 */
  maxValue?: string
  /** 最小长度 */
  minLength?: number
  /** 最小值 */
  minValue?: string
  /** 必填项 */
  required?: boolean
  /** 格式:number/date/text */
  schemeType?: string
}

export interface DynamicQuestionnaireStatement {
  /** 文件地址 */
  contentUrl?: string
  /** 标识 */
  statementKey?: string
  /** 名称/标题 */
  statementName?: string
}

export interface EvaluateMemberExtForm {
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 就餐地点 */
  eatPlaceArray?: string[]
  /** 食物禁忌 */
  foodForbidArray?: string[]
  /** 身高（cm） */
  height?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 成员唯一标识 */
  memberKid?: number
  /** 受孕状态 */
  pregnant?: number
  /** 运动次数 */
  sportCount?: number
  /** 运动时长 */
  sportDuration?: number
  /** 饮用水摄入量 */
  waterQuality?: number
  /** 体重（kg） */
  weight?: number
}

export interface EvaluateReportCollect {
  /** 适用编码 */
  applicableCode?: string
  /** 适用名称 */
  applicableName?: string
  /** 回访标识 0:否 1:是 */
  backFlag?: number
  /** 批次编号 */
  batchNo?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 删除标识 0:有效 1:删除 */
  delFlag?: number
  /** 报告项名称集 */
  itemNames?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 成员年龄 */
  memberAge?: number
  /** 成员性别 */
  memberGender?: number
  /** 成员标识 */
  memberKid?: number
  /** 成员名称 */
  memberName?: string
  /** 报告名称 */
  name?: string
  /** 支付标识 */
  paymentFlag?: number
  /** 已读标识 0:否 1:是 */
  readFlag?: number
  /** 显示标识 */
  showFlag?: number
  /** 健康healthy/自评ordinary/疾病disease/家庭family */
  type?: string
}

export interface ReportGenerateForm {
  /** 分类标识 */
  classifyCode?: string
  dynamicForms?: UserQuestionnairePart<JsonNode>[]
  /** 表单版本 */
  formVersion?: number
  /** 成员标识 */
  memberKid?: number
}

export interface ReportFamilyCollect {
  /** 家庭报告 */
  familyReport?: ReportUnit<IReportUnitData>
  /** 成员报告集 */
  members?: EvaluateReportCollect[]
}

export interface EvaluateStatistics {
  /** 适用编码 */
  applicableCode?: string
  /** 适用名称 */
  applicableName?: string
  /** 问卷计次 */
  count?: number
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 是否存在打卡日报 */
  dailyFlag?: number
  /** 是否默认膳食推荐 */
  defaultDietFlag?: number
  /** 是否默认营养计划 */
  defaultFlag?: number
  /** 是否存在推荐膳食 */
  dietFlag?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后测评时间 */
  lastEvaluateDate?: string
  /** 最后生成报告的批次号 */
  lastReportBatch?: number
  /** 最后生成报告的KID */
  lastReportKid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 成员ID */
  memberKid?: number
  /** 健康healthy/自评ordinary/疾病disease/家庭family */
  type?: string
  /** 有效表示 */
  validFlag?: number
}

export interface JSONObject {
}

export interface EvaluateUserRecordVO {
  /** 失效列表 */
  invalidList?: EvaluateVipRecord[]
  /** 有效列表 */
  validList?: EvaluateVipRecord[]
}

export interface EvaluateVipRecord {
  /** 开始时间 */
  beginTime?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 截止时间 */
  endTime?: string
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 父级KID */
  parentKid?: number
  /** 编码 */
  recordCode?: string
  /** 名称 */
  recordName?: string
  /** 类型（1-问卷，2-会员，3-套餐） */
  recordType?: number
}

export interface DefaultNutritionDTO {
  kid?: number
  name?: string
}

export interface NutritionVO {
  /** 报告batch */
  batchNo?: number
  /** 标识code */
  code?: string
  /** 是否有日报 */
  daily?: boolean
  /** 是否默认 */
  defaultNutritionPlan?: boolean
  /** kid */
  kid?: number
  /** 成员标识 */
  memberNo?: number
  /** 名称 */
  name?: string
}

export interface SettingNutritionVO {
  diets?: DietVO[]
  nutritious?: NutritionVO[]
}

export interface DietVO {
  /** 是否默认 */
  defaultDiet?: boolean
  /** kid */
  kid?: number
  /** 名称 */
  name?: string
  /** 计划 */
  plan?: string
  /** 报告Kid */
  reportKid?: number
}

export interface TableNutritionVipRecord {
  /** 开始时间 */
  beginTime?: string
  /** 创建时间 */
  createDate?: string
  /** 创建人ID */
  createUserId?: number
  /** 截止时间 */
  endTime?: string
  /** 剩余体验次数 */
  freeTimes?: number
  /** 分布式唯一ID */
  kid?: number
  /** 最后修改时间 */
  lastUpdateDate?: string
  /** 最后修改人ID */
  lastUpdateUserId?: number
  /** 名称 */
  recordName?: string
  /** 总体验次数 */
  totalFreeTimes?: number
}

export interface NutritionAnalysisForm {
  address?: string
  diets?: DietForm[]
  memberKids?: string[]
}

export interface DietForm {
  diet?: Diet
  imageUrl?: string
}

export interface UserBookInfo {
  /** 地址 */
  address?: string
  /** 批次号 */
  batchNo?: number
  /** 食谱信息 */
  bookInfo?: string
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
  /** 人员信息 */
  userInfo?: string
}

export interface BookInfoVO {
  kid?: number
  orderName?: string
  price?: number
  remainFreeTime?: number
  totalFreeTime?: number
  userId?: number
}

export interface TableNutritionVipRecordDTO {
  /** 购买时间 */
  buyTime?: string
  /** 名称 */
  recordName?: string
  /** 时间单位 */
  timeUnit?: string
  /** 用户ID */
  userId?: number
  /** 有效时间 */
  validTime?: number
}
export default {
  evaluateVipRecords: {
    /**
    * 创建或延长会员（只能内网调用）
    */
    createOrExtend(evaluateVipRecordDTO: EvaluateVipRecordDTO): Promise<boolean> {
      return httpPost(`/evaluate/v1.0/evaluate-vip-records/action/createOrExtend`, evaluateVipRecordDTO).then((res:any) => res.data.data)
    },
    /**
    * 查询用户VIP权限状态（未登录）
    */
    getVipStatusForPublic(params: { cityCode?: string }): Promise<EvaluateVipRecordVO> {
      return httpGet(`/evaluate/v1.0/pb/evaluate-vip-records/action/getVipStatusForPublic`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询用户VIP权限状态（已登录）
    */
    getVipStatus(params: { cityCode?: string }): Promise<EvaluateVipRecordVO> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-vip-records/action/getVipStatus`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询用户购买记录
    */
    listRecord(): Promise<EvaluateUserRecordVO> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-vip-records/action/listRecord`).then((res:any) => res.data.data)
    },
  },
  evaluateClassifies: {
    /**
    * 问卷分类首页查询
    */
    getHomePage(): Promise<List<EvaluateClassifyHomePage>> {
      return httpGet(`/evaluate/v1.0/pb/evaluate-classifies/action/get-home-page`).then((res:any) => res.data.data)
    },
    /**
    * 问卷分类查询
    */
    getTree(): Promise<List<EvaluateClassifyNode>> {
      return httpGet(`/evaluate/v1.0/pb/evaluate-classifies/action/get-tree`).then((res:any) => res.data.data)
    },
  },
  evaluateClassifyPrices: {
    /**
    * APP查询购买详情页(问卷、VIP、套餐)
    */
    detailForApp(params: { priceCode: string, priceType: string }): Promise<EvaluateClassifyPriceVO> {
      return httpGet(`/evaluate/v1.0/pb/evaluate-classify-prices/action/detailForApp`,  {params} ).then((res:any) => res.data.data)
    },
  },
  evaluateUserReports: {
    /**
    * 查询示例报告
    */
    getExample(params: { diseaseCode: string }): Promise<ReportTotal> {
      return httpGet(`/evaluate/v1.0/pb/evaluate-user-reports/action/get-example`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询餐桌营养报告
    */
    getTableNutrition(params: { batchNo?: number }): Promise<List<ReportGroup>> {
      return httpGet(`/evaluate/v1.0/pb/evaluate-user-reports/action/get-table-nutrition`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询报告下所有评测单元
    */
    getAll(params: { batchNo?: number, memberKid?: number, reportKid?: number }): Promise<ReportTotal> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-user-reports/action/get-all`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询报告分享
    */
    getShare(params: { batchNo?: number, memberKid?: number, reportKid?: number }): Promise<JSONObject> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-user-reports/action/get-share`,  {params} ).then((res:any) => res.data.data)
    },
  },
  healths: {
    /**
    * 健康检查
    */
    check(): Promise<boolean> {
      return httpGet(`/evaluate/v1.0/pb/healths/action/check`).then((res:any) => res.data.data)
    },
  },
  nounClasss: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<NounClass>> {
      return httpGet(`/evaluate/v1.0/pb/noun-classs/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  nounInfos: {
    /**
    * APP端查询单个详情
    */
    detail(params: { kid: number }): Promise<NounInfo> {
      return httpGet(`/evaluate/v1.0/pb/noun-infos/action/detail`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询文本名词解释
    */
    explain(params: { text: string }): Promise<Map<string,string>> {
      return httpGet(`/evaluate/v1.0/pb/noun-infos/action/explain`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listByClsname(params: { className: string, pageNo?: number, pageSize?: number }): Promise<PageList<NounInfo>> {
      return httpGet(`/evaluate/v1.0/pb/noun-infos/action/list-by-clsname`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { classId: number, pageNo?: number, pageSize?: number }): Promise<PageList<NounInfo>> {
      return httpGet(`/evaluate/v1.0/pb/noun-infos/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端库存名词搜索
    */
    nounSearch(params: { nounName: string }): Promise<List<NounInfo>> {
      return httpGet(`/evaluate/v1.0/pb/noun-infos/action/nounSearch`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询单个名词解释
    */
    singleExplain(params: { nounName: string }): Promise<string> {
      return httpGet(`/evaluate/v1.0/pb/noun-infos/action/singleExplain`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailyBloodSugars: {
    /**
    * 日常血糖打卡
    */
    post(dto: DailyBloodSugarDTO): Promise<boolean> {
      return httpPost(`/evaluate/v1.0/pt/daily-blood-sugars`, dto).then((res:any) => res.data.data)
    },
    /**
    * 最新打卡记录
    */
    last(): Promise<DailyBloodSugar> {
      return httpGet(`/evaluate/v1.0/pt/daily-blood-sugars/action/last`).then((res:any) => res.data.data)
    },
    /**
    * 血糖数据列表
    */
    listAdmin(params: { endTime?: string, pageNo?: number, pageSize?: number, startTime?: string }): Promise<DailyBloodSugarListVO> {
      return httpGet(`/evaluate/v1.0/pt/daily-blood-sugars/action/list-admin`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailyBodyData: {
    /**
    * 查询某天数据
    */
    get(params: { date: string }): Promise<List<BodyDataVo>> {
      return httpGet(`/evaluate/v1.0/pt/daily-body-data`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 新增(更新)DailyBodyData
    */
    post(dailyBodyDataForm: DailyBodyDataForm): Promise<boolean> {
      return httpPost(`/evaluate/v1.0/pt/daily-body-data`, dailyBodyDataForm).then((res:any) => res.data.data)
    },
  },
  dailyBodyDataNewest: {
    /**
    * 查询最新数据
    */
    get(): Promise<List<BodyDataVo>> {
      return httpGet(`/evaluate/v1.0/pt/daily-body-data-newest`).then((res:any) => res.data.data)
    },
  },
  dailyBodyDatas: {
    /**
    * 查询每日数据
    */
    get(params: { date: string, type: string }): Promise<DailyBodyDataVo> {
      return httpGet(`/evaluate/v1.0/pt/daily-body-datas`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailyDiets: {
    /**
    * 日常膳食打卡
    */
    post(dto: DailyDietDTO): Promise<number> {
      return httpPost(`/evaluate/v1.0/pt/daily-diets`, dto).then((res:any) => res.data.data)
    },
    /**
    * 日常膳食打卡记录查询
    */
    list(params: { dietType?: string, kid?: string, markDate: string }): Promise<DailyDietListForm> {
      return httpGet(`/evaluate/v1.0/pt/daily-diets/action/list`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * listDaily2
    */
    list2(params: { dietType?: number, kid?: number, markDate?: string }): Promise<DailyDietForm> {
      return httpGet(`/evaluate/v1.0/pt/daily-diets/action/list2`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 膳食打卡营养查询
    */
    listDailyFoodComps(params: { dietType?: string, markDate: string }): Promise<DailyKcalVO> {
      return httpGet(`/evaluate/v1.0/pt/daily-diets/action/listDailyFoodComps`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP查询报告膳食计划
    */
    reportPlan(): Promise<EvaluateDietPlanVO> {
      return httpGet(`/evaluate/v1.0/pt/daily-diets/action/report-plan`).then((res:any) => res.data.data)
    },
    /**
    * 日常膳食打卡变更摄入量
    */
    put(params: { kid: number }, dto: DailyDietDTO): Promise<boolean> {
      return httpPut(`/evaluate/v1.0/pt/daily-diets/${params.kid}`, dto,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 日常膳食打卡删除
    */
    delete(params: { kid: number }): Promise<boolean> {
      return httpDelete(`/evaluate/v1.0/pt/daily-diets/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailyReportCollects: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<DailyReportCollect>> {
      return httpGet(`/evaluate/v1.0/pt/daily-report-collects/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailyReports: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<DailyReport>> {
      return httpGet(`/evaluate/v1.0/pt/daily-reports/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailySports: {
    /**
    * 日常运动打卡录入
    */
    post(dailySportDto: DailySportDTO): Promise<boolean> {
      return httpPost(`/evaluate/v1.0/pt/daily-sports`, dailySportDto).then((res:any) => res.data.data)
    },
    /**
    * 日常运动打卡查询
    */
    selectById(params: { kid?: string, markDate: string }): Promise<List<DailySportVO>> {
      return httpGet(`/evaluate/v1.0/pt/daily-sports/action/selectById`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 日常运动打卡修改
    */
    update(dailySportDto: DailySportDTO): Promise<boolean> {
      return httpPut(`/evaluate/v1.0/pt/daily-sports/action/update`, dailySportDto).then((res:any) => res.data.data)
    },
    /**
    * 日常运动打卡删除
    */
    delete(params: { kid: number }): Promise<boolean> {
      return httpDelete(`/evaluate/v1.0/pt/daily-sports/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailySportsBases: {
    /**
    * 运动数据模糊查询
    */
    selectByKeyWord(params: { keyword?: string }): Promise<List<DailySportsBaseVO>> {
      return httpGet(`/evaluate/v1.0/pt/daily-sports-bases/action/selectByKeyWord`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 运动时间体重查询
    */
    selectByUserId(): Promise<number> {
      return httpGet(`/evaluate/v1.0/pt/daily-sports-bases/action/selectByUserId`).then((res:any) => res.data.data)
    },
    /**
    * 运动数据查询
    */
    get(params: { kid: number }): Promise<DailySportsBase> {
      return httpGet(`/evaluate/v1.0/pt/daily-sports-bases/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailySteps: {
    /**
    * 日常计步打卡录入
    */
    post(dailyStep: DailyStep): Promise<boolean> {
      return httpPost(`/evaluate/v1.0/pt/daily-steps`, dailyStep).then((res:any) => res.data.data)
    },
    /**
    * 日常计步打卡查询
    */
    selectById(params: { markDate: string }): Promise<DailyStepVO> {
      return httpGet(`/evaluate/v1.0/pt/daily-steps/action/selectById`,  {params} ).then((res:any) => res.data.data)
    },
  },
  dailyWaters: {
    /**
    * 日常饮水打卡录入
    */
    post(dailyWater: DailyWater): Promise<boolean> {
      return httpPost(`/evaluate/v1.0/pt/daily-waters`, dailyWater).then((res:any) => res.data.data)
    },
    /**
    * 日常饮水打卡查询
    */
    selectById(params: { markDate: string }): Promise<DailyWaterVO> {
      return httpGet(`/evaluate/v1.0/pt/daily-waters/action/selectById`,  {params} ).then((res:any) => res.data.data)
    },
  },
  daily: {
    /**
    * 获取主页状态与数据
    */
    getSmartNutrition(): Promise<SmartNutritionVO> {
      return httpGet(`/evaluate/v1.0/pt/daily/action/get-SmartNutrition`).then((res:any) => res.data.data)
    },
    /**
    * 主页数据
    */
    getData(params: { date: string }): Promise<DailyDataVO> {
      return httpGet(`/evaluate/v1.0/pt/daily/action/get-data`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 获取日历打卡状态
    */
    getRecord(params: { afterDate: string, beforeDate: string, type: string }): Promise<List<DailyRecordVO>> {
      return httpGet(`/evaluate/v1.0/pt/daily/action/get-record`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 打卡日报
    */
    getReport(params: { date: string, kId?: string }): Promise<DailyReportVO> {
      return httpGet(`/evaluate/v1.0/pt/daily/action/get-report`,  {params} ).then((res:any) => res.data.data)
    },
  },
  diseaseNutritionAdvises: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<DiseaseNutritionAdvise>> {
      return httpGet(`/evaluate/v1.0/pt/disease-nutrition-advises/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  evaluateBackVisit: {
    /**
    * 提交回访问卷
    */
    post(body: UserBackVisitForm): Promise<boolean> {
      return httpPost(`/evaluate/v1.0/pt/evaluate-back-visit`, body).then((res:any) => res.data.data)
    },
    /**
    * 查询回访问卷类型
    */
    getType(): Promise<string> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-back-visit/action/get-type`).then((res:any) => res.data.data)
    },
  },
  evaluateBackVisits: {
    /**
    * 查询用户待随访问卷列表
    */
    get(): Promise<List<EvaluateBackVisitListVO>> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-back-visits`).then((res:any) => res.data.data)
    },
  },
  evaluateDietPlans: {
    /**
    * APP查询膳食计划
    */
    getPlan(): Promise<EvaluateDietPlanVO> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-diet-plans/action/get-plan`).then((res:any) => res.data.data)
    },
    /**
    * APP查询报告膳食计划
    */
    getPlan1200(): Promise<EvaluateDietPlanVO> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-diet-plans/action/get-plan-1200`).then((res:any) => res.data.data)
    },
    /**
    * APP查询报告膳食计划
    */
    getPlan358(params: { energy: number }): Promise<EvaluateDietPlanVO> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-diet-plans/action/get-plan-358`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP查询膳食计划交换份（分页查询）
    */
    getPlanExchange(params: { dietPlanDetailKid: number, pageNo?: number, pageSize?: number }): Promise<PageList<EvaluateDietPlanDetail>> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-diet-plans/action/get-plan-exchange`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP查询报告膳食计划
    */
    getReportPlan(params: { reportKid: number }): Promise<EvaluateDietPlanVO> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-diet-plans/action/get-report-plan`,  {params} ).then((res:any) => res.data.data)
    },
  },
  evaluateMemberExts: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<EvaluateMemberExt>> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-member-exts/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  evaluateMembers: {
    /**
    * 新增家庭成员
    */
    post(evaluateFamilyMember: EvaluateMember): Promise<number> {
      return httpPost(`/evaluate/v1.0/pt/evaluate-members`, evaluateFamilyMember).then((res:any) => res.data.data)
    },
    /**
    * 查询成员列表
    */
    getAll(): Promise<List<EvaluateMember>> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-members/action/get-all`).then((res:any) => res.data.data)
    },
    /**
    * 查询家庭成员
    */
    get(params: { kid: number }): Promise<EvaluateMember> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-members/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 编辑家庭成员
    */
    put(params: { kid: number }, evaluateFamilyMember: EvaluateMember): Promise<number> {
      return httpPut(`/evaluate/v1.0/pt/evaluate-members/${params.kid}`, evaluateFamilyMember,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 删除家庭成员
    */
    delete(params: { kid: number }): Promise<boolean> {
      return httpDelete(`/evaluate/v1.0/pt/evaluate-members/${params.kid}`,  {params} ).then((res:any) => res.data.data)
    },
  },
  evaluateQuestionnaire: {
    /**
    * 下一个问卷
    */
    nextForm(body: UserQuestionnaireNext): Promise<NextForm> {
      return httpPost(`/evaluate/v1.0/pt/evaluate-questionnaire/action/next-form`, body).then((res:any) => res.data.data)
    },
    /**
    * 开始问卷
    */
    startForm(params: { classifyCode: string, formVersion?: number, memberKid?: number }): Promise<DynamicQuestionnaireResult> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-questionnaire/action/start-form`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 问卷引导
    */
    statementForm(params: { classifyCode: string }): Promise<DynamicQuestionnaireStatement> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-questionnaire/action/statement-form`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 提交问卷
    */
    submitForm(generateForms: ReportGenerateForm[]): Promise<List<EvaluateReportCollect>> {
      return httpPost(`/evaluate/v1.0/pt/evaluate-questionnaire/action/submit-form`, generateForms).then((res:any) => res.data.data)
    },
  },
  evaluateReportCollects: {
    /**
    * 查询家庭报告组
    */
    getFamily(params: { collectBatchNo: number }): Promise<ReportFamilyCollect> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-report-collects/action/get-family`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<EvaluateReportCollect>> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-report-collects/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 查询报告集列表
    */
    pageList(params: { pageNo?: number, pageSize?: number }): Promise<PageList<EvaluateReportCollect>> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-report-collects/action/page-list`,  {params} ).then((res:any) => res.data.data)
    },
  },
  evaluateStatisticss: {
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<EvaluateStatistics>> {
      return httpGet(`/evaluate/v1.0/pt/evaluate-statisticss/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
  },
  action: {
    /**
    * 设置默认膳食推荐
    */
    diet(kid: DefaultNutritionDTO): Promise<boolean> {
      return httpPut(`/evaluate/v1.0/pt/nutrition/action/default/diet`, kid).then((res:any) => res.data.data)
    },
    /**
    * 设置默认营养计划
    */
    plan(kid: DefaultNutritionDTO): Promise<boolean> {
      return httpPut(`/evaluate/v1.0/pt/nutrition/action/default/plan`, kid).then((res:any) => res.data.data)
    },
  },
  nutrition: {
    /**
    * 获取用户营养计划
    */
    title(): Promise<NutritionVO> {
      return httpGet(`/evaluate/v1.0/pt/nutrition/action/title`).then((res:any) => res.data.data)
    },
  },
  nutritious: {
    /**
    * 管理营养计划列表
    */
    get(): Promise<SettingNutritionVO> {
      return httpGet(`/evaluate/v1.0/pt/nutritious`).then((res:any) => res.data.data)
    },
  },
  tableNutritionVipRecords: {
    /**
    * 获取用户餐桌营养期限
    */
    getTableNutritionVipRecord(): Promise<TableNutritionVipRecord> {
      return httpPost(`/evaluate/v1.0/pt/table-nutrition-vip-records/action/getTableNutritionVipRecord`).then((res:any) => res.data.data)
    },
    /**
    * 创建或延长会员（只能内网调用）
    */
    createOrExtend(dto: TableNutritionVipRecordDTO): Promise<boolean> {
      return httpPost(`/evaluate/v1.0/table-nutrition-vip-records/action/createOrExtend`, dto).then((res:any) => res.data.data)
    },
  },
  userBookInfos: {
    /**
    * 餐桌营养分析
    */
    analysisOrder(nutritionAnalysisForm: NutritionAnalysisForm): Promise<number> {
      return httpPost(`/evaluate/v1.0/pt/user-book-infos/action/analysisOrder`, nutritionAnalysisForm).then((res:any) => res.data.data)
    },
    /**
    * APP端查询分页数据
    */
    listPage(params: { pageNo?: number, pageSize?: number }): Promise<PageList<UserBookInfo>> {
      return httpGet(`/evaluate/v1.0/pt/user-book-infos/action/list-page`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 餐桌营养分析
    */
    nutritionAnalysis(params: { orderKid?: number }): Promise<number> {
      return httpGet(`/evaluate/v1.0/pt/user-book-infos/action/nutritionAnalysis`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 餐桌营养订单校验
    */
    orderInfo(params: { orderKid: number }): Promise<BookInfoVO> {
      return httpGet(`/evaluate/v1.0/pt/user-book-infos/action/orderInfo`,  {params} ).then((res:any) => res.data.data)
    },
    /**
    * 正在进行餐桌营养分析的用户
    */
    userlist(): Promise<List<string>> {
      return httpGet(`/evaluate/v1.0/pt/user-book-infos/action/userlist`).then((res:any) => res.data.data)
    },
  },
}
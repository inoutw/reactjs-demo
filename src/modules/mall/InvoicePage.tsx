import React, { useMemo, useState, useEffect, useCallback, Fragment } from 'react'
import { InlineItemEdit, InlineItemOthers } from './components/InlineItem'
import Nav from 'components/nav/Nav'
import order, { MyInvoice } from 'api/order'
import { Toast } from 'antd-mobile'
import { withInvoiceResult, useInvoiceResult } from './components/invoiceData'

// 1.电子普通发票 2.纸质普通发票
const typeListConst = [
  {
    id: 1,
    value: '电子普通发票',
    content: '电子发票与纸质发票具有同等法律效力，是税局认可的有效凭证，可支持报销入账',
  },
  {
    id: 2,
    value: '纸质普通发票',
    content: '',
  },
]

export interface EditContext {
  personData: MyInvoice
  companyData: MyInvoice
  setCompanyData: Function
  setPersonData: Function
  titleType: number
}
export const EditContext = React.createContext(null as EditContext)

const InvoicePage: PageComponent<{ isEdit?: boolean }> = ({ ...props }) => {
  const defaultCompanyData = {
    title: '',
    bankName: '',
    cardNo: '',
    phone: '',
    receiverAddress: '',
    receiverEmail: '',
    receiverPhone: '',
    regAddress: '',
    taxNo: '',
    titleType: 1,
  }
  const defaultPersonalData = {
    title: '',
    receiverAddress: '',
    receiverEmail: '',
    receiverPhone: '',
    titleType: 2,
  }
  const state = props.location.state || {}
  const { invoiceTypeList } = state
  const [invoiceData, setInvoiceData] = useState<MyInvoice[]>([]) // 接口返回的发票数据
  const [companyData, setCompanyData] = useState<MyInvoice>(defaultCompanyData) // 企业类型发票数据
  const [personData, setPersonData] = useState<MyInvoice>(defaultPersonalData) // 个人类型发票数据

  const invoiceStore = useInvoiceResult()

  let [titleType, setTitleType] = useState(() => {
    if (invoiceStore && invoiceStore.titleType) return invoiceStore.titleType
    return 1
  }) // 抬头类型

  let [invoiceType, setInvoiceType] = useState(() => {
    if (invoiceStore && invoiceStore.invoiceType) return invoiceStore.invoiceType
    return (invoiceTypeList && invoiceTypeList.length === 1 && invoiceTypeList[0]) || 1
  }) // 发票类型

  const ableSave = useMemo(() => {
    let finalData: { [key: string]: any } = titleType === 1 ? companyData : personData
    let defaultData = titleType === 1 ? defaultCompanyData : defaultPersonalData
    if (!finalData) return false
    let allKeys = Object.keys(finalData)
    let defaultAllKeys = Object.keys(defaultData)

    if (allKeys.length < defaultAllKeys.length) return false
    for (let key of allKeys) {
      let toValidItem = defaultAllKeys.find(item => item === key)
      if (!finalData[key] && toValidItem) return false
    }
    return true
  }, [defaultCompanyData, companyData, personData, defaultPersonalData, titleType])

  const confirmInvoice = useCallback(() => {
    if (!ableSave) {
      return false
    }
    let invoice = titleType === 1 ? companyData : personData
    invoice = Object.assign({}, invoice, { invoiceType })
    if (invoice.receiverEmail && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(invoice.receiverEmail)) {
      Toast.fail('邮箱格式不正确')
      return
    }

    if (!/^1\d{10}$/.test(invoice.receiverPhone)) {
      Toast.fail('手机号码格式不正确')
      return
    }

    order.myInvoices
      .addOrUpdate(invoice)
      .then(res => {
        res && withInvoiceResult.setShareState(res)
        Toast.success('保存成功', 1, () => {
          props.history.goBack()
        })
      })
      .catch(ex => {
        Toast.fail('保存失败')
      })
  }, [ableSave, titleType, companyData, personData, invoiceType, props.history])

  useEffect(() => {
    order.myInvoices.listApp().then(res => {
      res && setInvoiceData(res)
      let temCompanyData = res.find(item => item.titleType === 1)
      let temPersonData = res.find(item => item.titleType === 2)
      res.length && setCompanyData(temCompanyData)
      res.length && setPersonData(temPersonData)
    })
  }, [])

  const headRight = () => {
    return (
      <div className="head-save" onClick={confirmInvoice} style={{ color: ableSave ? '#3FCC7E' : '#999' }}>
        确定
      </div>
    )
  }

  const typeList = useMemo(() => {
    let final = typeListConst.filter((typeItem: any) => invoiceTypeList && invoiceTypeList.includes(typeItem.id))
    return final || []
  }, [invoiceTypeList])

  const inVoiceContent = useMemo(() => {
    let invoiceRes = typeList.find(item => {
      return item.id === invoiceType
    })
    return invoiceRes && invoiceRes.content
  }, [typeList, invoiceType])

  return (
    <EditContext.Provider value={{ companyData, personData, setCompanyData, setPersonData, titleType }}>
      <div className="container invoice-page">
        <Nav title="发票信息" right={headRight()}></Nav>
        <div className="top-wrap">
          <div className="invoice-type">发票类型</div>
          <div className="type-value-warp">
            {typeList.map(typeItem => (
              <div
                key={typeItem.id}
                className={`tab-item ${invoiceType !== typeItem.id ? 'tab-item-normal' : ''}`}
                onClick={() => {
                  setInvoiceType(typeItem.id)
                }}>
                {typeItem.value}
              </div>
            ))}
          </div>
          {inVoiceContent ? <div className="type-desc">{inVoiceContent}</div> : null}
        </div>
        <div className="line"></div>
        <div className="btm-wrap">
          <InlineItemOthers title="* 抬头类型">
            <div
              className={`tab-item ${titleType === 1 ? '' : 'tab-item-normal'}`}
              onClick={() => {
                setTitleType(1)
              }}>
              企业单位
            </div>
            <div className={`tab-item ${titleType === 2 ? '' : 'tab-item-normal'}`} onClick={() => setTitleType(2)}>
              个人/非企业单位
            </div>
          </InlineItemOthers>
          <InlineItemEdit
            title="* 发票抬头"
            placeholder={titleType === 1 ? '请输入单位名称' : '请输入个人姓名'}
            maxLength={60}
            field="title"
          />
          {titleType === 1 ? (
            <Fragment>
              <InlineItemEdit title="* 税号" placeholder="请输入纳税识别号" maxLength={40} field="taxNo" />
              <InlineItemEdit
                title="* 注册地址"
                placeholder="营业执照上的注册地址"
                maxLength={100}
                field="regAddress"
              />
              <InlineItemEdit title="* 电话" maxLength={12} placeholder="公司有效联系电话" field="phone" type="tel" />
              <InlineItemEdit
                title="* 开户银行"
                placeholder="开户许可证上的公司开户银行"
                field="bankName"
                maxLength={40}
              />
              <InlineItemEdit
                title="* 银行账号"
                placeholder="开户许可证上的银行账号"
                field="cardNo"
                type="tel"
                maxLength={50}
              />
            </Fragment>
          ) : null}
          <InlineItemEdit title="* 收票人邮箱" placeholder="请输入邮箱地址" field="receiverEmail" maxLength={100} />
          <InlineItemEdit title="* 收票人地址" placeholder="请输入收票人地址" maxLength={100} field="receiverAddress" />
          <InlineItemEdit
            title="* 收票人电话"
            placeholder="请输入方便联系的电话"
            maxLength={12}
            type="tel"
            field="receiverPhone"
          />
        </div>
      </div>
    </EditContext.Provider>
  )
}

export default InvoicePage

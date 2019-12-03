import React, { useContext, useMemo } from 'react'
import { Icon } from 'antd-mobile'
import { EditContext } from '../InvoicePage'
import { MyInvoice } from 'api/order'

export interface InlineItemProps {
  title: string
  style?: React.CSSProperties
  disabled?: boolean
  onClick?: () => void
  field?: string
  titleStyle?: React.CSSProperties
  customClass?: string
  rightStyle?: React.CSSProperties
}
const InlineItem: React.FC<InlineItemProps> = props => {
  const onClick = () => {
    if (props.disabled) return
    if (props.onClick) return props.onClick()
  }
  return (
    <div className={`inline-wrap ${props.customClass || ''}`} style={props.style} onClick={onClick}>
      <span className="title" style={props.titleStyle}>
        {props.title}
      </span>
      <div className="inline-right" style={props.rightStyle}>
        {props.children}
        {props.onClick ? <Icon type="right" size="lg" color="#CACACE" className="" /> : null}
      </div>
    </div>
  )
}
interface EditProps extends InlineItemProps {
  placeholder?: string
  maxLength?: number
  type?: string
}
const InlineItemEdit: React.FC<EditProps> = ({
  customClass = 'inline-edit',
  titleStyle = { fontSize: '0.32rem', color: '#999', width: '2rem', display: 'inline-block' },
  placeholder,
  maxLength,
  type,
  ...props
}) => {
  const editContext = useContext(EditContext)
  const curData: { [key: string]: any } = editContext.titleType === 1 ? editContext.companyData : editContext.personData
  const onTextChange = editContext.titleType === 1 ? editContext.setCompanyData : editContext.setPersonData

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value
    if (inputVal && inputVal.length > maxLength && type === 'tel') {
      inputVal = inputVal.slice(0, maxLength)
    }
    onTextChange({ ...curData, titleType: editContext.titleType, [props.field]: inputVal })
  }
  const value = useMemo(() => {
    return curData && curData[props.field] ? curData[props.field] : ''
  }, [curData, props.field])
  return (
    <InlineItem {...props} titleStyle={titleStyle} customClass={customClass}>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        maxLength={maxLength}
        className="item-input"
        value={value}
        onChange={onChangeInput}
      />
    </InlineItem>
  )
}
interface InlineTabProps extends InlineItemProps {}
const InlineItemOthers: React.FC<InlineTabProps> = ({
  customClass = 'inline-edit',
  titleStyle = { fontSize: '0.32rem', color: '#999', width: '2rem', display: 'inline-block' },
  ...props
}) => {
  return (
    <InlineItem {...props} titleStyle={titleStyle} customClass={customClass}>
      {props.children}
    </InlineItem>
  )
}

const TabItem: React.FC<{ title: string; onClick?: () => void }> = ({ ...props }) => {
  return (
    <div className="tab-item" onClick={props.onClick}>
      {props.title}
    </div>
  )
}

const ActionTab: React.FC<{
  item: any
  activeItem: number
  onClick: () => void
  style?: React.CSSProperties
}> = ({ item, activeItem, onClick, style }) => {
  return (
    <div className={`tab-item ${activeItem === item.id ? 'tabActive' : ''}`} style={style} onClick={onClick}>
      {item.value}
    </div>
  )
}
export { InlineItemEdit, InlineItemOthers, TabItem }
export default InlineItem

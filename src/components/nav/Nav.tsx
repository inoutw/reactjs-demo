import React from 'react'
import { Icon } from 'antd-mobile'
import './nav.css'
import { useHistory } from 'react-router'
const Nav: React.FC<{ title: string; right?: any; style?: React.CSSProperties; onBack?: () => void }> = props => {
  const history = useHistory()

  const handleBack = () => {
    if (props.onBack) return props.onBack()
    history.goBack()
  }
  return (
    <div className="nav" style={props.style}>
      <div className="left" onClick={handleBack}>
        <Icon type="left" size="lg" />
      </div>
      <div className="title">{props.title}</div>
      <div className="right">{props.right}</div>
    </div>
  )
}
export default Nav

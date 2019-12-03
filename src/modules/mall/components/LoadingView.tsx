import React from 'react'
import mallStyles from '../mallStyle'
import '../mallStyle.css'
import { ActivityIndicator } from 'antd-mobile'
const LoadingView: React.FC<{}> = props => {
  return (
    <div className="full centerWrap loading-view">
      <ActivityIndicator panelColor="#f61" size="large"></ActivityIndicator>
      <span style={{ fontSize: '0.32rem' }}>页面加载中...</span>
    </div>
  )
}
export default LoadingView

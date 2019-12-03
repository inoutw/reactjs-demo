import React from 'react'
const ActionButton: React.FC<{ onClick?: () => void; title: string; normal?: boolean; customClass?: string }> = ({
  onClick,
  title,
  customClass,
  normal = true,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={`action-btn ${customClass ? customClass : ''} ${!normal ? 'action-btn-reverse' : ''}`}>
      {title}
    </div>
  )
}
export default ActionButton

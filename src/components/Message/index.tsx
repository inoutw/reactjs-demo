import React, { useEffect, useState } from 'react'
import assets from 'assets'
import './message.css'
interface MessagePreset {
  image: string
  content: string
}
const presets: { [key: string]: MessagePreset } = {
  'no-address': {
    image: assets.empty.no_address,
    content: '您还没有填写收货地址哦~',
  },
  'sold-out': {
    image: assets.empty.no_data,
    content: '商品过期不存在~',
  },
}
interface Props {
  image?: any
  preset?: keyof typeof presets
  title?: string
  content?: string
  actionTitle?: string
  textColor?: string
  style?: any
  onAction?: () => void
}
const Message: React.FC<Props> = ({
  image,
  preset,
  title,
  content,
  actionTitle,
  textColor = '#999',
  onAction,
  style = { paddingTop: '2.5rem', paddingBottom: '2.5rem' },
  ...props
}) => {
  const [config, setConfig] = useState({} as any)
  const handleAction = () => {
    if (!onAction) {
      throw new Error('`onAction` is required if there is an action button.')
    }

    onAction()
  }
  useEffect(() => {
    if (preset) {
      setConfig(presets[preset] || {})
    } else {
      setConfig({
        image: image,
        title: title,
        content: content,
        actionTitle: actionTitle,
      })
    }
  }, [preset, image, title, content, actionTitle])

  const renderImage = () => {
    return config.image ? <img src={config.image} className="msg-img" alt="" /> : null
  }
  const renderTitle = () => {
    return config.title ? <div className="title">{config.title}</div> : null
  }

  const renderContent = () => {
    return config.content ? (
      <div style={{ color: textColor }} className="content">
        {config.content}
      </div>
    ) : null
  }
  const actionButton = () => {
    return actionTitle ? (
      <div onClick={handleAction} className="actionButton">
        <div className="actionTitle">{actionTitle}</div>
      </div>
    ) : null
  }
  return (
    <div className="message-wrap" style={style}>
      {renderImage()}
      {renderTitle()}
      {renderContent()}
      {actionButton()}
    </div>
  )
}
export default Message

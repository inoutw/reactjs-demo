/**
 * 选择收货人
 */
import React, { useState, useEffect } from 'react'
import ReceiverItem from './components/ReceiverItem/index'
import order, { OrderReceivingAddressVO } from 'api/order'
import LoadingView from './components/LoadingView'
import { withDefaultReceiver } from './components/defaultReceiver'
import mallStyles from './mallStyle'
import Nav from 'components/nav/Nav'
import Message from 'components/Message'
import { withStore } from 'services/store'

export const withShowSpec = withStore('showSpec', {} as any)
const ReceiverList: PageComponent<{}> = props => {
  const [loading, setLoading] = useState<boolean>(true)
  let [receivers, setReceivers] = useState<OrderReceivingAddressVO[]>([])
  useEffect(() => {
    order.orderReceivingAddresss
      .listAdmin()
      .then(res => {
        setReceivers(res)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])
  let addReceiver = () => {
    props.history.push('/mall/edit-receiver')
  }
  const _onPickReceiver = (itemData: OrderReceivingAddressVO) => {
    withDefaultReceiver.setShareState(itemData)
    withShowSpec.setShareState({ showSpec: true })
    props.history.goBack()
  }
  const onEdit = (item: OrderReceivingAddressVO) => {
    props.history.push('/mall/edit-receiver', { receiver: item })
  }
  const renderBody = () => {
    return (
      <div className="addr-list">
        <div>
          {receivers && receivers.length ? (
            receivers.map((item, index) => (
              <ReceiverItem itemData={item} onPickReceiver={_onPickReceiver} key={item.kid} onEdit={onEdit} />
            ))
          ) : (
            <Message preset="no-address" />
          )}
        </div>
        <div className="btmBtn" onClick={addReceiver}>
          <div style={styles.addTxt}>+ 添加新收货人</div>
        </div>
      </div>
    )
  }
  const handleBack = () => {
    withShowSpec.setShareState({ showSpec: true })
    props.history.goBack()
  }
  return (
    <div style={styles.container}>
      <Nav title="选择收货人" onBack={handleBack} />
      {loading ? <LoadingView /> : renderBody()}
    </div>
  )
}
export default ReceiverList
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btmBtn: {
    borderRadius: '0.44rem',
    borderColor: '#41D282',
    borderWidth: '0.2rem',
    ...mallStyles.centerWrap,
    width: '6.7rem',
    position: 'absolute',
  },
  addTxt: {
    color: '#41D282',
    fontSize: '0.32rem',
    lineHeight: '0.45rem',
  },
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  deleteBtn: {
    height: '0.16rem',
    width: 75,
    backgroundColor: '#FF5F5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: '0.1rem',
    backgroundColor: '#E6E6E6',
    width: '6.78rem',
    marginLeft: '0.4rem',
  },
}

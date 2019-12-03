import React, { useState, useMemo } from 'react'
import Nav from 'components/nav/Nav'
import { Icon, Switch, Modal, Toast } from 'antd-mobile'
import AddressPicker, { CountyItem } from 'components/AddressPicker'
import order, { OrderReceivingAddressVO } from 'api/order'
import { withDefaultReceiver } from './components/defaultReceiver'

const EditReceiver: PageComponent<{ receiver?: OrderReceivingAddressVO }> = ({ ...props }) => {
  const { state } = props.history.location
  const receiver = state && state.receiver ? state.receiver : {}
  const [showArea, setShowArea] = useState(false)
  const [orderReceivingAddress, setOrderReceivingAddress] = useState<OrderReceivingAddressVO>(receiver)
  let countyTxtDefault = useMemo(() => {
    if (orderReceivingAddress.receivingProvinceText) {
      return `${orderReceivingAddress.receivingProvinceText}${orderReceivingAddress.receivingCityText}${orderReceivingAddress.receivingCountyText}`
    }
    return ''
  }, [orderReceivingAddress])
  const [showDelete, setShowDelete] = useState(false)
  const [countyTxt, setCountyTxt] = useState(countyTxtDefault)
  const onChangeDefault = (value: boolean) => {
    let defaultFlag = value ? 0 : 1
    setOrderReceivingAddress({ ...orderReceivingAddress, defaultFlag })
  }
  const onInputChange = (name: string, val: string) => {
    setOrderReceivingAddress({ ...orderReceivingAddress, [name]: val })
  }
  const getArea = (area: CountyItem[]) => {
    setShowArea(false)
    if (!area) return
    let cityNames = area.map((s: any) => s.name).join('')
    let cityIds = area.map((s: any) => s.id)
    setCountyTxt(cityNames)
    setOrderReceivingAddress({
      ...orderReceivingAddress,
      receivingProvince: cityIds[0],
      receivingCity: cityIds[1],
      receivingCounty: cityIds[2],
    })
  }
  let ableSave = useMemo(() => {
    let allKeys = Object.keys(orderReceivingAddress)
    const validKeys = allKeys.filter(item => item !== 'defaultFlag')
    let orderAddr: { [key: string]: any } = orderReceivingAddress
    //编辑
    if (orderReceivingAddress.kid) {
      for (let key of validKeys) {
        if (!orderAddr[key]) return false
      }
    } else {
      if (validKeys.length < 6) return false
      for (let key of validKeys) {
        if (!orderAddr[key]) return false
      }
    }
    return true
  }, [orderReceivingAddress])
  const saveReceiver = async () => {
    if (!ableSave) {
      return
    }
    if (!/^1\d{10}$/.test(orderReceivingAddress.receivingPhone)) {
      Toast.fail('手机号码格式不正确')
      return
    }
    if (receiver.kid) {
      await updateReceiver()
    } else {
      addReceiver()
    }
  }
  const addReceiver = () => {
    let params = { ...orderReceivingAddress }
    params.postCode = '000000'
    params.defaultFlag = 0
    order.orderReceivingAddresss
      .post(params)
      .then(res => {
        if (!res) {
          Toast.fail(`保存失败`)
          return
        }
        Toast.success('保存成功', 1, () => {
          props.history.goBack()
        })
      })
      .catch(ex => {
        Toast.fail(`保存失败${ex}`)
      })
  }
  const updateReceiver = async () => {
    try {
      await order.orderReceivingAddresss.put({ kid: receiver.kid }, orderReceivingAddress)
      Toast.success('保存成功', 1, () => {
        props.history.goBack()
      })
    } catch (ex) {
      Toast.fail(`保存失败${ex}`)
    }
  }
  const headRight = () => {
    return (
      <div className="head-save" onClick={saveReceiver} style={{ color: ableSave ? '#3FCC7E' : '#999' }}>
        保存
      </div>
    )
  }
  const removeReceiver = () => {
    order.orderReceivingAddresss
      .delete({ kid: receiver.kid })
      .then(res => {
        Toast.success('删除成功', 1, () => {
          props.history.goBack()
        })
        if (receiver.kid === withDefaultReceiver.getShareState().kid) {
          withDefaultReceiver.setShareState({})
        }
      })
      .catch(ex => {
        Toast.fail(`${ex}`)
      })
  }
  const pageTitle = useMemo(() => {
    if (receiver.kid) return '编辑收货人'
    return '新增收货人'
  }, [receiver])
  return (
    <div className="edit-receiver">
      <Nav title={pageTitle} right={headRight()} />
      <div className="receiver-body">
        <input
          placeholder="收货人"
          className="edit-txt receiver-name"
          maxLength={20}
          onChange={e => {
            onInputChange('receivingName', e.target.value)
          }}
          value={orderReceivingAddress['receivingName'] || ''}
        />
        <input
          placeholder="手机号码"
          className="edit-txt receiver-phone"
          maxLength={11}
          onChange={e => {
            onInputChange('receivingPhone', e.target.value)
          }}
          value={orderReceivingAddress['receivingPhone'] || ''}
        />
        <div className="edit-txt edit-area" onClick={() => setShowArea(true)}>
          {countyTxt ? <span style={{ color: '#1f1f1f' }}>{countyTxt}</span> : <span>所在区域</span>}
          <Icon type="right" size="lg" color="#999" />
        </div>
        <textarea
          placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室"
          className="edit-txt edit-addr"
          maxLength={100}
          onChange={e => {
            onInputChange('receivingAddresDetail', e.target.value)
          }}
          value={orderReceivingAddress['receivingAddresDetail'] || ''}></textarea>
        <div className="edit-txt edit-area edit-default">
          <span>设为默认地址</span>
          <div className="edit-switch">
            <Switch onChange={onChangeDefault} checked={!orderReceivingAddress['defaultFlag']} />
          </div>
        </div>
        {orderReceivingAddress.kid ? (
          <div className="edit-txt edit-area">
            <span style={{ color: '#FF5A5F' }} onClick={() => setShowDelete(true)}>
              删除收货地址
            </span>
          </div>
        ) : null}
      </div>
      <Modal popup visible={showArea} onClose={() => setShowArea(false)} animationType="slide-up">
        <AddressPicker onDismiss={getArea} />
      </Modal>
      <Modal
        transparent
        wrapClassName="delete-confirm"
        visible={showDelete}
        onClose={() => {
          setShowDelete(false)
        }}>
        <div className="confirm-title">确定要删除该收货人信息吗？</div>
        <div className="btn-wrap">
          <div className="centerWrap confirmBtn" onClick={removeReceiver}>
            确定
          </div>
          <div className="centerWrap cancelBtn" onClick={() => setShowDelete(false)}>
            取消
          </div>
        </div>
      </Modal>
    </div>
  )
}
export default EditReceiver

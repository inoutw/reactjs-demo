/**
 * 收货人Item
 */
import React, { useState, ReactNode, Fragment } from 'react'
import { fuzzyNumber } from 'utils'
import { OrderReceivingAddressVO } from 'api/order'
import { Icon } from 'antd-mobile'
import mallStyles from '../../mallStyle'
import './ReceiverItem.css'
import assets from 'assets'
import { defaultProps } from 'antd-mobile/lib/search-bar/PropsType'
interface ReceiverItemProps {
  itemData?: OrderReceivingAddressVO
  onPickReceiver?: Function
  right?: ReactNode
  onEdit?: Function
  custClass?: string
}
const ReceiverItem: React.FC<ReceiverItemProps> = ({
  itemData = {},
  onPickReceiver,
  right,
  onEdit,
  custClass,
  ...props
}) => {
  let { defaultFlag, receivingName, receivingPhone, receivingAddresDetail } = itemData
  let editReveicer = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onEdit && onEdit(itemData)
  }
  return (
    <div className={`receiver-item ${defaultFlag === 0 ? 'activeItem' : ''} ${custClass ? custClass : ''}`}>
      <div className="receiver-item-left" onClick={() => onPickReceiver(itemData)}>
        {props.children ? (
          props.children
        ) : (
          <div style={{ justifyContent: 'center' }}>
            <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
              <div className="receiverAddrTxt textOverflow" style={{ maxWidth: '3.7rem' }}>
                {receivingName}
              </div>
              <div style={styles.receiverAddrTxt}>{fuzzyNumber(receivingPhone)}</div>
              {defaultFlag === 0 ? (
                <div style={styles.defaultTxtWrap}>
                  <div style={styles.defaultTxt}>默认</div>
                </div>
              ) : null}
            </div>
            <div className="addrBtmWrap">
              <img className="locIcon" src={assets.mall.loc_icon} alt="" />
              <div className="smallGrayTxt">{receivingAddresDetail}</div>
            </div>
          </div>
        )}
      </div>
      {right ? (
        right
      ) : (
        <div className="editWrap" onClick={editReveicer}>
          <img src={assets.mall.edit_icon} alt="" className="editIcon" />
        </div>
      )}
    </div>
  )
}
export default ReceiverItem
const styles = {
  listHeaderWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '1.68rem',
    paddingLeft: '0.32rem',
    // paddingRight: '0.32rem',
  },
  defaultTxtWrap: {
    borderTopLeftRadius: '0.24rem',
    borderTopRightRadius: '0.24rem',
    borderBottomRightRadius: '0.24rem',
    overflow: 'hidden',
    marginLeft: '0.16rem',
    backgroundColor: '#41D282',
    display: 'inline-block',
    paddingLeft: '0.1rem',
    paddingRight: '0.1rem',
  },
  defaultTxt: {
    fontSize: '0.24rem',
    color: '#fff',
    lineHeight: '0.33rem',
    backgroundColor: '#41D282',
    paddingHorizontal: '0.16rem',
    paddingVertical: '0.4rem',
  },
  receiverAddrTxt: {
    fontSize: '0.36rem',
    color: '#1F1F1F',
    lineHeight: '0.50rem',
    marginLeft: '0.2rem',
    display: 'inline-block',
  },
}

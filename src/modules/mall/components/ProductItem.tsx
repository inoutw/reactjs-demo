import React, { useMemo, useEffect } from 'react'
import { CartMerchantItemVO } from 'api/order'
import './mall-component.css'
import { Icon } from 'antd-mobile'
import InlineItem from './InlineItem'
import { getIntPrice, getDecimalPrice, formPrice } from 'utils/price'
import { useHistory } from 'react-router'
import { useInvoiceResult } from './invoiceData'

export interface CartItem extends CartMerchantItemVO {
  shipFee?: number
  invoiceTypeList?: number[]
}
const ProductItem: React.FC<{ goodData: CartItem; onChoseInvoice?: Function }> = ({
  goodData,
  onChoseInvoice,
  ...props
}) => {
  const { shopLogo, merchantName, merchantKid, cartProductVOList, shipFee, invoiceTypeList = [1, 2] } = goodData
  const { skuPic, productName, num, skuSpec, skuSalePrice } = cartProductVOList[0]

  const history = useHistory()
  const invoice = useInvoiceResult()
  const merchantPrice = useMemo(() => {
    let mTotal = 0
    for (let item of cartProductVOList) {
      let tmpNum = (item && item.num) || 0
      let tmpP = (item && item.skuSalePrice) || 0
      mTotal += tmpNum * tmpP
    }
    return mTotal
  }, [cartProductVOList])

  const choseInvoice = () => {
    history.push('/mall/invoice', { invoiceTypeList: invoiceTypeList })
  }

  const invoiceTxt = useMemo(() => {
    if (!invoice || !invoice.kid) return '不开发票'
    return invoice.invoiceType === 1 ? '电子普通发票' : '纸质普通发票'
  }, [invoice])

  useEffect(() => {
    if (Object.keys(invoice).length) {
      onChoseInvoice && onChoseInvoice({ key: merchantKid, value: { key: invoice.kid, value: invoice.invoiceType } })
    }
  }, [merchantKid, invoice, onChoseInvoice])
  return (
    <div className="product-item">
      <div className="merchant-wrap">
        <img src={shopLogo} alt="" className="merchant-logo" />
        <span>{merchantName}</span>
        <Icon type="right" color="#CACACE" size="lg" />
      </div>
      <div className="product-wrap">
        <img src={skuPic} alt="" className="product-img" />
        <div className="product-right">
          <div className="name-warp">
            <div className="product-name">{productName} </div>
            <span className="product-num">x {num}</span>
          </div>
          <div className="product-sku">{skuSpec}</div>
          <div className="right-bottom">
            <div className="product-price">
              <span className="price-int">¥ {getIntPrice(skuSalePrice)}</span>
              <span className="price-decimal">.{getDecimalPrice(skuSalePrice)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-extra">
        <InlineItem title="商品金额" rightStyle={{ justifyContent: 'flex-end' }}>
          <span className="">¥{formPrice(merchantPrice)}</span>
        </InlineItem>
        <InlineItem title="运费" rightStyle={{ justifyContent: 'flex-end' }}>
          快递<span className="ship-fee">¥{formPrice(shipFee)}</span>
        </InlineItem>
        {invoiceTypeList && invoiceTypeList.length ? (
          <InlineItem
            title="发票信息"
            onClick={choseInvoice}
            rightStyle={{ justifyContent: 'flex-end' }}
            style={{ borderBottomWidth: 0 }}>
            <span className="invoice-entry">{invoiceTxt}</span>
          </InlineItem>
        ) : null}
      </div>
    </div>
  )
}
export default ProductItem

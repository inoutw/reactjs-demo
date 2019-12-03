import React from 'react'
import { getIntPrice, getDecimalPrice, formPrice } from 'utils/price'

const PriceView: React.FC<{ price: number }> = ({ price, ...props }) => {
  if (!price && price !== 0) return null
  return (
    <div className="priceWrap">
      <span className="priceSignal">¥</span>
      <span className="priceTxt">{getIntPrice(price || 0)}</span>
      <span className="priceFloatTxt">.{getDecimalPrice(price || 0)}</span>
    </div>
  )
}
export default PriceView

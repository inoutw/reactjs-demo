/**
 * 规格内容
 */
import React, { useState, useMemo } from 'react'
import { ProductAttributeValueVO } from 'api/mall'

interface SpecContentProps {
  skuSpecData: ProductAttributeValueVO
  getChosedSpec: Function
  //已选择的规格回显
  chosedSpecObj: any
}
const SpecContent: React.FC<SpecContentProps> = ({ skuSpecData, getChosedSpec, chosedSpecObj }) => {
  //规格类型的值
  let tempValue = skuSpecData.value || ''
  let skuSpecArr = tempValue.split(',')
  //规格类型名
  let specName = skuSpecData.attributeName

  // 只有一个规格，默认选中
  let defaultSpec = useMemo(() => {
    if (tempValue.split(',').length === 1) {
      return tempValue
    }
    if (chosedSpecObj[specName]) {
      return chosedSpecObj[specName]
    }
    return skuSpecArr[0]
  }, [tempValue, chosedSpecObj, specName, skuSpecArr])
  let [activeSpec, setActiveSpec] = useState(defaultSpec)
  const onPressSpecValue = (item: string) => () => {
    setActiveSpec(item)
    getChosedSpec(item, skuSpecData)
  }
  return (
    <div className="spec-content">
      <div className="specTitle">{skuSpecData.attributeName}</div>
      <div className="specContentWrap">
        {skuSpecArr.map((item, index) => {
          return (
            <div
              className={`specItemWrap ${item === activeSpec ? 'specItemActive' : ''}`}
              onClick={onPressSpecValue(item)}
              key={`specVal${index}`}>
              <div className={`specTxt ${item === activeSpec ? 'specTxtActive' : ''}`}>{item}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SpecContent

import React, { useState, useMemo, useCallback, useRef } from 'react'
import countyData from './countyData.json'
import { Icon } from 'antd-mobile'
import './addressPicker.css'
export type Dismiss = (data?: any) => void

export interface CountyItem {
  id: number
  name: string
  pinyin: string
  childArea?: CountyItem[]
}
interface AddressContainerProps {
  // onDismiss: (data: CountyItem[]) => void
  defaultValues?: number[]
  onDismiss: Dismiss
}
const addressTips = ['选择省份/地区', '选择城市', '选择区/县']
type AddressType = 'province' | 'city' | 'area'

const addressTypes: AddressType[] = ['province', 'city', 'area']
const totalCountyData: CountyItem[] = countyData

const hotCitys = ['北京', '上海', '广州', '深圳', '杭州', '南京', '苏州', '天津', '武汉', '长沙', '重庆', '成都']
const hotCityItems = hotCitys.map(cityLabel => {
  for (let provice of countyData) {
    for (let city of provice.childArea) {
      if (city.name === cityLabel || city.name == cityLabel + '市') {
        city.name = cityLabel
        return [provice, city]
      }
    }
  }
  console.error('城市数据有误', cityLabel)
})

const AddressPicker: React.FC<AddressContainerProps> = ({ defaultValues = [], onDismiss, ...props }) => {
  const [selectItems, setSelectItems] = useState(() => {
    let currCountyData = totalCountyData
    let selectItems: CountyItem[] = []
    for (let value of defaultValues) {
      let item = currCountyData.find(c => c.id == value)
      if (!item) {
        break
      }
      selectItems.push(item)
      currCountyData = item.childArea
    }
    return selectItems
  })
  const [currStep, SetCurrStep] = useState(Math.max(0, selectItems.length - 1))

  const hotCity = useMemo(() => {
    return (
      <div style={{ display: currStep === 0 ? 'inline-block' : 'none', marginTop: '0.98rem' }}>
        <div className="title">热门城市</div>
        <div className="hotCityContainer">
          {hotCitys.map((cityName, index) => (
            <div
              key={index}
              className={`hotCityItem ${
                selectItems.length > 1 && cityName === selectItems[1].name ? 'hotCityItemFoucs' : ''
              }`}>
              <div
                onClick={() => {
                  let cityItem = hotCityItems[index]
                  if (!cityItem) return
                  setSelectItems(items => {
                    SetCurrStep(2)
                    return cityItem
                  })
                }}
                className={`hotCityItemText ${
                  selectItems.length > 1 && cityName === selectItems[1].name ? 'hotCityItemTextFoucs' : ''
                }`}>
                {cityName}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }, [currStep, selectItems])

  const onPressStep = useCallback((index: number) => {
    SetCurrStep(index)
  }, [])
  const stepsDom = useMemo(() => {
    if (!selectItems.length) return null
    let selectedCity = selectItems.map((item, index) => {
      return (
        <div className="stepContainer" key={index} onClick={() => onPressStep(index)}>
          <div className="contentLeft">
            <div className="contentPoint contentPointFoucs"></div>
            <div className={index !== 2 ? 'contentLine' : ''}></div>
          </div>
          <div className={`text ${currStep === index ? 'textFocus' : ''}`}>{item.name}</div>
        </div>
      )
    })
    if (selectedCity.length !== 3) {
      selectedCity.push(
        <div className="stepContainer" onClick={() => onPressStep(selectItems.length)} key={selectedCity.length}>
          <div className="contentLeft">
            <div className="contentPoint"></div>
          </div>
          <div className={`text ${currStep === selectedCity.length ? 'textFocus' : ''}`}>
            {selectedCity.length === 1 ? '请选择城市' : '请选择区/县'}
          </div>
        </div>,
      )
    }

    return <div className="stepwrap">{selectedCity}</div>
  }, [selectItems, currStep, onPressStep])
  const onPressCountyItem = useCallback(
    (item: CountyItem) => {
      let step = 2
      if (item.childArea && item.childArea.length) {
        step--
        if (item.childArea[0].childArea && item.childArea[0].childArea.length) {
          step--
        }
      }
      if (selectItems[step] === item) {
        SetCurrStep(step)
        return
      } else {
        let items = [...selectItems]
        items[step] = item
        items = items.filter((item, index) => index <= step)
        setSelectItems(items)

        if (step == 2) {
          onDismiss && onDismiss(items)
        } else {
          SetCurrStep(step + 1)
        }
      }
    },
    [selectItems, onDismiss],
  )
  const countyItems = useMemo(() => {
    let selectItem = selectItems[currStep]
    let data = currStep == 0 ? totalCountyData : selectItems[currStep - 1].childArea
    let currPinyin = ' '
    return data.map(item => {
      const focus = selectItem && selectItem.id == item.id
      let pinyin = ' '
      if (currPinyin != item.pinyin) {
        pinyin = item.pinyin
        currPinyin = pinyin
      }
      return (
        <div key={item.id} onClick={() => onPressCountyItem(item)} className="itemContainer">
          <div className="pinyin">{pinyin}</div>
          <div className={`text ${focus ? 'textFocus' : ''}`}>{item.name}</div>
        </div>
      )
    })
  }, [currStep, selectItems, onPressCountyItem])

  const header = useMemo(() => {
    return (
      <div className="header">
        <div className="headerTitle">请选择</div>
        <div onClick={() => onDismiss()} className="headerClose">
          <Icon type="cross" size="lg" />
        </div>
      </div>
    )
  }, [onDismiss])
  return (
    <div className="address-picker">
      {header}
      {stepsDom}
      <>
        {hotCity}
        <div className="title topTitle">{addressTips[currStep]}</div>
        {countyItems}
      </>
    </div>
  )
}
export default AddressPicker

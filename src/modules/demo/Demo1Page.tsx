import React, { useState, useEffect } from 'react'
import nutrition from 'api/nutrition'
import { Button } from 'antd-mobile'
import './demo.css'
const Demo1Page: PageComponent = props => {
  const [result, setSesult] = useState({})
  useEffect(() => {
    nutrition.foodInfos.get({ kid: 234 }).then(setSesult)
  }, [])
  return (
    <div className="demo-wrap">
      <div className="title">demo1</div>
      <div>{JSON.stringify(result)}</div>
      <Button type="primary" size="small" inline className="btn">
        demo1
      </Button>
      <Button type="primary" size="large" className="btn">
        demo2
      </Button>
    </div>
  )
}
Demo1Page.options = { disableHeader: false, wrapperClassName: '' }
export default Demo1Page

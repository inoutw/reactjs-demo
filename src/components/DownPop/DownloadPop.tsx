import React, { useState, useEffect, useCallback } from 'react'
import './downloadPop.css'

const DownloadPop: PageComponent = (props) => {
    const [showFailTips, setShowFailTips] = useState(false);   // 显示弹窗
    useEffect(() => {
        setShowFailTips(props.isShow)
    });
    const closePop = () => {
        setShowFailTips(false)
        props.callback(false)
    }
    return (
        <div className="DownloadPop-wrap">
            {showFailTips===false?'':<div onClick={closePop} className="open_app_fail_tips"><div className="tips_main"></div></div>}
        </div>
    )
}
export default DownloadPop

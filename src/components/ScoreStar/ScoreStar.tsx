import React, { useState, useCallback, useEffect } from 'react'
import './scoreStar.css'
import assets from 'assets'
import { openApp } from 'utils/helper'
import DownPop from 'components/DownPop'

const Star: PageComponent = props => {
  var starImg = () => {
    var res = []
    for (var i = 0; i < 5; i++) {
      if (i < props.defaultValue) {
        res.push(<img key={i} src={require('../../assets/image/brandstory/star_liang@2x.png')} />)
      } else {
        res.push(<img key={i} src={require('../../assets/image/brandstory/star@2x.png')} />)
      }
    }
    return res
  }
  return <div className="star-wrap">{starImg()}</div>
}

export default Star

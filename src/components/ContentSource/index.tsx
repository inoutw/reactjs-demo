/**
 * 处理图文并茂数据[{'image': ''}, {'text': ''}]
 */
import React from 'react'

interface ContentSourceProps {
  sourceData: string
}
const controlImgWidth = 686
const ContentSource: React.FC<ContentSourceProps> = ({ sourceData = '[]' }) => {
  // sourceData =
  //   '[{"image":"https://cdn.yryz.com/lovelorn/image/default/201905/362935013883904.png?w=200&h=200"},{"image":"https://cdn.yryz.com/lovelorn/image/default/201905/362935013883904.png?w=200&h=250"},{ "text": "大米（Rice），是稻谷经清理、砻谷、碾米、成品整理等工序后制成的成品。 稻谷的胚与糊粉层中含有近64%的稻米营养和90%以上的人体所须的营养元素，是中国大部分地区人民的主要" }]'
  let sourceDataArr = JSON.parse(sourceData)
  // 解析图片宽高，以展示图片真实宽高比
  const getImageScale = (imgUrl: string) => {
    let imgUrlArr = imgUrl.match(/\?w=(.*?)&h=(.*?)$/i)
    if (!imgUrlArr || !imgUrlArr[1] || !imgUrlArr[2]) {
      return 1
    }
    let imgScale = parseInt(imgUrlArr[2]) / parseInt(imgUrlArr[1])
    return imgScale
  }
  return (
    <div className="content-source">
      {sourceDataArr.map((item: any, index: number) => {
        let objKey = Object.keys(item)[0]
        if (objKey === 'image') {
          let imgScale = getImageScale(item.image)
          let scaleHeight = controlImgWidth * imgScale
          return (
            <img
              src={item.image}
              alt=""
              className="imgSource"
              style={{ height: `${scaleHeight / 100}rem` }}
              key={`images${index}`}
            />
          )
        }
        if (objKey === 'text') {
          return (
            <div className="txtSource" key={`text${index}`}>
              {item.text}
            </div>
          )
        }
      })}
    </div>
  )
}
export default ContentSource

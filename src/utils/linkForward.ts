import yryz from './reactNativeMessage'
import PropTypes from 'prop-types'
// 打开h5链接
const linkH5Open = (props: any) => {
  var link = ''
  const { type, kid } = props
  if (type === 'circle') {
    // 圈子
    link = `${window.location.origin}/teamindex/share/` + kid
  } else if (type === 'topic') {
    // 话题
    link = `${window.location.origin}/groupdetail/share/` + kid
  } else if (type === 'live') {
    // 直播
    link = `${window.location.origin}/livestream/share/` + kid
  } else if (type === 'course') {
    // 课程
    link = `${window.location.origin}/coursedetail/share/` + kid
  } else if (type === 'question') {
    // 问劵 购买详情页  priceType   1.问卷   2.vip   3.套餐
    link = `${window.location.origin}/questionairedetail/share?priceCode=` + kid + `&priceType=1`
  } else if (type === 'product') {
    link = `${window.location.origin}/good/share/` + kid
  } else if (type === 'shop') {
    link = `${window.location.origin}/shopdetail/share/` + kid
  } else if (type === 'h5') {
    link = kid
  } else if (type === 'question') {
    // link = kid
  } else if (type === 'no') {
    return
  }
  window.location.href = link
  return
}
linkH5Open.propTypes = {
  type: PropTypes.string.isRequired,
  kid: PropTypes.string,
  priceCode: PropTypes.string,
  priceType: PropTypes.string,
}
// 打开App指定的页面
const linkAppOpen = (props: any) => {
  let isNative = yryz.isNative()
  if (!isNative) {
    linkH5Open(props)
  }
}

export { linkH5Open, linkAppOpen }

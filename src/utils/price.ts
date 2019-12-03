/**
 * 根据以分为单位的价格，保留两位小数
 * @param price
 */
export function formPrice(price: number) {
  if (!price && price !== 0) return 0
  return (price / 100).toFixed(2)
}
export function getIntPrice(price: number) {
  if (!price) return 0
  let priceArr = (price / 100).toFixed(2).split('.')
  return priceArr[0]
}
export function getDecimalPrice(price: number) {
  if (!price) return 0
  let priceArr = (price / 100).toFixed(2).split('.')
  return priceArr[1]
}

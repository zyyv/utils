
/**
 * fotmat number
 * 格式化数字
 * @example
 * formatNum(123456789) ==> '123,456,789'
 * formatNum(123456789, 0, '¥') ==> '123,456,789¥'
 * formatNum(123456789, 2, '¥') ==> '123,456,789.00¥'
 * formatNum(123456789, 2, '元', '¥') ==> '¥123,456,789.00元'
 *
 * @param num number to format
 * @param diget digits to keep
 * @param prefix prefix to append
 * @param suffix suffix to append
 * @returns string
 * @category Number
 */
export function formatNum(num: number, diget = 0, prefix?: string, suffix?: string): string {
  return (suffix ?? '') + Number(num).toFixed(diget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (prefix ?? '')
}

/**
 * pad zero
 * 填充0
 * @example
 * padZero(0) ==> '00'
 * padZero(9) ==> '09'
 * padZero(9, 3) ==> '009'
 * @param num number to pad
 * @param len length to pad
 * @returns string
 * @category Number
 */
export function padZero(num: number, len = 2): string {
  return (Array(len).join('0') + num).slice(-len)
}

/**
  * turn to Number
  * @param val
  * @returns number
  * @category Number
  */
export const toNumber = (val: any): number => {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

export default {
  formatNum,
  padZero,
  toNumber,
}

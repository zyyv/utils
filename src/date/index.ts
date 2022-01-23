/**
 * 是否是闰年
 * @param {number} y 年份
 * @returns boolean
 */
export const isLeapYear = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

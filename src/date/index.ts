/**
 * isLeapYear 是否是闰年
 * @param {number} y year
 * @returns boolean
 * @category Date
 */
export const isLeapYear = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

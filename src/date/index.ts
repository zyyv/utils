/**
 * isLeapYear 是否是闰年
 * @param {number} y year
 * @returns boolean
 * @category Date
 */
export const isLeapYear = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

/**
 * 简单的延迟函数
 * @param ms 毫秒数
 * @returns Promise<Unknow>
 * @category Date
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

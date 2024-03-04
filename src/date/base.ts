/**
 * isLeapYear 是否是闰年
 * @param {number} y year
 * @returns boolean
 * @category Date
 */
export const isLeapYear = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

/**
 * Easily sleep function
 * 简单的延迟函数
 * @param ms 毫秒数
 * @returns Promise<void>
 * @category Date
 */
export const sleep: (ms: number) => Promise<void> = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

/**
 * Format timestamp to string
 * 格式化时间戳
 * @param timestamp 时间戳
 * @param format 格式化字符串
 * @returns string
 * @example
 * formatTimestamp(1589788800000, 'YYYY-MM-DD HH:mm:ss') // 2020-01-01 00:00:00
 *
 * @category Date
 */
export function formatTimestamp(timestamp: number, format = 'yyyy-MM-dd hh:mm:ss'): string {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return format.replace(/yyyy/, year.toString())
    .replace(/MM/, month.toString().padStart(2, '0'))
    .replace(/dd/, day.toString().padStart(2, '0'))
    .replace(/hh/, hour.toString().padStart(2, '0'))
    .replace(/mm/, minute.toString().padStart(2, '0'))
    .replace(/ss/, second.toString().padStart(2, '0'))
}

/**
 * Format seconds to string
 * @param value 秒数
 * @returns string
 * @category Date
 * @example
 * formatSeconds(3600) // 01:00:00
 */
export function formatSeconds(value: number): string {
  const h = (value / 3600) >> 0
  const m = ((value % 3600) / 60) >> 0
  const s = ((value % 3600) % 60) >> 0

  return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
}

export default {
  isLeapYear,
  sleep,
  formatTimestamp,
  formatSeconds,
}

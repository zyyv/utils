/**
 * return object type
 * 返回对象的类型
 * @example toTypeString(1) ==> '[object Number]'
 * @param v any object
 * @returns string
 *
 * @category Shared
 */
export const toTypeString = (v: any) => Object.prototype.toString.call(v)

/**
  * Get random number
  * 获取最大值最小值之间的随机数
  * @param min number
  * @param max number
  * @returns number
  * @category Shared
  */
export const getRandom = (min: number, max: number) => Math.floor(Math.random() * max + min)

/**
  * turn to Number
  * @param val
  * @returns number
  * @category Shared
  */
export const toNumber = (val: any): number => {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

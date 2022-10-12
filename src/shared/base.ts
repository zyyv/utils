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
  *
  * @category Shared
  */
export const getRandom = (min: number, max: number) => Math.floor(Math.random() * max + min)

/**
 * Generate hash code
 * 生成哈希值
 * @param str string
 * @returns string
 *
 * @category Shared
 */
export function hash(str: string) {
  let i; let l
  let hval = 0x811C9DC5

  for (i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i)
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24)
  }
  return (`00000${(hval >>> 0).toString(36)}`).slice(-6)
}

export default {
  toTypeString,
  getRandom,
  hash,
}

/**
 * noop 空函数
 *
 * @category Function
 */
export const noop = () => {}

/**
 * no 永远返回false
 *
 * @category Function
 */
export const NO = () => false

/**
 * A function that is called only once
 * 只调用一次的函数
 *
 * @category Function
 * @param fn (...args: any) => void
 * @returns Function
 */
export function once(fn: (...args: any) => void): Function {
  let called = false
  return function(...args: any) {
    if (!called) {
      called = true
      return fn(...args)
    }
  }
}

export default {
  noop,
  NO,
  once,
}

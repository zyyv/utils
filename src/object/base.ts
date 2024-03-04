import { isArray, isDate, isObject, isRegExp } from '../is'
import type { DeepPartial } from '../types'

/**
 * A simple deep clone method
 * 一个普通的深度克隆函数
 *
 * @category Object
 *
 * @param origin any complex type of object
 * @returns a deep clone object
 */
export function deepClone(origin: unknown): unknown {
  if (isArray(origin))
    return origin.map(child => deepClone(child))

  if (isObject(origin)) {
    return Object.fromEntries(
      Object.entries(origin).map(([k, v]) => [k, deepClone(v)]),
    )
  }

  return origin
}

/**
 * A deep clone method to ensure that circular references are avoided.
 * 一个深度克隆方法来保证避免循环引用
 *
 * @category Object
 *
 * @param origin any complex type of object
 * @param hash hashMap
 * @returns a deep clone object
 */
export function deepClone2(origin: any, hash: WeakMap<WeakKey, any> = new WeakMap()): any {
  if (isObject(origin)) {
    if (hash.has(origin))
      return hash.get(origin)

    const target: any = isArray(origin) ? [] : {}
    hash.set(origin, target)

    Object.entries(origin).forEach(([k, v]: [string, any]) => {
      if (isRegExp(v))
        target[k] = new RegExp(v)
      else if (isDate(v))
        target[k] = new Date(v)
      else
        target[k] = deepClone2(v, hash)
    })
    return target
  }
  return origin
}

/**
 * extend Fn equal `Object.assign`
 * @category Object
 */
export const extend = Object.assign

const hasOwnProperty = Object.prototype.hasOwnProperty
/**
 * Object.prototype.hasOwnProperty
 * @category Object
 */
export function hasOwn(val: object, key: string | symbol): key is keyof typeof val {
  if (val == null)
    return false
  return hasOwnProperty.call(val, key)
}

/**
 * Deep merge two objects
 * 深度合并两个对象
 *
 * @category Object
 * @returns merged object
 */
export function deepMerge<T>(original: T, patch: DeepPartial<T>): T {
  const o = original as any
  const p = patch as any

  if (isArray(o) && isArray(p))
    return [...o, ...p] as any

  if (isArray(o))
    return [...o] as any

  const output = { ...o }
  if (isObject(o) && isObject(p)) {
    Object.keys(p).forEach((key) => {
      if (isObject(p[key])) {
        if (!(key in o))
          Object.assign(output, { [key]: p[key] })
        else
          output[key] = deepMerge(o[key], p[key])
      }
      else {
        Object.assign(output, { [key]: p[key] })
      }
    })
  }
  return output
}

export default {
  deepClone,
  deepClone2,
  deepMerge,
  extend,
  hasOwn,
}

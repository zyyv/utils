import { isDate, isObject, isRegExp } from '../is'

/**
 * Convert `Objectable<T>` to `Object<T>`
 *
 * @category Object
 */
export function deepClone(source: any, hash = new WeakMap()): any {
  if (!source) return source

  if (hash.has(source)) return hash.get(source) // 新增代码，查哈希表

  const target: {
    [key: string]: any
  } = Array.isArray(source) ? [] : {}

  hash.set(source, target)
  Object.entries(source).forEach(([key, v]: [string, any]) => {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isRegExp(v))
        target[key] = new RegExp(v)
      else if (isDate(v))
        target[key] = new Date(v)
      else if (isObject(v))
        target[key] = deepClone(v, hash)
      else
        target[key] = v
    }
  })
  return target
}

export const extend = Object.assign

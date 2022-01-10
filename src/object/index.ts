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

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isRegExp(source[key]))
        target[key] = new RegExp(source[key])
      else if (isDate(source[key]))
        target[key] = new Date(source[key])
      else if (isObject(source[key]))
        target[key] = deepClone(source[key], hash)
      else
        target[key] = source[key]
    }
  }

  return target
}

export const extend = Object.assign

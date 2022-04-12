import { toTypeString } from '@/shared'

/**
 * @category Is
 */
export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
/**
 * @category Is
 */
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
/**
 * @category Is
 */
export const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function'
/**
 * @category Is
 */
export const isNumber = (val: any): val is number => typeof val === 'number'
/**
 * @category Is
 */
export const isString = (val: unknown): val is string => typeof val === 'string'
/**
 * @category Is
 */
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'
/**
 * @category Is
 */
export const isPlainObject = (val: unknown): val is object =>
  toTypeString(val) === '[object Object]'
/**
 * @category Is
 */
export const isArray = Array.isArray
/**
 * @category Is
 */
export const isMap = (val: unknown): val is Map<any, any> =>
  toTypeString(val) === '[object Map]'
/**
 * @category Is
 */
export const isSet = (val: unknown): val is Set<any> =>
  toTypeString(val) === '[object Set]'
/**
 * @category Is
 */
export const isDate = (val: unknown): val is Date => val instanceof Date
/**
 * @category Is
 */
export const isRegExp = (val: unknown): val is RegExp => val instanceof RegExp
/**
 * @category Is
 */
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
/**
 * @category Is
 */
export const isPromise = <T = any>(val: unknown): val is Promise<T> => isObject(val) && isFunction(val.then) && isFunction(val.catch)
/**
 * @category Is
 */
export const isValue = (val: any): val is boolean => val !== undefined && val !== null

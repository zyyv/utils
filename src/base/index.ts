/**
 * return object type
 * 返回对象的类型
 * @example toTypeString(1) ==> '[object Number]'
 * @param v any object
 * @returns string
 *
 * @category Base
 */
export const toTypeString = (v: any) => Object.prototype.toString.call(v)

/**
 * null => 'null'
 * undefined => 'undefined'
 * NaN => 'number'
 * Number => 'number'
 * String => 'string'
 * Object => 'object'
 * Function => 'function'
 * Array => 'array'
 * @param v any type
 * @returns string
 */
export const Twypeof = (v: any): string => Object.prototype.toString.call(v).slice(8, -1).toLocaleLowerCase()

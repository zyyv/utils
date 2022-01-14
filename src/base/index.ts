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

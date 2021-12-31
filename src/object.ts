/**
 * Convert `Arrayable<T>` to `Array<T>`
 *
 * @category Object
 */
export function deepClone(target: any): any {
  if (Array.isArray(target)) return target.map(child => deepClone(child))

  if (typeof target === 'object' && target !== null) {
    return Object.fromEntries(
      Object.entries(target).map(([k, v]) => [k, deepClone(v)]),
    )
  }

  return target
}

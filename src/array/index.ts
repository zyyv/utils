import type { Arrayable, Nullable } from '../types'

/**
 * Convert `Arrayable<T>` to `Array<T>`
 *
 * @category Array
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array || []
  if (Array.isArray(array))
    return array
  return [array]
}

/**
 * Unique an Array
 *
 * @category Array
 */
export function uniq<T>(array: readonly T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * Get nth item of Array. Negative for backward
 *
 * @category Array
 */
export function at(array: readonly [], index: number): undefined
export function at<T>(array: readonly T[], index: number): T
export function at<T>(array: readonly T[] | [], index: number): T | undefined {
  const len = array.length
  if (!len)
    return undefined

  if (index < 0)
    index += len

  return array[index]
}

/**
 * Get last item
 *
 * @category Array
 */
export function last(array: readonly []): undefined
export function last<T>(array: readonly T[]): T
export function last<T>(array: readonly T[]): T | undefined {
  return at(array, -1)
}

/**
 * Remove an item from Array
 *
 * @category Array
 */
export function remove<T>(array: T[], value: T) {
  if (!array)
    return false
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}
/**
 * Genrate a range array of numbers. The `stop` is exclusive.
 *
 * @category Array
 */
export function range(stop: number): number[]
export function range(start: number, stop: number, step?: number): number[]
export function range(...args: any): number[] {
  let start: number, stop: number, step: number

  if (args.length === 1) {
    start = 0
    step = 1;
    ([stop] = args)
  } else {
    ([start, stop, step = 1] = args)
  }

  const arr: number[] = []
  let current = start
  while (current < stop) {
    arr.push(current)
    current += step || 1
  }

  return arr
}
/**
 * Move element in an Array
 *
 * @category Array
 * @param arr
 * @param from
 * @param to
 */
export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}

/**
 * Generate tree structure according to link
 * 根据link生成树结构
 *
 * @category Array
 * @param items Array
 * @param id number | null
 * @param link string
 */
export function nest(items: any[], id: number | null = null, link = 'parent_id'): any[] {
  return items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }))
}

/**
 * averaging
 * 求平均数
 * @category Array
 * @param nums number[]
 * @returns number
 */
export function average(...nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length
}

/**
 * Randomly sorts the elements of an array using the Fisher-Yates algorithm.
 * 使用Fisher-Yates算法随机排序数组的元素。
 * @param arr T
 * @returns T
 */
export function shuffle<T extends any[]>(arr: T): T {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--) as number
    [arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

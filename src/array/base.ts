import { isArray } from '../is'
import type { Arrayable, Nullable } from '../types'

/**
 * Convert `Arrayable<T>` to `Array<T>`
 * 转换为一个数组
 *
 * @category Array
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array || []
  if (isArray(array))
    return array
  return [array]
}

/**
 * Unique an Array
 * 转换为一个独一无二的数组
 *
 * @category Array
 */
export function uniq<T>(array: readonly T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * Get nth item of Array. Negative for backward
 * 获取数组的第n个元素，负数表示倒数
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
 * 获取最后一个元素
 * @category Array
 */
export function last(array: readonly []): undefined
export function last<T>(array: readonly T[]): T
export function last<T>(array: readonly T[]): T | undefined {
  return at(array, -1)
}

/**
   * Remove an item from Array
   * 从数组中移除一个元素
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
 * 生成一个范围数组，包含起始值，但不包含结束值
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
 * 移动数组中的元素
 *
 * @category Array
 */
export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}

/**
 * averaging
 * 求平均数
 * @param nums number[]
 * @returns number
 * * @category Array
 */
export function average(...arr: number[]): number {
  return arr.reduce((c, n) => c + n, 0) / arr.length
}

/**
 * Randomly sorts the elements of an array using the Fisher-Yates algorithm.
 * 随机排序数组
 *
 * @category Array
 */
export function shuffle<T extends any[]>(arr: T): T {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--) as number
    [arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

import { isValue } from '@/is'
import type { Nullable } from '@/types'

/**
 * Generate tree structure according by prop
 * 根据指定的属性生成树状结构
 *
 * eg: [{id: 1, pid: 0}, {id: 2, pid: 1}, {id: 3, pid: 1}]
 *
 * => [{id: 1, pid: 0, children: [{id: 2, pid: 1}, {id: 3, pid: 1}]}]
 * @param arr Array
 * @param id Nullable<number | string>
 * @param prop Nullable<number | string>
 * @category Array
 */
export function nest(arr: any[]): any[]
export function nest(arr: any[], id: Nullable<number | string>): any[]
export function nest(arr: any[], id: Nullable<number | string>, prop: Nullable<number | string>): any[]
export function nest(...args: any): any[] {
  const [arr] = args
  let [, id, prop] = args
  id = id ?? 0
  prop = prop ?? 'pid'
  return arr
    .filter((i: any) => isValue(i[prop]) && i[prop] === id)
    .map((i: any) => ({ ...i, children: nest(arr, i.id) }))
}

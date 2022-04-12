export * from './array'
export * from './object'
export * from './is'
export * from './base'
export * from './function'
export * from './types'
export * from './date'
export * from './shared'

// 数组转换为树形结构
export function toTree(array: any[], id: string, pid: string, children: string) {
  const result: any[] = []
  const hash: any = {}
  const idKey = id
  const pidKey = pid
  const childrenKey = children
  const len = array.length

  for (let i = 0; i < len; i++)
    hash[array[i][idKey]] = array[i]

  for (let i = 0; i < len; i++) {
    const element = array[i]
    const hashVP = hash[element[pidKey]]
    if (hashVP) {
      !hashVP[childrenKey] && (hashVP[childrenKey] = [])
      hashVP[childrenKey].push(element)
    } else {
      result.push(element)
    }
  }
  return result
}

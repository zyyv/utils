import { describe, expect, it } from 'vitest'
import { average, chunk, nest, range, shuffle, toArray } from '../src'
import { nest as nestData } from './targets/array'

describe('test Array utils', () => {
  it('toArray', () => {
    expect(toArray([0])).toEqual([0])
  })

  it('range', () => {
    expect(range(0)).toEqual([])
    expect(range(2)).toEqual([0, 1])
    expect(range(2, 5)).toEqual([2, 3, 4])
    expect(range(2, 10, 2)).toEqual([2, 4, 6, 8])
  })

  it('nest', () => {
    nestData.forEach(({ arr, id, pid }) => {
      expect(nest(arr, id, pid)).toMatchSnapshot()
    })
  })

  it('average', () => {
    expect(average(1, 2, 3, 4)).toBe(2.5)
    expect(average(...[2, 3, 4])).toBe(3)
  })

  it('shuffle', () => {
    expect(shuffle([1, 2, 3])).toHaveLength(3)
    expect(shuffle([{ a: 1 }, { b: 2 }, { c: 3 }])).toHaveLength(3)
  })

  it('chunk', () => {
    expect(chunk(range(10), 4)).toMatchSnapshot()
  })
})

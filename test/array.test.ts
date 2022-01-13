import { expect, it } from 'vitest'
import { range, toArray } from '../src'

it('toArray', () => {
  expect(toArray([0])).toEqual([0])
})

it('range', () => {
  expect(range(0)).toEqual([])
  expect(range(2)).toEqual([0, 1])
  expect(range(2, 5)).toEqual([2, 3, 4])
  expect(range(2, 10, 2)).toEqual([2, 4, 6, 8])
})

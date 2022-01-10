import { expect, it } from 'vitest'
import { deepClone } from '../src'

it('Object', () => {
  expect(deepClone({ a: 1 })).toEqual({ a: 1 })
  expect(deepClone({ a: 1, b: { c: [1, 2, 3] } })).toEqual({ a: 1, b: { c: [1, 2, 3] } })
  expect(deepClone({ a: /123/g, d: new Date() })).toEqual({ a: /123/g, d: new Date() })
})

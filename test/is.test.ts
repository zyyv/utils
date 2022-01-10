import { isDate, isRegExp } from 'util/types'
import { expect, it } from 'vitest'
import { isPromise } from '../src'

it('is', () => {
  const p = new Promise(() => {})
  expect(isPromise(p)).toBeTruthy()
  expect(isRegExp(/123/g)).toBeTruthy()
  expect(isDate(new Date())).toBe(true)
})

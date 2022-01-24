import { expect, it } from 'vitest'
import { isDate, isPromise, isRegExp } from '@utils/is'

it('is', () => {
  const p = new Promise(() => {})
  expect(isPromise(p)).toBeTruthy()
  expect(isRegExp(/123/g)).toBeTruthy()
  expect(isDate(new Date())).toBe(true)
})

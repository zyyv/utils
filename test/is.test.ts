import { expect, it } from 'vitest'
import { isPromise } from '../src'

it('is', () => {
  const p = new Promise(() => {})
  expect(isPromise(p)).toBeTruthy()
})

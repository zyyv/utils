import { once } from '@utils/function'
import { expect, it } from 'vitest'

it('once', () => {
  const onceFunc = once(() => 1)
  expect(onceFunc()).toEqual(1)
  expect(onceFunc()).toEqual(undefined)
})

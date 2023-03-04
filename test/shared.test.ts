import { expect, it } from 'vitest'
import { getRandom } from '../src'

it('getRandom', () => {
  expect(getRandom(1, 10)).toBeGreaterThanOrEqual(1)
  expect(getRandom(1, 10)).toBeLessThanOrEqual(10)
})

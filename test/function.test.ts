import { describe, expect, it } from 'vitest'
import { once } from '@/function'

describe('function test', () => {
  it('once', () => {
    const onceFunc = once(() => 1)
    expect(onceFunc()).toBe(1)
    expect(onceFunc()).toBeUndefined()
  })
})

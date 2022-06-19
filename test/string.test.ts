import { assert, describe, expect, it } from 'vitest'
import { randomStr } from '@/string'

describe('string', () => {
  it('randomStr', () => {
    const id = randomStr(16)
    expect(id.length).toBe(16)

    // expect(id).toMatchInlineSnapshot('"x9PlK9YIUE8MTRYD"')
  })
})

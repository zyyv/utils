import { expect, it } from 'vitest'
import { deepClone, deepClone2 } from '@utils/object'

it('Object', () => {
  const deepCloneTests = [
    {
      target: 'normal',
      type: 1,
    },
    {
      target: null,
      type: 1,
    },
    {
      target: 'normal',
      type: 0,
    },
    {
      target: null,
      type: 0,
    },
    {
      target: [{ a: 2 }, { a: { b: 1 } }],
      type: 1,
    },
    {
      target: { a: /123/g, d: new Date() },
      type: 0,
    },
  ]
  deepCloneTests.forEach((el) => {
    const clone = el.type ? deepClone : deepClone2
    expect(clone(el.target)).toEqual(el.target)
  })
})

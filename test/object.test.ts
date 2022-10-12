import { describe, expect, test } from 'vitest'
import { deepClone, deepClone2, deepMerge } from '@/object/base'

describe('Object', () => {
  test('deepClone', () => {
    const fixtures = [
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
    fixtures.forEach((el) => {
      const clone = el.type ? deepClone : deepClone2
      expect(clone(el.target)).toEqual(el.target)
    })
  })

  test('deepMerge', () => {
    const fixtureOrigin = {
      a: 1,
      b: {
        c: 2,
      },
      d: 4,
    }

    const fixturePatch = {
      a: 2,
      b: {
        c: 3,
      },
      c: 5,
    }

    const fixtureExpected = {
      a: 2,
      b: {
        c: 3,
      },
      c: 5,
      d: 4,
    }

    const fixtureResult = deepMerge(fixtureOrigin, fixturePatch)
    expect(fixtureResult).toEqual(fixtureExpected)
  })
})

import { expect, it } from 'vitest'
import { toArray } from '../src'


it('Array', () => {
    expect(toArray([0])).toEqual([0])
})
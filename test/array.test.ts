import { expect, it } from 'vitest'
import { average, nest, range, toArray } from '@utils/array'

it('toArray', () => {
  expect(toArray([0])).toEqual([0])
})

it('range', () => {
  expect(range(0)).toEqual([])
  expect(range(2)).toEqual([0, 1])
  expect(range(2, 5)).toEqual([2, 3, 4])
  expect(range(2, 10, 2)).toEqual([2, 4, 6, 8])
})

it('nest', () => {
  const comments = [
    { id: 1, parent_id: null },
    { id: 2, parent_id: 1 },
    { id: 3, parent_id: 1 },
    { id: 4, parent_id: 2 },
    { id: 5, parent_id: 4 },
  ]
  const result = [
    {
      id: 1,
      parent_id: null,
      children: [
        {
          id: 2,
          parent_id: 1,
          children: [
            {
              id: 4,
              parent_id: 2,
              children: [
                { id: 5, parent_id: 4, children: [] },
              ],
            },
          ],
        },
        { id: 3, parent_id: 1, children: [] },
      ],
    },
  ]
  expect(nest(comments)).toEqual(result)
})

it('average', () => {
  expect(average(1, 2, 3, 4)).toEqual(2.5)
  expect(average(...[2, 3, 4])).toEqual(3)
})

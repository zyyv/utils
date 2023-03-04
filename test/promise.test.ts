import { describe, expect, test } from 'vitest'
import { settleAllPromise } from '../src'

describe('Promise', () => {
  const createPs = () => [
    new Promise((resolve) => {
      resolve('1')
    }),
    new Promise((resolve, reject) => {
      reject(new Error('2'))
    }),
    new Promise((resolve, reject) => {
      reject(new Error('3'))
    }),
    new Promise((resolve) => {
      resolve('4')
    }),
    new Promise((resolve) => {
      resolve('5')
    }),
  ]

  test('settleAllPromise', async() => {
    const ps = createPs()

    const { results, errors } = await settleAllPromise(ps)
    expect(results).toEqual(['1', '4', '5'])
    expect(errors).toEqual([new Error('2'), new Error('3')])
  })

  test('settleAllPromise errFn', async() => {
    const ps = createPs()

    const { results, errors } = await settleAllPromise(ps, (err: Error) => {
      return err.message
    })
    expect(results).toEqual(['1', '4', '5'])
    expect(errors).toEqual(['2', '3'])
  })
})

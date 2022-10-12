interface settleAllPromiseResult<T, V> {
  errors: V[]
  results: T[]
}

/**
 * @description: settle all promise
 * @param {Promise<T>[]} promises
 * @return {Promise<settleAllPromiseResult<T, V>>}
 *
 * @category Promise
 */
export async function settleAllPromise<T, V>(
  promises: readonly Promise<T>[],
  errFn?: (err: any, ind: number) => Promise<V>,
): Promise<settleAllPromiseResult<T, V>>
export async function settleAllPromise<T, V>(
  promises: readonly Promise<T>[],
  errFn?: (err: any) => Promise<V>,
): Promise<settleAllPromiseResult<T, V>>
export async function settleAllPromise<T, V>(
  promises: readonly Promise<T>[],
  errFn?: (err: any, ind: number) => V,
): Promise<settleAllPromiseResult<T, V>>
export async function settleAllPromise<T, V>(
  promises: readonly Promise<T>[],
  errFn?: (err: any) => V,
): Promise<settleAllPromiseResult<T, V>>
export async function settleAllPromise<T, V>(
  promises: readonly Promise<T>[],
  errFn: (err: any, ind: number) => V = err => err): Promise<settleAllPromiseResult<T, V>> {
  const intermediateResults: { errors?: V, results?: T }[] = await Promise.all(
    (promises || []).map(async(p, i) => {
      try {
        return { results: await p }
      } catch (err) {
        return { errors: await errFn(err, i) }
      }
    }),
  )
  const settledPromises: settleAllPromiseResult<T, V> = { results: [], errors: [] }

  for (const result of intermediateResults) {
    for (const key in result) {
      // @ts-expect-error typings line up, but typescript is hard pressed to agree
      settledPromises[key].push(result[key])
    }
  }

  return settledPromises
}

export default {
  settleAllPromise,
}

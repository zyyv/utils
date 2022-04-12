import { describe, expect, it } from 'vitest'
import { once } from '@/function'

describe('function test', () => {
  it('once', () => {
    const onceFunc = once(() => 1)
    expect(onceFunc()).toBe(1)
    expect(onceFunc()).toBeUndefined()
  })

  // eslint-disable-next-line jest/no-commented-out-tests
  // it.skip('pubSub', () => {
  //   const pubsub = new Pubsub()
  //   const m1 = pubsub.subscribe('message', (topic, args) => {
  //     // eslint-disable-next-line no-console
  //     console.log(`类型是${topic}, 参数是：`, args)
  //   })
  //   // 测试一下同名的情况
  //   pubsub.subscribe('message', (topic, args) => {
  //     // eslint-disable-next-line no-console
  //     console.log(`类型是${topic}, 参数是：`, args)
  //   })
  //   const m3 = pubsub.subscribe('hhhh', (topic, args) => {
  //     // eslint-disable-next-line no-console
  //     console.log(`类型是${topic}, 参数是：`, args)
  //   })
  //   pubsub.publish('message', 123)
  //   pubsub.publish('message', [1, 2, 3])
  //   pubsub.publish('message')
  //   pubsub.publish('message', '结束')
  //   pubsub.unsubscribe(m1)
  //   pubsub.publish('message', 123)
  //   pubsub.publish('message', [1, 2, 3])
  //   pubsub.unsubscribe(m3)
  //   pubsub.publish('hhhh', 'gg')
  // })
})

/**
 * noop 空函数
 *
 * @category Function
 */
export const noop = () => {}

/**
 * A function that is called only once
 * 只调用一次的函数
 * @category Function
 * @param fn (...args: any) => void
 * @returns Function
 */
export function once(fn: (...args: any) => void): Function {
  // 只调用一次的锁
  let called = false
  return function(...args: any) {
    if (!called) {
      called = true
      return fn(...args)
    }
  }
}
/**
 * Pub/Sub Mode
 * 发布订阅模式
 * @category Function
 * @returns Object
 */
export class Pubsub<Topics extends string> {
  // 可以广播的主题存储
  private _topics: {
    [key: string]: {
      token: number
      func: Function
    }[]
  } = {}

  // 标识符，每一个订阅者唯一token
  private subId = -1

  get topics() {
    return this._topics
  }

  /**
   * 发布或广播感兴趣的事件
   * @param {string} topic 具有特定的主题名称
   * @param {string} args 参数
   * */
  public publish<T>(topic: Topics, args?: T) {
    const subscribers = this._topics[topic] // 拿到这个订阅者
    if (!subscribers || subscribers.length === 0) return // 如果没有这个订阅者，返回
    let len = subscribers.length // 拿到订阅者的长度
    // 依次调用订阅者函数
    while (len--)
      subscribers[len].func(topic, args)
    return this
  }

  /**
   * 订阅感兴趣的事件
   * @param {string} topic 具有特定的主题名称
   * @param {function} func 回调函数
  */
  public subscribe(topic: Topics, func: (topic: string, args?: any) => void): number {
    if (!this._topics[topic]) this._topics[topic] = [] // 如果没有这个订阅者，设置为空数组
    const token = ++this.subId // 唯一token
    this._topics[topic].push({ token, func }) // 存储订阅者
    // 把token返回
    return token
  }

  /**
   * 取消订阅
   * @param {string} token
  */
  public unsubscribe(token: number): void {
    // 循环广播存储
    for (const [, subscribers] of Object.entries(this._topics)) {
      const index = subscribers.findIndex(({ token: subToken }) => subToken === token) // 找到这个token
      if (index === -1) continue
      subscribers.splice(index, 1) // 删除
      // 这里不能return
    }
  }
}

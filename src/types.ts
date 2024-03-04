/**
 * Promise, or maybe not
 */
export type Awaitable<T> = T | PromiseLike<T>

/**
 * Null or whatever
 */
export type Nullable<T> = T | null | undefined

/**
 * Array, or not yet
 */
export type Arrayable<T> = T | Array<T>

/**
 * Function
 */
export type Fn<T = void> = () => T

/**
 * Constructor
 */
export type Constructor<T = void> = new (...args: any[]) => T

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

export type EventsMap = Record<string, any>

export interface DefaultEvents extends EventsMap {
  [event: string]: (...args: any) => void
}

export interface Unsubscribe {
  (): void
}

export declare class Emitter<Events extends EventsMap = DefaultEvents> {
  /**
   * Event names in keys and arrays with listeners in values.
   *
   * ```js
   * emitter1.events = emitter2.events
   * emitter2.events = { }
   * ```
   */
  events: Partial<{ [E in keyof Events]: Events[E][] }>

  /**
   * Add a listener for a given event.
   *
   * ```js
   * const unbind = ee.on('tick', (tickType, tickDuration) => {
   *   count += 1
   * })
   *
   * disable () {
   *   unbind()
   * }
   * ```
   *
   * @param event The event name.
   * @param cb The listener function.
   * @returns Unbind listener from event.
   */
  on<K extends keyof Events>(this: this, event: K, cb: Events[K]): Unsubscribe

  /**
   * Remove a listener for a given event.
   *
   * ```js
   * ee.off('tick', listener)
   * ```
   *
   * @param event The event name.
   * @param cb The listener function.
   */
  off<K extends keyof Events>(this: this, event: K, cb: Events[K]): void

  /**
   * Add a one-time listener for a given event.
   *
   * ```js
   * ee.once('tick', (tickType, tickDuration) => {
   *   count += 1
   * })
   * ```
   *
   * @param event The event name.
   * @param cb The listener function.
   */
  once<K extends keyof Events>(this: this, event: K, cb: Events[K]): void

  /**
   * Calls each of the listeners registered for a given event.
   *
   * ```js
   * ee.emit('tick', tickType, tickDuration)
   * ```
   *
   * @param event The event name.
   * @param args The arguments for listeners.
   */
  emit<K extends keyof Events>(
    this: this,
    event: K,
    ...args: Parameters<Events[K]>
  ): void
}

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

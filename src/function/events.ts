import type { DefaultEvents, Emitter, EventsMap } from '..'

/**
 * Create event emitter.
 *
 * ```js
 * import { createNanoEvents } from 'nanoevents'
 *
 * class Ticker {
 *   constructor() {
 *     this.emitter = createNanoEvents()
 *   }
 *   on(...args) {
 *     return this.emitter.on(...args)
 *   }
 *   tick() {
 *     this.emitter.emit('tick')
 *   }
 * }
 * ```
 */
export function createEvents<Events extends EventsMap = DefaultEvents>(): Emitter<Events> {
  return {
    events: {},
    emit(event, ...args) {
      (this.events[event] || [] as any).forEach((i: any) => i(...args))
    },
    on(event, cb) {
      (this.events[event] = this.events[event] || [] as any).push(cb)
      return () =>
        (this.events[event] = (this.events[event] || [] as any).filter((i: any) => i !== cb))
    },
    off(event, cb) {
      this.events[event] = (this.events[event] || [] as any).filter((i: any) => i !== cb)
    },
    once(event, cb) {
      const unbind = this.on(event, ((...args: any[]) => {
        unbind()
        cb(...args)
      }) as any)
    },
  }
}

export default {
  createEvents,
}

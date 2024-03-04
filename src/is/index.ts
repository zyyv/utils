import env from './env'
import is from './is'

export * from './is'
export * from './env'

export const UIs = {
  ...env,
  ...is,
}

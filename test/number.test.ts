import { describe, expect, it } from 'vitest'
import { formatNum, padZero } from '../src'

describe('test Number utils', () => {
  it('formatNum', () => {
    expect(formatNum(123456789)).toBe('123,456,789')
    expect(formatNum(123456789, 0, '元')).toBe('123,456,789元')
    expect(formatNum(123456789, 2, '元', '¥')).toBe('¥123,456,789.00元')
    expect(formatNum(123456789.23, 3, '元')).toBe('123,456,789.230元')
  })

  it('padZero', () => {
    expect(padZero(0)).toBe('00')
    expect(padZero(9)).toBe('09')
    expect(padZero(9, 3)).toBe('009')
  })
})

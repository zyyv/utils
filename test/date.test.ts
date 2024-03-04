import { describe, expect, it } from 'vitest'
import { formatSeconds } from '../src'

describe('date', () => {
  // test('formatTime', () => {
  //   const timestamp = 1662096261943

  //   expect(formatTimestamp(timestamp)).toMatchInlineSnapshot('"2022-09-02 13:24:21"')
  //   expect(formatTimestamp(timestamp, 'yyyy-MM-dd')).toMatchInlineSnapshot('"2022-09-02"')
  // })

  it('formatSeconds', () => {
    expect(formatSeconds(60)).toMatchInlineSnapshot('"00:01:00"')
    expect(formatSeconds(120)).toMatchInlineSnapshot('"00:02:00"')
    expect(formatSeconds(58)).toMatchInlineSnapshot('"00:00:58"')
    expect(formatSeconds(2120)).toMatchInlineSnapshot('"00:35:20"')
    expect(formatSeconds(3600 * 24)).toMatchInlineSnapshot('"24:00:00"')
  })
})

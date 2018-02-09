import { isNowOpen, isNowRegularlyOpen, isNowExceptionallyOpen } from './datetimeUtils';

describe('isNowOpen', () => {
  it('returns false when both arrays are empty', () => {
    const now = '2018-02-07T12:25:00'
    expect(isNowOpen(now, [], [])).toEqual(false)
  })
})

describe('isNowRegularlyOpen', () => {
  const now = '2018-02-07T12:25:00Z'
  const regularHourBefore = {
    "openTime": "09:00",
    "isClosed": false,
    "closeTime": "12:00"
  }
  const regularHourMatch = {
    "openTime": "09:00",
    "isClosed": false,
    "closeTime": "13:00"
  }
  const regularHourAfter = {
    "openTime": "13:00",
    "isClosed": false,
    "closeTime": "19:00"
  }

  it('returns false when array is empty', () => {
    expect(isNowRegularlyOpen(now, [])).toEqual(false)
  })

  it('returns true when regular hour matches', () => {
    const regularHours = [regularHourMatch]
    expect(isNowRegularlyOpen(now, regularHours)).toEqual(true)
  })

  it('returns false when regular hour is finished', () => {
    const regularHours = [regularHourBefore]
    expect(isNowRegularlyOpen(now, regularHours)).toEqual(false)
  })

  it('returns false when regular hour has not started', () => {
    const regularHours = [regularHourAfter]
    expect(isNowRegularlyOpen(now, regularHours)).toEqual(false)
  })

  it('returns false when now is surrounded by two regular hours', () => {
    const regularHours = [regularHourBefore, regularHourAfter]
    expect(isNowRegularlyOpen(now, regularHours)).toEqual(false)
  })

  it('returns true when one regular hour is finished and another one matches', () => {
    const regularHours = [regularHourBefore, regularHourMatch]
    expect(isNowRegularlyOpen(now, regularHours)).toEqual(true)
  })

  it('returns true when one regular hour has not started and another one matches', () => {
    const regularHours = [regularHourAfter, regularHourMatch]
    expect(isNowRegularlyOpen(now, regularHours)).toEqual(true)
  })

  // TODO test with isClosed
})

describe('isNowExceptionallyOpen', () => {
  const now = '2018-02-07T12:25:00Z'
  const exceptionalHourBefore = {
    "open": "2018-02-07T09:00:00Z",
    "close": "2018-02-07T12:00:00Z",
    "isClosed": false,
  }
  const exceptionalHourMatch = {
    "open": "2018-02-07T09:00:00Z",
    "close": "2018-02-07T13:00:00Z",
    "isClosed": false,
  }
  const exceptionalHourAfter = {
    "open": "2018-02-07T13:00:00Z",
    "close": "2018-02-07T19:00:00Z",
    "isClosed": false,
  }

  it('returns false when array is empty', () => {
    expect(isNowExceptionallyOpen(now, [])).toEqual(false)
  })

  it('returns true when exceptional hour matches', () => {
    const exceptionalHours = [exceptionalHourMatch]
    expect(isNowExceptionallyOpen(now, exceptionalHours)).toEqual(true)
  })

  it('returns false when exceptional hour is finished', () => {
    const exceptionalHours = [exceptionalHourBefore]
    expect(isNowExceptionallyOpen(now, exceptionalHours)).toEqual(false)
  })

  it('returns false when exceptional hour has not started', () => {
    const exceptionalHours = [exceptionalHourAfter]
    expect(isNowExceptionallyOpen(now, exceptionalHours)).toEqual(false)
  })

  it('returns false when now is surrounded by two exceptional hours', () => {
    const exceptionalHours = [exceptionalHourBefore, exceptionalHourAfter]
    expect(isNowExceptionallyOpen(now, exceptionalHours)).toEqual(false)
  })

  it('returns true when one exceptional hour is finished and another one matches', () => {
    const exceptionalHours = [exceptionalHourBefore, exceptionalHourMatch]
    expect(isNowExceptionallyOpen(now, exceptionalHours)).toEqual(true)
  })

  it('returns true when one exceptional hour has not started and another one matches', () => {
    const exceptionalHours = [exceptionalHourAfter, exceptionalHourMatch]
    expect(isNowExceptionallyOpen(now, exceptionalHours)).toEqual(true)
  })

  // TODO test with isClosed
})

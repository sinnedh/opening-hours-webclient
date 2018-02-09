import { isWithinRange, format, parse } from 'date-fns'

const isNowRegularlyOpen = (now, regularHours) => {
  for (const regularHour of regularHours) {
    const nowDt = parse(now)
    const openTimeDt = parse(format(nowDt, 'YYYY-MM-DD') + 'T' + regularHour.openTime + 'Z')
    const closeTimeDt = parse(format(nowDt, 'YYYY-MM-DD') + 'T' + regularHour.closeTime + 'Z')

    if(isWithinRange(nowDt, openTimeDt, closeTimeDt)) {
      return true
    }
  }

  return false
}

const isNowExceptionallyOpen = (now, exceptionalHours) => {
  for (const exceptionalHour of exceptionalHours) {
    const nowDt = parse(now)
    const openTimeDt = parse(exceptionalHour.open)
    const closeTimeDt = parse(exceptionalHour.close)

    if(isWithinRange(nowDt, openTimeDt, closeTimeDt)) {
      return true
    }
  }

  return false
}

const isNowOpen = (now, regularHours, exceptionalHours) => {
  if(exceptionalHours.length === 0 && regularHours.length === 0) {
    return false;
  }

  if(exceptionalHours.length === 0) {
    return isNowRegularlyOpen(now, regularHours)
  }

  return isNowExceptionallyOpen(now, exceptionalHours)
}

export { isNowOpen, isNowExceptionallyOpen, isNowRegularlyOpen }

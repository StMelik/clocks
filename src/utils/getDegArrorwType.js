import { TIME_TYPE } from './constants'
import { getTimeType } from './getTimeType'

export function getDegArrorwType(currentTime, type) {
  switch (type) {
    case TIME_TYPE.HOUR:
      return (
        getTimeType(currentTime, TIME_TYPE.HOUR) * 30 +
        getTimeType(currentTime, TIME_TYPE.MIN) * 0.5 +
        'deg'
      )
    case TIME_TYPE.MIN:
      return (
        getTimeType(currentTime, TIME_TYPE.MIN) * 6 +
        getTimeType(currentTime, TIME_TYPE.SEC) * 0.1 +
        'deg'
      )
    case TIME_TYPE.SEC:
      return getTimeType(currentTime, TIME_TYPE.SEC) * 6 + 'deg'
  }
}

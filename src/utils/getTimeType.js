import { TIME_TYPE } from './constants'

export function getTimeType(currentTime, type) {
  switch (type) {
    case TIME_TYPE.SEC:
      return +currentTime.split(':')[2]
    case TIME_TYPE.MIN:
      return +currentTime.split(':')[1]
    case TIME_TYPE.HOUR:
      return +currentTime.split(':')[0]
  }
}

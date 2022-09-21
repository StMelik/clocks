import { getTime } from '../../utils/getCurrentTime'
import { TIME_TYPE } from '../../utils/constants'
import './ClockArrow.css'

function ClockArrow({ currentDate, zone }) {
  function getTimeType(type) {
    switch (type) {
      case TIME_TYPE.SEC:
        return +getTime(currentDate, zone).split(':')[2]
      case TIME_TYPE.MIN:
        return +getTime(currentDate, zone).split(':')[1]
      case TIME_TYPE.HOUR:
        return +getTime(currentDate, zone).split(':')[0]
    }
  }

  function getDegHour() {
    return getTimeType(TIME_TYPE.HOUR) * 30 + getTimeType(TIME_TYPE.MIN) * 0.5
  }

  return (
    <div className="clock__arrow">
      {Array(12)
        .fill(1)
        .map((n, i) => (
          <div
            key={i}
            className="clock__time-serif"
            style={{ transform: `rotate(${i * 30}deg)` }}
          />
        ))}
      <div
        className="clock__time-arrow clock__time-arrow_second"
        style={{ transform: `rotate(${getTimeType(TIME_TYPE.SEC) * 6}deg)` }}
      />
      <div
        className="clock__time-arrow clock__time-arrow_minute"
        style={{ transform: `rotate(${getTimeType(TIME_TYPE.MIN) * 6}deg)` }}
      />
      <div
        className="clock__time-arrow clock__time-arrow_hour"
        style={{ transform: `rotate(${getDegHour()}deg)` }}
      />
    </div>
  )
}

export default ClockArrow

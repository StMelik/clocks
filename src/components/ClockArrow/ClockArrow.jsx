import './ClockArrow.css'
import { TIME_TYPE } from '../../utils/constants'
import { getDegArrorwType } from '../../utils/getDegArrorwType'
import ClockSerif from './ClockSerif/ClockSerif'

function ClockArrow({ currentTime }) {
  return (
    <div className="clock__arrow">
      <ClockSerif />
      <div
        className="clock__time-arrow clock__time-arrow_hour"
        style={{
          transform: `rotate(${getDegArrorwType(currentTime, TIME_TYPE.HOUR)})`,
        }}
      />
      <div
        className="clock__time-arrow clock__time-arrow_minute"
        style={{
          transform: `rotate(${getDegArrorwType(currentTime, TIME_TYPE.MIN)})`,
        }}
      />
      <div
        className="clock__time-arrow clock__time-arrow_second"
        style={{
          transform: `rotate(${getDegArrorwType(currentTime, TIME_TYPE.SEC)})`,
        }}
      />
    </div>
  )
}

export default ClockArrow

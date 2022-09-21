import { getTime } from '../../utils/getCurrentTime'
import './ClockNumeric.css'

function ClockNumeric({ currentDate, zone }) {
  return <div className="clock__numeric">{getTime(currentDate, zone)}</div>
}

export default ClockNumeric

import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Clock.css'
import Alert from '../Alert/Alert'
import SelectZone from '../SelectZone/SelectZone'
import ClockArrow from '../ClockArrow/ClockArrow'
import ClockNumeric from '../ClockNumeric/ClockNumeric'
import { useTime } from '../../hooks/useTime'
import { getClientTimeZone } from '../../utils/getClientTimeZone'

function Clock() {
  const { timeZones, loading, error } = useSelector((s) => s.zone)
  const [zone, setZone] = useState(getClientTimeZone())
  const { currentTime } = useTime(zone)

  return (
    <div className="clock">
      <ClockArrow currentTime={currentTime} />
      <ClockNumeric currentTime={currentTime} />
      {!loading && !error && (
        <SelectZone
          timeZones={timeZones}
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        />
      )}

      {loading && <Alert text="Загрузка..." />}
      {error && <Alert text={error} />}
    </div>
  )
}

export default Clock

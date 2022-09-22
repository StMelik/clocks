import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Clock.css'
import Preloader from '../Preloader/Preloader'
import SelectZone from '../SelectZone/SelectZone'
import ClockArrow from '../ClockArrow/ClockArrow'
import ClockNumeric from '../ClockNumeric/ClockNumeric'
import { useTime } from '../../hooks/useTime'

function Clock() {
  const { timeZones, loading, error } = useSelector((s) => s.zone)
  const [zone, setZone] = useState('')
  const { currentTime } = useTime(zone)

  if (error) return <p>{error}</p>

  return (
    <div className="clock">
      <ClockArrow currentTime={currentTime} />
      <ClockNumeric currentTime={currentTime} />
      {loading ? (
        <Preloader />
      ) : (
        <SelectZone
          timeZones={timeZones}
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        />
      )}
    </div>
  )
}

export default Clock

import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Clock.css'
import Preloader from '../Preloader/Preloader'
import SelectZone from '../SelectZone/SelectZone'
import ClockArrow from '../ClockArrow/ClockArrow'
import ClockNumeric from '../ClockNumeric/ClockNumeric'

function Clock() {
  const { timeZones, loading, error } = useSelector((s) => s.zone)
  const { currentDate } = useSelector((s) => s.date)
  const [zone, setZone] = useState('')

  if (error) return <p>{error}</p>

  return (
    <div className="clock">
      <ClockArrow currentDate={currentDate} zone={zone} />
      <ClockNumeric currentDate={currentDate} zone={zone} />
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

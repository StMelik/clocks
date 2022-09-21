import './Clock.css'

import { useState, useEffect } from 'react'
import { getCurrentTime } from '../../utils/getCurrentTime'
import { useRef } from 'react'
import { fetchData } from '../../utils/server/fetchData'

function Clock() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  const [timeZones, setTimeZones] = useState([])
  const [zone, setZone] = useState(null)
  const timer = useRef(null)

  useEffect(() => {
    fetchData(3).then(setTimeZones)
  }, [])

  useEffect(() => {
    setCurrentTime(getCurrentTime(zone))
    updateTime()
  }, [zone])

  function updateTime() {
    if (timer.current) clearInterval(timer.current)

    timer.current = setInterval(() => {
      setCurrentTime(getCurrentTime(zone))
    }, 1000)
  }

  function getTimeType(type) {
    return +currentTime.split(':')[type]
  }

  function getDegHour() {
    return getTimeType(0) * 30 + getTimeType(1) * 0.5
  }

  return (
    <div className="clock">
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
          style={{ transform: `rotate(${getTimeType(2) * 6}deg)` }}
        />
        <div
          className="clock__time-arrow clock__time-arrow_minute"
          style={{ transform: `rotate(${getTimeType(1) * 6}deg)` }}
        />
        <div
          className="clock__time-arrow clock__time-arrow_hour"
          style={{ transform: `rotate(${getDegHour()}deg)` }}
        />
      </div>
      <div className="clock__numeric">{currentTime}</div>
      <select
        value={zone}
        onChange={(e) => setZone(e.target.value)}
        className="clock__zone"
        name="zone"
      >
        {timeZones.map(({ name, timezone }) => (
          <option key={timezone} value={timezone}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Clock

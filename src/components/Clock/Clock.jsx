import './Clock.css'
import timeZones from '../../utils/timezones.json'
import { useState, useEffect } from 'react'
import { getCurrentTime } from '../../utils/getCurrentTime'

function Clock() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime())

  useEffect(() => {
    updateTime()
  }, [])

  function updateTime() {
    setInterval(() => {
      const currentTime = getCurrentTime()
      setCurrentTime(currentTime)
    }, 1000)
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
        <div className="clock__time-arrow clock__time-arrow_second" />
        <div className="clock__time-arrow clock__time-arrow_minute" />
        <div className="clock__time-arrow clock__time-arrow_hour" />
      </div>
      <div className="clock__numeric">{currentTime}</div>
      <select className="clock__zone" name="zone">
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

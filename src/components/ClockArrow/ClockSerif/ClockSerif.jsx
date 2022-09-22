import React from 'react'
import './ClockSerif.css'

function ClockSerif() {
  return (
    <>
      {Array(60)
        .fill(1)
        .map((_, i) => (
          <div
            key={i}
            className={i % 5 ? 'clock__serif-min' : 'clock__serif'}
            style={{ transform: `rotate(${i * 6}deg)` }}
          />
        ))}
      {Array(12)
        .fill(1)
        .map((_, i) => (
          <div
            className="clock__serif-num-wrapper"
            style={{ transform: `rotate(${(i + 1) * 30}deg)` }}
          >
            <p
              className="clock__serif-num"
              style={{ transform: `rotate(${-(i + 1) * 30}deg)` }}
            >
              {i + 1}
            </p>
          </div>
        ))}
    </>
  )
}

export default React.memo(ClockSerif)

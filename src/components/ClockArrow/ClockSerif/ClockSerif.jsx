import React from 'react'
import './ClockSerif.css'

function ClockSerif() {
  return Array(60)
    .fill(1)
    .map((_, i) => (
      <div
        key={i}
        className={i % 5 ? 'clock__serif-min' : 'clock__serif'}
        style={{ transform: `rotate(${i * 6}deg)` }}
      />
    ))
}

export default React.memo(ClockSerif)

import { useSelector } from 'react-redux'

export function useTime(zone) {
  const { currentDate } = useSelector((s) => s.date)
  const zoneDate = new Date(currentDate)

  if (zone) zoneDate.setHours(zoneDate.getUTCHours() + +zone)

  return { currentTime: zoneDate.toLocaleTimeString() }
}

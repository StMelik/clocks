export function getTime(date, zone) {
  const zoneDate = new Date(date)

  if (zone) zoneDate.setHours(zoneDate.getUTCHours() + +zone)

  return zoneDate.toLocaleTimeString()
}

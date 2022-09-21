export function getCurrentTime(zone) {
  const date = new Date()

  if (zone) date.setHours(date.getUTCHours() + +zone)

  return date.toLocaleTimeString()
}

export function getClientTimeZone() {
  return '+' + Math.abs(new Date().getTimezoneOffset() / 60)
}

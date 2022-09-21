import timeZone from './timezones.json'

export function fetchData(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeZone)
    }, ms)
  })
}

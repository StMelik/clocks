import timeZone from './timezones.json'

export function fetchData(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeZone)
    }, ms)
  })
}

import timeZones from './timezones.json'

export function fetchData(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeZones)
    }, ms)
  })
}

import timeZone from './timezones.json'

export function fetchData(s) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeZone)
    }, s * 1000)
  })
}

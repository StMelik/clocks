export function getCurrentTime() {
  return new Date().toLocaleString('ru', {
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}

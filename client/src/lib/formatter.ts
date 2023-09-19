export function formatMessageTime(date: Date) {
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const amPm = hours >= 12 ? 'pm' : 'am'
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${formattedHours}:${formattedMinutes} ${amPm}`
}

export function getDate() {
  let date = new Date()
  
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let weekday = weekdays[date.getDay()]
  
  let day = date.getDate()

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let month = months[date.getMonth()]

  return `${weekday}, ${day} ${month}`
}

export function formatedGrades(grades) {
  return Math.floor(grades)
}
 
export function uppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
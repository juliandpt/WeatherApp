export async function getWeatherDataByQuery(query) 
{
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`)
  const weatherData = await response.json()

  const { name } = weatherData
  const { country } = weatherData.sys
  const { lon, lat } = weatherData.coord
  const { main, description, icon } = weatherData.weather[0]
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = weatherData.main
  const { speed } = weatherData.wind
  const { all } = weatherData.clouds

  return {
    lon,
    lat,
    city: name,
    country,
    weather: main,
    description,
    icon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    wind: speed,
    clouds: all
  }
}

export async function getWeatherDataByLocation(latitude, longitude) 
{
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`)
  const weatherData = await response.json()

  const { name } = weatherData
  const { country } = weatherData.sys
  const { lon, lat } = weatherData.coord
  const { main, description, icon } = weatherData.weather[0]
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = weatherData.main
  const { speed } = weatherData.wind
  const { all } = weatherData.clouds

  return {
    lon,
    lat,
    city: name,
    country,
    weather: main,
    description,
    icon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    wind: speed,
    clouds: all
  }
}
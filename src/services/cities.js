import { State, City }  from 'country-state-city'

export function getStates(countryCode)
{
  return State.getStatesOfCountry(countryCode)
}

export function getPopularCities()
{
  return ['Amsterdam', 'Athens', 'Berlin', 'Brussels', 'Dublin', 'London', 'Madrid', 'Paris', 'Prague', 'Rome', 'New York', 'Los Angeles', 'Buenos Aires', 'Bogota', 'Dubai', 'Istanbul', 'New Dheli', 'Tokyo']
}
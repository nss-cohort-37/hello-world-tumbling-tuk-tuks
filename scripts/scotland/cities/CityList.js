import {UseCities} from "./CityDataProvider.js"

import CityComponent from "./City.js"

const CitiesListComponent = () => {
  const contentElement = document.querySelector(".cities__list")
  const cities = UseCities()

  let allCitiesHTML = " "
  for (const city of cities ) {
  const cityHTML = CityComponent(city)
  allCitiesHTML += cityHTML


}

contentElement.innerHTML += `
  ${allCitiesHTML}

`
}
export default CitiesListComponent
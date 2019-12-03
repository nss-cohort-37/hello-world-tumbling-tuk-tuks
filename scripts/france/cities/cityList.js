import { useCities } from "./CityDataProvider.js";
import CityComponent from "./city.js";

const CityListComponent = () => {
  const contentElement = document.querySelector(".cities__list");

  const cities = useCities();

  contentElement.innerHTML += `
  ${cities
    .map(city => {
      return CityComponent(city);
    })
    .join("")}`;
};

export default CityListComponent;

import {useCity} from "./CityDataProvider.js"
import CityComponent from "./city.js"

const CityListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".info")
    const city = useCity()


    let allcityHTML = ""

    for(const city of cities) {
       const cityHTML = cityComponent(city)
       allcityHTML += cityHTML
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    <section class="cityList">
    ${
        cities.map(city => cityComponent(city)).join("")
    }
    </section>
    `
}

export default CityListComponent
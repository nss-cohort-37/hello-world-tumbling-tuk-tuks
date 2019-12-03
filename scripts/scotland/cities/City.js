const CityComponent = (city) => {
  return ` 
    
      <div>${city.name}</div>
      <div class="city">
          
          <button id="button--${city.name}">Details</button>

          <dialog class="dialog--fish" id="details--${fish.name}">
              <div> ${fish.img}</div>
              <div>population: ${fish.location}</div>
              <div>Length: ${fish.length}</div>
              <div>Food: ${fish.food.join(",")}</div>

              <button class="button--close">Close Dialog</button>
          </dialog>
      </div>
  `






    
  `

}

export default CityComponent
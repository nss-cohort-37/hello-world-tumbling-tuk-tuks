const CityComponent = city => {
  return `<div>
  <button id="button--${city.id}" class="button">${city.name}</button>
  <dialog class="dialog__cities" id="button--${city.id}">
    <img src=${city.img}>
    <div>${city.name}</div>
    <div>Population: ${city.population}</div>
    <div>Established: ${city.year}</div>

    <button class="button--close" id="close__cities">Close Detail</button>
  </dialog>
</div>
  `;
};

export default CityComponent;

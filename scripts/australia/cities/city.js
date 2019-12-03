const CityComponent = city => {
  return `<div>
  <button id="button--${city.id}" class="button">${city.name}</button>
  <dialog class="dialog__cities" id="button--${city.id}">
    <div>${city.img}</div>
    <div>${city.name}</div>
    <div>Population: ${city.population}</div>
    <div>Established: ${city.year}</div>

  <div>
    <button class="button--close" id="close__cities">Close Detail</button>
  </div>
  </dialog>
</div>

  `;
};

export default CityComponent;

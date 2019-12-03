const CityComponent = city => {
  return `<div>
  <button id="button__cities" class="button">${city.name}</button>
</div>
<div>
  <dialog class="dialog__cities" id="${city.id}">
    <div>${city.img}</div>
    <div>${city.name}</div>
    <div>Population: ${city.population}</div>
    <div>Established: ${city.year}</div>

  <div>
    <button class="button__close" id="close__cities">Close Detail</button>
  </div>
  </dialog>
</div>

  `;
};

export default CityComponent;

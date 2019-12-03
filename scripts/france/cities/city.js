const CityComponent = city => {
  return `

    <dialog>

      <div>${city.name}</div>


    <button class="button--close">Close Dialog</button>
    </dialog>
  `;
};

export default CityComponent;

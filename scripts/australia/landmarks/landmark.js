const landmarkComponent = landmark => {
  return `
  <button id="button--${landmark.id}" class="button">${landmark.name}</button>
  
  <dialog class="dialog__cities" id="button--${landmark.id}">
      <img class="landmark__image" src=${landmark.img}>
      <div>${landmark.name}</div>
      <div>Established: ${landmark.year}</div>
      <div>Location: ${landmark.location}</div>

  
      <button class="button--close" id="close__cities">Close Detail</button>
    </dialog>
  </div>
  <br>
  `;
};

export default landmarkComponent;

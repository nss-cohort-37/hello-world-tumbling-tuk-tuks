const landmarkComponent = landmark => {
  return `
  <button id="button--${landmark.id}" class="button">${landmark.name}</button>
  
  <dialog class="dialog__cities" id="button--${landmark.id}">
      <div>${landmark.img}</div>
      <div>${landmark.name}</div>
      <div>Established: ${landmark.year}</div>
      <div>Established: ${landmark.location}</div>

  
    <div>
      <button class="button--close" id="close__cities">Close Detail</button>
    </div>
    </dialog>
  </div>
  `;
};

export default landmarkComponent;

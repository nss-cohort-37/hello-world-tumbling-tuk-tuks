const LandmarkComponent = landmarks => {
    return `
  <button id="button__cities" class="button">${landmarks.name}</button>
  </div>
  <div>
    <dialog class="dialog__cities" id="${landmarks.id}">
      <div>${landmarks.img}</div>
      <div>${landmarks.name}</div>
      <div>Established: ${landmarks.year}</div>
      <div>Established: ${landmarks.location}</div>

  
    <div>
      <button class="button__close" id="close__cities">Close Detail</button>
    </div>
    </dialog>
  </div>
    `;
  };
  
  export default LandmarkComponent;
  
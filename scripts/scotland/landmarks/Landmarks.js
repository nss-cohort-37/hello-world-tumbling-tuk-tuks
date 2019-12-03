const LandmarkComponent = (landmark) => {
  return ` 
  <button id="button__cities" class="button">${landmark.name}</button>
  </div>
  <div>
    <dialog class="dialog__cities" id="${landmark.id}">
      <div>${landmark.img}</div>
      <div>${landmark.name}</div>
      <div>Established: ${landmark.year}</div>
      <div>Established: ${landmark.location}</div>

  
    <div>
      <button class="button__close" id="close__cities">Close Detail</button>
    </div>
    </dialog>
  </div>
  `;
};






    
  



export default LandmarkComponent
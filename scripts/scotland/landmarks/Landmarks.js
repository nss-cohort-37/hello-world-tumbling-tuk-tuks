const LandmarkComponent = landmark => {
  let landmarkId = landmark.id.split(" ").join("-");

  return ` 
  <div>
    <button id="button--${landmarkId}" class="button">${landmark.name}</button>
  
  
    <dialog class="dialog__landmark" id="button--${landmarkId}">
      <img class="landmark__image" src=${landmark.img}>
      <div>${landmark.name}</div>
      <div>Established: ${landmark.year}</div>
      <div>Location: ${landmark.location}</div>

  
    
      <button class="button--close" id="close__landmark">Close Detail</button>
    
    </dialog>
  </div>
  `;
};

export default LandmarkComponent;

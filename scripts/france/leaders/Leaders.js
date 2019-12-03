const LeaderComponent = leader => {
    return `
    <button id="button--${leader.id}" class="button">${leader.name}</button>
    </div>
    <div>
      <dialog class="dialog__cities" id="${leader.id}">
        <div>${leader.img}</div>
        <div>${leader.name}</div>
        <div>Title: ${leader.title}</div>
  
    
      <div>
        <button class="button__close" id="close__cities">Close Detail</button>
      </div>
      </dialog>
    </div>
    `;
  };
  
  export default LeaderComponent;
  
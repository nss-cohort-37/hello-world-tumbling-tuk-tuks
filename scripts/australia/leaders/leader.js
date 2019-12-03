const leaderComponent = leader => {
  return `
  <button id="button--${leader.id}" class="button">${leader.name}</button>
 
  <dialog class="dialog__leaders" id="button--${leader.id}">
      <div>${leader.img}</div>
      <div>${leader.name}</div>
      <div>Title: ${leader.title}</div>

  
    <div>
      <button class="button--close" id="close__leaders">Close Detail</button>
    </div>
    </dialog>
  </div>
  `;
};

export default leaderComponent;

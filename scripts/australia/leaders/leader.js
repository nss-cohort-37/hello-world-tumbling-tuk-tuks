const leaderComponent = leader => {
  return `
  <div>
  <button id="button--${leader.id}" class="button">${leader.name}</button>
 
  <dialog class="dialog__leaders" id="button--${leader.id}">
      <img src=${leader.img}>
      <div>${leader.name}</div>
      <div>Title: ${leader.title}</div>

  
      <button class="button--close" id="close__leaders">Close Detail</button>
    </dialog>
  </div>
  <br>
  `;
};

export default leaderComponent;

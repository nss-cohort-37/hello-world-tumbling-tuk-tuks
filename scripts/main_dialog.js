const initializeDetailButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll(".button__close");

  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }

  // Show cities details in dialog box when the button is clicked
  document
    .querySelector("button[id^='button--']")
    .addEventListener("click", theClickEvent => {
      const dialogSiblingSelector = `#${theEvent.target.id}+dialog`;
      const theDialog = document.querySelector(dialogSiblingSelector);
      theDialog.showModal();
    });

  // Show landmarks details in dialog box when the button is clicked
};

export default initializeDetailButtonEvents;

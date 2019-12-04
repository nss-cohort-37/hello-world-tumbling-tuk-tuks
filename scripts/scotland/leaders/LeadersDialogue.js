const initializeScotlandButtonEvents = () => {
    const allCloseButtons = document.querySelectorAll(".button--close");
  
    for (const btn of allCloseButtons) {
      btn.addEventListener("click", theEvent => {
        const dialogElement = theEvent.target.parentNode;
        dialogElement.close();
      });
    }
  
    const allDetailButtons = document.querySelectorAll("button[id^='button--']");
  
    // Add an event listener to each one
    for (const btn of allDetailButtons) {
        

      btn.addEventListener("click", theEvent => {
          console.log("event was fired for", theEvent.target.id)
        
        const dialogSiblingSelector = `#${theEvent.target.id}+dialog`;
        
        const theDialog = document.querySelector(dialogSiblingSelector);
        console.log(theDialog)
        theDialog.showModal(); 
        
      });
    }
  };
  
  export default initializeScotlandButtonEvents
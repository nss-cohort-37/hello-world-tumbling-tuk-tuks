const initializeLeaderButton = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }


 const allDetailButtons = document.querySelectorAll("button[id^='button--']")
console.log(allDetailButtons)
 // Add an event listener to each one
 for (const btn of allDetailButtons) {
     btn.addEventListener(
         "click",
         theEvent => {
             console.log("hi mo")
             const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
             const theDialog = document.querySelector(dialogSiblingSelector)
             theDialog.showModal()
         }
     )
 }

}

 export default initializeLeaderButton
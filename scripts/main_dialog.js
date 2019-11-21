const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button__close")

  for (const btn of allCloseButtons) {
    btn.addEventListener(
      "click",
      theEvent => {
        const dialogElement = theEvent.target.parentNode
        dialogElement.close()
      }
    )
  }
  // CAN'T TOUCH THIS - END

  // You will be writing code below this line

  // Show Bart's details when the button is clicked
  document.querySelector("#button__landmarks").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details__cities_australia")
      theDialog.showModal()
    }
  )


  // CAN'T TOUCH THIS - END

  // You will be writing code below this line

  // Show Bart's details when the button is clicked

}



export default initializeDetailButtonEvents
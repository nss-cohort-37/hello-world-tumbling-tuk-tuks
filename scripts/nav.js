const addMouseOverEventListeners = () => {

    const navLinks = document.querySelectorAll(".links")

    for(const card of navLinks) {
        card.addEventListener("mouseover", (theMouseOverEvent) => {
                card.classList.add("highlightLinks")
            })

        card.addEventListener("mouseout", (theMouseOverEvent) => {
                card.classList.remove("highlightLinks")
            })
    }
}

export default addMouseOverEventListeners
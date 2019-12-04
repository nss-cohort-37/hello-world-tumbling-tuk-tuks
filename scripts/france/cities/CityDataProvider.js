const cityCollection = [
    {
        id: "Paris",
        name: "Paris",
        img:"./images/paris.jpg",
        population:"2.14 million",
        year:"3rd century",
    },
    {
        id: "Saint-michel",
        name: "Mont Saint-Michel",
        img:"./images/montsaint.jpg",
        population:"50ish",
        year:"8th century",
    },
    {
        id: "Nice",
        name: "Nice",
        img:"./images/nicefrance.jpg",
        population:"342,500",
        year:"350 BC",
    },
    {
        id: "Marseille",
        name: "Marseille",
        img:"./images/Marseille.jpg",
        population:"861,635",
        year:"600 BC",
    },
    {
        id: "lyon",
        name: "lyon",
        img:"./images/lyon.jpg",
        population:"513,275",
        year:"43",
    }
]

export const useCities = () => {
    return cityCollection
}
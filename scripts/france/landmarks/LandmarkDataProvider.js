const landmarksCollection = [
    {
        id: "eiffel",
        name: "Eiffel Tower",
        location: "Paris",
        img:"./images/eiffel.jpg",
        year:"1887",
    },
    {
        id:"notreDame",
        name: "Cathédrale Notre-Dame de Paris",
        location: "Paris",
        img:"./images/notre-dame.jpg",
        year:"1163",
    },
    {
        id:"triomphe",
        name: "Arc de Triomphe",
        location: "Pairs",
        img:"./images/arctriomphe.jpg",
        year:"1806",
    },
    {
        id:"louvre",
        name: "Louvre Museum",
        location: "Paris",
        img:"./images/louvre.jpg",
        year:"1793",
    }
]


export const useLandmark = () => {
    return landmarksCollection
}
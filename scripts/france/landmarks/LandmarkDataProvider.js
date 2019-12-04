const landmarksCollection = [
    {
        id: "eiffel",
        name: "Eiffel Tower",
        Location: "Paris",
        img:"./images/eiffel.jpg",
        year:"1887",
    },
    {
        id:"notreDame",
        name: "Cathédrale Notre-Dame de Paris",
        Location: "Paris",
        img:"./images/notre-dame.jpg",
        year:"1163",
    },
    {
        id:"triomphe",
        name: "Arc de Triomphe",
        Location: "Pairs",
        img:"./images/arctriomphe.jpg",
        year:"",
    },
    {
        id:"louvre",
        name: "Louvre Museum",
        Location: "Paris",
        img:"./images/louvre.jpg",
        year:"",
    }
]


export const useLandmark = () => {
    return landmarksCollection
}
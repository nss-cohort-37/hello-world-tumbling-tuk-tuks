const leadersCollection = [
    {
        img: "./images/EmmanuelMacron.jpg",
        id: "emmanuelmacron",
        name: "Emmanuel Macron",
        title: "President since May 2017"
    },
    {
        img: "./images/hollande.jpg",
        id: "francoishollande",
        name: "François Hollande",
        title: "President from 2012-2017"
        
    },
    {
        img: "./images/nicolassarkozy.jpg",
        id: "nicolassarkozy",
        name: "Nicolas Sarkozy",
        title: "President from 2007-2012"

    }
]

export const useLeaders = () => {
    return leadersCollection
}
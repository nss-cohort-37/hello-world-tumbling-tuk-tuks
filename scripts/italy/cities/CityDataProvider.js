const cityCollection = [
    {
        id: "rome",
        name: "Rome",
        img: "./images/romee.jpg",
        population: "2,872,800",
        founded: "753 BC"
    },
    {
        id: "venice",
        name: "Venice",
        img: "./images/venicee.jpg",
        population: "261,905",
        founded: "421 AD"
    },
    {
        id: "milan",
        name: "Milan",
        img: "./images/milann.jpg",
        population: "1,352,000",
        founded: "400 BC"
    },
    {
        id: "florence",
        name: "Florence",
        img: "./images/florencee.jpg",
        population: "382,258",
        founded: "59 BC"
    },
    {
        id: "naples",
        name: "Naples",
        img: "./images/napless.jpg",
        population: "972,130",
        founded: "600 BC"
    }
];

export const useCities = () => {
    return cityCollection;
};

const cityCollection = [
  {
    id: "sydney",
    name: "Sydney",
    img: "./images/sydneySkyline.jpg",
    population: "1788",
    year: "5.23 million"
  },
  {
    id: "brisbane",
    name: "Brisbane",
    img: "./images/brisbane.jpg",
    population: "2.28 million",
    year: "1824"
  },
  {
    id: "adelaide",
    name: "Adelaide",
    img: "./images/adelaide.jpg",
    population: "1.3 million",
    year: "1836"
  },
  {
    id: "canberra",
    name: "Canberra",
    img: "./images/canberra.jpg",
    population: "396,000",
    year: "1913"
  }
];

export const useCities = () => {
  return cityCollection;
};

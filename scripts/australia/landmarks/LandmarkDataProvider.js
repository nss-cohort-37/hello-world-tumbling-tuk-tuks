const landmarkCollection = [
  {
    id: "operahouse",
    name: "Opera House",
    location: "Sydney",
    img: "./images/sydneyOperaHouse2.jpg",
    year: "1973"
  },
  {
    id: "uluru",
    name: "Uluru",
    location: "Uluru-Kata Tjuta National Park",
    img: "./images/uluru.jpg",
    year: "350 million years ago"
  },
  {
    id: "greatbarrierreef",
    name: "Great Barrier Reef",
    location: "Coral Sea",
    img: "./images/greatBarrierReef.jpg",
    year: "7000 years ago"
  },
  {
    id: "portarthur",
    name: "Port Arthur",
    location: "Tasman Peninsula",
    img: "./images/portArthur.jpg",
    year: "1830"
  },
  {
    id: "eurekaskydeck",
    name: "Eureka Skydeck",
    location: "Southbank",
    img: "./images/eurekaSkydeck.jpg",
    year: "2007"
  }
];

export const useLandmarks = () => {
  return landmarkCollection;
};

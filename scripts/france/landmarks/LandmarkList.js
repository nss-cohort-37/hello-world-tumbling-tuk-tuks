import { useLandmark } from "./LandmarkDataProvider.js";
import LandmarkComponent from "./Landmark.js";

const LandmarkListComponent = () => {
  const contentElement = document.querySelector(".landmarks__list");

  const landmarks = useLandmark();

  contentElement.innerHTML += `
  ${landmarks
    .map(landmark => {
      return LandmarkComponent(landmark);
    })
    .join("")}`;
};

export default LandmarkListComponent;

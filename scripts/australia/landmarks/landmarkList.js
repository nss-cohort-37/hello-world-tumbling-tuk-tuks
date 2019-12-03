import { useLandmarks } from "./LandmarkDataProvider.js";
import landmarkComponent from "./landmark.js";

const LandmarkListComponent = () => {
  const contentElement = document.querySelector(".landmarks__list");

  const landmarks = useLandmarks();

  contentElement.innerHTML += `
${landmarks
  .map(landmark => {
    return landmarkComponent(landmark);
  })
  .join("")}
`;
};

export default LandmarkListComponent;

import {UseLandmarks} from "./LandmarkDataProvider.js"

import LandmarkComponent from "./Landmarks.js"

const LandmarkListComponent = () => {
  const contentElement = document.querySelector(".landmarks__list")
  const landmarks = UseLandmarks()

  let allLandmarksHTML = " "
  for (const landmark of landmarks ) {
  const landmarkHTML = LandmarkComponent(landmark)
  allLandmarksHTML += landmarkHTML


}

contentElement.innerHTML += `
  ${allLandmarksHTML}

`
}
export default LandmarkListComponent
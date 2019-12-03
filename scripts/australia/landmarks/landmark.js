const landmarkComponent = landmark => {
  return `
  <li>${landmark.name}, ${landmark.location}</li>`;
};

export default landmarkComponent;

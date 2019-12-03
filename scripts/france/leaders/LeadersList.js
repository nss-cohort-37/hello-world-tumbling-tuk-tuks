import { useLeaders } from "./leadersDataProvider.js";
import LeaderComponent from "./Leaders.js";

const LeaderListComponent = () => {
  const contentElement = document.querySelector(".leaders__list");

  const leaders = useLeaders();

  contentElement.innerHTML += `
  ${leaders
    .map(leader => {
      return LeaderComponent(leader);
    })
    .join("")}`;
};

export default LeaderListComponent;

import leaderComponent from "./leader.js";
import { useLeaders } from "./LeaderDataProvider.js";

export const leaderListComponent = () => {
  const contentElement = document.querySelector(".leaders__list");

  const leaders = useLeaders();

  contentElement.innerHTML += `
  ${leaders
    .map(currentLeader => {
      return leaderComponent(currentLeader);
    })
    .join("")}
  `;
};

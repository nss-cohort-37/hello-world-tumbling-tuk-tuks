import {UseLeaders} from "./LeadersDataProvider.js"

import LeaderComponent from "./Leaders.js"

const LeadersListComponent = () => {
  const contentElement = document.querySelector(".leaders__list")
  const leaders = UseLeaders()

  let allLeadersHTML = " "
  for (const leader of leaders ) {
  const leaderHTML = LeaderComponent(leader)
  allLeadersHTML += leaderHTML


}

contentElement.innerHTML += `
  ${allLeadersHTML}

`
}
export default LeadersListComponent
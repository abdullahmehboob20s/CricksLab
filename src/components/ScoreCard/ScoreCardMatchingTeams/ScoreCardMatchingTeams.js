import React from "react";
import Team from "./Team";
import "./ScoreCardMatchingTeams.css";
import matching_team_1 from "assets/images/matching-team-1.png";
import matching_team_2 from "assets/images/matching-team-2.png";

function ScoreCardMatchingTeams() {
  return (
    <div className="mathcing_teams">
      <Team
        name="Crease Hunters"
        img={matching_team_1}
        reverse={false}
        yetToBat={false}
      />
      <div className="VS">v/s</div>
      <Team
        name="Mash Eagles"
        img={matching_team_2}
        reverse={true}
        yetToBat={true}
      />
    </div>
  );
}

export default ScoreCardMatchingTeams;

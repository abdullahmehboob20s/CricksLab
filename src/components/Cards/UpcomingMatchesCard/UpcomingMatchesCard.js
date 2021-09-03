import React from "react";
import matching_team_1 from "assets/images/matching-team-1.png";
import matching_team_2 from "assets/images/matching-team-2.png";
import "./UpcomingMatchesCard.css";

const UpComingMatchesTeam = (props) => {
  const { teamName, teamLogo, reverse } = props;
  return (
    <div
      className={
        reverse
          ? "upcoming_matches_card_team reverse"
          : "upcoming_matches_card_team"
      }
    >
      <img className="upcoming_matches_card_team_img" src={teamLogo} alt="" />
      <p className="upcoming_matches_card_team_title">{teamName}</p>
    </div>
  );
};

function UpcomingMatchesCard() {
  return (
    <div className="upcoming_matches_card">
      <p className="upcoming_matches_card_title">
        S.S.L. Season 2 - League Matches (MATCH #25)
      </p>
      <div className="upcoming_matches_card_teams">
        <UpComingMatchesTeam
          teamName="Crease Hunters"
          teamLogo={matching_team_1}
        />
        <div className="upcoming_matches_card_tems_vs">v/s</div>
        <UpComingMatchesTeam
          teamName="Mash Eagles"
          teamLogo={matching_team_2}
          reverse={true}
        />
      </div>
      <p className="upcoming_matche_happend">Wed, 18 Aug 2021 03:30 PM</p>
    </div>
  );
}

export default UpcomingMatchesCard;

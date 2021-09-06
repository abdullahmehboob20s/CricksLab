import React from "react";
import matching_team_1 from "assets/images/matching-team-1.png";
import matching_team_2 from "assets/images/matching-team-2.png";
import "./UpcomingMatchesCard.css";

const UpComingMatchesTeam = (props) => {
  const { teamName, teamLogo, reverse, teamRuns, teamOvers } = props;
  return (
    <div
      className={
        reverse
          ? "upcoming_matches_card_team reverse"
          : "upcoming_matches_card_team"
      }
    >
      <img className="upcoming_matches_card_team_img" src={teamLogo} alt="" />
      <div>
        <p className="upcoming_matches_card_team_title">{teamName}</p>
        {teamRuns ? (
          <p className="upcoming_matches_card_team_runs">{teamRuns}</p>
        ) : (
          ""
        )}
        {teamOvers ? (
          <p className="upcoming_matches_card_team_overs">({teamOvers})</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

function UpcomingMatchesCard(props) {
  const {
    teamOneName = "Crease Hunters",
    teamTwoName = "Mash Eagles",
    teamOneruns,
    teamOneovers,
    teamTworuns,
    teamTwoovers,
    matchDetails,
    flex = 0,
    flexBasis = 0,
  } = props;
  return (
    <div style={{ flex, flexBasis }} className="upcoming_matches_card">
      {matchDetails ? (
        <div className="upcoming_matches_match_details">
          <div>
            <p className="match_details_title">{matchDetails.matchName}</p>
            <p className="match_details_subtitle">{matchDetails.matchDate}</p>
          </div>
          <div className="match_details_status red">{matchDetails.status}</div>
        </div>
      ) : (
        <p className="upcoming_matches_card_title">
          S.S.L. Season 2 - League Matches (MATCH #25)
        </p>
      )}
      <div className="upcoming_matches_card_teams">
        <UpComingMatchesTeam
          teamName={teamOneName}
          teamLogo={matching_team_1}
          teamRuns={teamOneruns}
          teamOvers={teamOneovers}
        />
        <div className="upcoming_matches_card_tems_vs">v/s</div>
        <UpComingMatchesTeam
          teamName={teamTwoName}
          teamLogo={matching_team_2}
          reverse={true}
          teamRuns={teamTworuns}
          teamOvers={teamTwoovers}
        />
      </div>
      {matchDetails ? (
        <p className="upcoming_matches_match_details_result">
          {matchDetails.result}
        </p>
      ) : (
        <p className="upcoming_matche_happend">Wed, 18 Aug 2021 03:30 PM</p>
      )}
    </div>
  );
}

export default UpcomingMatchesCard;

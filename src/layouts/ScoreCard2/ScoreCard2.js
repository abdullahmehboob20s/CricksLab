import React from "react";
import "./ScoreCard2.css";
import matching_team_1 from "assets/images/matching-team-1.png";
import matching_team_2 from "assets/images/matching-team-2.png";

const ScoreCard2Team = (props) => {
  const { reverse, yetToBat, teamName, teamLogo } = props;
  return (
    <div
      className={reverse ? "score_card_2_team reverse" : "score_card_2_team"}
    >
      <img
        className={
          !yetToBat ? "score_card_2_team_img blue" : "score_card_2_team_img"
        }
        src={teamLogo}
        alt=""
      />
      <div>
        <p className="score_card_2_team_name">{teamName}</p>
        <div className="score_card_2_score">
          {yetToBat ? (
            <p className="score_card_2_team_overs">*Yet to Bat</p>
          ) : (
            <>
              <p className="team_runs">80 / 7</p>
              <p className="score_card_2_team_overs"> (14 Overs)</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function ScoreCard2() {
  return (
    <div className="score_card_2">
      <ScoreCard2Team
        teamName="Crease Hunters *"
        teamRuns="80 / 7"
        teamOvers="14 Overs"
        teamLogo={matching_team_1}
      />
      <div className="match_live">
        LIVE
        <div className="live_dots">
          <div className="live_dot dot_1"></div>
          <div className="live_dot dot_2"></div>
          <div className="live_dot dot_3"></div>
        </div>
      </div>
      <ScoreCard2Team
        teamName="Mash Eagles"
        reverse={true}
        yetToBat={true}
        teamLogo={matching_team_2}
      />
    </div>
  );
}

export default ScoreCard2;

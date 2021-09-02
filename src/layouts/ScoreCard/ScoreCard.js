import React from "react";
import "./ScoreCard.css";
import ScoreCardHeader from "components/ScoreCard/ScoreCardHeader/ScoreCardHeader";
import ScoreCardMatchingTeams from "components/ScoreCard/ScoreCardMatchingTeams/ScoreCardMatchingTeams";
import Players from "components/ScoreCard/Players/Players";
import ScoreCardFooter from "components/ScoreCard/ScoreCardFooter/ScoreCardFooter";

function ScoreCard() {
  return (
    <div className="container-wrapper">
      <div className="score_card">
        <div className="score_card_background"></div>
        <div className="score_card_img"></div>
        <div className="score_card_img_2"></div>

        <div className="score_card_items">
          <ScoreCardHeader />
          <div className="score_card_content">
            <p className="score_card_title">
              S.S.L. Season 2 - League Matches (MATCH #25)
            </p>
            <ScoreCardMatchingTeams />
            <Players />
          </div>
          <ScoreCardFooter />
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;

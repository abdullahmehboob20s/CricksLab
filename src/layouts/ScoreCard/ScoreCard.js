import React from "react";
import "./ScoreCard.css";
import ScoreCardHeader from "components/ScoreCard/ScoreCardHeader/ScoreCardHeader";
import ScoreCardMatchingTeams from "components/ScoreCard/ScoreCardMatchingTeams/ScoreCardMatchingTeams";
import Players from "components/ScoreCard/Players/Players";
import ScoreCardFooter from "components/ScoreCard/ScoreCardFooter/ScoreCardFooter";

function ScoreCard(props) {
  const {
    showHeader,
    showTitle,
    footerText,
    showFooterBtns,
    showLiveIndicator = false,
  } = props;
  return (
    <div className="score_card">
      <div className="score_card_background"></div>
      <div className="score_card_img"></div>
      <div className="score_card_img_2"></div>

      <div className="score_card_items">
        {showHeader ? <ScoreCardHeader /> : ""}
        <div className="score_card_content">
          {showTitle ? (
            <p className="score_card_title">
              S.S.L. Season 2 - League Matches (MATCH #25)
            </p>
          ) : (
            ""
          )}
          <ScoreCardMatchingTeams showLiveIndicator={showLiveIndicator} />
          <Players />
        </div>
        <ScoreCardFooter
          footerText={footerText}
          showFooterBtns={showFooterBtns}
        />
      </div>
    </div>
  );
}

export default ScoreCard;

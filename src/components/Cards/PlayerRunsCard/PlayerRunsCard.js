import React from "react";
import "./PlayerRunsCard.css";

function PlayerRunsCard(props) {
  return (
    <div className="player_runs_card">
      <p className="player_runs_card_title">{props.score}</p>
      <p className="player_runs_card_subtitle">{props.scoreTitle}</p>
    </div>
  );
}

export default PlayerRunsCard;

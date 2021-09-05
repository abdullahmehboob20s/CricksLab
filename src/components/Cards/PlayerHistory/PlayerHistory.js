import React from "react";
import "./PlayerHistory.css";

function PlayerHistory(props) {
  let { playerHistory } = props;
  return (
    <div style={{ backgroundColor: props.bgColor }} className="player_history">
      <div>
        <p className="player_history_title">{playerHistory.matches}</p>
        <p className="player_history_subtitle">Mat</p>
      </div>
      <div>
        <p className="player_history_title">{playerHistory.won}</p>
        <p className="player_history_subtitle">Won</p>
      </div>
      <div>
        <p className="player_history_title">{playerHistory.lost}</p>
        <p className="player_history_subtitle">Lost</p>
      </div>
      <div>
        <p className="player_history_title">{playerHistory.noResult}</p>
        <p className="player_history_subtitle">NR</p>
      </div>
      <div>
        <p className="player_history_title">{playerHistory.points}</p>
        <p className="player_history_subtitle">PTS</p>
      </div>
    </div>
  );
}

export default PlayerHistory;

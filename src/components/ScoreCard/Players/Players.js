import React from "react";
import Player from "./Player";
import "./style.css";

function Players({ showPlayersInResponsive }) {
  return (
    <div
      className={
        showPlayersInResponsive ? "players" : "players dontShowInResponsive"
      }
    >
      <Player
        name="Majun Khan"
        score="40 (44)"
        roll="batsman"
        onStrike={false}
      />
      <Player
        name="Zaryan Khan"
        score="20 (40)"
        roll="batsman"
        onStrike={true}
      />
      <Player name="Zaryan Khan" score="4.0 (00)" roll="bowler" />
    </div>
  );
}

export default Players;

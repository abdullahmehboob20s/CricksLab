import React from "react";
import "./BowlersCard.css";
import PlayerHistory from "../PlayerHistory/PlayerHistory";

function BowlersCard(props) {
  return (
    <div
      className="bowlers_card"
      style={{ backgroundColor: props.bowlerContent.color }}
    >
      <div className="bowlers_card_vector">{props.playerNumber}</div>
      <img
        src={props.bowlerContent.image}
        alt=""
        className="bowlers_card_img"
      />
      <p className="bowlers_card_title">{props.bowlerContent.name}</p>
      <PlayerHistory
        style={{
          backgroundColor:
            props.bowlerContent.color === "#F9F9F9"
              ? "rgba(8, 16, 39, 0.05)"
              : " rgba(255, 255, 255, 0.3)",
        }}
        playerHistoryTitle={props.bowlerContent.playerHistoryTitle}
        // bgColor="rgba(255, 255, 255, 0.3);"
        playerHistory={props.bowlerContent.playerHistory}
      />
    </div>
  );
}

export default BowlersCard;

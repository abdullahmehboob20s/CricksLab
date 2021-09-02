import React from "react";
import "./BowlersCard.css";
import PlayerHistory from "./PlayerHistory";

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
      <PlayerHistory playerHistory={props.bowlerContent.playerHistory} />
    </div>
  );
}

export default BowlersCard;

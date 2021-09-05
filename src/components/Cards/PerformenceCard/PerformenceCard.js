import React from "react";
import "./PerformenceCard.css";

function PerformenceCard(props) {
  return (
    <div className="performence_card">
      <p className="performence_card_title">{props.status}</p>
      <p className="performence_card_subtitle">{props.data}</p>
    </div>
  );
}

export default PerformenceCard;

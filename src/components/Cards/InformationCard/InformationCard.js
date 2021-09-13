import React from "react";
import "./InformationCard.css";

function InformationCard(props) {
  return (
    <div className="information_card">
      <p className="information_card_title">{props.title}</p>
      <p className="information_card_subtitle">{props.subtitle}</p>
    </div>
  );
}

export default InformationCard;

import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import React from "react";
import "./PerformenceCard.css";

function PerformenceCard(props) {
  return (
    <div className="performence_card">
      {/* <p className="performence_card_title">{props.status}</p> */}
      <TitleBar5
        title={props.status}
        fontSize="0.75rem"
        lineHeight="20px"
        fontWeight="normal"
        containerWrapper30={false}
      />
      <TitleBar5
        title={props.data}
        fontSize="0.938rem"
        lineHeight="28px"
        fontWeight="600"
        containerWrapper30={false}
      />
      {/* <p className="performence_card_subtitle">{props.data}</p> */}
    </div>
  );
}

export default PerformenceCard;

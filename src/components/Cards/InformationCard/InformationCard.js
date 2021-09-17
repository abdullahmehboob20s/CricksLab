import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import React from "react";
import "./InformationCard.css";

function InformationCard(props) {
  return (
    <div className="information_card">
      <TitleBar5
        title={props.title}
        fontSize="0.875rem"
        lineHeight="24px"
        containerWrapper30={false}
        color="#33a2d2"
      />
      <TitleBar5
        title={props.subtitle}
        fontSize="0.938rem"
        lineHeight="28px"
        containerWrapper30={false}
        color="#33a2d2"
        fontWeight="normal"
        color="#081027"
      />
    </div>
  );
}

export default InformationCard;

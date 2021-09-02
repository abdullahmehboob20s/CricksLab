import React from "react";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import "./RelatedMatch.css";
import RelatedMatchCard from "components/Cards/RelatedMatchCard/RelatedMatchCard";

function RelatedMatche() {
  return (
    <div>
      <div className="container-wrapper">
        <TitleBar />
      </div>
      <div className="related_match_cards">
        <RelatedMatchCard />
      </div>
    </div>
  );
}

export default RelatedMatche;

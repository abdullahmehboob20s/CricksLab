import React from "react";
import "./Standings.css";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import BowlersCard from "components/Cards/BowlersCard/BowlersCard";

function Standings() {
  return (
    <div className="standings">
      <div className="container-wrapper">
        <TitleBar
          title="Standings"
          subtitle="Latest standings of KC T20 Premier League 20/21 1st Edition"
        />
        <p className="standing_cards_title">Top Bowler</p>
      </div>

      <div className="standing_cards">
        <BowlersCard />
      </div>
    </div>
  );
}

export default Standings;

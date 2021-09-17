import React from "react";
import "./TopPerformerCard.css";
import squad_player_1 from "assets/images/squad-player-1.png";
import star from "assets/images/star.png";
import PerformenceCard from "components/Cards/PerformenceCard/PerformenceCard";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";

function TopPerformerCard() {
  return (
    <div className="top_performer_card">
      <div className="box_1"></div>
      <div className="box_2"></div>
      <img className="box_3" src={star} alt="" />
      <div className="box_4">PLAYER OF THE MATCH</div>
      <div className="top_performer_profile">
        <img
          className="top_performer_profile_img"
          src={squad_player_1}
          alt=""
        />
        <TitleBar5
          title="Kwadwo Asamoah"
          fontSize="1rem"
          containerWrapper30={false}
        />
      </div>
      <div className="top_performer_performence">
        <PerformenceCard
          status="Batting"
          data="63 (18) | SR: 350.00, 3(4s), 8(6s)"
        />
        <PerformenceCard
          status="Bowling"
          data="2-9 (3.0) | EC: 6.33, 3(4s), 0(6s)"
        />
      </div>
    </div>
  );
}

export default TopPerformerCard;

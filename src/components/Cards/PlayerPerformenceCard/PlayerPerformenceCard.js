import React from "react";
import "./PlayerPerformenceCard.css";
import squad_player_1 from "assets/images/squad-player-1.png";
import PerformenceCard from "components/Cards/PerformenceCard/PerformenceCard";
import pattren from "assets/images/pattren.png";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";

function PlayerPerformenceCard(props) {
  const { data, index } = props;
  return (
    <div className="player_performence_card">
      <div
        className={
          index === 3
            ? "player_performence_card_vector red"
            : "player_performence_card_vector"
        }
      >
        {index}
      </div>
      <img className="player_performence_card_pattren" src={pattren} alt="" />

      <img
        src={squad_player_1}
        alt=""
        className="player_performence_card_img"
      />
      <div className="mb-20">
        <TitleBar5
          title={data.name}
          fontSize="1rem"
          containerWrapper30={false}
        />
      </div>

      <div className="player_performence_card_cards">
        {data.batting ? (
          <PerformenceCard
            status="Batting"
            data="63 (18) | SR: 350.00, 3(4s), 8(6s)"
          />
        ) : (
          ""
        )}
        {data.bowling ? (
          <PerformenceCard
            status="Bowling"
            data="2-9 (3.0) | EC: 6.33, 3(4s), 0(6s)"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PlayerPerformenceCard;

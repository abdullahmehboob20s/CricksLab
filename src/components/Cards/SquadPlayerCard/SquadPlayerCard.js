import React from "react";
import "./SquadPlayerCard.css";
import squad_player_1 from "assets/images/squad-player-1.png";
import gloves from "assets/images/gloves.png";
import C from "assets/images/C.png";

function SquadPlayerCard({ data }) {
  return (
    <div className="squad_player_card">
      <div className="squad_player_card_img_wrapper">
        <img className="squad_player_card_img" src={squad_player_1} alt="" />
        {data.isCaptian ? (
          <div className="player_captian">
            <div className="player_captian_c">
              <img src={C} alt="" />
            </div>
            <div className="player_captian_gloves">
              <img src={gloves} alt="" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="squad_player_card_name">{data.name}</p>
    </div>
  );
}

export default SquadPlayerCard;

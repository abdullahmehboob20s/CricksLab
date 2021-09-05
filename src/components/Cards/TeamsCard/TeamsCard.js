import React from "react";
import "./TeamsCard.css";
import PlayerHistory from "components/Cards/PlayerHistory/PlayerHistory";
import FollowButton from "components/Buttons/FollowButton/FollowButton";

function TeamsCard({ teamdata }) {
  return (
    <div className="teams_card">
      <img className="teams_card_img" src={teamdata.logo} alt="" />
      <p className="teams_card_title">{teamdata.name}</p>
      <p className="teams_card_country">{teamdata.country}</p>
      <PlayerHistory
        bgColor="rgba(110, 112, 119, 0.05)"
        playerHistory={teamdata.playerHistory}
      />
      <div className="teams_card_btn_wrapper">
        <FollowButton
          background="#33A2D2"
          border="1px solid #33A2D2"
          width="99px"
          height="40px"
          fontSize="14px"
          title="Follow"
          color="white"
          onPress={() => console.log("Nothing")}
        />
      </div>
    </div>
  );
}

export default TeamsCard;

import React from "react";
import "./SquadPlayerCard.css";
import squad_player_1 from "assets/images/squad-player-1.png";
import gloves from "assets/images/gloves.png";
import C from "assets/images/C.png";
import FollowButton from "components/Buttons/FollowButton/FollowButton";
import { HiOutlineShare } from "react-icons/hi";

function SquadPlayerCard(props) {
  const { data, flex = false, layout = true } = props;
  const {
    playerDetails,
    name,
    isCaptian,
    showFollowAndShareBtn = false,
    isFollowing,
  } = data;

  return (
    <div
      className={
        layout
          ? "squad_player_card_wrapper"
          : "squad_player_card_wrapper in-row"
      }
    >
      <div className="squad_player_card">
        <div className="squad_player_card_img_wrapper">
          <img className="squad_player_card_img" src={squad_player_1} alt="" />
          {isCaptian ? (
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
        <div>
          <p className="squad_player_card_name">{name}</p>
          {playerDetails ? (
            <p className="squad_player_card_details">
              {playerDetails.type} | {playerDetails.direction}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {showFollowAndShareBtn ? (
        <div className="squad_player_card_wrapper_btns">
          <FollowButton
            background={isFollowing ? "#E5F3F8" : "#33A2D2"}
            border="none"
            width={isFollowing ? "123px" : "99px"}
            height="40px"
            title={isFollowing ? "Following" : "Follow"}
            fontSize="14px"
            color={isFollowing ? "#33A2D2" : "white"}
            onPress={() => console.log("Nothing")}
          />
          <FollowButton
            background="rgba(51, 162, 210, 0.05)"
            border="none"
            width="40px"
            height="40px"
            title={<HiOutlineShare />}
            fontSize="22px"
            color="#33A2D2"
            onPress={() => console.log("Nothing")}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SquadPlayerCard;

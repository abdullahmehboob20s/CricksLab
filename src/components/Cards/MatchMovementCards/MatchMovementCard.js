import React from "react";
import "./MatchMovementCard.css";

function MatchMovementCard(props) {
  return (
    <div className="match_movement_card">
      <div>
        <div className="match_movement_card_img">
          <img src={props.videoThumbnail} alt="" />
          <div className="match_movement_card_video_duration">00:12:23</div>
        </div>
      </div>
      <div>
        <p className="match_movement_card_title">{props.title}</p>
        <p className="match_movement_card_subtitle">{props.subTitle}</p>
      </div>
    </div>
  );
}

export default MatchMovementCard;

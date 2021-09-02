import React from "react";
import videoImg from "assets/images/video-image-1.png";
import "./RelatedMatchCard.css";

function RelatedMatchCard() {
  return (
    <div className="related_match_card">
      <div className="related_match_card_img">
        <img src={videoImg} alt="" />
        <div className="related_match_card_video_duration">00:12:23</div>
      </div>
      <div className="related_match_card_content">
        <p className="related_match_card_title">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </p>
        <p className="related_match_card_subtitle">1.8K views • 10 min ago</p>
      </div>
    </div>
  );
}

export default RelatedMatchCard;

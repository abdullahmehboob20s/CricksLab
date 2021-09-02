import React from "react";
import "./LatestNewsCard.css";
import latest_card_img_1 from "assets/images/latest-card-img-1.png";

function LatestNewsCard() {
  return (
    <div className="latest_news_card">
      <img className="latest_news_card_img" src={latest_card_img_1} alt="" />
      <div className="latest_news_card_content">
        <p className="latest_news_card_title">
          Kuwait Cricket Club T-20 Desert Championship Finals
        </p>
        <p className="latest_news_card_subtitle">
          Category: <span className="bold">News</span> • Published on:
          <span className="bold">15-Jul-2021</span>
        </p>
      </div>
    </div>
  );
}

export default LatestNewsCard;

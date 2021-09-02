import React from "react";
import manage_card_img from "assets/images/latest-news-manage-img.png";
import { Link } from "react-router-dom";

function LatestNewsManageCard() {
  return (
    <div className="latest_news_manage_card">
      <div className="latest_news_manage_card_left">
        <img src={manage_card_img} alt="" />
      </div>
      <div className="latest_news_manage_card_right">
        <p className="latest_news_manage_card_right_title">
          Captains & Managers Meeting
        </p>
        <p className="latest_news_manage_card_right_subtitle">
          Category: <span className="bold">News</span> • Published on:{" "}
          <span className="bold">15-Jul-2021</span>
        </p>
        <p className="latest_news_manage_card_right_text">
          Captains & Managers meeting for KCC T-20 Premier Summer League & KCC
          T-10 Desert Summer League took place at the new Kuwait Cricket offices
          at the Kuwait Olympic Committee building in Hawally.
        </p>
        <p className="latest_news_manage_card_right_text">
          Wishing all the registered teams best of luck for the summer leagues
          that are scheduled to kick start from the 23rd of July.
        </p>
        <Link className="latest_news_manage_card_right_link">READ MORE</Link>
      </div>
    </div>
  );
}

export default LatestNewsManageCard;

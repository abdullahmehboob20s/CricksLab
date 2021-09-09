import React from "react";
import "./LatestNews.css";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import LatestNewsCard from "components/Cards/LatestNewsCard/LatestNewsCard";
import LatestNewsManageCard from "components/Cards/LatestNewsCard/LatestNewsManageCard";

function LatestNews() {
  return (
    <div>
      <div className="container-wrapper">
        <TitleBar
          title="Latest News"
          subtitle="Latest news and updates of Kuwait Cricket Association activities"
          viewAll="/advance-search"
        />
        <div className="lates_cards">
          <div className="LatestNewsCards">
            <LatestNewsManageCard />
            <LatestNewsCard className="latest_news_card_2" />
          </div>
          <div className="LatestNewsCards_2">
            <LatestNewsCard className="latest_news_card" />
            <LatestNewsCard className="latest_news_card" />
            <LatestNewsCard className="latest_news_card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;

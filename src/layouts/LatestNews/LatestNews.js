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
        />
        <div className="LatestNewsCards">
          <LatestNewsManageCard />
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
        </div>
      </div>
    </div>
  );
}

export default LatestNews;

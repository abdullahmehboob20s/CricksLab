import React from "react";
import "./MatchDetails.css";
import Navbar from "layouts/Navbar/Navbar";
import ScoreCard from "layouts/ScoreCard/ScoreCard";

function MatchDetails() {
  return (
    <div>
      <Navbar />
      <div className="match_details">
        <div className="container-wrapper">
          <ScoreCard
            showHeader={false}
            showTitle={false}
            showFooterBtns={false}
            footerText="Hassan Butt to Zaryan Khan, 4 Runs"
          />
        </div>
      </div>
    </div>
  );
}

export default MatchDetails;

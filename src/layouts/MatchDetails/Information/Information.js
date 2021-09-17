import InformationCard from "components/Cards/InformationCard/InformationCard";
import React from "react";

function Information() {
  return (
    <div className="container-wrapper-30">
      <p className="information_title">Information</p>
      <div className="information_cards">
        <InformationCard
          title="Tournament:"
          subtitle="SHAMKOT SUPER LEAGUE SEASON 2 S.S.L"
        />
        <InformationCard
          title="Match #:"
          subtitle="S.S.L Season 2 - League Matches (MATCH # 28)"
        />
        <InformationCard title="Venue:" subtitle="School Ground" />
        <InformationCard
          title="Toss:"
          subtitle="AK won the toss and bat first."
        />
        <InformationCard
          title="Match Officials:"
          subtitle="Ashish Ranjan (Commnetator) Vivek Goswami (Commentator) Ginni Batra (Scorer) Prem Malik (Umpire) Ravi Ranjan (Umpire)"
        />
        <InformationCard title="Match Status:" subtitle="Completed" />
      </div>
    </div>
  );
}

export default Information;

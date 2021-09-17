import React from "react";
import "./Matches.css";
import UpcomingMatchesCard from "components/Cards/UpcomingMatchesCard/UpcomingMatchesCard";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Checkbox from "components/Checkbox/Checkbox";

function Matches() {
  return (
    <div>
      <div className="mb-30">
        <TitleBar5
          title="Matches"
          fontSize="1.25rem"
          showBg={false}
          flex={true}
          containerWrapper30={false}
          leading={
            <div className="mathes_title_bar_right">
              <Checkbox title="All" />
              <Checkbox title="Live" />
              <Checkbox title="Scheduled" />
              <Checkbox title="Recent" />
            </div>
          }
        />
      </div>

      <div className="matches_details">
        {new Array(8).fill("").map((item, index) => (
          <UpcomingMatchesCard
            teamOneruns="126/6"
            teamTworuns="87/6"
            teamOneovers="10 overs"
            teamTwoovers="10 overs"
            teamOneName="DI"
            teamTwoName="SZ"
            flex={1}
            flexBasis="300px"
            matchDetails={{
              matchName: "UCL - Group B (MATCH # 1)",
              matchDate: "Wed, 26 May 2021 04:00 PM",
              status: "Result",
              result: "DUKI INSAFIANS won by 39 runs",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Matches;

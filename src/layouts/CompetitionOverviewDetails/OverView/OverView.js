import React from "react";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import ScoreCard4 from "components/Cards/ScoreCard4/ScoreCard4";
import UpcomingMatchesCard from "components/Cards/UpcomingMatchesCard/UpcomingMatchesCard";

function OverView() {
  const statistics = [
    {
      title: "Teams",
      disc: "8",
    },
    {
      title: "Players",
      disc: "133",
    },
    {
      title: "Mathces",
      disc: "224",
    },
    {
      title: "Competitions",
      disc: "4",
    },
  ];
  return (
    <div>
      <div className="mb-30">
        <TitleBar5
          title="Overview"
          fontSize="1.25rem"
          showBg={false}
          flex={true}
          containerWrapper30={false}
        />
      </div>
      <div className="mb-30">
        <ScoreCard4 data={statistics} />
      </div>

      <div className="mb-30">
        <TitleBar5
          title="Recent Matches"
          fontSize="1.25rem"
          showBg={false}
          flex={true}
          containerWrapper30={false}
        />
      </div>

      <div className="matches_details">
        {new Array(4).fill("").map((item, index) => (
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

export default OverView;

import PlayerPerformenceCard from "components/Cards/PlayerPerformenceCard/PlayerPerformenceCard";
import TopPerformerCard from "components/Cards/TopPerformerCard/TopPerformerCard";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import React from "react";
import { useSelector } from "react-redux";

function TopPerformance() {
  const { topPerformencePlayers, data, data2 } = useSelector(
    (state) => state.playerDetails
  );
  return (
    <div className="container-wrapper-30">
      <TitleBar5
        fontSize="1.25rem"
        title="Top Perfomers"
        containerWrapper30={false}
      />
      <TopPerformerCard />

      <div className="top_players_team">
        <div className="top_players_team_left">
          <div className="mb-30">
            <TitleBar5
              title="Crease Hunters"
              fontSize="1.25rem"
              containerWrapper30={false}
            />
          </div>
          <div className="top_players_team_cards">
            {topPerformencePlayers.slice(0, 3).map((data, index) => (
              <PlayerPerformenceCard data={data} index={index + 1} />
            ))}
          </div>
        </div>
        <div className="top_players_team_right">
          <div className="mb-30">
            <TitleBar5
              title="Mash Eagles"
              fontSize="1.25rem"
              containerWrapper30={false}
            />
          </div>
          <div className="top_players_team_cards">
            {topPerformencePlayers.slice(3, 6).map((data, index) => (
              <PlayerPerformenceCard data={data} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPerformance;

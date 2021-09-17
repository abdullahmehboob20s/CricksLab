import PlayerPerformenceCard from "components/Cards/PlayerPerformenceCard/PlayerPerformenceCard";
import TopPerformerCard from "components/Cards/TopPerformerCard/TopPerformerCard";
import React from "react";
import { useSelector } from "react-redux";

function TopPerformance() {
  const { topPerformencePlayers, data, data2 } = useSelector(
    (state) => state.playerDetails
  );
  return (
    <div className="container-wrapper-30">
      <p className="top_perfomers_title">Top Perfomers</p>
      <TopPerformerCard />

      <div className="top_players_team">
        <div className="top_players_team_left">
          <p className="top_players_team_title">Crease Hunters</p>
          <div className="top_players_team_cards">
            {topPerformencePlayers.slice(0, 3).map((data, index) => (
              <PlayerPerformenceCard data={data} index={index + 1} />
            ))}
          </div>
        </div>
        <div className="top_players_team_right">
          <p className="top_players_team_title">Mash Eagles</p>
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

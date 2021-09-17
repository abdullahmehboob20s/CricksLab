import PlayerRow from "components/Tables/PlayerRow";
import TeamDetailsTableHead from "components/Tables/TeamDetailsTableHead";
import TitleBar3 from "components/TitleBars/TitleBar3/TitleBar3";
import ScoreCard2 from "layouts/ScoreCard2/ScoreCard2";
import { useSelector } from "react-redux";

function Scorecard() {
  const { teamBatters, teamBowlers } = useSelector(
    (state) => state.playerDetails
  );
  return (
    <>
      <div className="score_card_2_wrapper">
        <ScoreCard2 />
      </div>
      <div className="teams_current_details">
        <div className="teams_current_details_wrapper scrollbar-height-0">
          <table className="teams_current_details_table">
            <thead>
              <TeamDetailsTableHead
                title="Crease Hunters (Battings)"
                subtitles={["R", "B", "4s", "6s", "S/R"]}
              />
            </thead>
            <tbody>
              {teamBatters.map((player, index) => (
                <PlayerRow data={player} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="teams_extras_details">
          <TitleBar3 mainTitle="Extras" title="12" subtitle="(1nb, 3wd, 8lb)" />
          <TitleBar3
            mainTitle="Total"
            title="80"
            subtitle="(7 Wickets, 14 Overs)"
            border={true}
          />
          <TitleBar3 mainTitle="Extras" title="Salman Shaikh, Mahamad Danish" />
        </div>
        <div className="teams_current_details_wrapper scrollbar-height-0">
          <table className="teams_current_details_table">
            <thead>
              <TeamDetailsTableHead
                title="Mash Eagles (Bowlings)"
                subtitles={["O", "M", "R", "W", "ECON"]}
              />
            </thead>
            <tbody>
              {teamBowlers.map((player, index) => (
                <PlayerRow data={player} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Scorecard;

import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import Tabs from "components/Tabs/Tabs";
import TitleBar4 from "components/TitleBars/TitleBar4/TitleBar4";
import ScoreCard3 from "layouts/ScoreCard3/ScoreCard3";
import React from "react";
import { useSelector } from "react-redux";

function BallByBall() {
  const { playerStatus } = useSelector((state) => state.playerDetails);
  return (
    <div className="container-wrapper-30">
      <Tabs defaultTab="1">
        <div className="live_commentry">
          <p className="live_commentry_title">Live Commentary</p>
          <div className="live_commentry_right">
            <Tab
              className=" match_details_tab"
              activeClassName=" match_details_tabs_active bold"
              label="Crease Hunters"
              tabIndex="1"
            />
            <Tab
              className="match_details_tab"
              activeClassName="match_details_tabs_active bold"
              label="Mash Eagles"
              tabIndex="2"
            />
          </div>
        </div>
        <TabPan tabIndex="1">
          <div className="match_details_scorecrd_table">
            <ScoreCard3 />
          </div>
          <div className="match_details_players_table">
            {playerStatus.slice(0, 6).map((data, index) => (
              <TitleBar4 data={data} />
            ))}
          </div>
          <div className="match_details_scorecrd_table">
            <ScoreCard3 />
          </div>
          <div className="match_details_players_table">
            {playerStatus.slice(6, 12).map((data, index) => (
              <TitleBar4 data={data} />
            ))}
          </div>
        </TabPan>
      </Tabs>
    </div>
  );
}

export default BallByBall;

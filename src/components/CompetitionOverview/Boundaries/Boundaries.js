import React from "react";
import "./Boundaries.css";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import ScoreCard4 from "components/Cards/ScoreCard4/ScoreCard4";
import Slider1 from "components/Sliders/Slider1/Slider1";
import { useSelector } from "react-redux";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import Table from "components/Tables/Table/Table";
import { BsChevronDown } from "react-icons/bs";

function Boundaries() {
  const { data, team, boundariesStats } = useSelector(
    (state) => state.maxBoundaries
  );
  return (
    <div>
      <div className="mb-30 boundaries_stats_title">
        <TitleBar5 title="Boundaries Stats" fontSize="20px" />
        <div className="boundaries_dropdown">
          <p className="bold">All Team</p>
          <BsChevronDown />
        </div>
      </div>
      <div className="match_details_scorecrd_table ">
        <ScoreCard4 data={boundariesStats} />
      </div>
      <Tabs defaultTab={1}>
        <div className="boundaries_tabs mb-30">
          <TitleBar5 title="Max Boundaries (Top 10)" fontSize="20px" />
          <div className="row">
            <Tab
              className="match_details_tab"
              activeClassName="match_details_tabs_active bold black"
              label="Max Boundaries"
              tabIndex={1}
            />
            <Tab
              className="match_details_tab"
              activeClassName="match_details_tabs_active bold black"
              label="Max Runs"
              tabIndex={2}
            />
          </div>
        </div>
        <div className="mb-30">
          <Slider1 headerTitle="Players 6s" data={data} />
        </div>
        <div className="mb-30">
          <Slider1 headerTitle="Players 4s" data={data} />
        </div>
        <div className="mb-30">
          <Table
            tabelHead={["Team", "6s", "4s", "Runs"]}
            mainHeadTitle="Team"
            showIndexes={false}
            data={team}
          />
        </div>
      </Tabs>
    </div>
  );
}

export default Boundaries;

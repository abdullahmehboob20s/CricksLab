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
      <div className="container-wrapper-30">
        <TitleBar5
          title="Boundaries Stats"
          rowInResponsive={true}
          fontSize="1.25rem"
          showBg={false}
          flex={true}
          containerWrapper30={false}
          leading={
            <div className="boundaries_dropdown">
              <p className="bold">All Team</p>
              <BsChevronDown />
            </div>
          }
        />

        <div className="match_details_scorecrd_table ">
          <ScoreCard4 data={boundariesStats} />
        </div>
      </div>

      <Tabs defaultTab={1}>
        <div className="container-wrapper-30">
          <div className="mb-30">
            <TitleBar5
              title="Max Boundaries (Top 10)"
              fontSize="1.25rem"
              showBg={false}
              flex={true}
              containerWrapper30={false}
              leading={
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
              }
            />
          </div>
        </div>

        <div className="mb-30">
          <Slider1 headerTitle="Players 6s" data={data} />
        </div>
        <div className="mb-30">
          <Slider1 headerTitle="Players 4s" data={data} />
        </div>

        <div className="overview-table-wrapper">
          <div className="container-wrapper-30">
            <div className="mb-30">
              <Table
                tabelHead={["Team", "6s", "4s", "Runs"]}
                borderInResponsive={true}
                mainHeadTitle="Team"
                showIndexes={false}
                data={team}
              />
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default Boundaries;

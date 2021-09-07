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
import table_player_2 from "assets/images/table-player-2.png";
import { BsChevronDown } from "react-icons/bs";

function Boundaries() {
  const { data } = useSelector((state) => state.maxBoundaries);
  const boundariesStats = [
    {
      title: "Total Runs",
      disc: "2515",
    },
    {
      title: "100s",
      disc: "01",
    },
    {
      title: "50s",
      disc: "07",
    },
    {
      title: "Total Sixes",
      disc: "195",
    },
    {
      title: "Total Fours",
      disc: "141",
    },
  ];
  return (
    <div>
      <div className="mb-30 boundaries_stats_title">
        <TitleBar5 title="Boundaries Stats" fontSize="20px" />
        <div className="boundaries_dropdown">
          <p>All Team</p>
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
              activeClassName="match_details_tabs_active"
              label="Max Boundaries"
              tabIndex={1}
            />
            <Tab
              className="match_details_tab"
              activeClassName="match_details_tabs_active"
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
            data={[
              {
                img: table_player_2,
                name: "Roger Torff",
                details: {
                  m: 30.39,
                  w: 173.0,
                  l: 4.32,
                },
              },
              {
                img: table_player_2,
                name: "Roger Torff",
                details: {
                  m: 30.39,
                  w: 173.0,
                  l: 4.32,
                },
              },
              {
                img: table_player_2,
                name: "Roger Torff",
                details: {
                  m: 30.39,
                  w: 173.0,
                  l: 4.32,
                },
              },
              {
                img: table_player_2,
                name: "Roger Torff",
                details: {
                  m: 30.39,
                  w: 173.0,
                  l: 4.32,
                },
              },
              {
                img: table_player_2,
                name: "Roger Torff",
                details: {
                  m: 30.39,
                  w: 173.0,
                  l: 4.32,
                },
              },
              {
                img: table_player_2,
                name: "Roger Torff",
                details: {
                  m: 30.39,
                  w: 173.0,
                  l: 4.32,
                },
              },
              {
                img: table_player_2,
                name: "Roger Torff",
                details: {
                  m: 30.39,
                  w: 173.0,
                  l: 4.32,
                },
              },
            ]}
          />
        </div>
      </Tabs>
    </div>
  );
}

export default Boundaries;
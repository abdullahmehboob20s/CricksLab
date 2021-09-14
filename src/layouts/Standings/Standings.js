import React from "react";
import "./Standings.css";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import "swiper/swiper-bundle.css";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import StandingCard from "components/Cards/StandingCards/StandingCard";
import CardSelect from "components/Selects/CardSelect/CardSelect";
import { useSelector } from "react-redux";

function Standings() {
  const { data } = useSelector((state) => state.standings);
  let selectItems = [
    { title: "abc" },
    { title: "abc" },
    { title: "abc" },
    { title: "abc" },
    { title: "abc" },
  ];

  return (
    <div className="standings">
      <div className="container-wrapper">
        <TitleBar
          title="Standings"
          subtitle="Latest standings of KC T20 Premier League 20/21 1st Edition"
        />
      </div>

      <Tabs defaultTab={1}>
        <div className="container-wrapper">
          <div className="standing_teams_specs">
            <div className="standing_teams_specs_left scrollbar-height-0">
              <Tab
                className="standing_tab"
                activeClassName="tab_active"
                label="Top Bowler"
                tabIndex={1}
              />
              <Tab
                className="standing_tab"
                activeClassName="tab_active"
                label="Top Batsman"
                tabIndex={2}
              />
              <Tab
                className="standing_tab"
                activeClassName="tab_active"
                label="All Rounder"
                tabIndex={3}
              />
              <Tab
                className="standing_tab"
                activeClassName="tab_active"
                label="Top Rated Teams"
                tabIndex={4}
              />
            </div>
            <div className="standing_teams_specs_right">
              <CardSelect
                selectItems={selectItems}
                className="standing_select"
                title="Season 2020"
              />
              <CardSelect
                selectItems={selectItems}
                className="standing_select"
                title="Select Divisions"
              />
              <CardSelect
                selectItems={selectItems}
                className="standing_select"
                title="Select Group"
              />
            </div>
          </div>
        </div>

        <TabPan tabIndex={1}>
          <StandingCard title="Top Bowler" bowlers={data} />
        </TabPan>
        <TabPan tabIndex={2}>
          <StandingCard title="Top Batsman" bowlers={data} />
        </TabPan>
        <TabPan tabIndex={3}>
          <StandingCard title="All Rounder" bowlers={data} />
        </TabPan>
        <TabPan tabIndex={4}>
          <StandingCard title="Top Rated Teams" bowlers={data} />
        </TabPan>
      </Tabs>
    </div>
  );
}

export default Standings;

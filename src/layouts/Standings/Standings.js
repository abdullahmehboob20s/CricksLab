import React from "react";
import "./Standings.css";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import "swiper/swiper-bundle.css";
import bowlers_card_img_1 from "assets/images/bowlers-card-img-1.png";
import bowlers_card_img_2 from "assets/images/bowlers-card-img-2.png";
import bowlers_card_img_3 from "assets/images/bowlers-card-img-3.png";
import bowlers_card_img_4 from "assets/images/bowlers-card-img-4.png";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import StandingCard from "components/Cards/StandingCards/StandingCard";
import CardSelect from "components/Selects/CardSelect/CardSelect";

function Standings() {
  let bowlers = [
    {
      name: "Kwadwo Asamoah",
      color: "#BEE2EE",
      image: bowlers_card_img_1,
      playerHistory: {
        matches: 7,
        won: 6,
        lost: 1,
        noResult: 0,
        points: 12,
      },
    },
    {
      name: "Javi Martinez",
      color: "#CBE9C4",
      image: bowlers_card_img_2,
      playerHistory: {
        matches: 6,
        won: 3,
        lost: 3,
        noResult: 0,
        points: 6,
      },
    },
    {
      name: "Shinji Kagawa",
      image: bowlers_card_img_3,
      color: "#F8DFE2",
      playerHistory: {
        matches: 5,
        won: 2,
        lost: 3,
        noResult: 0,
        points: 4,
      },
    },
    {
      name: "John Terry",
      image: bowlers_card_img_4,
      color: "#F9F9F9",
      playerHistory: {
        matches: 5,
        won: 2,
        lost: 3,
        noResult: 0,
        points: 4,
      },
    },
  ];
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
            <div className="standing_teams_specs_left">
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
          <StandingCard title="Top Bowler" bowlers={bowlers} />
        </TabPan>
        <TabPan tabIndex={2}>
          <StandingCard title="Top Batsman" bowlers={bowlers} />
        </TabPan>
        <TabPan tabIndex={3}>
          <StandingCard title="All Rounder" bowlers={bowlers} />
        </TabPan>
        <TabPan tabIndex={4}>
          <StandingCard title="Top Rated Teams" bowlers={bowlers} />
        </TabPan>
      </Tabs>
    </div>
  );
}

export default Standings;

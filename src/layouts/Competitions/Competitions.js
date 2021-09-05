import React from "react";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import CompetitionsCard from "components/Cards/CompetitionsCard/CompetitionsCard";
import "./Competitions.css";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import { useSelector } from "react-redux";

function Competitions() {
  const { data } = useSelector((state) => state.leagues);

  return (
    <div>
      <div className="container-wrapper">
        <TitleBar
          title="Competitions"
          viewAll="/competitions"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Tabs defaultTab={1}>
          <div className="competitions_cards_tabs">
            <Tab
              className="competitions_tab"
              activeClassName="competitions_tab_active"
              label="Ongoing"
              tabIndex={1}
            />
            <Tab
              className="competitions_tab"
              activeClassName="competitions_tab_active"
              label="Upcoming"
              tabIndex={2}
            />
            <Tab
              className="competitions_tab"
              activeClassName="competitions_tab_active"
              label="Recent"
              tabIndex={3}
            />
          </div>

          <TabPan tabIndex={1}>
            <div className="competitions_cards">
              {data.slice(0, 4).map((league, index) => (
                <CompetitionsCard key={index} data={league} />
              ))}
            </div>
          </TabPan>
          <TabPan tabIndex={2}>
            <div className="competitions_cards">
              {data.slice(0, 4).map((league, index) => (
                <CompetitionsCard key={index} data={league} />
              ))}
            </div>
          </TabPan>
          <TabPan tabIndex={3}>
            <div className="competitions_cards">
              {data.slice(0, 4).map((league, index) => (
                <CompetitionsCard key={index} data={league} />
              ))}
            </div>
          </TabPan>
        </Tabs>
      </div>
    </div>
  );
}

export default Competitions;

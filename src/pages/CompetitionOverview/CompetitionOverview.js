import React from "react";
import Navbar from "layouts/Navbar/Navbar";
import "./CompetitionOverview.css";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import LeagueCard from "components/Cards/LeagueCard/LeagueCard";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import Footer from "layouts/Footer/Footer";
import OverView from "components/CompetitionOverview/OverView/OverView";
import MVP from "components/CompetitionOverview/MVP/MVP";
import TeamSquad from "components/CompetitionOverview/TeamSquad/TeamSquad";
import Matches from "components/CompetitionOverview/Matches/Matches";
import Boundaries from "components/CompetitionOverview/Boundaries/Boundaries";

function CompetitionOverview() {
  return (
    <>
      <Navbar />
      <div className="competition_overview bg-liner-gradient ">
        <div className="container-wrapper">
          <TitleBar2
            title="Home"
            subtitle="Competitions"
            subtitle2="Kashmir Premier League 2021"
            mainTitle="Kashmir Premier League 2021"
            showRightSide={true}
            showSharewith={true}
            divider={false}
            showShareOnResponsive={true}
          />

          <div className="mb-70">
            <LeagueCard
              title="United Cricket League"
              subtitle="Tournament"
              status={true}
            />
          </div>
        </div>

        <div className="match_details_content_wrapper">
          <div className="container-wrapper">
            <div className="match_details_content_left mb-100 py-30">
              <Tabs defaultTab={1}>
                <div className="match_details_tabs scrollbar-height-0">
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Overview"
                    tabIndex={1}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Squads"
                    tabIndex={2}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Matches"
                    tabIndex={3}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Boundaries"
                    tabIndex={4}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="MVP"
                    tabIndex={5}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Videos"
                    tabIndex={6}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Rules Information"
                    tabIndex={7}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Our Sponsors"
                    tabIndex={7}
                  />
                </div>

                <div className="container-wrapper-30">
                  <TabPan tabIndex={1}>
                    <OverView />
                  </TabPan>
                </div>

                <TabPan tabIndex={2}>
                  <TeamSquad />
                </TabPan>
                <div className="container-wrapper-30">
                  <TabPan tabIndex={3}>
                    <Matches />
                  </TabPan>
                </div>
                <div className="container-wrapper-30">
                  <TabPan tabIndex={4}>
                    <Boundaries />
                  </TabPan>
                </div>
                <div className="container-wrapper-30">
                  <TabPan tabIndex={5}>
                    <MVP />
                  </TabPan>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CompetitionOverview;

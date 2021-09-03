import React from "react";
import "./MatchDetails.css";
import Navbar from "layouts/Navbar/Navbar";
import ScoreCard from "layouts/ScoreCard/ScoreCard";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import Tabs from "components/Tabs/Tabs";
import ScoreCard2 from "layouts/ScoreCard2/ScoreCard2";
import { Link } from "react-router-dom";
import UpcomingMatchesCard from "components/Cards/UpcomingMatchesCard/UpcomingMatchesCard";

function MatchDetails() {
  return (
    <div>
      <Navbar />
      <div className="match_details">
        <div className="container-wrapper">
          <TitleBar2 />
          <ScoreCard
            showHeader={false}
            showTitle={false}
            showFooterBtns={false}
            footerText="Hassan Butt to Zaryan Khan, 4 Runs"
          />

          <div className="match_details_content">
            <div className="match_details_content_left">
              <Tabs defaultTab={1}>
                <div className="match_details_tabs">
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Scorecard"
                    tabIndex={1}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Ball by Ball"
                    tabIndex={2}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Squad"
                    tabIndex={3}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Highlights"
                    tabIndex={4}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Stats"
                    tabIndex={5}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Top Performers"
                    tabIndex={6}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Information"
                    tabIndex={7}
                  />
                </div>
                <TabPan tabIndex={1}>
                  <ScoreCard2 />
                </TabPan>
              </Tabs>
            </div>
            <div className="match_details_content_right">
              <div className="math_predictions">Match Predictions</div>
              <div className="upcoming_matches">
                <div className="upcoming_matches_titles">
                  <p>Upcoming Matches</p>
                  <Link>View all</Link>
                </div>
                <UpcomingMatchesCard />
                <UpcomingMatchesCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetails;

import React from "react";
import "./CompetitionOverviewDetails.css";
import Navbar from "layouts/Navbar/Navbar";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import Tabs from "components/Tabs/Tabs";
import Footer from "layouts/Footer/Footer";
import LeagueCard from "components/Cards/LeagueCard/LeagueCard";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import Statistics from "layouts/TeamDetails/Statistics/Statistics";
import Players from "layouts/TeamDetails/Players/Players";
import Leaderboard from "layouts/TeamDetails/Leaderboard/Leaderboard";
import OverView from "layouts/CompetitionOverviewDetails/OverView/OverView";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import location from "assets/images/location.png";
import Button from "components/Buttons/FollowButton/FollowButton";
import rc_team from "assets/images/rc-team.png";

function CompetitionOverviewDetails() {
  return (
    <div>
      <Navbar />
      <div className="match_details bg-liner-gradient">
        <div className="container-wrapper">
          <TitleBar2
            title="Home"
            subtitle="Teams"
            subtitle2="Scorpion Kuwait"
            mainTitle="Scorpion Kuwait"
            showRightSide={true}
            showSharewith={true}
            divider={false}
          />
          <div className="mb-70">
            <LeagueCard
              title="RC99 Cricket Club"
              subtitle="Lahore, Pakistan"
              status={true}
              img={rc_team}
              showViews={false}
              showLocation={false}
              showStartAndEndDate={false}
              showDividerInResponsive={false}
            />
          </div>
        </div>

        <div className="match_details_content_wrapper">
          <div className="container-wrapper">
            <div className="match_details_content ">
              <div className=" match_details_content_left py-30">
                <Tabs defaultTab={1}>
                  <div className="scrollbar-height-0 match_details_tabs">
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold"
                      label="Overview"
                      tabIndex={1}
                    />
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold"
                      label="Players"
                      tabIndex={2}
                    />
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold"
                      label="Matches"
                      tabIndex={3}
                    />
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold"
                      label="Teams"
                      tabIndex={4}
                    />
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold"
                      label="MVP"
                      tabIndex={5}
                    />
                  </div>

                  <TabPan tabIndex={1}>
                    <div className="container-wrapper-30">
                      <OverView />
                    </div>
                  </TabPan>
                  <TabPan tabIndex={2}>
                    <Players />
                  </TabPan>
                  <TabPan tabIndex={4}>
                    <Leaderboard />
                  </TabPan>
                </Tabs>
              </div>

              {/* right side */}
              <div className="match_details_content_right dont-contain">
                <div className="container-wrapper-30">
                  <div className="mb-30">
                    <TitleBar5 title="Informations" fontSize="20px" />
                  </div>
                  <div className="Information_wrapper">
                    <div className="Information">
                      <p className="Information_title">Club</p>
                      <p className="Information_disc">: RC99 Cricket Club</p>
                    </div>
                    <div className="Information">
                      <p className="Information_title">Country</p>
                      <p className="Information_disc">: Pakistan</p>
                    </div>
                    <div className="Information">
                      <p className="Information_title">Region</p>
                      <p className="Information_disc">: -</p>
                    </div>
                    <div className="Information">
                      <p className="Information_title">City</p>
                      <p className="Information_disc">: Lahore</p>
                    </div>
                    <div className="Information">
                      <p className="Information_title">Is Official?</p>
                      <p className="Information_disc">: Yes</p>
                    </div>
                    <div className="Information">
                      <p className="Information_title">Type</p>
                      <p className="Information_disc">: Club</p>
                    </div>
                    <div className="Information">
                      <p className="Information_title">Contact</p>
                      <p className="Information_disc">: 123 456 7894</p>
                    </div>
                  </div>
                  <div className="mb-30">
                    <TitleBar5 title="Our Location" fontSize="20px" />
                  </div>
                  <div className="mb-30">
                    <img className="location_img" src={location} alt="" />
                  </div>
                  <div className="mb-30">
                    <TitleBar5 title="Have any questions?" fontSize="20px" />
                  </div>
                  <Button
                    title="Contact Us"
                    style={{
                      padding: "15px 30px",
                      background: "#33A2D2",
                      borderRadius: "10px",
                      color: "white",
                      border: 0,
                      textTransform: "uppercase",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default CompetitionOverviewDetails;

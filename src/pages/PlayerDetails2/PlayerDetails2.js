import React from "react";
import "./PlayerDetails2.css";
import Navbar from "layouts/Navbar/Navbar";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import Tabs from "components/Tabs/Tabs";
import { Link } from "react-router-dom";
import UpcomingMatchesCard from "components/Cards/UpcomingMatchesCard/UpcomingMatchesCard";
import MatchMovementCard from "components/Cards/MatchMovementCards/MatchMovementCard";
import video_image_1 from "assets/images/video-image-1.png";
import video_image_2 from "assets/images/video-image-2.png";
import video_image_3 from "assets/images/video-image-3.png";
import Footer from "layouts/Footer/Footer";
import LeagueCard from "components/Cards/LeagueCard/LeagueCard";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import Statistics from "layouts/PlayerDetails2/Statistics/Statistics";
import player_1 from "assets/images/pollard.png";

function PlayerDetails2() {
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
              subtitle="All Rounder"
              title="Kieron Pollard"
              location="Jamaica"
              img={player_1}
              status={false}
              showViews={false}
              showLocation={true}
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
                      activeClassName="match_details_tabs_active bold black"
                      label="Statistics"
                      tabIndex={1}
                    />
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold black"
                      label="Players"
                      tabIndex={2}
                    />
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold black"
                      label="Matches"
                      tabIndex={3}
                    />
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold black"
                      label="Leaderboard"
                      tabIndex={4}
                    />
                    <Tab
                      className="match_details_tab"
                      activeClassName="match_details_tabs_active bold black"
                      label="MVP"
                      tabIndex={5}
                    />
                  </div>

                  <TabPan tabIndex={1}>
                    <Statistics />
                  </TabPan>
                </Tabs>
              </div>

              {/* right side */}
              <div className="match_details_content_right">
                <div className="upcoming_matches">
                  <div className="upcoming_matches_titles">
                    <p>Upcoming Matches</p>
                    <Link>View all</Link>
                  </div>
                  <div className="upcoming_matches_cards">
                    <UpcomingMatchesCard />
                    <UpcomingMatchesCard />
                  </div>
                  <div className="upcoming_matche_movement">
                    <div className="upcoming_matches_titles">
                      <p>Match Movement</p>
                      <Link>View all</Link>
                    </div>
                    <div className="upcoming_matche_movement_cards">
                      <MatchMovementCard
                        videoThumbnail={video_image_1}
                        title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                        subTitle="1.8K views  ???  10 min ago"
                      />
                      <MatchMovementCard
                        videoThumbnail={video_image_2}
                        title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                        subTitle="1.8K views  ???  10 min ago"
                      />
                      <MatchMovementCard
                        videoThumbnail={video_image_3}
                        title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                        subTitle="1.8K views  ???  10 min ago"
                      />
                    </div>
                  </div>
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

export default PlayerDetails2;

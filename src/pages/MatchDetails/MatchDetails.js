import React from "react";
import "./MatchDetails.css";
import Navbar from "layouts/Navbar/Navbar";
import ScoreCard from "layouts/ScoreCard/ScoreCard";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
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
import "swiper/swiper-bundle.css";
import { useSelector } from "react-redux";

function MatchDetails() {
  const { matchDetailsTabs } = useSelector((state) => state.tabs);
  return (
    <div>
      <Navbar />
      <div className="match_details bg-liner-gradient">
        <div className="container-wrapper">
          <TitleBar2
            title="Match Center"
            subtitle="Matches"
            subtitle2="Crease Hunters vs Mash Eagles"
            mainTitle="S.S.L. Season 2 - League Matches (MATCH #25)"
            showRightSide={true}
            showLiveWatching={true}
            showSubscribeBtn={true}
            showSharewith={true}
            divider={true}
          />
          <ScoreCard
            showHeader={false}
            showTitle={false}
            showFooterBtns={false}
            footerText="Hassan Butt to Zaryan Khan, 4 Runs"
            showLiveIndicator={true}
          />
        </div>
        <div className="match_details_content_wrapper">
          <div className="container-wrapper">
            <div className="match_details_content ">
              <div className="match_details_content_left py-30">
                <Tabs defaultTab={1}>
                  <div className="match_details_tabs scrollbar-height-0">
                    {matchDetailsTabs.map((a, i) => (
                      <Tab
                        className="match_details_tab"
                        activeClassName="match_details_tabs_active bold"
                        label={a.label}
                        tabIndex={a.tabIndex}
                      />
                    ))}
                  </div>
                  {matchDetailsTabs.map((a, i) => (
                    <TabPan tabIndex={a.tabIndex}>{a.screen}</TabPan>
                  ))}
                </Tabs>
              </div>
              <div className="match_details_content_right">
                <div className="math_predictions">Match Predictions</div>
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
                        subTitle="1.8K views  •  10 min ago"
                      />
                      <MatchMovementCard
                        videoThumbnail={video_image_2}
                        title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                        subTitle="1.8K views  •  10 min ago"
                      />
                      <MatchMovementCard
                        videoThumbnail={video_image_3}
                        title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                        subTitle="1.8K views  •  10 min ago"
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

export default MatchDetails;

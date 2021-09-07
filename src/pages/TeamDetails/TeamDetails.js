import React from "react";
import "./TeamDetails.css";
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
import ScoreCard4 from "components/Cards/ScoreCard4/ScoreCard4";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";

function TeamDetails() {
  const statistics = [
    {
      title: "Total Matches",
      disc: "30",
    },
    {
      title: "Won",
      disc: "12",
    },
    {
      title: "Loss",
      disc: "05",
    },
    {
      title: "Upcoming Matches",
      disc: "2",
    },
  ];
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
            <LeagueCard />
          </div>

          <div className="match_details_content ">
            <div className="match_details_content_left py-30">
              <Tabs defaultTab={1}>
                <div className="match_details_tabs">
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Statistics"
                    tabIndex={1}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="Players"
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
                    label="Leaderboard"
                    tabIndex={4}
                  />
                  <Tab
                    className="match_details_tab"
                    activeClassName="match_details_tabs_active"
                    label="MVP"
                    tabIndex={5}
                  />
                </div>

                <TabPan tabIndex={1}>
                  <div className="container-wrapper-30">
                    <div className="mb-30">
                      <ScoreCard4 data={statistics} />
                    </div>
                    <div className="batting_stats_tabs mb-30">
                      <TitleBar5 title="Battings Statistics" fontSize="20px" />
                      <div className="row">
                        <Tabs defaultTab={1}>
                          <Tab
                            className="match_details_tab"
                            activeClassName="match_details_tabs_active"
                            label="Overall"
                            tabIndex={1}
                          />
                          <Tab
                            className="match_details_tab"
                            activeClassName="match_details_tabs_active"
                            label="Match Type"
                            tabIndex={2}
                          />
                        </Tabs>
                      </div>
                    </div>
                  </div>
                  <div className="mb-30">
                    <table className="batting_stats_table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>M</th>
                          <th>INN</th>
                          <th>NO</th>
                          <th>Runs</th>
                          <th>HS</th>
                          <th>AVG</th>
                          <th>BF</th>
                          <th>SR</th>
                          <th>100</th>
                          <th>200</th>
                          <th>50s</th>
                          <th>4s</th>
                          <th>6s</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Summary</td>
                          <td>30</td>
                          <td>30</td>
                          <td>2</td>
                          <td>12443</td>
                          <td>125</td>
                          <td>225</td>
                          <td>-</td>
                          <td>220.78</td>
                          <td>2</td>
                          <td>0</td>
                          <td>57</td>
                          <td>453</td>
                          <td>124</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="container-wrapper-30">
                    <div className="batting_stats_tabs mb-30">
                      <TitleBar5 title="Bowling Statistics" fontSize="20px" />
                      <div className="row">
                        <Tabs defaultTab={2}>
                          <Tab
                            className="match_details_tab"
                            activeClassName="match_details_tabs_active"
                            label="Overall"
                            tabIndex={1}
                          />
                          <Tab
                            className="match_details_tab"
                            activeClassName="match_details_tabs_active"
                            label="Match Type"
                            tabIndex={2}
                          />
                        </Tabs>
                      </div>
                    </div>
                  </div>

                  <div className="mb-30">
                    <table className="batting_stats_table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>M</th>
                          <th>INN</th>
                          <th>B</th>
                          <th>Runs</th>
                          <th>WKTs</th>
                          <th>BBI</th>
                          <th>BBM</th>
                          <th>ECON</th>
                          <th>AVG</th>
                          <th>SR</th>
                          <th>2W</th>
                          <th>5W</th>
                          <th>10W</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>T20</td>
                          <td>28</td>
                          <td>28</td>
                          <td>-</td>
                          <td>-</td>
                          <td>329</td>
                          <td>0</td>
                          <td>0</td>
                          <td>30</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>88</td>
                          <td>28</td>
                          <td>28</td>
                          <td>-</td>
                          <td>-</td>
                          <td>329</td>
                          <td>0</td>
                          <td>0</td>
                          <td>30</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;

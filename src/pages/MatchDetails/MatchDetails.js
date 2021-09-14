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
import MatchMovementCard from "components/Cards/MatchMovementCards/MatchMovementCard";
import video_image_1 from "assets/images/video-image-1.png";
import video_image_2 from "assets/images/video-image-2.png";
import video_image_3 from "assets/images/video-image-3.png";
import Footer from "layouts/Footer/Footer";
import PlayerRow from "components/Tables/PlayerRow";
import TitleBar3 from "components/TitleBars/TitleBar3/TitleBar3";
import TeamDetailsTableHead from "components/Tables/TeamDetailsTableHead";
import ScoreCard3 from "layouts/ScoreCard3/ScoreCard3";
import TitleBar4 from "components/TitleBars/TitleBar4/TitleBar4";
import SquadPlayerCard from "components/Cards/SquadPlayerCard/SquadPlayerCard";
import TopPerformerCard from "components/Cards/TopPerformerCard/TopPerformerCard";
import PlayerPerformenceCard from "components/Cards/PlayerPerformenceCard/PlayerPerformenceCard";
import InformationCard from "components/Cards/InformationCard/InformationCard";
import { useSelector } from "react-redux";
import "swiper/swiper-bundle.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  BarChart,
  Bar,
} from "recharts";

function MatchDetails() {
  const {
    teamBatters,
    teamBowlers,
    playerStatus,
    squad,
    topPerformencePlayers,
    data,
    data2,
  } = useSelector((state) => state.playerDetails);

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
                    <div className="score_card_2_wrapper">
                      <ScoreCard2 />
                    </div>
                    <div className="teams_current_details">
                      <div className="teams_current_details_wrapper scrollbar-height-0">
                        <table className="teams_current_details_table">
                          <thead>
                            <TeamDetailsTableHead
                              title="Crease Hunters (Battings)"
                              subtitles={["R", "B", "4s", "6s", "S/R"]}
                            />
                          </thead>
                          <tbody>
                            {teamBatters.map((player, index) => (
                              <PlayerRow data={player} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="teams_extras_details">
                        <TitleBar3
                          mainTitle="Extras"
                          title="12"
                          subtitle="(1nb, 3wd, 8lb)"
                        />
                        <TitleBar3
                          mainTitle="Total"
                          title="80"
                          subtitle="(7 Wickets, 14 Overs)"
                          border={true}
                        />
                        <TitleBar3
                          mainTitle="Extras"
                          title="Salman Shaikh, Mahamad Danish"
                        />
                      </div>
                      <div className="teams_current_details_wrapper scrollbar-height-0">
                        <table className="teams_current_details_table">
                          <thead>
                            <TeamDetailsTableHead
                              title="Mash Eagles (Bowlings)"
                              subtitles={["O", "M", "R", "W", "ECON"]}
                            />
                          </thead>
                          <tbody>
                            {teamBowlers.map((player, index) => (
                              <PlayerRow data={player} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPan>
                  <TabPan tabIndex={2}>
                    <div className="container-wrapper-30">
                      <Tabs defaultTab="1">
                        <div className="live_commentry">
                          <p className="live_commentry_title">
                            Live Commentary
                          </p>
                          <div className="live_commentry_right">
                            <Tab
                              className="match_details_tab"
                              activeClassName="match_details_tabs_active"
                              label="Crease Hunters"
                              tabIndex="1"
                            />
                            <Tab
                              className="match_details_tab"
                              activeClassName="match_details_tabs_active"
                              label="Mash Eagles"
                              tabIndex="2"
                            />
                          </div>
                        </div>
                        <TabPan tabIndex="1">
                          <div className="match_details_scorecrd_table">
                            <ScoreCard3 />
                          </div>
                          <div className="match_details_players_table">
                            {playerStatus.slice(0, 6).map((data, index) => (
                              <TitleBar4 data={data} />
                            ))}
                          </div>
                          <div className="match_details_scorecrd_table">
                            <ScoreCard3 />
                          </div>
                          <div className="match_details_players_table">
                            {playerStatus.slice(6, 12).map((data, index) => (
                              <TitleBar4 data={data} />
                            ))}
                          </div>
                        </TabPan>
                      </Tabs>
                    </div>
                  </TabPan>
                  <TabPan tabIndex={3}>
                    <Tabs defaultTab="1">
                      <div className="container-wrapper-30">
                        <div className="live_commentry">
                          <p className="live_commentry_title">Team Squad</p>
                          <div className="live_commentry_right">
                            <Tab
                              className="match_details_tab"
                              activeClassName="match_details_tabs_active"
                              label="Crease Hunters"
                              tabIndex="1"
                            />
                            <Tab
                              className="match_details_tab"
                              activeClassName="match_details_tabs_active"
                              label="Mash Eagles"
                              tabIndex="2"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="squad_playing_X1">
                        <div className="container-wrapper-30">
                          <p>Playing XI</p>
                        </div>
                      </div>

                      <div className="container-wrapper-30">
                        <div className="squad_playing_X1_cards">
                          {squad.map((player, index) => (
                            <SquadPlayerCard data={player} />
                          ))}
                        </div>
                      </div>

                      <div className="squad_playing_X1">
                        <div className="container-wrapper-30">
                          <p>Extra Player</p>
                        </div>
                      </div>

                      <div className="container-wrapper-30">
                        <div className="squad_playing_X1_cards">
                          {squad.slice(4, 8).map((player, index) => (
                            <SquadPlayerCard data={player} />
                          ))}
                        </div>
                      </div>
                    </Tabs>
                  </TabPan>
                  <TabPan tabIndex={6}>
                    <div className="container-wrapper-30">
                      <p className="top_perfomers_title">Top Perfomers</p>
                      <TopPerformerCard />

                      <div className="top_players_team">
                        <div className="top_players_team_left">
                          <p className="top_players_team_title">
                            Crease Hunters
                          </p>
                          <div className="top_players_team_cards">
                            {topPerformencePlayers
                              .slice(0, 3)
                              .map((data, index) => (
                                <PlayerPerformenceCard
                                  data={data}
                                  index={index + 1}
                                />
                              ))}
                          </div>
                        </div>
                        <div className="top_players_team_right">
                          <p className="top_players_team_title">Mash Eagles</p>
                          <div className="top_players_team_cards">
                            {topPerformencePlayers
                              .slice(3, 6)
                              .map((data, index) => (
                                <PlayerPerformenceCard
                                  data={data}
                                  index={index + 1}
                                />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPan>
                  <TabPan tabIndex={7}>
                    <div className="container-wrapper-30">
                      <p className="information_title">Information</p>
                      <div className="information_cards">
                        <InformationCard
                          title="Tournament:"
                          subtitle="SHAMKOT SUPER LEAGUE SEASON 2 S.S.L"
                        />
                        <InformationCard
                          title="Match #:"
                          subtitle="S.S.L Season 2 - League Matches (MATCH # 28)"
                        />
                        <InformationCard
                          title="Venue:"
                          subtitle="School Ground"
                        />
                        <InformationCard
                          title="Toss:"
                          subtitle="AK won the toss and bat first."
                        />
                        <InformationCard
                          title="Match Officials:"
                          subtitle="Ashish Ranjan (Commnetator) Vivek Goswami (Commentator) Ginni Batra (Scorer) Prem Malik (Umpire) Ravi Ranjan (Umpire)"
                        />
                        <InformationCard
                          title="Match Status:"
                          subtitle="Completed"
                        />
                      </div>
                    </div>
                  </TabPan>
                  <TabPan tabIndex={5}>
                    <div className="container-wrapper-30">
                      <p className="stats_title">Stats</p>
                    </div>

                    <div className="stats_title_bar_wrapper">
                      <div className="container-wrapper-30">
                        <div className="stats_title_bar">
                          <p className="stats_title_bar_title">
                            Worm (Over vs Runs)
                          </p>
                          <div className="stats_title_bar_title_right">
                            <p className="stats_title_bar_indicator indicator_1">
                              Crease Hunters
                            </p>
                            <p className="stats_title_bar_indicator indicator_2">
                              Mash Eagles
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container-wrapper-30">
                      <div className="stats_chart">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="0 0" />
                            <XAxis
                              tickLine={false}
                              axisLine={false}
                              dataKey="name"
                              height={60}
                            >
                              <Label
                                value="Overs"
                                offset={0}
                                position="insideBottom"
                              />
                            </XAxis>
                            <YAxis
                              label={{
                                value: "Runs",
                                angle: -90,
                                position: "left",
                              }}
                              width={50}
                              tickLine={false}
                              axisLine={false}
                            />
                            <Tooltip />
                            <Line
                              type="linear"
                              dataKey="pv"
                              dot={false}
                              stroke="#33a2d2"
                              activeDot={false}
                              strokeWidth={3}
                            />
                            <Line
                              type="linear"
                              dataKey="uv"
                              dot={false}
                              stroke="#0fb918"
                              activeDot={false}
                              strokeWidth={3}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="stats_title_bar_wrapper">
                      <div className="container-wrapper-30">
                        <div className="stats_title_bar">
                          <p className="stats_title_bar_title">
                            Manhattan (Overs vs Runs)
                          </p>
                          <div className="stats_title_bar_title_right">
                            <p className="stats_title_bar_indicator indicator_1">
                              Crease Hunters
                            </p>
                            <p className="stats_title_bar_indicator indicator_2">
                              Mash Eagles
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container-wrapper-30">
                      <div className="stats_chart_2">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            width={500}
                            height={300}
                            data={data2}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="0 0" />
                            <XAxis
                              tickLine={false}
                              axisLine={false}
                              dataKey="name"
                              height={90}
                              angle={-50}
                              tickMargin={20}
                            >
                              <Label
                                value="Overs"
                                offset={0}
                                position="insideBottom"
                              />
                            </XAxis>
                            <YAxis
                              label={{
                                value: "Runs",
                                angle: -90,
                                position: "left",
                              }}
                              width={50}
                              tickLine={false}
                              axisLine={false}
                            />
                            <Tooltip />
                            <Bar
                              dataKey="uv"
                              barSize={2}
                              stackId="a"
                              fill="#0fb918"
                            />
                            <Bar
                              dataKey="pv"
                              barSize={2}
                              stackId="a"
                              fill="#33a2d2"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="stats_title_bar_wrapper">
                      <div className="container-wrapper-30">
                        <div className="stats_title_bar">
                          <p className="stats_title_bar_title">
                            Partnership (Khawar Tiger)
                          </p>
                          <div className="stats_title_bar_title_right">
                            <p className="stats_title_bar_title_right_filter">
                              filter by :
                            </p>
                            <div className="stats_title_bar_title_right_dropdown">
                              Khawar Tiger &#711;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container-wrapper-30">
                      <div className="stats_chart_2">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="0 0" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
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

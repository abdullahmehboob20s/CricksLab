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
import table_player from "assets/images/table-player.png";
import PlayerRow from "components/Tables/PlayerRow";
import TitleBar3 from "components/TitleBars/TitleBar3/TitleBar3";
import TeamDetailsTableHead from "components/Tables/TeamDetailsTableHead";

function MatchDetails() {
  let playerDetails = [
    {
      name: "Hussan Shaikh",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Abrahm Khan",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Jems Lee",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Smith Karter",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Ahmad Shaikh",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Majun Khan",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: true,
    },
    {
      name: "Sabir Khan",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Hassan Butt",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: true,
    },
  ];

  let playerBowlers = [
    {
      name: "Hussan Shaikh",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },

    {
      name: "Smith Karter",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Ahmad Shaikh",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Majun Khan",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
  ];

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
                  <div className="score_card_2_wrapper">
                    <ScoreCard2 />
                  </div>
                  <div className="teams_current_details">
                    <table className="teams_current_details_table">
                      <thead>
                        <TeamDetailsTableHead
                          title="Crease Hunters (Battings)"
                          subtitles={["R", "B", "4s", "6s", "S/R"]}
                        />
                      </thead>
                      <tbody>
                        {playerDetails.map((player, index) => (
                          <PlayerRow data={player} />
                        ))}
                      </tbody>
                    </table>
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

                    <table className="teams_current_details_table">
                      <thead>
                        <TeamDetailsTableHead
                          title="Mash Eagles (Bowlings)"
                          subtitles={["O", "M", "R", "W", "ECON"]}
                        />
                      </thead>
                      <tbody>
                        {playerBowlers.map((player, index) => (
                          <PlayerRow data={player} />
                        ))}
                      </tbody>
                    </table>
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

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MatchDetails;

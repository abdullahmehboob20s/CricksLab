import React from "react";
import "./MatchListing.css";
import Navbar from "layouts/Navbar/Navbar";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import Footer from "layouts/Footer/Footer";
import TeamsCard from "components/Cards/TeamsCard/TeamsCard";
import { useSelector } from "react-redux";
import FollowButton from "components/Buttons/FollowButton/FollowButton";
import UpcomingMatchesCard from "components/Cards/UpcomingMatchesCard/UpcomingMatchesCard";

function MatchListing() {
  const { teamsData } = useSelector((state) => state.teamsData);
  const [count, setCount] = React.useState(8);
  const [showBtn, setshowBtn] = React.useState(true);

  const loadMore = (props) => {
    if (count >= teamsData.length) {
      setshowBtn(false);
      return;
    }
    setCount(count + 8);
  };

  return (
    <>
      <Navbar />
      <div className="competitions bg-liner-gradient">
        <div className="container-wrapper">
          <TitleBar2
            title="Home"
            subtitle2="Match Listing"
            mainTitle="Match Listing"
            showRightSide={false}
          >
            <div className="row gap-50 align-center">
              <FollowButton
                background="transparent"
                border="1px solid #33A2D2"
                width="105px"
                height="50px"
                fontSize="14px"
                title="Filter"
                color="#33A2D2"
                onPress={() => console.log("Nothing")}
              />
              <FollowButton
                background="#33A2D2"
                border="1px solid #33A2D2"
                width="117px"
                height="50px"
                fontSize="14px"
                title="Search"
                color="white"
                onPress={() => console.log("Nothing")}
              />
            </div>
          </TitleBar2>

          <div className="team_cards_wrapper">
            {new Array(20)
              .slice(0, count)
              .fill("")
              .map((item, index) => (
                <UpcomingMatchesCard
                  teamOneruns="126/6"
                  teamTworuns="87/6"
                  teamOneovers="10 overs"
                  teamTwoovers="10 overs"
                  teamOneName="DI"
                  teamTwoName="SZ"
                  flex={1}
                  flexBasis="300px"
                  matchDetails={{
                    matchName: "UCL - Group B (MATCH # 1)",
                    matchDate: "Wed, 26 May 2021 04:00 PM",
                    status: "Result",
                    result: "DUKI INSAFIANS won by 39 runs",
                  }}
                />
              ))}
          </div>

          {showBtn ? (
            <div className="row justify-center mb-100">
              <FollowButton
                title="load More"
                width="142px"
                height="50px"
                background="#e5f3f8"
                color="#33a2d2"
                border="none"
                fontSize="14px"
                onPress={loadMore}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MatchListing;

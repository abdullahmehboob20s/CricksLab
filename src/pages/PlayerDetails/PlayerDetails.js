import React from "react";
import "pages/Teams/Teams.css";
import Navbar from "layouts/Navbar/Navbar";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import Footer from "layouts/Footer/Footer";
import TeamsCard from "components/Cards/TeamsCard/TeamsCard";
import { useSelector } from "react-redux";
import FollowButton from "components/Buttons/FollowButton/FollowButton";

function PlayerDetails() {
  const { data } = useSelector((state) => state.PlayersDetails);
  const [count, setCount] = React.useState(8);
  const [showBtn, setshowBtn] = React.useState(true);

  const loadMore = (props) => {
    if (count >= data.length) {
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
            subtitle2="Players"
            mainTitle="Players"
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
            {data.slice(0, count).map((teamdata, index) => (
              <TeamsCard teamdata={teamdata} />
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

export default PlayerDetails;

import React from "react";
import "./Competitions.css";
import Navbar from "layouts/Navbar/Navbar";
import TitleBar2 from "components/TitleBars/TitleBar2/TitleBar2";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import CompetitionsCard from "components/Cards/CompetitionsCard/CompetitionsCard";
import { useSelector } from "react-redux";
import Footer from "layouts/Footer/Footer";
import FollowButton from "components/Buttons/FollowButton/FollowButton";

function Competitions() {
  const { data } = useSelector((state) => state.leagues);
  const [count, setCount] = React.useState(12);
  const [showBtn, setshowBtn] = React.useState(true);

  const loadMore = (props) => {
    if (count >= data.length) {
      setshowBtn(false);
      return;
    }
    setCount(count + 4);
  };

  return (
    <>
      <Navbar />
      <div className="competitions bg-liner-gradient">
        <div className="container-wrapper">
          <TitleBar2
            title="Home"
            subtitle2="Competitions"
            mainTitle="Competitions"
            showRightSide={false}
          />
          <Tabs defaultTab={1}>
            <div className="competitions_cards_tabs">
              <Tab
                className="competitions_tab"
                activeClassName="competitions_tab_active"
                label="Ongoing"
                tabIndex={1}
              />
              <Tab
                className="competitions_tab"
                activeClassName="competitions_tab_active"
                label="Upcoming"
                tabIndex={2}
              />
              <Tab
                className="competitions_tab"
                activeClassName="competitions_tab_active"
                label="Recent"
                tabIndex={3}
              />
            </div>

            <TabPan tabIndex={1}>
              <div className="competitions_cards">
                {data.slice(0, count).map((league, index) => (
                  <CompetitionsCard key={index} data={league} />
                ))}
              </div>
            </TabPan>
            <TabPan tabIndex={2}>
              <div className="competitions_cards">
                {data.slice(0, count).map((league, index) => (
                  <CompetitionsCard key={index} data={league} />
                ))}
              </div>
            </TabPan>
            <TabPan tabIndex={3}>
              <div className="competitions_cards">
                {data.slice(0, count).map((league, index) => (
                  <CompetitionsCard key={index} data={league} />
                ))}
              </div>
            </TabPan>
          </Tabs>
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

export default Competitions;

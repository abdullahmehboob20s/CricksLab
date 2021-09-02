import React from "react";
import Navbar from "layouts/Navbar/Navbar";
import ScoreCard from "layouts/ScoreCard/ScoreCard";
import RelatedMatch from "layouts/RelatedMatch/RelatedMatch";
import Standings from "layouts/Standings/Standings";
import Competitions from "layouts/Competitions/Competitions";
import LatestNews from "layouts/LatestNews/LatestNews";
import GetAmazed from "layouts/GetAmazed/GetAmazed";

import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <ScoreCard />
        <RelatedMatch />
        <Standings />
        <Competitions />
        <LatestNews />
        <GetAmazed />
      </div>
    </>
  );
}

export default Home;

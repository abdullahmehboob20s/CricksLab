import React from "react";
import Navbar from "layouts/Navbar/Navbar";
import ScoreCard from "layouts/ScoreCard/ScoreCard";
import RelatedMatch from "layouts/RelatedMatch/RelatedMatch";
import Standings from "layouts/Standings/Standings";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <ScoreCard />
        <RelatedMatch />
        <Standings />
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Navbar from "layouts/Navbar/Navbar";
import "./Home.css";
import ScoreCard from "layouts/ScoreCard/ScoreCard";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="container-wrapper">
          <ScoreCard />
        </div>
      </div>
    </>
  );
}

export default Home;

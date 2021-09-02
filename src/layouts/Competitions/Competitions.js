import React from "react";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import CompetitionsCard from "components/Cards/CompetitionsCard/CompetitionsCard";
import "./Competitions.css";
import competition_card_img_1 from "assets/images/competition-card-img-1.png";
import competition_card_img_2 from "assets/images/competition-card-img-2.png";
import competition_card_img_3 from "assets/images/competition-card-img-3.png";
import competition_card_img_4 from "assets/images/competition-card-img-4.png";

function Competitions() {
  let leagues = [
    {
      name: "Kashmir Premier League 2021",
      image: competition_card_img_1,
      status: "Ongoing",
    },
    {
      name: "United Cricket League",
      image: competition_card_img_2,
      status: "Ongoing",
    },
    {
      name: "Delhi Saudagran Premier League 2021",
      image: competition_card_img_3,
      status: "Completed",
    },
    {
      name: "LYE T10 Cricket League",
      image: competition_card_img_4,
      status: "Ongoing",
    },
  ];

  return (
    <div className="competitions">
      <div className="container-wrapper">
        <TitleBar
          title="Competitions"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="competitions_cards">
          {leagues.map((league, index) => (
            <CompetitionsCard key={index} data={league} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Competitions;

import React from "react";
import "./Standings.css";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import BowlersCard from "components/Cards/BowlersCard/BowlersCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import bowlers_card_img_1 from "assets/images/bowlers-card-img-1.png";
import bowlers_card_img_2 from "assets/images/bowlers-card-img-2.png";
import bowlers_card_img_3 from "assets/images/bowlers-card-img-3.png";
import bowlers_card_img_4 from "assets/images/bowlers-card-img-4.png";

function Standings() {
  let bowlers = [
    {
      name: "Kwadwo Asamoah",
      color: "#BEE2EE",
      image: bowlers_card_img_1,
      playerHistory: {
        matches: 7,
        won: 6,
        lost: 1,
        noResult: 0,
        points: 12,
      },
    },
    {
      name: "Javi Martinez",
      color: "#CBE9C4",
      image: bowlers_card_img_2,
      playerHistory: {
        matches: 6,
        won: 3,
        lost: 3,
        noResult: 0,
        points: 6,
      },
    },
    {
      name: "Shinji Kagawa",
      image: bowlers_card_img_3,
      color: "#F8DFE2",
      playerHistory: {
        matches: 5,
        won: 2,
        lost: 3,
        noResult: 0,
        points: 4,
      },
    },
    {
      name: "John Terry",
      image: bowlers_card_img_4,
      color: "#F9F9F9",
      playerHistory: {
        matches: 5,
        won: 2,
        lost: 3,
        noResult: 0,
        points: 4,
      },
    },
  ];

  return (
    <div className="standings">
      <div className="container-wrapper">
        <TitleBar
          title="Standings"
          subtitle="Latest standings of KC T20 Premier League 20/21 1st Edition"
        />
        <p className="standing_cards_title">Top Bowler</p>
      </div>

      <div className="standing_cards">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="related_match_swiper"
        >
          {bowlers.map((bowler, index) => (
            <SwiperSlide key={index}>
              <BowlersCard playerNumber={index + 1} bowlerContent={bowler} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Standings;

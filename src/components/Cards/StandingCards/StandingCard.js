import React from "react";
import BowlersCard from "components/Cards/BowlersCard/BowlersCard";
import { Swiper, SwiperSlide } from "swiper/react";

function StandingCard(props) {
  const { bowlers, title } = props;
  return (
    <>
      <div className="container-wrapper">
        <p className="standing_cards_title">{title}</p>
      </div>
      <div className="standing_cards">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="related_match_swiper"
          breakpoints={{
            2000: {
              slidesPerView: 5,
            },
            1800: {
              slidesPerView: 4.5,
            },
            1600: {
              slidesPerView: 4,
            },
            1350: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 3,
            },
            1080: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            720: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            520: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            200: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {bowlers.map((bowler, index) => (
            <SwiperSlide key={index}>
              <BowlersCard playerNumber={index + 1} bowlerContent={bowler} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default StandingCard;

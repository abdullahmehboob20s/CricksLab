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

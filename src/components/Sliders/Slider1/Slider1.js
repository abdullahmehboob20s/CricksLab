import React from "react";
import "./Slider1.css";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import TeamsCard from "components/Cards/TeamsCard/TeamsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Slider1(props) {
  return (
    <div>
      <div className="slider1_titles mb-30">
        <p className="slider1_title">{props.headerTitle}</p>
        <div className="slider1_titles_right">
          <button className="slider1_titles_right_btn btn_1">
            <BsArrowLeft />
          </button>
          <button className="slider1_titles_right_btn btn_2">
            <BsArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
      >
        {props.data.map((item, index) => (
          <SwiperSlide>
            <TeamsCard
              showCountry={false}
              showBtn={false}
              showPlayerDetails={false}
              height={"auto"}
              playerRunsCard={true}
              teamdata={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider1;

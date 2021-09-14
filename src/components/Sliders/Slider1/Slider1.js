import React from "react";
import "./Slider1.css";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import TeamsCard from "components/Cards/TeamsCard/TeamsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

function Slider1(props) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div>
      <div className="slider1_titles mb-30">
        <p className="slider1_title">{props.headerTitle}</p>
        <div className="slider1_titles_right">
          <button
            className="slider1_titles_right_btn btn_1"
            ref={navigationPrevRef}
          >
            <BsArrowLeft />
          </button>
          <button
            className="slider1_titles_right_btn btn_2"
            ref={navigationNextRef}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          1100: {
            slidesPerView: 5,
          },
          800: {
            slidesPerView: 4,
          },
          550: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 2,
          },
          100: {
            slidesPerView: 1.5,
          },
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

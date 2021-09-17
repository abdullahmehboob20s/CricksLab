import React from "react";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import "./RelatedMatch.css";
import RelatedMatchCard from "components/Cards/RelatedMatchCard/RelatedMatchCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useSelector } from "react-redux";

function RelatedMatche() {
  const { data } = useSelector((state) => state.relatedMatchesData);
  return (
    <div>
      <div className="container-wrapper">
        <TitleBar title="Related Match Videos" viewAll={"team-details"} />
      </div>
      <div className="related_match_cards">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
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
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 2,
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
          className="related_match_swiper"
        >
          {data.map((item, index) => (
            <SwiperSlide>
              <RelatedMatchCard videoThumbnail={item.videoThumbNail} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default RelatedMatche;

import React from "react";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import "./RelatedMatch.css";
import RelatedMatchCard from "components/Cards/RelatedMatchCard/RelatedMatchCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import videoImg_1 from "assets/images/video-image-1.png";
import videoImg_2 from "assets/images/video-image-2.png";
import videoImg_3 from "assets/images/video-image-3.png";
import videoImg_4 from "assets/images/video-image-4.png";

function RelatedMatche() {
  return (
    <div>
      <div className="container-wrapper">
        <TitleBar title="Related Match Videos" viewAll={"jasgdh"} />
      </div>
      <div className="related_match_cards">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
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
          className="related_match_swiper"
        >
          <SwiperSlide>
            <RelatedMatchCard videoThumbnail={videoImg_1} />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedMatchCard videoThumbnail={videoImg_2} />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedMatchCard videoThumbnail={videoImg_3} />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedMatchCard videoThumbnail={videoImg_4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default RelatedMatche;

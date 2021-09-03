import React from "react";
import Navbar from "layouts/Navbar/Navbar";
import ScoreCard from "layouts/ScoreCard/ScoreCard";
import RelatedMatch from "layouts/RelatedMatch/RelatedMatch";
import Standings from "layouts/Standings/Standings";
import Competitions from "layouts/Competitions/Competitions";
import LatestNews from "layouts/LatestNews/LatestNews";
import GetAmazed from "layouts/GetAmazed/GetAmazed";
import Footer from "layouts/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Swiper navigation={true} allowTouchMove={false} className="mySwiper">
          <SwiperSlide>
            <div className="container-wrapper">
              <ScoreCard
                showFooterBtns={true}
                showHeader={true}
                showTitle={true}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-wrapper">
              <ScoreCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-wrapper">
              <ScoreCard />
            </div>
          </SwiperSlide>
        </Swiper>
        <RelatedMatch />
        <Standings />
        <Competitions />
        <LatestNews />
        <GetAmazed />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;

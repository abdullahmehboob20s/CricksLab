import React from "react";
import "./TeamSquad.css";
import TitleBar5 from "components/TitleBars/TitleBar5/TitleBar5";
import Accordion from "components/Accordions/Accordion";
import accoridon_img from "assets/images/accordion-img.png";
import accoridon_img_2 from "assets/images/accordion-img-2.png";
import accoridon_img_3 from "assets/images/accordion-img-3.png";
import accoridon_img_4 from "assets/images/accordion-img-4.png";
import accoridon_img_5 from "assets/images/accordion-img-5.png";

function TeamSquad() {
  return (
    <div>
      <div className="container-wrapper-30">
        <div className="mb-30">
          <TitleBar5
            title="Overview"
            fontSize="1.25rem"
            showBg={false}
            flex={false}
            containerWrapper30={false}
          />
        </div>
      </div>
      <Accordion
        titleImg={accoridon_img}
        title="Abdul Qadir International Cricket Academy"
      />
      <Accordion titleImg={accoridon_img_2} title="Appolo Cricket Academy" />
      <Accordion titleImg={accoridon_img_3} title="Iqbal Zahoor Academy" />
      <Accordion
        titleImg={accoridon_img_4}
        title="Lahore International Cricket Academy"
      />
      <Accordion titleImg={accoridon_img_5} title="Lahoreian Cricket Academy" />
    </div>
  );
}

export default TeamSquad;

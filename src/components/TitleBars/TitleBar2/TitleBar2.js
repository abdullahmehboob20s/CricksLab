import React from "react";
import "./TitleBar2.css";
import eye from "assets/images/eye.png";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import ScoreCardHeaderSocialIcon from "components/ScoreCard/ScoreCardHeader/ScoreCardHeaderSocialIcon";
import { Link } from "react-router-dom";
import notification from "assets/images/notification.svg";

function TitleBar2() {
  const social_icons = [
    {
      icon: <FaFacebook />,
      link: "",
    },
    {
      icon: <AiOutlineTwitter />,
      link: "",
    },
    {
      icon: <AiOutlineWhatsApp />,
      link: "",
    },
  ];

  return (
    <div className="title_bar_2">
      <div className="title_bar_2_left">
        <p className="title_bar_2_title">
          <span className="bold">Match Center</span> •{" "}
          <span className="bold">Matches</span> • Crease Hunters vs Mash Eagles
        </p>
        <p className="title_bar_2_subtitle">
          S.S.L. Season 2 - League Matches (MATCH #25)
        </p>
      </div>

      <div className="title_bar_2_right">
        <div className="watching">
          <img src={eye} alt="" />
          <p>352 People is Live</p>
        </div>
        <div className="divider">
          <div className="score_card_header_right">
            <p className="score_card_header_right_title dark">Share with:</p>
            <div className="score_card_header_right_social_icons">
              {social_icons.map((item, index) => (
                <ScoreCardHeaderSocialIcon
                  dark={true}
                  key={index}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="divider">
          <Link className="subscribe_link">
            <img src={notification} alt="" /> Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TitleBar2;

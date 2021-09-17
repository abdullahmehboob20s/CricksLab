import React from "react";
import "./ScoreCardHeader.css";
import ScoreCardHeaderSocialIcon from "./ScoreCardHeaderSocialIcon";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import Button from "components/Buttons/FollowButton/FollowButton";
import { BiShareAlt } from "react-icons/bi";

function ScoreCardHeader() {
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
    <div className="score_card_header">
      <div className="score_card_header_left">
        <p className="score_card_header_left_date">
          Mon, 09th Aug 2021 | 10:00 AM
        </p>
        <div className="score_card_left_live">LIVE</div>
      </div>
      <div className="score_card_header_right_2">
        <div className="score_card_header_share_btn">
          <Button
            title={<BiShareAlt />}
            style={{
              width: "50px",
              height: "50px",
              background: "rgba(51, 162, 210, 0.1)",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              color: "#33A2D2",
              fontSize: "24px",
            }}
          />
        </div>
        <p className="score_card_header_right_title">Share with:</p>
        <div className="score_card_header_right_social_icons">
          {social_icons.map((item, index) => (
            <ScoreCardHeaderSocialIcon key={index} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScoreCardHeader;

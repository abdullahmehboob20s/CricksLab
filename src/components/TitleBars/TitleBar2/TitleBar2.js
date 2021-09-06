import React from "react";
import "./TitleBar2.css";
import eye from "assets/images/eye.png";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import ScoreCardHeaderSocialIcon from "components/ScoreCard/ScoreCardHeader/ScoreCardHeaderSocialIcon";
import { Link } from "react-router-dom";
import notification from "assets/images/notification.svg";

function TitleBar2(props) {
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
          {/* {props.uperTitle ? (
            <div>
              <span className="bold">{props.uperTitle}</span> •
              {` ${props.uperSubTitle}`}
            </div>
          ) : ( */}
          <>
            {props.title ? (
              <>
                <span className="bold">{props.title}</span>
                <span> •</span>
              </>
            ) : (
              ""
            )}
            {props.subtitle ? (
              <>
                <span className="bold"> {props.subtitle}</span>
                <span> •</span>
              </>
            ) : (
              ""
            )}
            {props.subtitle2 ? <span> {props.subtitle2}</span> : ""}
          </>
          {/* )} */}
        </p>
        <p className="title_bar_2_subtitle">{props.mainTitle}</p>
      </div>

      {props.showRightSide ? (
        <div className="title_bar_2_right">
          {props.showLiveWatching ? (
            <div className="watching">
              <img src={eye} alt="" />
              <p>352 People is Live</p>
            </div>
          ) : (
            ""
          )}

          {props.showSharewith ? (
            <div className={props.divider ? "divider" : ""}>
              <div className="score_card_header_right">
                <p className="score_card_header_right_title dark">
                  Share with:
                </p>
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
          ) : (
            ""
          )}

          {props.showSubscribeBtn ? (
            <div className="divider">
              <Link className="subscribe_link">
                <img src={notification} alt="" /> Subscribe
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}

export default TitleBar2;

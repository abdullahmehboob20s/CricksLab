import React from "react";
import "./LeagueCard.css";
import united_cricket from "assets/images/united-cricket.png";
import calendar from "assets/images/calendar.svg";
import calendar_blue from "assets/images/calendar-blue.svg";
import { AiOutlineEye } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import FollowButton from "components/Buttons/FollowButton/FollowButton";

function LeagueCard() {
  return (
    <div className="league_card">
      <img className="league_card_img_1" src={united_cricket} alt="" />
      <img className="league_card_img_2" src={united_cricket} alt="" />

      <div className="league_card_left">
        <img className="league_card_left_img" src={united_cricket} alt="" />
        <div>
          <div className="league_card_left_titles">
            <p className="league_card_left_title">United Cricket League</p>
            <div className="league_card_left_status">Ongoing</div>
          </div>
          <p className="league_card_left_detail">Tournament</p>
          <div className="league_card_left_dates">
            <div className="start_date">
              <div className="start_date_title">
                <img src={calendar} alt="" />
                Start Date
              </div>
              <p className="league_card_left_dates_day">09th Aug 2021 </p>
            </div>
            <div className="end_date">
              <div className="end_date_title">
                <img src={calendar_blue} alt="" />
                End Date
              </div>
              <p className="league_card_left_dates_day">09th Aug 2021 </p>
            </div>
          </div>
        </div>
      </div>
      <div className="league_card_right">
        <div className="league_card_right_divider">
          <p className="league_card_right_views">
            <AiOutlineEye />
            5.9K Views
          </p>
        </div>
        <div className="league_card_right_divider">
          <p className="league_card_right_views">
            <FiUsers />
            40 Followers
          </p>
        </div>
        <div className="league_card_right_divider">
          <FollowButton
            background="#33A2D2"
            border="none"
            width="119px"
            height="50px"
            title="Follow"
            fontSize="14px"
            color="white"
            onPress={() => console.log("Nothing")}
          />
        </div>
      </div>
    </div>
  );
}

export default LeagueCard;
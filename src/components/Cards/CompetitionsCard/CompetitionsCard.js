import React from "react";
import "./CompetitionsCard.css";
import people_icon from "assets/images/people.svg";
import eye_icon from "assets/images/eye.png";
import calendar from "assets/images/calendar.svg";
import calendar_blue from "assets/images/calendar-blue.svg";

function CompetitionsCard(props) {
  return (
    <div className="competitions_card">
      <div
        className={
          props.data.status === "Completed"
            ? "league_current_status completed"
            : "league_current_status"
        }
      >
        {props.data.status}
      </div>
      <img src={props.data.image} alt="" className="competitions_card_img" />
      <p className="competitions_card_title">{props.data.name}</p>

      <div className="league_status">
        <div className="league_status_left">
          <img src={people_icon} alt="" />
          <p>10 Teams</p>
        </div>
        <div className="league_status_right">
          <img src={eye_icon} alt="" />
          <p>2.5K views</p>
        </div>
      </div>

      <div className="league_timings">
        <div className="league_timings_left">
          <div className="league_timings_calender">
            <img src={calendar} alt="" />
            <p>Start Date</p>
          </div>
          <p className="league_timings_calender_time">09th Aug 2021 </p>
        </div>
        <div className="league_timings_right">
          <div className="league_timings_calender blue">
            <img src={calendar_blue} alt="" />
            <p>End Date</p>
          </div>
          <p className="league_timings_calender_time">15th Aug 2021 </p>
        </div>
      </div>
    </div>
  );
}

export default CompetitionsCard;

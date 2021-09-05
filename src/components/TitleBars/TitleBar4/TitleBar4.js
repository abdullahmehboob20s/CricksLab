import React from "react";
import "./TitleBar4.css";

function TitleBar4({ data }) {
  let { playerName, againstPlayer, ballStatus, overStatus } = data;

  const ballIndicator = (value) => {
    if (value === "6") return "titlebar_4_ball_status blue";
    else if (value === "W") return "titlebar_4_ball_status wicket";
    else if (value === "WD +1") return "titlebar_4_ball_status wd";
    else return "titlebar_4_ball_status";
  };

  return (
    <div className="titlebar_4">
      <div className="titlebar_4_left">
        <div className="titlebar_4_rate">{overStatus}</div>
        <div>
          <p className="titlebar_4_title">{playerName}</p>
          <p className="titlebar_4_subtitle">{againstPlayer}</p>
        </div>
      </div>
      <div className={ballIndicator(ballStatus)}>
        {ballStatus === "dot" ? <span>&#8226;</span> : ballStatus}
      </div>
    </div>
  );
}

export default TitleBar4;

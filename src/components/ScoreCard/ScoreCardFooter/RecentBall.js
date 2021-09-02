import React from "react";

function RecentBall(props) {
  const color = (value) => {
    if (value === "6") return "recent_ball blue";
    else if (value === "W") return "recent_ball wicket";
    else if (value === "WD +1") return "recent_ball wd";
    else return "recent_ball";
  };
  return (
    <div className={color(props.value)}>
      {props.value === "dot" ? <span>&#8226;</span> : props.value}
    </div>
  );
}

export default RecentBall;

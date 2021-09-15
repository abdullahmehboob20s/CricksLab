import React from "react";
import "./TitleBar.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";

function TitleBar(props) {
  const history = useHistory();
  return (
    <div className="title_bar">
      <div className="title_bar_left">
        <p className="title_bar_title">{props.title}</p>
        {props.subtitle ? (
          <p className="title_bar_subtitle">{props.subtitle}</p>
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => history.push(props.viewAll)}
        className="title_bar_btns"
      >
        <div className="title_bar_forward_arrow">
          <IoIosArrowRoundForward />
        </div>
        <div className="title_bar_btn">View All</div>
      </div>
    </div>
  );
}

export default TitleBar;

import React from "react";
import "./TitleBar.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function TitleBar(props) {
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
      <div className="title_bar_btns">
        <Link to={props.viewAll} className="title_bar_forward_arrow">
          <IoIosArrowRoundForward />
        </Link>
        <Link to={props.viewAll} className="title_bar_btn">
          View All
        </Link>
      </div>
    </div>
  );
}

export default TitleBar;

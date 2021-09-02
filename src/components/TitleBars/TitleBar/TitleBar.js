import React from "react";
import "./TitleBar.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function TitleBar() {
  return (
    <div className="title_bar">
      <p className="title_bar_title">Related Match Videos</p>
      <div className="title_bar_btns">
        <Link className="title_bar_forward_arrow">
          <IoIosArrowRoundForward />
        </Link>
        <Link className="title_bar_btn">View All</Link>
      </div>
    </div>
  );
}

export default TitleBar;

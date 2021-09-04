import React from "react";
import "./TitleBar3.css";

function TitleBar3(props) {
  const { mainTitle, title, subtitle, border } = props;
  return (
    <div className={border ? "title_bar_3 border" : "title_bar_3"}>
      <p className="title_bar_3_title">{mainTitle}</p>
      <div className="title_bar_3_subtitles">
        <p>{title}</p>
        {subtitle ? <p>{subtitle}</p> : ""}
      </div>
    </div>
  );
}

export default TitleBar3;

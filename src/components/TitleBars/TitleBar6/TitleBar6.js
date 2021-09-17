import React from "react";
import TitleBar5 from "../TitleBar5/TitleBar5";

function TitleBar6(props) {
  const { title, leading, titleFontSize = "0.875rem" } = props;
  return (
    <div className="stats_title_bar_wrapper">
      <div className="container-wrapper-30">
        <div className="stats_title_bar">
          <TitleBar5 title={title} fontSize={titleFontSize} />
          {leading}
        </div>
      </div>
    </div>
  );
}

export default TitleBar6;

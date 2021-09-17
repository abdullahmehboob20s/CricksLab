import React from "react";

function TitleBar6(props) {
  const { title, leading } = props;
  return (
    <div className="stats_title_bar_wrapper">
      <div className="container-wrapper-30">
        <div className="stats_title_bar">
          <p className="stats_title_bar_title">{title}</p>
          {leading}
        </div>
      </div>
    </div>
  );
}

export default TitleBar6;

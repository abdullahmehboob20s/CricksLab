import React from "react";

function TitleBar5(props) {
  const {
    title,
    leading,
    fontSize = "0.875rem",
    flex = false,
    showBg = false,
    containerWrapper30 = true,
    lineHeight,
    fontWeight = "bold",
    color,
    rowInResponsive = false,
  } = props;
  return (
    <div className={showBg ? "stats_title_bar_wrapper" : ""}>
      <div className={containerWrapper30 ? "container-wrapper-30" : ""}>
        <div
          className={
            flex
              ? `stats_title_bar ${rowInResponsive ? "rowInResponsive" : ""}`
              : ""
          }
        >
          <p
            style={{
              fontWeight: "bold",
              color: "Overview",
              fontSize: fontSize,
              lineHeight,
              fontWeight,
              color,
            }}
          >
            {title}
          </p>
          {leading}
        </div>
      </div>
    </div>
  );
}

export default TitleBar5;

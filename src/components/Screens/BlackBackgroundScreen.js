import React from "react";
import "./BlackBackgroundScreen.css";

function BlackBackgroundScreen({ show, hideOnClick }) {
  return (
    <div
      onClick={hideOnClick}
      className={show ? "black_screen show" : "black_screen"}
    ></div>
  );
}

export default BlackBackgroundScreen;

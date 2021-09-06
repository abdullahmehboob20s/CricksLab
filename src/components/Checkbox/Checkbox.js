import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className="checkbox">
      <input type="checkbox" name="" id={props.title} />
      <label htmlFor={props.title}>{props.title}</label>
    </div>
  );
}

export default Checkbox;

import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className={props.rounded ? "checkbox rounded" : "checkbox"}>
      <input
        type={props.radio ? "radio" : "checkbox"}
        name={props.radioTitle ? props.radioTitle : ""}
        id={props.title}
      />
      <label htmlFor={props.title}>{props.title}</label>
    </div>
  );
}

export default Checkbox;

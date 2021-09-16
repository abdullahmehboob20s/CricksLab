import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className={props.rounded ? "checkbox rounded" : "checkbox"}>
      <div>
        <input
          type={props.radio ? "radio" : "checkbox"}
          name={props.radioTitle ? props.radioTitle : ""}
          id={props.title}
        />
      </div>
      <label htmlFor={props.title}>{props.title}</label>
    </div>
  );
}

export default Checkbox;

import React from "react";

function TitleBar5(props) {
  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
          color: "Overview",
          fontSize: props.fontSize,
        }}
      >
        {props.title}
      </p>
    </div>
  );
}

export default TitleBar5;

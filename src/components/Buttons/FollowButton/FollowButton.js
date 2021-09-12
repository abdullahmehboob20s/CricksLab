import React from "react";
import "./FollowButton.css";

function FollowButton(props) {
  const {
    background,
    border,
    width,
    height,
    title,
    fontSize,
    color,
    onPress,
    px,
    py,
    style,
  } = props;
  return (
    <button
      style={
        style
          ? style
          : {
              backgroundColor: background,
              border,
              width,
              height,
              fontSize,
              color,
              padding: `${py} ${px}`,
            }
      }
      className="follow_btn"
      onClick={onPress}
    >
      {title}
    </button>
  );
}

export default FollowButton;

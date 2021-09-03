import React from "react";

function ScoreCardHeaderSocialIcon(props) {
  const { dark } = props;
  return (
    <div
      className={
        dark ? "score_card_social_icon dark" : "score_card_social_icon"
      }
    >
      {props.icon}
    </div>
  );
}

export default ScoreCardHeaderSocialIcon;

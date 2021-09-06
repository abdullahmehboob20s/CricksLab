import React from "react";
import "./OfficialsCard.css";
import FollowButton from "components/Buttons/FollowButton/FollowButton";

function OfficialsCard(props) {
  const { data } = props;
  const { name, title, img } = data;
  return (
    <div className="officials_card">
      <img src={img} alt="" className="officials_card_img" />
      <p className="official_card_title">{name}</p>
      <p className="official_card_subtitle">{title}</p>
      <div className="row justify-center">
        <FollowButton
          background="#33A2D2"
          border="none"
          width="99px"
          height="40px"
          title="FOLLOW"
          fontSize="14px"
          color="white"
          onPress={() => console.log("Nothing")}
        />
      </div>
    </div>
  );
}

export default OfficialsCard;

import React from "react";
import "./FooterCard.css";
import { Link } from "react-router-dom";

function FooterCard(props) {
  const { data } = props;
  return (
    <Link
      to={data.link}
      className="footer_card"
      style={{ backgroundColor: data.color }}
    >
      <p className="footer_card_title">{data.title}</p>
    </Link>
  );
}

export default FooterCard;

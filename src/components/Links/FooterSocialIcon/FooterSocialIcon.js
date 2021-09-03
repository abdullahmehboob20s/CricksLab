import React from "react";
import { Link } from "react-router-dom";
import "./FooterSocialIcon.css";

function FooterSocialIcon(props) {
  const { data } = props;
  return (
    <Link className="footer_social_icon" style={{ color: data.color }}>
      {data.icon}
    </Link>
  );
}

export default FooterSocialIcon;

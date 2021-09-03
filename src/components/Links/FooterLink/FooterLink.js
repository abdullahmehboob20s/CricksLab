import React from "react";
import { Link } from "react-router-dom";
import "./FooterLink.css";

function FooterLink(props) {
  const { data } = props;
  return <Link className="footer_link">{data.title}</Link>;
}

export default FooterLink;

import React from "react";
import "./Footer.css";
import FooterCard from "components/Cards/FooterCard/FooterCard";
import FooterLink from "components/Links/FooterLink/FooterLink";
import FooterSocialIcon from "components/Links/FooterSocialIcon/FooterSocialIcon";
import { useSelector } from "react-redux";

function Footer() {
  const { footerCardLinks, footerPageLinks, footerSocialLinks } = useSelector(
    (state) => state.footerLinks
  );

  return (
    <div className="footer">
      <div className="container-wrapper">
        <div className="footer_cards">
          {footerCardLinks.map((link, index) => {
            return <FooterCard data={link} />;
          })}
        </div>

        <div className="footer_links">
          {footerPageLinks.map((link, index) => (
            <FooterLink data={link} />
          ))}
        </div>

        <div className="footer_social_links">
          {footerSocialLinks.map((link, index) => (
            <FooterSocialIcon key={index} data={link} />
          ))}
        </div>

        <p className="footer_copyright">
          Copyright © 2020, Crickslab. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;

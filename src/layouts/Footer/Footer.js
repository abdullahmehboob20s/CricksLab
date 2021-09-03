import React from "react";
import "./Footer.css";
import FooterCard from "components/Cards/FooterCard/FooterCard";
import FooterLink from "components/Links/FooterLink/FooterLink";
import FooterSocialIcon from "components/Links/FooterSocialIcon/FooterSocialIcon";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  let links = [
    {
      title: "Matches",
      color: "#33A2D2",
      link: "",
    },
    {
      title: "Competitions",
      color: "#1C6AE4",
      link: "",
    },
    {
      title: "Team",
      color: "#0FB918",
      link: "",
    },
    {
      title: "Clubs",
      color: "#25AF96",
      link: "",
    },
    {
      title: "Players",
      color: "#FCDB39",
      link: "",
    },
    {
      title: "Officials",
      color: "#E55353",
      link: "",
    },
  ];
  let footerLinks = [
    {
      title: "About Us",
      link: "",
    },
    {
      title: "Contact Us",
      link: "",
    },
    {
      title: "News",
      link: "",
    },
    {
      title: "Blogs",
      link: "",
    },
    {
      title: "Terms & Conditions",
      link: "",
    },
  ];
  let socialLinks = [
    {
      icon: <FaFacebook />,
      link: "",
      color: "#1877F2",
    },
    {
      icon: <FaTwitter />,
      link: "",
      color: "#1DA1F2",
    },
    {
      icon: <FaInstagram />,
      link: "",
      color: "black",
    },
    {
      icon: <FaLinkedin />,
      link: "",
      color: "#0A66C2",
    },
    {
      icon: <FaYoutube />,
      link: "",
      color: "#FF0302",
    },
  ];
  return (
    <div>
      <div className="container-wrapper">
        <div className="footer_cards">
          {links.map((link, index) => {
            return <FooterCard data={link} />;
          })}
        </div>

        <div className="footer_links">
          {footerLinks.map((link, index) => (
            <FooterLink data={link} />
          ))}
        </div>

        <div className="footer_social_links">
          {socialLinks.map((link, index) => (
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

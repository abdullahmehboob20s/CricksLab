import { createSlice } from "@reduxjs/toolkit";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const initialState = {
  footerCardLinks: [
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
  ],
  footerPageLinks: [
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
  ],
  footerSocialLinks: [
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
  ],
};

export const footerLinks = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default footerLinks.reducer;

import React from "react";
import "./GetAmazed.css";
import logo_icon from "assets/images/CL.svg";
import google_play from "assets/images/google-play.png";
import apple_store from "assets/images/apple-store.png";
import { Link } from "react-router-dom";

function GetAmazed() {
  return (
    <div className="get_amazed">
      <div className="get_amazed_content">
        <p className="get_amazed_content_title">Get Amazed with</p>
        <img className="get_amazed_content_logo" src={logo_icon} alt="" />
        <p className="get_amazed_content_subtitle">
          Fully responsive web platform and apps that is simple, easy to use and
          FREE with a lot of features! We have worked very hard to bring you a
          complete solution for your cricket game. Are you a Cricket FAN or
          PROFESSIONAL? Came discover our products, you are just a click away to
          witness the cricket revolution!
        </p>
        <p className="get_amazed_btns_title">Interesting? Get the App Now!</p>
        <div className="get_amazed_content_btns">
          <Link className="get_amazed_content_get_app">
            <img src={google_play} alt="" />
          </Link>
          <Link className="get_amazed_content_get_app">
            <img src={apple_store} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetAmazed;

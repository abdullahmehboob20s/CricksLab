import React from "react";
import "./Navbar.css";
import navbar_icon from "assets/images/navbar-icon.png";
import navbar_icon_2 from "assets/images/navbar-icon-2.png";
import navbar_icon_3 from "assets/images/navbar-icon-3.png";
import { FiSearch } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="navbar">
      {/* for navbar on small screens */}
      <div onClick={() => setOpen(!open)} className="hamburger">
        <FaBars />
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={open ? "black_screen show" : "black_screen"}
      ></div>

      {/* main content */}
      <div className="navbar_left">
        <img className="navbar_icon" src={navbar_icon} alt="" />
        <img className="navbar_icon_2" src={navbar_icon_2} alt="" />
        <div className="navbar_icon_3">
          <img src={navbar_icon_3} alt="" />
        </div>
      </div>
      <div className={open ? "navbar_right open" : "navbar_right"}>
        <div className="navbar_input">
          <input placeholder="Search" type="text" name="" id="" />
          <span className="navbar_input_icon">
            <FiSearch color="#6E7077" />
          </span>
        </div>

        <div className="navbar_links">
          <Link className="navbar_link">
            Matches{" "}
            <span className="navbar_link_icon">
              <BsChevronDown />
            </span>
          </Link>
          <Link className="navbar_link">Competitions</Link>
          <Link className="navbar_link">Teams</Link>
          <Link className="navbar_link">Clubs</Link>
          <Link className="navbar_link">Players</Link>
          <Link className="navbar_link">Officials</Link>
          <Link className="navbar_link_btn">Login / Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

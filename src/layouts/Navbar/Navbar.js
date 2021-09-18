import React from "react";
import "./Navbar.css";
import navbar_icon from "assets/images/navbar-icon.png";
import navbar_icon_2 from "assets/images/navbar-icon-2.png";
import navbar_icon_3 from "assets/images/navbar-icon-3.png";
import { FiSearch } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Search from "components/SearchBars/Search/Search";
import { useSelector } from "react-redux";
import FooterLink from "components/Links/FooterLink/FooterLink";
import FooterSocialIcon from "components/Links/FooterSocialIcon/FooterSocialIcon";
import BlackBackgroundScreen from "components/Screens/BlackBackgroundScreen";
import Dropdowns from "components/Dropdowns/Dropdown/Dropdowns";
import Modal from "components/Modals/Modal/Modal";

function Navbar({ showSearchBar = true }) {
  const [open, setOpen] = React.useState(false);
  const [show, setshow] = React.useState(false);
  const { footerPageLinks, footerSocialLinks } = useSelector(
    (state) => state.footerLinks
  );
  return (
    <>
      <div className="navbar">
        {/* for navbar on small screens */}

        <div onClick={() => setOpen(!open)} className="hamburger">
          <FaBars />
        </div>

        <BlackBackgroundScreen show={open} hideOnClick={() => setOpen(false)} />

        {/* main content */}
        <div className="navbar_left">
          <img className="navbar_icon" src={navbar_icon} alt="" />
          <img className="navbar_icon_2" src={navbar_icon_2} alt="" />
          <div className="navbar_icon_3">
            <img src={navbar_icon_3} alt="" />
          </div>
        </div>
        <div className="navbar_right_wrapper">
          <div className="searchWrapper">{showSearchBar ? <Search /> : ""}</div>

          <div className={open ? "navbar_right open" : "navbar_right"}>
            <div className="navbar_left side_bar_logo">
              <img className="navbar_icon" src={navbar_icon} alt="" />
              <img className="navbar_icon_2" src={navbar_icon_2} alt="" />
              <div className="navbar_icon_3">
                <img src={navbar_icon_3} alt="" />
              </div>
            </div>

            <div className="navbar_links">
              <Dropdowns
                btnTitle="Matches"
                btnClassName="navBar_dropdown"
                className="navbar_link"
                top="100%"
                position="center"
                rounded={true}
                responsiveClass="navBar_dropdown_responsive"
              >
                <div className="navbar_dropdown">
                  <Link className="navbar_dropdown_link">Live</Link>
                  <Link className="navbar_dropdown_link">Upcoming</Link>
                  <Link className="navbar_dropdown_link">Schedule</Link>
                </div>
              </Dropdowns>
              <Link to="match-details" className="navbar_link">
                Competitions
              </Link>
              <Link to="teams" className="navbar_link">
                Teams
              </Link>
              <Link to="/club-details" className="navbar_link">
                Clubs
              </Link>
              <Link to="/player-details" className="navbar_link">
                Players
              </Link>
              <Link to="/officials" className="navbar_link">
                Officials
              </Link>
              <button
                onClick={() => setshow(!show)}
                to="/competition-overview"
                className="navbar_link_btn"
              >
                Login / Sign Up
              </button>
            </div>
            <div className="navbar_footer_links">
              {footerPageLinks.map((link, index) => (
                <FooterLink data={link} />
              ))}
            </div>
            <div className="navbar_footer_social_icons">
              {footerSocialLinks.map((link, index) => (
                <FooterSocialIcon key={index} data={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} setShow={setshow} />
    </>
  );
}

export default Navbar;

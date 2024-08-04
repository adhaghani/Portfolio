import React, { useEffect, useState } from "react";
import "../../style/Navigation/Navigation.css";
import { Link } from "react-router-dom";

import Logo from "/icon.svg";
import LinkTo from "../Button/LinkTo";

const Navigation = () => {
  const [Sidebar, setSidebar] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };

  useEffect(() => {
    if (Sidebar === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [Sidebar]);

  const handleSideNav = () => {
    setSidebar(!Sidebar);
  };

  const handleNavLinkClick = () => {
    scrollToTop();
    handleSideNav();
  };
  return (
    <nav>
      <div className="Nav-Container">
        <div className="Logo_Container">
          <img src={Logo} alt="" className="logo" />
        </div>

        <ul className="List">
          <li>
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={scrollToTop}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={scrollToTop}>
              Projects
            </Link>
          </li>
          <li>
            <LinkTo
              goOutside
              Link="/Resume.pdf"
              text="My Resume"
              className="Link"
            />
          </li>
        </ul>
        <button
          className={Sidebar ? "Hamburger Active" : "Hamburger"}
          id="Hamburger"
          onClick={handleSideNav}
        >
          <div className="Top"></div>
          <div className="Mid"></div>
          <div className="Bot"></div>
        </button>
      </div>

      <div className={Sidebar ? "SideNav Active" : "SideNav"}>
        <ul className="List">
          <li>
            <Link to="/" onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={handleNavLinkClick}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={handleNavLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <LinkTo
              goOutside
              Link="/Resume.pdf"
              text="My Resume"
              className="Link"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

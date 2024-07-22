import React, { useState } from "react";
import "../../style/Navigation/Navigation.css";
import { Link } from "react-router-dom";

import Logo from "/icon.svg";
const Navigation = () => {
  const [Sidebar, setSidebar] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };

  const handleSideNav = () => {
    setSidebar(!Sidebar);
  };
  return (
    <nav>
      <div className="Nav-Container">
        <div className="Logo_Container">
          <img src={Logo} alt="" className="logo" />
        </div>

        <ul className="List">
          <li>
            <Link to="/Home" onClick={scrollToTop}>
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
            <Link to="/Home" onClick={(scrollToTop, handleSideNav)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={(scrollToTop, handleSideNav)}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={(scrollToTop, handleSideNav)}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

import React, { useEffect, useState } from "react";
import "../../style/Navigation/Navigation.css";
import { Link } from "react-router-dom";

import LinkTo from "../Button/LinkTo";
import { motion } from "framer-motion";
import { useStateContext } from "../ContextProvider/ContextProvider";
import { DarkModeIcon, LightModeIcon } from "../../assets/Icon/FunctionIcon";
const Navigation = () => {
  const [Sidebar, setSidebar] = useState(false);

  const { isDarkMode, setIsDarkMode } = useStateContext();

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

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
        <ul className="List Desktop">
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
        </ul>
        <button className="DarkMode" onClick={handleThemeChange}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
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

      <motion.div
        className={Sidebar ? "SideNav Active" : "SideNav"}
        initial={{ x: "-100%", opacity: 0 }}
        animate={Sidebar ? { x: 0, opacity: 1 } : { x: "100%" }}
        transition={{ duration: 0.25 }}
      >
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
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;

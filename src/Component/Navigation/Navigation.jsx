import React from "react";
import "../../style/Navigation/Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };

  return (
    <nav>
      <ul className="List">
        <li>
          <Link to="/Home" onClick={scrollToTop}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={scrollToTop}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Projects" onClick={scrollToTop}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

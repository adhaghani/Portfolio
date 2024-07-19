import React from "react";
import "../../style/Navigation/Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul className="List">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

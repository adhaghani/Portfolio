import React, { useState } from "react";

import "./Navigation.css";

import github from "./github.svg";
import linkedin from "./link.svg";
const Navigation = () => {
  const [Sidebar, setSidebar] = useState(false);

  return (
    <div className="Navigation" id="Navigation">
      <div className="Navigation-Container">
        <h1 className="Logo">
          <h5>Adhaghani</h5>
        </h1>
        <ul className="Shortcurt">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="Link">
          <li>
            <a href="https://github.com/adhaghani" target="_BLANK">
              <img src={github} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adhaghani/" target="_BLANK">
              <img src={linkedin} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

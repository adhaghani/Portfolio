import React, { useState } from "react";

import "./Navigation.css";

import github from "/github.svg";
import linkedin from "/link.svg";
const Navigation = () => {
  const [Sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!Sidebar);
  return (
    <div className="Navigation" id="Navigation">
      <div className="Navigation-Container">
        <div className="Logo">
          <h2>Adhaghani</h2>
        </div>
        <ul className="Shortcurt">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
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
        <button
          className={Sidebar ? "hamburger active" : "hamburger"}
          id="hamburger"
          onClick={showSidebar}
        >
          <div className="top"></div>
          <div className="mid"></div>
          <div className="bot"></div>
        </button>
      </div>
      <div className={Sidebar ? "SideNav active" : "SideNav"} id="SideNav">
        <div className="SideNav-Container">
          <ul className="Shortcurt">
            <li>
              <a href="#About" onClick={showSidebar}>
                About
              </a>
            </li>
            <li>
              <a href="#Project" onClick={showSidebar}>
                Project
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={showSidebar}>
                Contact
              </a>
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
    </div>
  );
};

export default Navigation;

import React from "react";

import "./Footer.css";

import github from "/github.svg";
import linkedin from "/link.svg";
import instagram from "/instagram.svg";

const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="Footer-Container">
        <div className="section-group">
          <div className="section Socials">
            <h3 className="Title">Follow me</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/adhaghani" target="_BLANK">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/adhaghani" target="_BLANK">
                  <img src={github} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adhaghani/"
                  target="_BLANK"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="section Link">
            <h3 className="Title">Links</h3>
            <ul>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="section-group">
          <p>Copyright © 2022 Adhaghani</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

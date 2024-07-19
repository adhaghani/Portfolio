import React from "react";
import "../../style/Footer/Footer.css";

import GithubIcon from "../../assets/GithubIcon";
import InstagramIcon from "../../assets/InstagramIcon";
import LinkedinIcon from "../../assets/LinkedinIcon";
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="Details">
        <h1 className="Name">Ahmad Adha</h1>
        <p className="role">Software Developer</p>
        <ul className="socials">
          <li>
            <a href="https://github.com/adhaghani" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/adhaghani/" target="_blank">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/adhaghani" target="_blank">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="Actions">
        <div className="List">
          <h4>Contact</h4>
          <ul>
            <li>Email</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="List">
          <h4>Services</h4>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Mock-Up Services</li>
          </ul>
        </div>
        <div className="List">
          <h4>Services</h4>
          <ul>
            <li>Software Development Project</li>
            <li>Mock-Up Design Project</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

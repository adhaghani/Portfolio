import React from "react";
import "../../style/Footer/Footer.css";
import LinkTo from "../Button/LinkTo";

import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo
} from "../../assets/Icon/LogoIcon";

import Logo from "/icon.svg";

const Footer = () => {
  return (
    <div className="Container Footer" id="Footer">
      <div className="Details">
        <h1 className="Name">Ahmad Adha</h1>
        <p className="role">Computer Science Student</p>
        <ul className="socials">
          <li>
            <a href="https://github.com/adhaghani" target="_blank">
              <GithubLogo />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/adhaghani/" target="_blank">
              <LinkedinLogo />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/adhaghani" target="_blank">
              <InstagramLogo />
            </a>
          </li>
        </ul>
      </div>
      <div className="Actions">
        <div className="List">
          <h4>Contact</h4>
          <ul>
            <LinkTo
              Link="mailto:adhaahmadwork@gmail.com"
              className="Link"
              text="Email Me"
              goOutside
            />
            <LinkTo
              Link="https://instagram.com/adhaghani"
              className="Link"
              text="Instagram"
              goOutside
            />
            <LinkTo
              Link="https://linkedin.com/in/adhaghani/"
              className="Link"
              text="LinkedIn"
              goOutside
            />
          </ul>
        </div>
        <div className="List">
          <h4>Services</h4>
          <ul>
            <LinkTo
              Link="/Projects"
              className="Link"
              text="Software Development Projects"
            />
            <LinkTo Link="/Projects" className="Link" text="Design Projects" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

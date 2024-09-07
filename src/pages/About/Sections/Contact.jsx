import React from "react";

import Title from "../../../component/Title/Title";

import LinkTo from "../../../component/Button/LinkTo";

import {
  EmailIcon,
  LocationIcon,
  ContactIcon
} from "../../../assets/Icon/FunctionIcon";

const Contact = () => {
  return (
    <section id="Contact">
      <Title
        TitleText={"Contact Me"}
        SubText={"Let's do something great together!"}
      />
      <div className="Container section-Container">
        <div className="Section-Card Info">
          <div className="Info-Card">
            <div className="icon">
              <EmailIcon />
            </div>
            <a className="text" href="mailto:adhaahmadwork@gmail.com">
              Adhaahmadwork@gmail.com
            </a>
          </div>
          <div className="Info-Card">
            <div className="icon">
              <ContactIcon />
            </div>
            <div className="text">+60 18 2017 884</div>
          </div>
          <div className="Info-Card">
            <div className="icon">
              <LocationIcon />
            </div>
            <div className="text">Kajang, Selangor, Malaysia</div>
          </div>
          <LinkTo
            goOutside
            Link="/Resume.pdf"
            text="My Resume"
            className="Button"
          />
        </div>
        <div className="Section-Card Form"></div>
      </div>
    </section>
  );
};

export default Contact;

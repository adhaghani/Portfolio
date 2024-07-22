import React from "react";

import Title from "../../../component/Title/Title";

import Email from "../../../assets/Icon/Email";
import Earth from "../../../assets/Icon/Earth";
import Call from "../../../assets/Icon/Call";
import LinkTo from "../../../component/Button/LinkTo";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section id="Contact">
      <Title
        TitleText={"Contact Me"}
        SubText={"Let's do something great together!"}
      />
      <div className="section-Container">
        <div className="Section-Card Form">
          <form action="">
            <div className="Input-Card">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="youremailaddress@gmail.com" />
            </div>
            <div className="Input-Card">
              <label htmlFor="">Subject</label>
              <input
                type="text"
                placeholder="suggest a subject for the message."
              />
            </div>
            <div className="Input-Card">
              <label htmlFor="">Message</label>
              <textarea
                name="message"
                placeholder="Write your message here, keep it short and simple."
                id=""
              ></textarea>
            </div>
            <div className="Input-Card">
              <input className="Submit" type="submit" value="Send Email" />
            </div>
          </form>
        </div>
        <div className="Section-Card Info">
          <div className="Info-Card">
            <div className="icon">
              <Email />
            </div>
            <a className="text" href="mailto:adhaahmadwork@gmail.com">
              Adhaahmadwork@gmail.com
            </a>
          </div>
          <div className="Info-Card">
            <div className="icon">
              <Call />
            </div>
            <div className="text">+60 18 2017 884</div>
          </div>
          <div className="Info-Card">
            <div className="icon">
              <Earth />
            </div>
            <div className="text">Kajang, Selangor, Malaysia</div>
          </div>
          <LinkTo
            goOutside
            Link="/Portfolio/Resume.pdf"
            text="My Resume"
            className="Button"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

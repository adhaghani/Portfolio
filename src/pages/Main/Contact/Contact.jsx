import React from "react";

import Title from "../../../Component/Title/Title";

import "./Contact.css";

import Mail from "/Mail.svg";

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div className="Contact-Container">
        <Title title="Contact" subtitle="Get in touch with me" />
        <div className="form-container">
          <a href="mailto:adhaahmadwork@gmail.com" target="_blank">
            <img src={Mail} alt="" />
            Mail me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

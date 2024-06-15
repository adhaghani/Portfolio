import React from "react";

import Title from "../../../Component/Title/Title";

import "./Contact.css";

import Mail from "/Mail.svg";

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div className="Contact-Container">
        <Title title="Contact" subtitle="Get in touch with me" />
      </div>
    </div>
  );
};

export default Contact;

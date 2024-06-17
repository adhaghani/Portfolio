import React from "react";

import Title from "../../../Component/Title/Title";

import "./Contact.css";

import Mail from "/Contact/mail.svg";
import contact from "/Contact/call.svg";
import location from "/Contact/location.svg";

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <div className="Contact-Container">
        <Title title="Contact" subtitle="Get in touch with me" />
        <div className="contact-form">
          {/* <a className="Email" href="mailto:adhaahmawork@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M792-443 176-183q-20 8-38-3.5T120-220v-520q0-22 18-33.5t38-3.5l616 260q25 11 25 37t-25 37ZM200-280l474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
            Email me
          </a> */}
          <div className="section personal-details">
            <div className="detail-card">
              <div className="icon-container">
                <img src={Mail} alt="" />
              </div>
              <div className="text">
                <a href="mailto:adhaahmadwork@gmail.com" target="_BLANK">
                  adhaahmadwork@gmail.com
                </a>
              </div>
            </div>
            <div className="detail-card">
              <div className="icon-container">
                <img src={contact} alt="" />
              </div>
              <div className="text">
                <p>+60 18 2017 884</p>
              </div>
            </div>
            <div className="detail-card">
              <div className="icon-container">
                <img src={location} alt="" />
              </div>
              <div className="text">
                <p>Kajang, Malaysia</p>
              </div>
            </div>
          </div>
          {/* <div className="section form-contact">
            <form action="">test</form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

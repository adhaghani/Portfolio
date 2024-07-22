import React, { useState } from "react";

import Title from "../../../component/Title/Title";

import Email from "../../../assets/Icon/Email";
import Earth from "../../../assets/Icon/Earth";
import Call from "../../../assets/Icon/Call";
import LinkTo from "../../../component/Button/LinkTo";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Subject: "",
    Message: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfw7g_rjW6eUPsynSpMlE2xzdhJgYqxlIuXVDWfMCYeLhtK8A/formResponse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams({
            "entry.1811435618": formData.Email,
            "entry.1107056930": formData.Subject,
            "entry.1601391270": formData.Message
          }).toString()
        }
      );
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("ERROR: ", error);
      alert("ERROR: " + error);
    }
  };

  return (
    <section id="Contact">
      <Title
        TitleText={"Contact Me"}
        SubText={"Let's do something great together!"}
      />
      <div className="section-Container">
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
        <div className="Section-Card Form">
          {/* <form action="" onSubmit={handleFormSubmit}>
            <div className="Input-Card">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleInputChange}
                placeholder="youremailaddress@gmail.com"
              />
            </div>
            <div className="Input-Card">
              <label htmlFor="Subject">Subject</label>
              <input
                name="Subject"
                value={formData.Subject}
                onChange={handleInputChange}
                type="text"
                placeholder="suggest a subject for the message."
              />
            </div>
            <div className="Input-Card">
              <label htmlFor="Message">Message</label>
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleInputChange}
                placeholder="Write your message here, keep it short and simple."
                id=""
              ></textarea>
            </div>
            <div className="Input-Card">
              <input className="Submit" type="submit" value="Send Email" />
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

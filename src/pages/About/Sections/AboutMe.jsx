import React from "react";
import Title from "../../../component/Title/Title";
import { Link } from "react-router-dom";
const AboutMe = () => {
  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };

  return (
    <section id="Me">
      <Title TitleText="About Me" SubText="a little bit about myself." />
      <div className="section-Container">
        <div className="Section-Card">
          {" "}
          <p>I'm Ahmad Adha, a proud Malaysian. nice to meet you.</p>
          <p>
            I Have developed an interest in Software Development since I'm 16
            years old. Creating countless "portfolio's" project and ended up
            using none, since i have no actual project to show. However since
            then i am committed to create a project that brought value and
            impact to business and society.
          </p>
          <p>
            Want to know more about my project?{" "}
            <Link to="/Projects" onClick={ScrolltoTop}>
              Click Here.
            </Link>
          </p>
        </div>
        <div className="Section-Card">
          <div className="image"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

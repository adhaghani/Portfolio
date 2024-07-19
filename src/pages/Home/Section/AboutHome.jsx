import React from "react";

import Title from "../../../component/Title/Title";
import { Link } from "react-router-dom";
const AboutHome = () => {
  return (
    <section id="About">
      <Title TitleText="About Me" SubText="a little bit about myself." />
      <div className="section-Container">
        <div className="Section-Card">
          <div className="image"></div>
        </div>
        <div className="Section-Card">
          {" "}
          <p>
            I'm a Computer science student with a passion for creating beautiful
            and performant web applications. I specialize in JavaScript and
            React, and I'm always looking for new and exciting ways to bring my
            skills to the table. I'm excited to join a dynamic team and make a
            positive impact on the world through my work.
          </p>
          <p>
            Want to know more about me? <Link to="/About">Click Here.</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;

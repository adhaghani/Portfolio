import React from "react";

import Title from "../../../component/Title/Title";
import { Link } from "react-router-dom";
import me from "/me_Home.png";
const AboutHome = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };

  return (
    <section id="About">
      <Title TitleText="About Me" SubText="a little bit about myself." />
      <div className="Container section-Container">
        <div className="Section-Card">
          <div className="image">
            <img src={me} alt="" />
          </div>
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
            Want to know more about me?{" "}
            <Link to="/About" onClick={scrollToTop}>
              Click Here.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;

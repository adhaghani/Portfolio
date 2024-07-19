import React from "react";

import Title from "../../component/Title/Title";

import "../../style/About/About.css";

import Experience from "./Sections/Experience";
import AboutMe from "./Sections/AboutMe";
import Certificates from "./Sections/Certificates";
import Education from "./Sections/Education";
import Involvement from "./Sections/Involvement";
import Contact from "./Sections/Contact";
const About = () => {
  return (
    <div className="About" id="About">
      <section id="Hero">
        <h1 className="Title">
          A little bit about me,
          <br />
          If that interest you.
        </h1>
      </section>
      <AboutMe />
      <Education />
      <Involvement />
      <Experience />
      <Certificates />
      <Contact />
    </div>
  );
};

export default About;

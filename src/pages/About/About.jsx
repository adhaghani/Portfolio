import React from "react";

import Title from "../../component/Title/Title";

import "../../style/About/About.css";

import AboutMe from "./Sections/AboutMe";
import Certificates from "./Sections/Certificates";
import EducationExperience from "./Sections/EducationExperience";
import Involvement from "./Sections/Involvement";
import Contact from "./Sections/Contact";
import PromoCard from "../../component/PromoCard/PromoCard";
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
      <EducationExperience />
      <PromoCard
        GoInside
        MainText="Want to see my projects?"
        Link="/Projects"
        LinkText="View Projects"
        LinkClassName="Button"
        LinkIcon="Projects"
      />
      <Involvement />
      <Certificates />

      <Contact />
    </div>
  );
};

export default About;

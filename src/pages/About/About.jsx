import React from "react";

import Title from "../../component/Title/Title";

import "../../style/About/About.css";

import AboutMe from "./Sections/AboutMe";
import Certificates from "./Sections/Certificates";
import EducationExperience from "./Sections/EducationExperience";
import Involvement from "./Sections/Involvement";
import Contact from "./Sections/Contact";
import PromoCard from "../../component/PromoCard/PromoCard";
import Hero from "../../component/Hero/Hero";
const About = () => {
  return (
    <div className="About" id="About">
      <Hero mainText="A little bit about me," subText="If that interest you." />
      <AboutMe />
      <EducationExperience />
      <PromoCard
        GoInside
        MainText="Want to see my projects?"
        Link="/Projects"
        LinkText="View Projects"
        LinkClassName="Button"
        LinkIcon="Code"
      />
      <Involvement />
      <Certificates />

      <Contact />
    </div>
  );
};

export default About;

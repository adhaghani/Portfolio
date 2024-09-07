import React from "react";

import DesignProjects from "./Section/DesignProjects";
import DevelopmentProjects from "./Section/DevelopmentProjects";

import "../../style/Projects/Projects.css";
import PromoCard from "../../component/PromoCard/PromoCard";
import Hero from "../../component/Hero/Hero";
const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <Hero mainText="Some of my projects," subText="Enjoy :)" />
      <DesignProjects />
      <PromoCard
        MainText="Want me to work with you?"
        Link="Mailto:adhaahmadwork@gmail.com"
        LinkText="Email me"
        LinkClassName="Button"
        LinkIcon="Email"
      />
      <DevelopmentProjects />
    </div>
  );
};

export default Projects;

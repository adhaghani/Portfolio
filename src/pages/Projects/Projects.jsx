import React from "react";
import Title from "../../component/Title/Title";

import DesignProjects from "./Section/DesignProjects";
import DevelopmentProjects from "./Section/DevelopmentProjects";

import "../../style/Projects/Projects.css";
import PromoCard from "../../component/PromoCard/PromoCard";

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <section id="Hero">
        <h1 className="Title">
          My Projects,
          <br /> Enjoy :)
        </h1>
      </section>
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

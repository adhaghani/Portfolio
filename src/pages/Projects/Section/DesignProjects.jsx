import React from "react";

import Title from "../../../component/Title/Title";

import ProjectsCard from "../ProjectsCard";
const DesignProjects = () => {
  return (
    <section id="Design">
      <Title
        TitleText="Design Projects"
        SubText="Design projects that i have taken part in."
      />
      <div className="section-Container">
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </section>
  );
};

export default DesignProjects;

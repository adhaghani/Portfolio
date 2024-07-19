import React from "react";

import Title from "../../../component/Title/Title";

import ProjectsCard from "../ProjectsCard";
const DevelopmentProjects = () => {
  return (
    <section id="Development">
      <Title
        TitleText="Development Projects"
        SubText="all of my development projects using various languages."
      />
      <div className="section-Container">
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </section>
  );
};

export default DevelopmentProjects;

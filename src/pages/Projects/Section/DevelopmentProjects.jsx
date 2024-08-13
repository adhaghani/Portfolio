import React from "react";

import Title from "../../../component/Title/Title";

import ProjectsCard from "../ProjectsCard";

import DevelopmentData from "../../../assets/DevelopmentProject.json";
const DevelopmentProjects = () => {
  return (
    <section id="Development">
      <Title
        TitleText="Development Projects"
        SubText="all of my development projects using various languages."
      />
      <div className="section-Container">
        {DevelopmentData.map((Data, index) => (
          <ProjectsCard key={index} {...Data} />
        ))}
      </div>
    </section>
  );
};

export default DevelopmentProjects;

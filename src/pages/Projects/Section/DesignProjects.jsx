import React from "react";

import Title from "../../../component/Title/Title";

import ProjectsCard from "../ProjectsCard";

import DesignData from "../../../assets/DesignProject.json";
const DesignProjects = () => {
  return (
    <section id="Design">
      <Title
        TitleText="Design Projects"
        SubText="all of my past design projects."
      />
      <div className="section-Container">
        {DesignData.map((Data) => (
          <ProjectsCard Design key={Data.id} {...Data} />
        ))}
      </div>
    </section>
  );
};

export default DesignProjects;

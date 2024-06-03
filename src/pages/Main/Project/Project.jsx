import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import Title from "../../../Component/Title/Title";
const Project = () => {
  return (
    <div className="Project" id="Project">
      <div className="Project-Container">
        <Title title="Projects" subtitle="All of my past projects." />
        <div className="Card-Container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Project;

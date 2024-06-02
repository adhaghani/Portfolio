import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const Project = () => {
  return (
    <div className="Project" id="Project">
      <div className="Project-Container">
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

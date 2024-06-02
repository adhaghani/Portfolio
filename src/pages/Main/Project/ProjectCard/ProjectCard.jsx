import React from "react";
import Button from "../../../../Component/Button/Button";

const ProjectCard = () => {
  return (
    <div className="projectCard" id="projectCard">
      <div className="image-container"> image </div>
      <div className="project-details">
        <div className="project-title">
          <h3 className="title">Personal Portfolio</h3>
          <p className="techstack">HTML, Css, js, React.js</p>
        </div>
        <div className="button-action">
          <Button
            classname="button"
            href="https://google.com"
            value="Live Server"
          />
          <Button classname="button" value="Source Code" type="code" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

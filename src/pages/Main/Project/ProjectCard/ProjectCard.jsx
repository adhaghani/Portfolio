import React from "react";
import Button from "../../../../Component/Button/Button";

import noImage from "/noimg.svg";
const ProjectCard = () => {
  return (
    <div className="projectCard" id="projectCard">
      <div className="image-container">
        <div className="no-image">
          <img src={noImage} alt="" />
          <h3>No image available</h3>
        </div>
      </div>
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
            type="view"
          />
          <Button classname="button" value="Source Code" type="code" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

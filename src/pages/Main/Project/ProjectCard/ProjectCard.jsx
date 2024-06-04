import React from "react";
import Button from "../../../../Component/Button/Button";

import noImage from "/noimg.svg";

const ProjectCard = (props) => {
  return (
    <div className="projectCard" id="projectCard">
      <div className="image-container">
        <div className={props.image == null ? "no-image yes" : "no-image"}>
          {props.image == null ? (
            <img src={noImage} alt="" />
          ) : (
            <img src={props.image} alt="" />
          )}
          {props.image == null && <h3>No image available</h3>}
        </div>
      </div>
      <div className="project-details">
        <div className="project-title">
          <h3 className="title">{props.title}</h3>
          <p className="techstack">{props.subtitle}</p>
        </div>
        <div className="button-action">
          {props.livelink && (
            <Button
              classname="button"
              href={props.livelink}
              value="Live Server"
              type="view"
            />
          )}
          {props.githublink && (
            <Button
              classname="button"
              value="Source Code"
              href={props.githublink}
              type="code"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

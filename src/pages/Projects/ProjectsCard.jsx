import React from "react";

import LinkTo from "../../component/Button/LinkTo";

const ProjectsCard = (props) => {
  return (
    <div className="ProjectCard">
      <div className="image-Container">
        <img loading="eager" src={props.imgLink} alt="test" />
      </div>
      <div className="details-Container">
        <h2 className="Project-Title">
          {props.title}{" "}
          <span className="Project-Timeline">{props.timeline}</span>
        </h2>

        <p className="Project-technology">{props.technologies}</p>
        <p className="Project-Description">{props.description}</p>
        <div className="Button-Container">
          {props.LiveLink && (
            <LinkTo
              goOutside
              Link={props.LiveLink}
              className="Button"
              text="Live View"
              icon="Display"
            />
          )}
          {props.RepositoryLink && (
            <LinkTo
              goOutside
              Link={props.RepositoryLink}
              className="Button"
              text="Repository"
              icon="Code"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

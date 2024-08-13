import React from "react";

import LinkTo from "../../component/Button/LinkTo";
import { motion } from "framer-motion";

const ProjectsCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="ProjectCard"
    >
      <div className="Project-Details">
        <div className="image-Container">
          <img loading="eager" src={props.imgLink} alt="test" />
        </div>
        <div className="details-Container">
          <div className="Project__Details">
            <h2 className="Project-Title">
              {props.title}{" "}
              <span className="Project-Timeline">{props.timeline}</span>
            </h2>

            <p className="Project-technology">{props.technologies}</p>
            <p className="Project-Description">{props.description}</p>
          </div>
        </div>
      </div>
      {props.LiveLink || props.RepositoryLink ? (
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
      ) : null}
    </motion.div>
  );
};

export default ProjectsCard;

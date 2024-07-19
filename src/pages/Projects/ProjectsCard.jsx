import React from "react";

import LinkTo from "../../component/Button/Link";
const ProjectsCard = () => {
  return (
    <div className="ProjectCard" id="ProjectCard">
      <div className="image-Container">image</div>
      <div className="details-Container">
        <h2 className="Project-Title">
          Project Title{" "}
          <span className="Project-Timeline">August 2022 - Present</span>{" "}
        </h2>

        <p className="Project-technology">
          HTML, CSS, JavaScript, React.js, PHP, axios
        </p>
        <p className="Project-Description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ipsam
          officiis laboriosam similique quia porro.
        </p>
        <div className="Button-Container">
          <LinkTo
            goOutside
            Link="/Projects"
            className="Button"
            text="Live Server"
          />
          <LinkTo
            goOutside
            Link="/Projects"
            className="Button"
            text="Repository"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

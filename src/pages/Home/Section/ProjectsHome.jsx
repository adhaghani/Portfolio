import React from "react";

import Title from "../../../component/Title/Title";

import LinkTo from "../../../component/Button/Link";
const ProjectsHome = () => {
  return (
    <section id="Projects">
      <Title TitleText="Projects" SubText="Some of my work." />
      <div className="section-Container">
        <div className="Section-Card">
          <div className="image"></div>
          <h3>Design Project</h3>
          <p>
            List of work that i have done professionally. This include mockups,
            poster, designs.
          </p>
          <LinkTo Link="/Projects" className="Button" text="View Projects" />
        </div>
        <div className="Section-Card">
          <div className="image"></div>
          <h3>Development Project</h3>
          <p>
            My development Projects. This may include landing page, projects,
            learning projects, final year project, etc.
          </p>
          <LinkTo Link="/Projects" className="Button" text="View Projects" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;

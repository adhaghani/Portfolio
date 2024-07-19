import React from "react";

import { Link } from "react-router-dom";
import Title from "../../../component/Title/Title";
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
          <Link to="/Projects/Design">View Projects</Link>
        </div>
        <div className="Section-Card">
          <div className="image"></div>
          <h3>Development Project</h3>
          <p>
            My development Projects. This may include landing page, projects,
            learning projects, final year project, etc.
          </p>
          <Link to="/Projects/Development">View Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;

import React from "react";

import Title from "../../../component/Title/Title";

import LinkTo from "../../../component/Button/LinkTo";

import Design from "/HomeProject/Design.png";
import Development from "/HomeProject/Development.png";
import { motion } from "framer-motion";
const ProjectsHome = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };

  return (
    <section id="Projects">
      <Title TitleText="Projects" SubText="Some of my work." />
      <div className="Container section-Container">
        <motion.div className="Section-Card" whileHover={{ scale: 1.025 }}>
          <img className="image" src={Design} alt="" />
          <div className="Details">
            <h3>Design Project</h3>
            <p>
              List of work that i have done professionally. This include
              mockups, poster, designs.
            </p>
            <LinkTo
              onclick={scrollToTop}
              Link="/Projects"
              className="Button"
              text="View Projects"
              icon="Display"
            />
          </div>
        </motion.div>
        <motion.div className="Section-Card" whileHover={{ scale: 1.025 }}>
          <img className="image" src={Development} alt="" />
          <div className="Details">
            <h3>Development Project</h3>
            <p>
              My development Projects. This may include landing page, projects,
              learning projects, final year project, etc.
            </p>
            <LinkTo
              onclick={scrollToTop}
              Link="/Projects"
              className="Button"
              text="View Projects"
              icon="Code"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHome;

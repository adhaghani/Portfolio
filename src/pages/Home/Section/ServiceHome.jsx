import React from "react";

import Title from "../../../component/Title/Title";
import {
  CodeIcon,
  WebDesignIcon,
  MockupDesignIcon
} from "../../../assets/Icon/FunctionIcon";
import { motion } from "framer-motion";
const ServiceHome = () => {
  return (
    <section id="Service">
      <Title TitleText="Service" SubText="few things that i can do." />
      <div className="Container section-Container">
        <motion.div className="Section-Card" whileHover={{ scale: 1.05 }}>
          <h2 className="Service-Title">
            <WebDesignIcon /> Web Design
          </h2>
          <p className="service-Details">
            With experience using figma, and countless design projects. I am
            able to create a web design that's user friendly with a focus on
            mobile responsiveness and User Experience.
          </p>
        </motion.div>
        <motion.div className="Section-Card" whileHover={{ scale: 1.05 }}>
          <h2 className="Service-Title">
            <CodeIcon />
            Web Development
          </h2>
          <p className="service-Details">
            Proficient in HTML, Javascript, CSS, React.js, SCSS. I am able to
            build a simple landing page with multiple pages for your company.
          </p>
        </motion.div>
        <motion.div className="Section-Card" whileHover={{ scale: 1.05 }}>
          <h2 className="Service-Title">
            <MockupDesignIcon />
            Mock-Up Design
          </h2>
          <p className="service-Details">
            With countless clients and proof-of-works, I am able to design a
            Mock-Up for your upcoming products which has the potential to be
            used for marketing purposes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHome;

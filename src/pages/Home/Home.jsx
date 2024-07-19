import React from "react";

import "../../style/Home/Home.css";
import Title from "../../component/Title/Title";

import AboutHome from "./Section/AboutHome";
import ServiceHome from "./Section/ServiceHome";
import SkillsHome from "./Section/SkillsHome";
import ProjectsHome from "./Section/ProjectsHome";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home" id="Home">
      <section id="Hero">
        <h1 className="Title">
          I'm Ahmad Adha,
          <br />A Software Developer
        </h1>
      </section>
      <AboutHome />
      <ServiceHome />
      <SkillsHome />
      <ProjectsHome />
    </div>
  );
};

export default Home;

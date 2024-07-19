import React from "react";

import "../../style/Home/Home.css";
import Title from "../../component/Title/Title";

import AboutHome from "./Section/AboutHome";
import ServiceHome from "./Section/ServiceHome";
import SkillsHome from "./Section/SkillsHome";
import ProjectsHome from "./Section/ProjectsHome";

import { Link } from "react-router-dom";

import PromoCard from "../../component/PromoCard/PromoCard";

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
      <PromoCard
        MainText="While you're here, let's get to know each other!"
        Link="https://www.linkedin.com/in/adhaghani/"
        LinkText="Connect with me"
        LinkClassName="Button"
      />
      <ServiceHome />
      <SkillsHome />
      <ProjectsHome />
    </div>
  );
};

export default Home;

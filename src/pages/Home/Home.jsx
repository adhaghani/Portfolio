import React from "react";

import "../../style/Home/Home.css";

import AboutHome from "./Section/AboutHome";
import ServiceHome from "./Section/ServiceHome";
import SkillsHome from "./Section/SkillsHome";
import ProjectsHome from "./Section/ProjectsHome";

import TypewriterComponent from "typewriter-effect";

import PromoCard from "../../component/PromoCard/PromoCard";

const Home = () => {
  return (
    <div className="Home" id="Home">
      <section id="Hero">
        <h1 className="Title">
          I'm Ahmad Adha,
          <br />
          <span>
            <TypewriterComponent
              options={{
                strings: ["Software Developer.", "Full-Time Student."],
                autoStart: true,
                loop: true,
                delay: 100
              }}
            />
          </span>
        </h1>
      </section>
      <AboutHome />
      <PromoCard
        MainText="While you're here, let's get to know each other!"
        Link="https://www.linkedin.com/in/adhaghani/"
        LinkText="Connect with me"
        LinkClassName="Button"
        LinkIcon="Connect"
      />
      <ServiceHome />
      <SkillsHome />
      <ProjectsHome />
    </div>
  );
};

export default Home;

import React from "react";
import "../../style/Home/Home.css";
import AboutHome from "./Section/AboutHome";
import ServiceHome from "./Section/ServiceHome";
import SkillsHome from "./Section/SkillsHome";
import ProjectsHome from "./Section/ProjectsHome";
import PromoCard from "../../component/PromoCard/PromoCard";
import Hero from "../../component/Hero/Hero";
const Home = () => {
  return (
    <div className="Home" id="Home">
      <Hero mainText={"Hi, I'm Ahmad Adha."} />
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

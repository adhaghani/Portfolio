import React from "react";

import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";

import "./MainPage.css";
const Main = () => {
  return (
    <div className="Main" id="Main">
      <Navigation />
      <div className="Main-Component">
        <Hero />
        <About />
        {/* <Education /> */}
        <Skills />

        <Services />
        <Project />
        {/* <Contact /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Main;

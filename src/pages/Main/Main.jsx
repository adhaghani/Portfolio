import React from "react";

import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

import "./MainPage.css";
const Main = () => {
  return (
    <div className="Main" id="Main">
      <Navigation />
      <div className="Main-Component">
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

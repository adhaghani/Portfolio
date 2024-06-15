import React from "react";

import "./Hero.css";

import profile from "/memoji.png";

import hero1 from "/Hero/hero1.png";
import hero2 from "/Hero/hero2.png";
const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="Hero-Container">
        <div className="greetings-container">
          <h1>
            Hello, I'm <span>Adha</span>
          </h1>
          <p>A computer science student.</p>
        </div>
        <div className="icon-container">
          <div className="image-container">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

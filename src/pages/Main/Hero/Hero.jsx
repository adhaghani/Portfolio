import React from "react";

import "./Hero.css";

import profile from "/memoji.png";                                  
import Button from "../../../Component/Button/Button";
const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="Hero-Container">
        <div className="greetings-container">
          <h1>
            Hello, I'm <span>Adha</span>!
          </h1>
          <h2>
            A computer science Student passionated in Software Development.
          </h2>
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

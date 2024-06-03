import React from "react";

import Title from "../../../Component/Title/Title";

import hello from "/memojiabt.png";

import "./About.css";
const About = () => {
  return (
    <div className="About" id="About">
      <div className="About-Container">
        <Title title="About" subtitle="Who am I?" />

        <div className="About-Content">
          <div className="About-Image">
            <img src={hello} alt="" />
          </div>
          <p className="About-Text">
            Hello Everybody, I am Ahmad Adha. An aspiring software developer
            currently pursuing diploma in computer Science at Universiti
            Teknologi MARA (UiTM). I am currently on my 4th semester and will be
            pursing industrial training on my 5th and final semester.
            <br />
            <br />
            I am looking for an internship for any development positions,
            preferably Front-end Developer. As of right now, I am studying
            React.js, and strengthening my understanding of Object-Oriented
            Programming and Data Structure using Java.
            <br />
            <br />
            Feel free to reach me out if you have/known any positions available
            for internship. You can download my resume below, and do connect
            with me on{" "}
            <a href="https://www.linkedin.com/in/adhaghani" target="_BLANK">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

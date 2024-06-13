import React from "react";

import "./Skills.css";

import Title from "../../../Component/Title/Title";

import SkillCard from "./SkillCard/SkillCard";

import cpp from "/Skills/cpp.svg";
import css3 from "/Skills/css3.svg";
import figma from "/Skills/figma.svg";
import git from "/Skills/git.svg";
import html5 from "/Skills/html5.svg";
import java from "/Skills/java.svg";
import javascript from "/Skills/javascript.svg";
import npm from "/Skills/npm.svg";
import php from "/Skills/php.svg";
import python from "/Skills/python.svg";
import react from "/Skills/react.svg";
import vscode from "/Skills/vscode.svg";
import sass from "/Skills/sass.svg";
import mysql from "/Skills/mysql.svg";

const Skills = () => {
  return (
    <div className="Skills" id="Skills">
      <Title
        title="Technologies"
        subtitle="Some technologies i have been exposed with."
      />
      <div className="SkillCard-Container">
        <SkillCard image={cpp} />
        <SkillCard image={css3} />
        <SkillCard image={figma} />
        <SkillCard image={git} />
        <SkillCard image={html5} />
        <SkillCard image={java} />
        <SkillCard image={javascript} />
        <SkillCard image={npm} />
        <SkillCard image={php} />
        <SkillCard image={python} />
        <SkillCard image={react} />
        <SkillCard image={vscode} />
        <SkillCard image={sass} />
        <SkillCard image={mysql} />
      </div>
    </div>
  );
};

export default Skills;

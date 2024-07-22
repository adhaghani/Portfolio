import React from "react";

import Title from "../../../component/Title/Title";

import CppIcon from "../../../assets/Skills/cppIcon";
import CssIcon from "../../../assets/Skills/cssIcon";
import FigmaIcon from "../../../assets/Skills/figmaIcon";
import GitIcon from "../../../assets/Skills/gitIcon";
import HtmlIcon from "../../../assets/Skills/html5Icon";
import JavaIcon from "../../../assets/Skills/javaIcon";
import JsIcon from "../../../assets/Skills/jsIcon";
import NpmIcon from "../../../assets/Skills/npmIcon";
import PhpIcon from "../../../assets/Skills/phpIcon";
import ReactIcon from "../../../assets/Skills/reactIcon";
import VscIcon from "../../../assets/Skills/vscIcon";
import MysqlIcon from "../../../assets/Skills/MysqlIcon";

const SkillsHome = () => {
  const skills = [
    {
      icon: <HtmlIcon />
    },
    {
      icon: <CssIcon />
    },
    {
      icon: <JsIcon />
    },
    {
      icon: <ReactIcon />
    },
    {
      icon: <PhpIcon />
    },
    {
      icon: <JavaIcon />
    },
    {
      icon: <CppIcon />
    },
    {
      icon: <GitIcon />
    },
    {
      icon: <FigmaIcon />
    },
    {
      icon: <VscIcon />
    },
    {
      icon: <NpmIcon />
    },
    {
      icon: <MysqlIcon />
    },
    {
      icon: <HtmlIcon />
    },
    {
      icon: <CssIcon />
    },
    {
      icon: <JsIcon />
    },
    {
      icon: <ReactIcon />
    },
    {
      icon: <PhpIcon />
    },
    {
      icon: <JavaIcon />
    },
    {
      icon: <CppIcon />
    },
    {
      icon: <GitIcon />
    },
    {
      icon: <FigmaIcon />
    },
    {
      icon: <VscIcon />
    },
    {
      icon: <NpmIcon />
    },
    {
      icon: <MysqlIcon />
    }
  ];

  return (
    <section id="Skills">
      <Title
        TitleText="Technology Stack"
        SubText="Technology that i have been exposed with."
      />
      <div className="section-Container">
        <div className="scroller">
          <div className="scroller_inner">
            {skills.map((skill) => (
              <div className="Section-Card">{skill.icon}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsHome;

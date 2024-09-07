import React from "react";

import Title from "../../../component/Title/Title";

import {
  CppIcon,
  CssIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  JavaIcon,
  JsIcon,
  MysqlIcon,
  NpmIcon,
  PhpIcon,
  ReactIcon,
  VscIcon
} from "../../../assets/Skills/SkillsIcon";
import { motion } from "framer-motion";

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
      <div className="Container section-Container">
        <div className="scroller">
          <div className="scroller_inner">
            {skills.map((skill) => (
              <motion.div className="Section-Card" whileHover={{ scale: 1.2 }}>
                {skill.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsHome;

import React, { useState } from "react";

import Title from "../../../component/Title/Title";

import ProjectsCard from "../ProjectsCard";

import { ArrowUpIcon } from "../../../assets/Icon/FunctionIcon";
import { delay, motion } from "framer-motion";
import DevelopmentData from "../../../assets/DevelopmentProject.json";
const DevelopmentProjects = () => {
  const [page, setPage] = useState(0);
  const [OpenSelect, setOpenSelect] = useState(false);

  const pagesType = ["All", "Front-End", "Back-End", "Full-Stack", "Others"];

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
  };
  return (
    <section className="Container" id="Development">
      <Title
        TitleText="Development Projects"
        SubText="all of my development projects using various languages."
      />
      <p className="Filter-Text">Filter Project by Category</p>
      <div className="option-Tab Desktop">
        <div
          className={page === 0 ? "Tab active" : "Tab"}
          onClick={() => setPage(0)}
        >
          All
        </div>
        <div
          className={page === 1 ? "Tab active" : "Tab"}
          onClick={() => setPage(1)}
        >
          Front-End
        </div>
        <div
          className={page === 2 ? "Tab active" : "Tab"}
          onClick={() => setPage(2)}
        >
          Back-End
        </div>
        <div
          className={page === 3 ? "Tab active" : "Tab"}
          onClick={() => setPage(3)}
        >
          Full-Stack
        </div>
        <div
          className={page === 4 ? "Tab active" : "Tab"}
          onClick={() => setPage(4)}
        >
          Others
        </div>
      </div>
      <div className="option-Tab Mobile">
        <div className="Filter">
          <div className="Tab" onClick={() => setOpenSelect(!OpenSelect)}>
            {pagesType[page]}
            <motion.div animate={{ rotate: OpenSelect ? 180 : 0 }}>
              <ArrowUpIcon />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="Option"
          initial="hidden"
          animate={OpenSelect ? "visible" : "hidden"}
          variants={list}
        >
          <motion.div
            className={page === 0 ? "Tab active" : "Tab"}
            onClick={() => {
              setPage(0), setOpenSelect(false);
            }}
            variants={item}
          >
            All
          </motion.div>
          <motion.div
            className={page === 1 ? "Tab active" : "Tab"}
            onClick={() => {
              setPage(1), setOpenSelect(false);
            }}
            variants={item}
          >
            Front-End
          </motion.div>
          <motion.div
            className={page === 2 ? "Tab active" : "Tab"}
            onClick={() => {
              setPage(2), setOpenSelect(false);
            }}
            variants={item}
          >
            Back-End
          </motion.div>
          <motion.div
            className={page === 3 ? "Tab active" : "Tab"}
            onClick={() => {
              setPage(3), setOpenSelect(false);
            }}
            variants={item}
          >
            Full-Stack
          </motion.div>
          <motion.div
            className={page === 4 ? "Tab active" : "Tab"}
            onClick={() => {
              setPage(4), setOpenSelect(false);
            }}
            variants={item}
          >
            Others
          </motion.div>
        </motion.div>
      </div>
      <div className="section-Container">
        {DevelopmentData.filter((Data) => {
          if (page === 0) return true;
          return Data.type === pagesType[page];
        }).length > 0 ? (
          DevelopmentData.filter((Data) => {
            if (page === 0) return true;
            return Data.type === pagesType[page];
          }).map((Data, index) => <ProjectsCard key={index} {...Data} />)
        ) : (
          <motion.div
            className="Empty_Pages"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1>No Project... Yet.</h1>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DevelopmentProjects;

import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import Title from "../../../Component/Title/Title";
import noImage from "/noimg.svg";

import projectAdvice from "/project_advice.png";
import projectcalc from "/project_calc.png";
import projectchart from "/project_chart.png";
import projectportfolio from "/project_portfolio.png";
import projectstarbuck from "/project_starbuck.png";

const Project = () => {
  return (
    <div className="Project" id="Project">
      <div className="Project-Container">
        <Title title="Projects" subtitle="All of my past projects." />
        <div className="Card-Container">
          <ProjectCard
            title="Starbucks Landing Page"
            subtitle="HTML, Css, js, React.js"
            image={projectstarbuck}
            livelink="https://adhaghani.github.io/starbuck-lp.github.io/"
            githublink="https://github.com/adhaghani/starbuck-lp.github.io"
            techstack="HTML, Css, js, React.js"
          />
          <ProjectCard
            title="Expense Chart"
            subtitle="HTML, Css, js, JSON"
            image={projectchart}
            livelink="https://adhaghani.github.io/ExpensesChart/"
            githublink="https://github.com/adhaghani/ExpensesChart"
            techstack="HTML, Css, js, React.js"
          />
          <ProjectCard
            title="Advice Generator"
            subtitle="HTML, Css, js, React.js, API"
            image={projectAdvice}
            livelink="https://adhaghani.github.io/AdviceGenerator/"
            githublink="https://github.com/adhaghani/AdviceGenerator"
            techstack="HTML, Css, js, React.js"
          />
          <ProjectCard
            title="Calculator"
            subtitle="HTML, Css, js, React.js"
            image={projectcalc}
            livelink="https://adhaghani.github.io/Calculator/"
            githublink="https://github.com/adhaghani/Calculator"
            techstack="HTML, Css, js, React.js"
          />
          <ProjectCard
            title="Personal Portfolio"
            subtitle="HTML, Css, js, React.js"
            image={projectportfolio}
            livelink="https://adhaghani.github.io/eportfolio/"
            githublink="https://github.com/adhaghani/eportfolio"
            techstack="HTML, Css, js, React.js"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;

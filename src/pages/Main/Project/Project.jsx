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
import projectUC from "/project_UC.png";
import projectSunny from "/project_sunnyside.png";
const Project = () => {
  return (
    <div className="Project" id="Project">
      <div className="Project-Container">
        <Title title="Projects" subtitle="All of my past projects." />
        <div className="Card-Container">
          <ProjectCard
            title="Personal Portfolio"
            subtitle="HTML, Css, js, React.js"
            image={projectportfolio}
            livelink="https://adhaghani.github.io/eportfolio/"
            githublink="https://github.com/adhaghani/eportfolio"
          />
          <ProjectCard
            title="UndanganCinta"
            subtitle="HTML, Css, js, React.js"
            image={projectUC}
            livelink="https://adhaghani.github.io/UndanganCinta/"
            githublink="https://github.com/adhaghani/UndanganCinta"
          />
          <ProjectCard
            title="SunnySide Landing Page"
            subtitle="HTML, Css, js, React.js"
            image={projectSunny}
            livelink="https://adhaghani.github.io/SunnySideLandingPage/"
            githublink="https://github.com/adhaghani/SunnySideLandingPage"
          />
          <ProjectCard
            title="Car Dealership System"
            subtitle="Java, OOP Concept"
            githublink="https://github.com/adhaghani/SimpleCarDealershipApplication"
          />

          <ProjectCard
            title="Bank System"
            subtitle="Java, OOP Concept, Data Structure"
            githublink="https://github.com/adhaghani/SimpleCarDealershipApplication"
          />
          <ProjectCard
            title="Starbucks Landing Page"
            subtitle="HTML, Css, js, React.js"
            image={projectstarbuck}
            livelink="https://adhaghani.github.io/starbuck-lp.github.io/"
            githublink="https://github.com/adhaghani/starbuck-lp.github.io"
          />
          <ProjectCard
            title="Expense Chart"
            subtitle="HTML, Css, js, JSON"
            image={projectchart}
            livelink="https://adhaghani.github.io/ExpensesChart/"
            githublink="https://github.com/adhaghani/ExpensesChart"
          />
          <ProjectCard
            title="Advice Generator"
            subtitle="HTML, Css, js, React.js, API"
            image={projectAdvice}
            livelink="https://adhaghani.github.io/AdviceGenerator/"
            githublink="https://github.com/adhaghani/AdviceGenerator"
          />
          <ProjectCard
            title="Calculator"
            subtitle="HTML, Css, js, React.js"
            image={projectcalc}
            livelink="https://adhaghani.github.io/Calculator/"
            githublink="https://github.com/adhaghani/Calculator"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;

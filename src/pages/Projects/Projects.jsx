import React from "react";
import Title from "../../component/Title/Title";

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <section id="Hero">
        <h1 className="Title">
          My Projects,
          <br /> Enjoy :)
        </h1>
      </section>

      <section id="Design">
        <Title
          TitleText="Design Projects"
          SubText="Design projects that i have taken part in."
        />
        <div className="section-Container"></div>
      </section>
      <section id="Development">
        <Title
          TitleText="Development Projects"
          SubText="all of my development projects using various languages."
        />
        <div className="section-Container"></div>
      </section>
    </div>
  );
};

export default Projects;

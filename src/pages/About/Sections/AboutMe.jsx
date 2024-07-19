import React from "react";
import Title from "../../../component/Title/Title";
const AboutMe = () => {
  return (
    <section id="Me">
      <Title
        TitleText={"About Me"}
        SubText={"Everything you need to know about me."}
      />
      <div className="section-Container"></div>
    </section>
  );
};

export default AboutMe;

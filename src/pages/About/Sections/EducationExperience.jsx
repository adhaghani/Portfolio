import React from "react";

import Education from "./Education";
import Experience from "./Experience";
const EducationExperience = () => {
  return (
    <section id="EducationExperience">
      <div className="section-Container">
        <div className="Group">
          <Education />
        </div>
        <div className="Group">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;

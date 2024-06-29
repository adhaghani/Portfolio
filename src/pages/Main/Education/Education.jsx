import React from "react";

import Title from "../../../Component/Title/Title";
import "./Education.css";
import EducationCard from "./EducationCard/EducationCard";

import data from "./Data.json";

import UiTM from "/Education/UiTM.svg";
const Education = () => {
  return (
    <div className="Education" id="Education">
      <Title title="Education" subtitle="My Education Journey." />
      <div className="Experiece-Container">
        {data.map((data) => (
          <EducationCard data={data} imgLink={UiTM} />
        ))}
      </div>
    </div>
  );
};

export default Education;

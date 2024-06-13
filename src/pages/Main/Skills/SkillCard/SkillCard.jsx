import React from "react";

import "../Skills.css";
const SkillCard = (props) => {
  return (
    <div className="SkillCard" id="SkillCard">
      <img src={props.image} alt="" />
    </div>
  );
};

export default SkillCard;

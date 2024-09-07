import React from "react";

import Title from "../../../component/Title/Title";

import InvolvementCard from "./InvolvementCard";

import InvolvementData from "../../../assets/Involvement.json";
const Involvement = () => {
  return (
    <section id="Involvement">
      <Title
        TitleText={"Involvement"}
        SubText={"My Involvement, including clubs and volunteers."}
      />
      <div className="Container section-Container">
        {InvolvementData.map((Data, index) => (
          <InvolvementCard key={index} {...Data} />
        ))}
      </div>
    </section>
  );
};

export default Involvement;

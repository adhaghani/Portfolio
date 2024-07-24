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
      <div className="section-Container">
        {InvolvementData.map((Data, id) => (
          <InvolvementCard key={id} {...Data} />
        ))}
      </div>
    </section>
  );
};

export default Involvement;

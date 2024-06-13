import React from "react";

import "./Services.css";

import Title from "../../../Component/Title/Title";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div className="Services" id="Services">
      <Title title="Services" subtitle="What services i offer for you?" />
      <div className="ServiceCard-Container">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;

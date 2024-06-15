import React from "react";

import "./Services.css";

import Title from "../../../Component/Title/Title";
import ServiceCard from "./ServiceCard/ServiceCard";

import hero1 from "/Hero/hero1.png";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Web Development",
      price: 250.0,
      feature:
        "I am able to develop a fully responsive websites with HTML, CSS, Javascript and React.js I also have experience in Back-end development using languages like PHP and mySQL."
    },
    {
      id: 2,
      title: "Graphic Design",
      price: 650.0,
      feature:
        "With multiple satisfied client, I have established a well reputation amongst my University friend as a reliable and great graphic designers. I am able to deliver quality content on short notice."
    }
  ];

  return (
    <div className="Services" id="Services">
      <Title title="Services" subtitle="What i can do as of right now." />
      <div className="wrapper">
        <div className="ServiceImage-Container">
          <img src={hero1} alt="" />
        </div>
        <div className="ServiceCard-Container">
          {serviceData.map((serviceData) => (
            <ServiceCard data={serviceData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

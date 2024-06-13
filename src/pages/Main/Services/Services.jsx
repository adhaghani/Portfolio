import React from "react";

import "./Services.css";

import Title from "../../../Component/Title/Title";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Web Redesign",
      price: "250.00",
      feature: [
        "Website Redesign Services",
        "Weekly Progress Updates",
        "Fully Responsive Design",
        "FREE 2-Month Technical Support"
      ]
    },
    {
      id: 2,
      title: "Landing Page",
      price: "450.00",
      feature: [
        "Multi-Page Website",
        "Website Design Services",
        "Fully Responsive Design",
        "FREE 2-Month Technical Support",
        "FREE 1-year domain and hosting"
      ]
    }
  ];

  return (
    <div className="Services" id="Services">
      <Title title="Services" subtitle="What services i offer for you?" />
      <div className="ServiceCard-Container">
        {serviceData.map((serviceData) => (
          <ServiceCard data={serviceData} />
        ))}
      </div>
    </div>
  );
};

export default Services;

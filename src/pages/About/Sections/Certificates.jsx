import React, { useState } from "react";
import Title from "../../../component/Title/Title";

import CertificateCard from "./CertificateCard";

import CertificateData from "../../../assets/Certificates.json";
const Certificates = () => {
  const half = Math.ceil(CertificateData.length / 2);
  const firstHalf = CertificateData.slice(0, half);
  const secondHalf = CertificateData.slice(half);
  return (
    <section id="Certificates">
      <Title
        TitleText={"Certificates"}
        SubText={"List of Certification i have accumulated."}
      />
      <div className="section-Container">
        <div className="Group">
          {firstHalf.map((Certificate, index) => (
            <CertificateCard key={index} {...Certificate} />
          ))}
        </div>
        <div className="Group">
          {secondHalf.map((Certificate, index) => (
            <CertificateCard key={index} {...Certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

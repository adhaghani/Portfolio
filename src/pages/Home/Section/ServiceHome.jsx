import React from "react";

import Title from "../../../component/Title/Title";

const ServiceHome = () => {
  return (
    <section id="Service">
      <Title TitleText="Service" SubText="few things that i can do." />
      <div className="section-Container">
        <div className="Section-Card">
          <h2 className="Service-Title">Web Design</h2>
          <p className="service-Details">
            With experience using figma, and countless design projects. I am
            able to create a web design that's user friendly with a focus on
            mobile responsiveness and User Experience.
          </p>
        </div>
        <div className="Section-Card">
          <h2 className="Service-Title">Web Development</h2>
          <p className="service-Details">
            Proficient in HTML, Javascript, CSS, React.js, SCSS. I am able to
            build a simple landing page with multiple pages for your company.
          </p>
        </div>
        <div className="Section-Card">
          <h2 className="Service-Title">Mock-Up Design</h2>
          <p className="service-Details">
            With countless clients and proof-of-works, I am able to design a
            Mock-Up for your upcoming products which has the potential to be
            used for marketing purposes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHome;

import React from "react";

import DiY from "../../../assets/Icon/DiY";
import Title from "../../../component/Title/Title";
const Experience = () => {
  return (
    <>
      <Title
        TitleText={"Work Experience"}
        SubText={"My past work experience."}
      />
      <div className="Section-Card">
        <div className="Header">
          <div className="Logo">
            <DiY />
          </div>
          <div className="Details">
            <h3 className="Name">MR.DIY</h3>
            <p className="Course">Sales Promoter, PHK Branch</p>
            <p className="Date">May 2022 - June 2022</p>
          </div>
        </div>
        <div className="Body">
          <div className="Detail-Card">
            <h4 className="Card-Title">Experience : </h4>
            <ul className="List">
              <li>
                - Assisted Customer with finding products which increases
                product exposure to new customer.
              </li>
              <li>
                - Guide Customer on how to demonstrate the product, resulting in
                increase customer satisfaction towards customer service
                provided.
              </li>
              <li>
                - Communicated Effectively between colleagues, ensuring
                efficient store operation and increase in daily sales.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

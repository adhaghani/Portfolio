import React from "react";

import Button from "../../../../Component/Button/Button";
const ServiceCard = () => {
  return (
    <div className="ServiceCard" id="ServiceCard">
      <div className="Title">
        <h3>Web Development</h3>
      </div>
      <div className="Fee">
        <h3>
          {" "}
          <span>RM</span>250.00
        </h3>
      </div>
      <div className="Content">
        <ul>
          <li>
            <p>Test</p>
          </li>
          <li>
            <p>Test</p>
          </li>
          <li>
            <p>Test</p>
          </li>
          <li>
            <p>Test</p>
          </li>
          <li>
            <p>Test</p>
          </li>
          <li>
            <p>Test</p>
          </li>
        </ul>
      </div>
      <Button value={"test"} />
    </div>
  );
};

export default ServiceCard;

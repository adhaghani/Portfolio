import React from "react";

import Button from "../../../../Component/Button/Button";

import offer from "/Services/offer.svg";
const ServiceCard = (props) => {
  return (
    <div className="ServiceCard" id="ServiceCard">
      <div className="Title">
        <h3>{props.data.title}</h3>
      </div>
      <div className="Fee">
        <h3>
          {" "}
          <span>RM</span>
          {props.data.price}
        </h3>
      </div>
      <div className="Content">
        <ul>
          {props.data.feature.map((feature) => (
            <li>
              <p>
                {" "}
                <img src={offer} alt="" /> {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Button value={"Get Started"} classname="button Full Fillprimary" />
    </div>
  );
};

export default ServiceCard;

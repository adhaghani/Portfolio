import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="ServiceCard" id="ServiceCard">
      <div className="Title">
        <h3>{props.data.title}</h3>
      </div>
      <div className="Content">
        <p>{props.data.feature}</p>
      </div>{" "}
    </div>
  );
};

export default ServiceCard;

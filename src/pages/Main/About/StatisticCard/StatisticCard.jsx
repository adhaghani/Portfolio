import React from "react";

const StatisticCard = (props) => {
  return (
    <div id="StatisticCard" className="StatisticCard">
      <div className="icon">
        <img src={props.img} alt="" />
      </div>
      <div className="details">
        <div className="Numbers">
          <h1>{props.number}</h1>
        </div>
        <div className="Title">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;

import React from "react";

import "./Title.css";

const Title = (props) => {
  return (
    <div className="Title-Container">
      <h1 className="Title">{props.title}</h1>
      <p className="Subtitle">{props.subtitle}</p>
    </div>
  );
};

export default Title;

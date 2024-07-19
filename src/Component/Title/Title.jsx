import React from "react";

const Title = ({ TitleText, SubText }) => {
  return (
    <div className="Title-Container">
      <h1 className="Title">{TitleText}</h1>
      <p className="SubTitle">{SubText}</p>
    </div>
  );
};

export default Title;

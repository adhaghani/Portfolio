import React from "react";

const Title = ({ TitleText, SubText }) => {
  return (
    <div className="Container Title-Container">
      <h1 className="Title">{TitleText}</h1>
      {SubText && <p className="SubTitle">{SubText}</p>}
    </div>
  );
};

export default Title;

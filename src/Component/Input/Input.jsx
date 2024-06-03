import React from "react";

import "./Input.css";
const Input = (props) => {
  return (
    <>
      {props.isInput ? (
        <div className="Input">
          <label htmlFor={props.name}>{props.label}</label>
          <input
            id={props.name}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      ) : (
        <div className="Input">
          <label htmlFor={props.name}>{props.label}</label>
          <textarea
            id={props.name}
            name={props.name}
            placeholder={props.placeholder}
          ></textarea>
        </div>
      )}
    </>
  );
};

export default Input;

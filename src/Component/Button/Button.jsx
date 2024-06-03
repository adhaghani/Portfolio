import React from "react";
import "./Button.css";

import code from "/code.svg";
import view from "/view.svg";
const Button = (props) => {
  return (
    <a className={props.classname} href={props.href}>
      {props.type == "code" ? (
        <img src={code} alt="" />
      ) : (
        <img src={view} alt="" />
      )}
      {props.value}
    </a>
  );
};

export default Button;

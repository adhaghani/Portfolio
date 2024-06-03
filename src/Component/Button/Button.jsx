import React from "react";
import "./Button.css";

import code from "/code.svg";
import view from "/view.svg";
const Button = (props) => {
  return (
    <>
      {props.type == "code" && (
        <a className={props.classname} href={props.href}>
          <img src={code} alt="" />
          {props.value}
        </a>
      )}
      {props.type == "view" && (
        <a className={props.classname} href={props.href}>
          <img src={view} alt="" />
          {props.value}
        </a>
      )}
      {props.type == "submit" && (
        <button type="submit" className={props.classname} href={props.href}>
          {props.value}
        </button>
      )}
    </>
  );
};

export default Button;

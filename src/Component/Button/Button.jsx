import React from "react";

import "../../style/Button/Button.css";
const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onclick}>
      {props.text}
    </button>
  );
};

export default Button;

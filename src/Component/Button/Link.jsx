import React from "react";
import { Link } from "react-router-dom";

import "../../style/Button/Button.css";
const LinkTo = (props) => {
  return (
    <>
      {props.goOutside ? (
        <a
          href={props.Link}
          target="_BLANK"
          className={props.className}
          onClick={props.onclick}
        >
          {props.text}
        </a>
      ) : (
        <Link
          to={props.Link}
          className={props.className}
          onClick={props.onclick}
        >
          {props.text}
        </Link>
      )}
    </>
  );
};

export default LinkTo;

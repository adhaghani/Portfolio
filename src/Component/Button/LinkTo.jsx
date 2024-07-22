import React from "react";
import { Link } from "react-router-dom";

import "../../style/Button/Button.css";

import Code from "../../assets/Icon/Code";
import Display from "../../assets/Icon/Display";
import Email from "../../assets/Icon/Email";
import Connect from "../../assets/Icon/Connect";
const LinkTo = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
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

          {props.icon === "Code" && <Code />}
          {props.icon === "Display" && <Display />}
          {props.icon === "Email" && <Email />}
          {props.icon === "Connect" && <Connect />}
        </a>
      ) : (
        <Link
          to={props.Link}
          className={props.className}
          onClick={(props.onclick, scrollToTop)}
        >
          {props.text}
        </Link>
      )}
    </>
  );
};

export default LinkTo;

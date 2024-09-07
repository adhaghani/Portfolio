import React from "react";
import { Link } from "react-router-dom";

import "../../style/Button/Button.css";

import {
  CodeIcon,
  EmailIcon,
  ConnectIcon,
  ViewIcon
} from "../../assets/Icon/FunctionIcon";
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
        <>
          {props.download ? (
            <a
              href={props.Link}
              target="_BLANK"
              className={props.className}
              onClick={props.onclick}
              download={props.download}
            >
              {props.text}

              {props.icon === "Code" && <CodeIcon />}
              {props.icon === "Display" && <ViewIcon />}
              {props.icon === "Email" && <EmailIcon />}
              {props.icon === "Connect" && <ConnectIcon />}
            </a>
          ) : (
            <a
              href={props.Link}
              target="_BLANK"
              className={props.className}
              onClick={props.onclick}
            >
              {props.text}
              {props.icon === "Code" && <CodeIcon />}
              {props.icon === "Display" && <ViewIcon />}
              {props.icon === "Email" && <EmailIcon />}
              {props.icon === "Connect" && <ConnectIcon />}
            </a>
          )}
        </>
      ) : (
        <Link
          to={props.Link}
          className={props.className}
          onClick={(props.onclick, scrollToTop)}
        >
          {props.text}
          {props.icon === "Code" && <CodeIcon />}
          {props.icon === "Display" && <ViewIcon />}
          {props.icon === "Email" && <EmailIcon />}
          {props.icon === "Connect" && <ConnectIcon />}
        </Link>
      )}
    </>
  );
};

export default LinkTo;

import React from "react";
import TypewriterComponent from "typewriter-effect";
const Hero = (props) => {
  return (
    <div className="Container" id="Hero">
      <h1 className="Title">
        {props.mainText}
        <br />
        {props.subText ? (
          <span>{props.subText}</span>
        ) : (
          <span>
            {" "}
            <TypewriterComponent
              options={{
                strings: ["Tech Enthusiast.", "Full-Time Student."],
                autoStart: true,
                loop: true,
                delay: 125
              }}
            />
          </span>
        )}
      </h1>
    </div>
  );
};

export default Hero;

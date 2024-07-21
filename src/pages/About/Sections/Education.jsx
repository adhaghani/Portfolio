import React from "react";
import UiTM from "../../../assets/Icon/UiTM";
import Title from "../../../component/Title/Title";
const Education = () => {
  return (
    <>
      <Title TitleText={"Education"} SubText={"My Education."} />
      <div className="Section-Card">
        <div className="Header">
          <div className="Logo">
            <UiTM />
          </div>
          <div className="Details">
            <h3 className="Name">Universiti Teknologi MARA (UiTM)</h3>
            <p className="Course">Diploma in Computer Science</p>
            <p className="Date">
              October 2022 - Present ,{" "}
              <span className="Grade"> CGPA : 3.67 / 4.00</span>
            </p>
          </div>
        </div>
        <div className="Body">
          <div className="Detail-Card">
            <h4 className="Card-Title">Organization Joined :</h4>
            <ul className="List">
              <li>
                <a href="">- MARA Youth Technology Computer Club (MYTECC)</a>
              </li>
              <li>
                <a href="">
                  - Malaysia Agroentrepreneurial Club for University Student
                  (MyAgrosis)
                </a>
              </li>
              <li>
                <a href="">- PhotoMedia Club (PMC)</a>
              </li>
            </ul>
          </div>
          <div className="Detail-Card">
            <h4 className="Card-Title">Experience : </h4>
            <ul className="List">
              <li>
                - Actively Involved in Various Programs and Competitions.
                garning reputation for being an active student.
              </li>
              <li>
                - Contributed well to all group assginments, Communiaced
                effectively between groupmates ensuring work are assigned
                effectively.
              </li>
              <li>
                - Represented Computer Science student to 2 (TWO) programming
                competition.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;

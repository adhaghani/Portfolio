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
            <h4 className="Card-Title">Organization Joined:</h4>
            <ul className="List">
              <li>- MARA Youth Technology Computer Club (MYTECC)</li>
              <li>
                - Malaysia Agroentrepreneurial Club for University Student
                (MyAgrosis)
              </li>
              <li>- PhotoMedia Club (PMC)</li>
            </ul>
          </div>
          <div className="Detail-Card">
            <h4 className="Card-Title">Experience: </h4>
            <ul className="List">
              <li>
                - Actively Involved in various programs and competitions held
                inside and outside of campus.
              </li>
              <li>
                - Contributed well to all group assginments, Communicated
                effectively between groupmates ensuring work are assigned
                effectively and equally.
              </li>
            </ul>
          </div>
          <div className="Detail-Card">
            <h4 className="Card-Title">Competition Joined: </h4>
            <ul className="List">
              <li>- MYTECC Codevortex: C++ & Java, First Place.</li>
              <li>
                - CodeAthon UiTM Se-Malaysia 2024, Third-Runner Up, honorary
                mention of having fastest time taken for every solved problem.
              </li>
              <li>
                - International Competition for Programming and Multimedia 2023
                (i-CPROM), Programming category, Runner Up.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;

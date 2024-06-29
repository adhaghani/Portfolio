import React from "react";

const EducationCard = (props) => {
  return (
    <div className="Education-Card">
      <div className="Education-Institute">
        <div className="Education-Logo">
          <img src={props.imgLink} alt="" />
        </div>
        <div className="Education-Details">
          <h4 className="Name">{props.data.Name}</h4>
          <h4 className="Degree">{props.data.Degree}</h4>
          <p className="Timeline">
            {props.data.Date}, CGPA {props.data.CGPA}
          </p>
        </div>
      </div>
      <div className="Education-Content">
        {props.data.Section.Clubs && (
          <div className="Section-Experience">
            <div className="Section-Title">
              <h3>{props.data.Section.Clubs.Title}</h3>
            </div>
            <div className="Section-Details">
              <ul>
                {props.data.Section.Clubs.List.map((club) => (
                  <li>
                    <a href={club.Link} target="_BLANK">
                      {club.Name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {props.data.Section.Experience && (
          <div className="Section-Experience">
            <div className="Section-Title">
              <h3>{props.data.Section.Experience.Title}</h3>
            </div>
            <div className="Section-Details">
              <p>{props.data.Section.Experience.details}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationCard;

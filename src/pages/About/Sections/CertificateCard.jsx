import React, { useState } from "react";
import LinkTo from "../../../component/Button/LinkTo";

import Link from "../../../assets/Icon/Link";
import ArrowUp from "../../../assets/Icon/ArrowUp";
const CertificateCard = (props) => {
  const [IsOpened, setIsOpened] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpened(!IsOpened);
  };

  return (
    <div className="CertificateCard" id="CertificateCard">
      <div className="Card-Header">
        <div className="Card-Title">
          <h4 className="Name">{props.Name}</h4>
          <h4 className="Organization">
            {props.Organization}{" "}
            <span>
              <a href={props.CredentialLink} target="_blank">
                Credentials <Link />
              </a>
            </span>
          </h4>
          <p className="Date">{props.Date}</p>
        </div>
        <button
          className={IsOpened ? "Card-Action Active" : "Card-Action"}
          onClick={handleOpen}
        >
          <ArrowUp />
        </button>
      </div>
      <div
        className={IsOpened ? "Card-Container Shown" : "Card-Container Hidden"}
      >
        <img src={props.imgLink} alt={props.Name} />
      </div>
    </div>
  );
};

export default CertificateCard;

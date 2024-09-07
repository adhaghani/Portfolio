import React, { useState } from "react";

import { motion } from "framer-motion";

import { LinkIcon, ArrowUpIcon } from "../../../assets/Icon/FunctionIcon";
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
                Credentials <LinkIcon />
              </a>
            </span>
          </h4>
          <p className="Date">{props.Date}</p>
        </div>
        <button
          className={IsOpened ? "Card-Action Active" : "Card-Action"}
          onClick={handleOpen}
        >
          <ArrowUpIcon />
        </button>
      </div>
      <motion.div
        className={"Card-Container"}
        initial={{ height: 0 }}
        animate={{ height: IsOpened ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <img src={props.imgLink} alt={props.Name} />
      </motion.div>
    </div>
  );
};

export default CertificateCard;

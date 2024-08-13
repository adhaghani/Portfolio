import React, { useState } from "react";

import ArrowUp from "../../../assets/Icon/ArrowUp";
import { motion } from "framer-motion";
const InvolvementCard = (props) => {
  const [IsOpened, setIsOpened] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpened(!IsOpened);
  };

  return (
    <div className="InovlvementCard" id="InvolvementCard">
      <div className="Header">
        <div className="Main">
          <img src={props.imgLink} alt="" className="Logo" />
          <div className="Details">
            <div className="Name-Position">
              <h3 className="Name">
                {props.Name} <span className="Date">{props.Time}</span>
              </h3>
              <p className="Position">{props.Role}</p>
            </div>
            <button
              className={IsOpened ? "Card-Action Active" : "Card-Action"}
              onClick={handleOpen}
            >
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className={"Card-Container"}
        initial={{ height: 0 }}
        animate={{ height: IsOpened ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <div className="Detail-Container">
          {props.Involvement.map((Data, index) => (
            <>
              <div key={index}>
                <h4 className="Experience-Topic">{Data.Title}</h4>
                <ul className="Experience-Detail">
                  {Data.Details.map((Detail, index) => (
                    <li key={index}>
                      {Detail.ProgramName}
                      {Detail.Position && <span> , {Detail.Position}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
          <div className="Experience-Summary">
            <h4 className="Experience-Topic">Experience Summary</h4>
            <p>{props.ExperienceSummary}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InvolvementCard;

import React, { useRef } from "react";

import "../../style/PromoCard/PromoCard.css";
import LinkTo from "../Button/LinkTo";
import { Link } from "react-router-dom";
const PromoCard = (props) => {
  return (
    <div className="PromoCard">
      <h1 className="Text">{props.MainText}</h1>
      {props.GoInside ? (
        <>
          <LinkTo
            Link={props.Link}
            text={props.LinkText}
            className={props.LinkClassName}
            icon={props.LinkIcon}
          />
        </>
      ) : (
        <>
          <LinkTo
            goOutside
            Link={props.Link}
            text={props.LinkText}
            className={props.LinkClassName}
            icon={props.LinkIcon}
          />
        </>
      )}
    </div>
  );
};

export default PromoCard;

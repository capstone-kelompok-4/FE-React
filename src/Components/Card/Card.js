import React from "react";
import classes from "./Card.module.css";

function Card({ className, children, id }) {
  return <div className={`${classes.card} ${className}`} id={id}>{children}</div>;
}

export default Card;

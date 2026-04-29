import React from "react";
import "./card.css";

export const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

export const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

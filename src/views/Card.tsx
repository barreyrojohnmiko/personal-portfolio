import React from "react";

import "./Card.css";

import CardDto from "../models/CardDto";

const Card = (props: CardDto) => {
  const { fName, lName, age } = props;

  return (
    <div className="users-card">
      <h1>Users Card</h1>
      <div>First Name: {fName}</div>
      <div>Last Name: {lName}</div>
      <div>Age: {age}</div>
    </div>
  );
};

export default Card;

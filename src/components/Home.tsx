import React, { useState, useRef } from "react";

import Card from "../views/Card";

const Home = () => {
  const windowHeight = useRef(window.innerHeight);
  const windowWidth = useRef(window.innerWidth);

  const [cardData, setCardData] = useState({
    fName: "Sofia Noreen",
    lName: "Esposo",
    age: 22,
  });

  return (
    <div className="main-component">
      <Card {...cardData} />
    </div>
  );
};

export default Home;

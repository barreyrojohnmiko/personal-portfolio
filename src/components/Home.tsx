import React, { useState } from "react";

import Card from "../views/Card";

const Home = () => {
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

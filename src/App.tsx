import React, { useState } from "react";
import Card from "./views/Card";

import "./App.css";

const App = () => {
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

export default App;

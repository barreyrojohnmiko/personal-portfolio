import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="main-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/exp" element={<Experience />} />
      </Routes>
    </div>
  );
};

export default App;

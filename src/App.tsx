import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SendMessageButton from "./views/SendMessageButton";

import Home from "./components/Home";

const App = () => {
  return (
    <div className="main-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/send" element={<SendMessageButton />} />
      </Routes>
    </div>
  );
};

export default App;

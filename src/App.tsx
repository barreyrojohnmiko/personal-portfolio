import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Sidebar from "./views/Sidebar";

import "./App.css";

const App = () => {
  return (
    <div className="main-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  );
};

export default App;

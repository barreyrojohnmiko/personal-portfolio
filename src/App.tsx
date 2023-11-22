import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="main-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

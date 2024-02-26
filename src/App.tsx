import "./App.scss";

import { Route, Routes } from "react-router-dom";

import HomeComponent from "./components/home/Home";

const App = () => {
  return (
    <div className="main-component">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
      </Routes>
    </div>
  );
};

export default App;

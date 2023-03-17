import React from "react";
import "./Works.css";

import WorkPanel from "../views/WorkPanel";

const Works = () => {
  return (
    <>
      <div className="works-main-container">
        <div className="works-panel-container">
          <WorkPanel />
          <WorkPanel />
          <WorkPanel />
        </div>
      </div>
    </>
  );
};

export default Works;

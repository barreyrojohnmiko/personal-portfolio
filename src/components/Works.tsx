import React, { RefObject } from "react";
import "./Works.css";

import WorkPanel from "../views/WorkPanel";

type WorksProps = {
  worksSectionRef: RefObject<HTMLDivElement>;
};

const Works: React.FC<WorksProps> = ({ worksSectionRef }) => {
  return (
    <>
      <div className="works-main-container" ref={worksSectionRef}>
        <div className="works-panel-container">
          <WorkPanel />
        </div>
      </div>
    </>
  );
};

export default Works;

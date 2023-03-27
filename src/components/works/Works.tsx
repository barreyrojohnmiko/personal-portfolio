import React, { RefObject } from "react";
import "./Works.css";

import { useSelector } from "react-redux";
import WorkPanel from "../../views/workPanel/WorkPanel";

type WorksProps = { worksSectionRef: RefObject<HTMLDivElement> };

const Works: React.FC<WorksProps> = ({ worksSectionRef }) => {
  const { panelData1 } = useSelector((state: any) => state.worksReducers);

  return (
    <>
      <div className="works-main-container" ref={worksSectionRef}>
        <div className="works-label opening">&lt;projects&gt;</div>
        <div className="works-panel-container">
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
          <WorkPanel {...panelData1} />
        </div>
        <div className="works-label closing">&lt;/projects&gt;</div>
      </div>
    </>
  );
};

export default Works;

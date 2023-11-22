import React, { RefObject } from "react";
import "./Works.css";

import { useSelector } from "react-redux";
import WorkPanel from "../../views/workPanel/WorkPanel";

type WorksProps = { worksSectionRef: RefObject<HTMLDivElement> };

const Works: React.FC<WorksProps> = ({ worksSectionRef }) => {
  const { panelData } = useSelector((state: any) => state.worksReducers);

  return (
    <div className="works-main-container" ref={worksSectionRef}>
      <div className="works-label opening">&lt;projects&gt;</div>

      <div className="works-panel-container">
        {panelData.map((data: any, index: any) => (
          <React.Fragment key={index}>
            <WorkPanel
              projectLabel={data.projectLabel}
              projectDescription={data.projectDescription}
              githubLink={data.githubLink}
              externalLink={data.externalLink}
              techUsed1={data.techUsed1}
              techUsed2={data.techUsed2}
            />
          </React.Fragment>
        ))}
      </div>
      
      <div className="works-label closing">&lt;/projects&gt;</div>
    </div>
  );
};

export default Works;

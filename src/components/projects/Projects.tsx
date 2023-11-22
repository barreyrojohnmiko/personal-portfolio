import React, { RefObject } from "react";
import "./Projects.css";

import { useSelector } from "react-redux";
import ProjectsPanelView from "../../views/projectsPanel/ProjectsPanel";

type ProjectsProps = { projectsSectionRef: RefObject<HTMLDivElement> };

const ProjectsComponent: React.FC<ProjectsProps> = ({ projectsSectionRef }) => {
  const { panelData } = useSelector((state: any) => state.projectsReducers);

  return (
    <div className="projects-main-container" ref={projectsSectionRef}>
      <div className="projects-label opening">&lt;projects&gt;</div>

      <div className="projects-panel-container">
        {panelData.map((data: any, index: any) => (
          <React.Fragment key={index}>
            <ProjectsPanelView
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
      
      <div className="projects-label closing">&lt;/projects&gt;</div>
    </div>
  );
};

export default ProjectsComponent;

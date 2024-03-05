import "./styles.scss";

import React, { RefObject } from "react";

import ProjectPanelView from "../../views/projectPanel/ProjectPanel";

type ProjectsProps = { projectsSectionRef: RefObject<HTMLDivElement> };

const panelData = [
  {
    pID: 1,
    projectLabel: "Notes",
    projectDescription:
      "Effortlessly allows you to create, edit, and organize your notes. With backup feature that ensures that your notes are always secure, with the flexibility to export your local storage data at any time.",
    githubLink: "https://github.com/barreyrojohnmiko/RJSNotes",
    externalLink: "https://barreyrojohnmiko.github.io/RJSNotes/",
    techUsed: ["ReactJS (CRA)", "TypeScript"],
  },
  {
    pID: 2,
    projectLabel: "Breach Analyzer",
    projectDescription:
      "This service emerged after Adobe's largest ever customer accounts breach. This aims to check if your credentials have been exposed, reducing the risk of widespread account compromise.",
    githubLink: "",
    externalLink: "https://breach.itfabrik24.net/",
    techUsed: [
      "ReactJS (Vite)",
      "JavaScript",
      "Material-UI",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    pID: 3,
    projectLabel: "Rückruftool",
    projectDescription:
      "Streamline call management at front desk. Easily notify the intended recipient to promptly return calls whenever someone contacts the company.",
    githubLink: "",
    externalLink:
      "https://rueckrufe.codemeta.info/login?fbclid=IwAR0wG6T2rGI9BeNakJWugxRX_opsrCBT53739VVi99K6o-RiV5vFj2DzGVg",
    techUsed: [
      "ReactJS (Vite)",
      "JavaScript",
      "Material-UI",
      "Node.js",
      "MongoDB",
    ],
  },
];

const ProjectsComponent: React.FC<ProjectsProps> = ({ projectsSectionRef }) => {
  return (
    <div className="projects-container" ref={projectsSectionRef}>
      <div className="projects-label opening">&lt;projects&gt;</div>

      <div className="projects-panel-container">
        {panelData.map((data: any, index: any) => (
          <React.Fragment key={data.pID}>
            <ProjectPanelView
              projectLabel={data.projectLabel}
              projectDescription={data.projectDescription}
              githubLink={data.githubLink}
              externalLink={data.externalLink}
              techUsed={data.techUsed}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="projects-label closing">&lt;/projects&gt;</div>
    </div>
  );
};

export default ProjectsComponent;

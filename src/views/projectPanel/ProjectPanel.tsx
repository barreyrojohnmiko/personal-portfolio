import "./styles.scss";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PanelDetailObject from "../../objects/interface/PanelDetailObject";

const ProjectPanelView = (props: PanelDetailObject) => {
  const renderPanelLogo = (title: string, onClick: any, icon: any) => {
    return (
      <button
        className="panel-logo-wrapper"
        data-toggle="tooltip"
        title={title}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} className="panel-logo" />
      </button>
    );
  };

  return (
    <div className="projects-panel-wrapper">
      <div className="projects-panel-header">
        <FontAwesomeIcon
          icon={faLaptopCode}
          className="projects-panel-left-logo"
        />

        <div className="right-panel-content">
          {props.githubLink &&
            renderPanelLogo(
              "Github",
              () => window.open(props.githubLink),
              faGithub
            )}

          {renderPanelLogo(
            "External Link",
            () => window.open(props.externalLink),
            faArrowUpRightFromSquare
          )}
        </div>
      </div>

      <div className="projects-panel-body-wrapper">
        <div className="panel-title">{props.projectLabel}</div>
        <div className="panel-description">{props.projectDescription}</div>

        {props.credits && (
          <>
            <br />
            
            <div className="panel-description">
              {props.credits.cLabelStart}{" "}
              <a
                className="panel-description"
                href={props.credits.cUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.credits.cName}
              </a>{" "}
              {props.credits.cLabelEnd}
            </div>
          </>
        )}
      </div>

      <div className="projects-panel-footer">
        {props.techUsed.map((tech: string, index: number) => (
          <div key={index} className="tech-label">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPanelView;

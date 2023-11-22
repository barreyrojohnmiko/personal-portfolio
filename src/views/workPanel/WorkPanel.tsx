import "./WorkPanel.css";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PanelDetailsObject from "../../objects/interface/PanelDetailsObject";

const WorkPanel = (props: PanelDetailsObject) => {
  return (
    <div className="work-panel-main-container">
      <div className="work-panel-header">
        <div className="left-panel-content">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="work-panel-left-logo"
          />
        </div>

        <div className="right-panel-content">
          {props.githubLink !== "" ? (
            <div
              data-toggle="tooltip"
              title="Github"
              onClick={() => window.open(props.githubLink)}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="work-panel-right-logo"
              />
            </div>
          ) : null}

          <div
            data-toggle="tooltip"
            title="External Link"
            onClick={() => window.open(props.externalLink)}
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="work-panel-right-logo"
            />
          </div>
        </div>
      </div>

      <div className="work-panel-body-container">
        <div className="panel-title">{props.projectLabel}</div>
        <div className="panel-description">{props.projectDescription}</div>
      </div>

      <div className="work-panel-footer">
        <div className="footer-label">{props.techUsed1}</div>
        <div className="footer-label">{props.techUsed2}</div>
      </div>
    </div>
  );
};

export default WorkPanel;

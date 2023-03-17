import React from "react";
import "./WorkPanel.css";

import {
  faLaptopCode,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import PanelDetailsObject from "../objects/interface/PanelDetailsObject";

const renderPanelHeader = () => {
  return (
    <div className="work-panel-header">
      <div className="left-panel-content">
        <FontAwesomeIcon icon={faLaptopCode} className="work-panel-left-logo" />
      </div>
      <div className="right-panel-content">
        <div
          data-toggle="tooltip"
          title="Github"
          onClick={() => window.open("https://github.com/barreyrojohnmiko")}
        >
          <FontAwesomeIcon icon={faGithub} className="work-panel-right-logo" />
        </div>
        <div
          data-toggle="tooltip"
          title="External Link"
          onClick={() =>
            window.open("https://barreyrojohnmiko.github.io/RJSNotes/")
          }
        >
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="work-panel-right-logo"
          />
        </div>
      </div>
    </div>
  );
};

const renderPanelFooter = (panelData1: PanelDetailsObject) => {
  return (
    <div className="work-panel-footer">
      <div className="footer-label">{panelData1.techUsed1}</div>
      <div className="footer-label">{panelData1.techUsed2}</div>
    </div>
  );
};

const WorkPanel = () => {
  const { panelData1 } = useSelector((state: any) => state.worksReducers);

  return (
    <div className="work-panel-main-container">
      {renderPanelHeader()}
      <div className="work-panel-body-container">
        <div className="panel-title">{panelData1.panelLabel}</div>
        <div className="panel-description">{panelData1.panelDescription}</div>
      </div>
      {renderPanelFooter(panelData1)}
    </div>
  );
};

export default WorkPanel;

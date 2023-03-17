import React from "react";
import "./WorkPanel.css";

import {
  faLaptopCode,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const renderPanelFooter = () => {
  return (
    <div className="work-panel-footer">
      <div className="footer-label">ReactJS</div>
      <div className="footer-label">Redux</div>
    </div>
  );
};

const WorkPanel = () => {
  return (
    <>
      <div className="work-panel-main-container">
        {renderPanelHeader()}
        <div className="work-panel-body-container">
          <div className="panel-title">Notes</div>
          <div className="panel-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sequi rerum suscipit at aliquam officiis inventore atque.
          </div>
        </div>
        {renderPanelFooter()}
      </div>
    </>
  );
};

export default WorkPanel;

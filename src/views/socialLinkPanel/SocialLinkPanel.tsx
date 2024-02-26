import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialLinkPanelObject } from "../../objects/interface/SocialLinkPanelObject";

const SocialLinkPanelView = (props: SocialLinkPanelObject) => {
  return (
    <button
      className="social-link-panel-wrapper"
      data-toggle="tooltip"
      title={props.title}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={props.icon} className="slp-logo" />
    </button>
  );
};

export default SocialLinkPanelView;

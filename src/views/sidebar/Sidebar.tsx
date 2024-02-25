import "./styles.scss";

import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const renderSidebarPanel = (title: string, onClick: any, icon: any) => {
    return (
      <button
        className="sidebar-panel"
        data-toggle="tooltip"
        title={title}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} className="sidebar-logo" />
      </button>
    );
  };

  return (
    <div className="sidebar-main-wrapper">
      <div className="sidebar-sub-wrapper">
        {renderSidebarPanel(
          "Github",
          () => window.open("https://github.com/barreyrojohnmiko"),
          faGithub
        )}

        {renderSidebarPanel(
          "Facebook",
          () => window.open("https://www.facebook.com/JMDBarreyro/"),
          faFacebookF
        )}

        {renderSidebarPanel(
          "Instagram",
          () => window.open("https://www.instagram.com/barreyro_miko/"),
          faInstagram
        )}

        {renderSidebarPanel(
          "Linkedin",
          () => window.open("https://www.linkedin.com/in/barreyrojohnmiko/"),
          faLinkedin
        )}
      </div>
    </div>
  );
};

export default Sidebar;

import "./Sidebar.css";

import { faFacebookF, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="sidebar-main-container">
      <div className="sidebar-sub-container">
        <div data-toggle="tooltip" title="Facebook" onClick={() => window.open('https://www.facebook.com/JMDBarreyro/')}>
          <FontAwesomeIcon icon={faFacebookF} className="sidebar-logo" />
        </div>
        <div data-toggle="tooltip" title="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/john-miko-barreyro-38463225b/')}>
          <FontAwesomeIcon icon={faLinkedin} className="sidebar-logo" />
        </div>
        <div data-toggle="tooltip" title="Github" onClick={() => window.open('https://github.com/barreyrojohnmiko')}>
          <FontAwesomeIcon icon={faGithub} className="sidebar-logo" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

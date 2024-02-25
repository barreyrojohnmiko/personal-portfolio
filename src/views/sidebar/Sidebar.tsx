import "./styles.scss";

import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import SocialLinkPanelView from "../socialLinkPanel/SocialLinkPanel";

const SidebarView = () => {
  return (
    <div className="sidebar-main-wrapper">
      <div className="sidebar-sub-wrapper">
        <SocialLinkPanelView
          title={"Github"}
          onClick={() => window.open("https://github.com/barreyrojohnmiko")}
          icon={faGithub}
        />

        <SocialLinkPanelView
          title={"Facebook"}
          onClick={() => window.open("https://www.facebook.com/JMDBarreyro/")}
          icon={faFacebookF}
        />

        <SocialLinkPanelView
          title={"Instagram"}
          onClick={() =>
            window.open("https://www.instagram.com/barreyro_miko/")
          }
          icon={faInstagram}
        />

        <SocialLinkPanelView
          title={"Linkedin"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/barreyrojohnmiko/")
          }
          icon={faLinkedin}
        />
      </div>
    </div>
  );
};

export default SidebarView;

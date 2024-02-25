import "./styles.scss";

import AnimatedButtonObject from "../../objects/interface/AnimatedButtonObject";

const AnimatedButtonView = (props: AnimatedButtonObject) => {
  return (
    <button className="animated-button" onClick={props.animatedButtonClick}>
      <span /> <span /> <span /> <span /> Resume
    </button>
  );
};

export default AnimatedButtonView;

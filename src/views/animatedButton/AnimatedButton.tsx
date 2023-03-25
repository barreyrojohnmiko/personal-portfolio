import "./AnimatedButton.css";
import AnimatedButtonObject from "../../objects/interface/AnimatedButtonObject";

const AnimatedButton = (props: AnimatedButtonObject) => {
  return (
    <div onClick={props.animatedButtonClick}>
      <button className="animated-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span> Resume
      </button>
    </div>
  );
};

export default AnimatedButton;
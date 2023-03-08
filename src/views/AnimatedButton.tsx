import React from "react";
import "./AnimatedButton.css";

interface AnimatedButtonProps {
  animatedButtonClick: () => void;
}

const AnimatedButton = ({ animatedButtonClick }: AnimatedButtonProps) => {
  return (
    <div onClick={animatedButtonClick}>
      <button className="animated-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span> Contact Me
      </button>
    </div>
  );
};

export default AnimatedButton;

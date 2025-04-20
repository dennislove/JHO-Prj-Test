import React from "react";
import "./ToggleSwitch.scss"; // nếu có SCSS

interface ToggleSwitchProps {
  isOn?: boolean;
  onToggle?: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  return (
    <div className={`toggle-switch ${isOn ? "on" : ""}`} onClick={onToggle}>
      <div className="switch-handle"></div>
    </div>
  );
};

export default ToggleSwitch;

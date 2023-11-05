import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import your CSS file for styling

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-switch">
      <label className={`switch ${isToggled ? 'on' : 'off'}`}>
        <input type="checkbox" checked={isToggled} onChange={toggleHandler} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;

import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import your CSS file for styling
import axios from 'axios'

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
    var state = isToggled ? 0 : 1;
    axios.post("http://localhost:8222/api/v1/service/" + state)
      .then(res => {
        console.log(res.data);
        if (res.data === "Service Enabled") {
          alert("Service Enabled")
        }
        else if (res.data === "Service Disabled") {
          alert("Service Disabled")
        }

      }).catch(err => {
        console.log(err);
      })
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

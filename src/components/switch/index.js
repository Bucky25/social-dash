import React, { useRef } from "react";
import "./index.css";

const Switch = ({ darkMode, setDarkMode }) => {
  const ref = useRef(null);

  const handleChange = () => setDarkMode(ref.current.checked);

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">{darkMode ? "Dark Mode" : "Light Mode"}</p>
      <input
        ref={ref}
        onChange={handleChange}
        type="checkbox"
        checked={darkMode}
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
};

export default Switch;

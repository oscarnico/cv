import React, { useState } from "react";
import "./collapsibleSection.css";

const CollapsibleSection = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="collapsible-section">
      <h2
        className={`collapsible-title ${isVisible ? "open" : ""}`}
        onClick={toggleVisibility}
      >
        {title}
        <span className="arrow" />
      </h2>

      <div className={`section-content ${isVisible ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;

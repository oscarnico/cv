import React, { useState } from "react";
import "./collapsibleSection.css";

const CollapsibleSection = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="collapsible-section">
      <h2 onClick={toggleVisibility}>
        {title}{" "}
        {isVisible ? (
          <span className="arrow">&uarr;</span>
        ) : (
          <span className="arrow">&darr;</span>
        )}
      </h2>
      {isVisible && <div className="section-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;

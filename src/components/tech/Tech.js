import React, { useState, useEffect } from "react";
import "./tech.css";
import mongo from "../../images/mongodb_original_wordmark_logo_icon_146425.png";
import liquid from "../../images/liquid1.png";
import css from "../../images/css_original_wordmark_logo_icon_146576.png";
import docker from "../../images/docker_original_wordmark_logo_icon_146557.png";
import html from "../../images/html_original_wordmark_logo_icon_146478.png";
import node from "../../images/nodejs_original_wordmark_logo_icon_146412.png";
import git from "../../images/git_original_wordmark_logo_icon_146510.png";
import c from "../../images/csharp_original_logo_icon_146578.png";
import js from "../../images/javascript_original_logo_icon_146455.png";
import react from "../../images/react_original_wordmark_logo_icon_146375.png";
import npm from "../../images/npm_original_wordmark_logo_icon_146402.png";

const Tech = () => {
  const [offset, setOffset] = useState(0);
  const items = [
    { type: "image", src: liquid },
    { type: "image", src: mongo },
    { type: "image", src: css },
    { type: "image", src: docker },
    { type: "image", src: html },
    { type: "image", src: node },
    { type: "image", src: c },
    { type: "image", src: git },
    { type: "image", src: js },
    { type: "image", src: react },
    { type: "image", src: npm },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  const displayedItems = [
    items[offset % items.length],
    items[(offset + 1) % items.length],
    items[(offset + 2) % items.length],
    items[(offset + 3) % items.length],
  ];

  return (
    <div className="slider">
      <div className="slide-container">
        <div className="slides container-tech">
          {displayedItems.map((item, index) => (
            <div key={index}>
              <img src={item.src} alt="slider image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;

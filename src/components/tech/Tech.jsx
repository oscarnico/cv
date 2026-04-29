// import React from "react";
// import "./tech.css";

// import mongo from "../../images/mongodb_original_wordmark_logo_icon_146425.png";
// import liquid from "../../images/liquid1.png";
// import css from "../../images/css_original_wordmark_logo_icon_146576.png";
// import docker from "../../images/docker_original_wordmark_logo_icon_146557.png";
// import html from "../../images/html_original_wordmark_logo_icon_146478.png";
// import node from "../../images/nodejs_original_wordmark_logo_icon_146412.png";
// import git from "../../images/git_original_wordmark_logo_icon_146510.png";
// import c from "../../images/csharp_original_logo_icon_146578.png";
// import js from "../../images/javascript_original_logo_icon_146455.png";
// import react from "../../images/react_original_wordmark_logo_icon_146375.png";
// import npm from "../../images/npm_original_wordmark_logo_icon_146402.png";
// import shopi from "../../images/Shopify_icon.png";

// const Tech = () => {
//   const tech = [
//     mongo,
//     liquid,
//     css,
//     docker,
//     html,
//     node,
//     shopi,
//     c,
//     git,
//     js,
//     react,
//     npm,
//   ];

//   return (
//     <section className="tech-section">
//       <div className="tech-header">
//         <h2 className="tech-title">Tecnologías</h2>
//         <p className="tech-subtitle">
//           Stack con el que desarrollo productos escalables y modernos
//         </p>
//       </div>

//       <div className="marquee">
//         <div className="marquee-track">
//           {[...tech, ...tech].map((item, index) => (
//             <div className="tech-item" key={index}>
//               <img src={item} alt="tech logo" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tech;
import React from "react";
import "./tech.css";

const Tech = () => {
  const frontend = ["JavaScript", "HTML", "CSS", "Liquid", "Shopify"];

  const backend = ["Node.js", "MongoDB", "REST APIs"];

  const tools = ["Git", "GitHub", "ClickUp", "Notion", "Swagger"];

  const domain = ["eCommerce (Shopify)", "Agile / Scrum"];

  return (
    <section className="tech-section">
      <h2 className="tech-title">Tecnologías</h2>

      <div className="tech-group">
        <h3>Frontend</h3>
        <div className="tech-pills">
          {frontend.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="tech-group">
        <h3>Backend</h3>
        <div className="tech-pills">
          {backend.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="tech-group">
        <h3>Tools & Workflow</h3>
        <div className="tech-pills">
          {tools.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="tech-group">
        <h3>Domain</h3>
        <div className="tech-pills">
          {domain.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;

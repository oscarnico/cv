import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";

const Intro = () => {
  return (
    <section className="intro-container">
      <div className="intro-content">
        <h1 className="name">Óscar Nicolás</h1>
        <h2 className="role">
          Shopify Developer | Full Stack (React &amp; Node.js) | Salesforce
          Admin (Trailhead)
        </h2>
        <p className="tagline"></p>

        <div className="cta-buttons">
          <Link to="/projects" className="btn">
            Ver Proyectos
          </Link>
          <Link to="/Cv" className="btn secondary">
            Descargar CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;

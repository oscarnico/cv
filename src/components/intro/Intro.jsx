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
          (Trailhead)
        </h2>
        <p className="tagline">
          Desarrollo experiencias eCommerce escalables con Shopify y tecnologías
          web modernas.
        </p>

        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">
            Ver Proyectos
          </Link>
          <Link to="/cv" className="btn btn-secondary">
            Descargar CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;

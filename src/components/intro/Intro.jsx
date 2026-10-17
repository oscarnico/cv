import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";

const Intro = () => {
  return (
    <section className="intro-container">
      <div className="intro-content">
        <h1 className="name">Óscar Nicolás</h1>
        <h2 className="role">
          Consultor Comercial en Prosegur | Full Stack & Salesforce Trailblazer
        </h2>
        <p className="tagline">
          Conectando negocio, tecnología y soluciones digitales
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

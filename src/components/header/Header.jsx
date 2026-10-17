import React from "react";
import "./header.css";
import personalPhoto from "../../images/oscar.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">Óscar Nicolás</h1>

          <h2 className="hero-subtitle">
            Consultor Comercial en Prosegur | Full Stack & Salesforce
            Trailblazer
          </h2>

          <p className="hero-description">
            Conectando negocio, tecnología y soluciones digitales
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              Ver Proyectos
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={personalPhoto} alt="Óscar" className="hero-avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

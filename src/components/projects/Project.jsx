import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
import playStoreIcon from "../../images/google_play_logo_icon_134458.png";
import smartFoodLogo from "../../images/smart-food.png";

const Projects = () => {
  return (
    <section className="projects-container">
      <header className="projects-header">
        <h1 className="projects-title">Proyectos</h1>
        <p className="projects-subtitle">
          Desarrollo y colaboraciones en entornos reales de eCommerce y backend.
        </p>
      </header>

      {/* Botón CV global */}
      <div className="projects-actions">
        <Link to="/cv" className="btn btn-secondary">
          Ver CV
        </Link>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <img
            src={smartFoodLogo}
            alt="Smart Food Insight"
            className="project-logo"
          />
          <h2>Smart Food Insight</h2>
          <p>
            Desarrollo de una API para una aplicación móvil usando NodeJS y
            MongoDB. Implementé Swagger para documentación y seguí buenas
            prácticas de arquitectura limpia.
          </p>
          <div className="project-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=es.smartfoodinsight.smartfoodinsight&hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm btn-icon"
            >
              <img src={playStoreIcon} alt="Google Play" />
              Disponible en Play Store
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>Colaboraciones en tiendas Shopify</h2>
          <p>
            Como desarrollador en agencias especializadas en Shopify, he
            colaborado en múltiples tiendas online, aportando optimización y
            personalización de experiencias de usuario. Entre los proyectos en
            los que he participado destacan{" "}
            <a
              href="https://biotion.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biotion
            </a>
            ,{" "}
            <a
              href="https://ivbwellness.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IVB
            </a>
            ,{" "}
            <a
              href="https://komvida.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Komvida
            </a>
            ,{" "}
            <a
              href="https://www.valquer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Valquer
            </a>
            ,{" "}
            <a
              href="https://guinnesswebstore.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guinness
            </a>
            ,{" "}
            <a
              href="https://grimey.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grimey
            </a>
            ,{" "}
            <a
              href="https://naguisa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Naguisa
            </a>
            ,{" "}
            <a
              href="https://es.jimmylion.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jimmy Lion
            </a>{" "}
            y{" "}
            <a
              href="https://es.3ina.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              3ina
            </a>
            , contribuyendo al crecimiento y eficiencia de cada tienda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

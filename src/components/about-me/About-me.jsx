import React from "react";
import "./about-me.css";
import github from "../../images/git_original_wordmark_logo_icon_146510.png";
import linkedin from "../../images/1495493940-linkedinsocialmedialogo_84449.png";

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <div>
          <h2 className="about-title">Sobre mí</h2>
          <p className="about-subtitle">
            Desarrollo Full Stack · Shopify · eCommerce · Salesforce en
            formación
          </p>
        </div>

        <div className="about-socials">
          <a
            className="social-pill"
            href="https://github.com/oscarnico"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-icon" src={github} alt="GitHub" />
            <span>GitHub</span>
          </a>

          <a
            className="social-pill"
            href="https://www.linkedin.com/in/oscarnicolasbocero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="about-stack">
        <div className="about-item">
          <h3>👨‍💻 Quién soy</h3>
          <p>
            Soy desarrollador Full Stack especializado en JavaScript (React y
            Node.js) y Shopify (Liquid). Actualmente trabajo en una agencia de
            eCommerce desarrollando soluciones reales en producción.
          </p>
        </div>

        <div className="about-item">
          <h3>⚙️ Qué hago</h3>
          <p>
            Desarrollo y optimizo tiendas Shopify, mejorando rendimiento, diseño
            responsive y experiencia de usuario. También participo en la gestión
            de proyectos y coordinación de tareas en entornos ágiles.
          </p>
        </div>

        <div className="about-item">
          <h3>🚀 Lo que me define</h3>
          <ul>
            <li>Experiencia real en agencia eCommerce (Shopify)</li>
            <li>Frontend + mentalidad de producto</li>
            <li>Gestión de proyectos con ClickUp</li>
            <li>Aprendizaje rápido y adaptación constante</li>
            <li>Formación en Salesforce (Trailhead)</li>
          </ul>
        </div>
      </div>

      <div className="about-badges">
        <span>🏆 Hackathon Winner</span>
        <span>🥇 Top de promoción</span>
      </div>
    </section>
  );
};

export default AboutMe;

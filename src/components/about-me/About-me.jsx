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
            Consultor Comercial en Prosegur | Full Stack & Salesforce
            Trailblazer
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
            Soy Consultor Comercial de Seguridad Integral en Prosegur, con un
            background técnico como Desarrollador Full Stack y Project Manager.
            Combino la visión comercial y estratégica con el desarrollo de
            soluciones digitales, lo que me permite entender las necesidades del
            cliente y aportar soluciones que generan valor.
          </p>
        </div>

        <div className="about-item">
          <h3>⚙️ Qué hago</h3>
          <p>
            En el ámbito comercial, analizo necesidades, propongo soluciones y
            trabajo en la gestión y fidelización de clientes mediante
            Salesforce.
          </p>
          <p>
            En mi faceta técnica, colaboro con ShopiMaster como Shopify
            Developer y Project Manager, desarrollando y optimizando tiendas
            e-commerce con Shopify, Liquid, HTML, CSS y JavaScript. También
            participo en la planificación, estimación de tareas y coordinación
            de equipos y proyectos.
          </p>
        </div>

        <div className="about-item">
          <h3>🚀 Lo que me define</h3>
          <ul>
            <li>Visión de negocio combinada con conocimientos técnicos.</li>
            <li>Desarrollo Full Stack con JavaScript, React y Node.js.</li>
            <li>
              Experiencia en Shopify y desarrollo de soluciones e-commerce.
            </li>
            <li>
              Gestión de proyectos, planificación y coordinación de equipos.
            </li>
            <li>Gestión de proyectos con ClickUp</li>
            <li>
              Aprendizaje rápido, productividad y adaptación a nuevas
              tecnologías
            </li>
            <li>Salesforce Administrator (Trailhead)</li>
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

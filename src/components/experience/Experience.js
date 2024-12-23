import React from "react";
import CollapsibleSection from "../collapsibleSection/CollapsibleSection";
import "./experience.css";
import { ReactComponent as GooglePlayIcon } from "../../Play-store.svg";

const Experience = () => {
  return (
    <div className="xperience-div">
      <CollapsibleSection title="Experiencia">
        <div className="xperience-text">
          <div className="human">
            <h4>
              <a className="a-human-h4" href="https://www.webmefy.com">
                Webmefy
              </a>
            </h4>
            <h6 className="human-h6">Febrero 2024 - Agosto 2024</h6>
            <p className="human-p">
              Desarrollé, desplegué y mantuve varias tiendas de e-commerce
              en&nbsp;
              <a className="human-a" href="https://www.shopify.com/">
                Shopify
              </a>
              , manejando el front-end. Trabajé codo a codo con el equipo de
              diseño UX/UI para asegurar que la experiencia del cliente fuera la
              mejor. Me encargaba de implementar diseños responsive y adaptados
              al cliente utilizando Liquid, HTML, CSS y JavaScript. También
              optimizaba los sitios web para SEO, gestionaba el control de
              versiones con Git, era responsable de los repositorios y
              coordinaba los flujos de trabajo en GitHub. Además, participé en
              la planificación de proyectos, incluyendo ciclos de sprint,
              estimaciones y gestión del backlog en Monday.
            </p>
          </div>
          <div className="iron">
            <h4 className="iron-h4">
              <a
                className="our-app"
                href="https://play.google.com/store/apps/details?id=es.smartfoodinsight.smartfoodinsight&hl=es"
              >
                Smart Food Insight
              </a>
            </h4>
            <h6 className="iron-h6">Septiembre 2024 - Actualidad</h6>
            <p className="iron-p">
              Desarrollo de una API para una app móvil utilizando Node.js y
              MongoDB, implementando buenas prácticas y priorizando una
              arquitectura limpia y estructurada. Documentada con Swagger,
              porque hasta Tony Stark documenta su trabajo, ¿verdad? Yo me
              encargo del backend con Node.js y mi compañero del front con
              Flutter. Juntos, fusionamos nuestros poderes tecnológicos para
              crear una app tan inteligente y avanzada que incluso J.A.R.V.I.S.
              estaría celoso.
            </p>
            <a
              className="download-button"
              href="https://play.google.com/store/apps/details?id=es.smartfoodinsight.smartfoodinsight&hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GooglePlayIcon className="google-play-icon" />
              Disponible en Google Play
            </a>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default Experience;

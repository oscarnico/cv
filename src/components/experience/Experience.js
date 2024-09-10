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
            <h6 className="human-h6">Febrero 2024 - Actualidad</h6>
            <p className="human-p">
              Desarrollo, despliego y mantengo varias tiendas de e-commerce
              en&nbsp;
              <a className="human-a" href="https://www.shopify.com/">
                Shopify
              </a>
              , manejando el front-end. Trabajo codo a codo con el equipo de
              diseño UX/UI para asegurar que la experiencia del cliente sea la
              mejor. Me encargo de implementar diseños responsive y adaptados al
              cliente usando Liquid, HTML, CSS y JavaScript. También optimizo
              los sitios web para SEO, gestiono el control de versiones con Git,
              soy responsable de repositorios y coordino los flujos de trabajo
              en GitHub. Además, participo en la planificación de proyectos,
              incluyendo ciclos de sprint, estimaciones y gestión del backlog en
              Monday.
            </p>
          </div>
          <div className="iron">
            <h4 className="iron-h4">
              Proyecto Personal -{" "}
              <a
                className="our-app"
                href="https://play.google.com/store/apps/details?id=es.smartfoodinsight.smartfoodinsight&hl=es"
              >
                “smartfoodinsight”
              </a>
            </h4>
            <h6 className="iron-h6">Octubre 2023 - Agosto 2024</h6>
            <p className="iron-p">
              Desarrollé una API para una app móvil utilizando NodeJS y MongoDB,
              implementando buenas prácticas y priorizando una arquitectura
              limpia y estructurada. Documentada con Swagger, porque hasta Tony
              Stark documenta su trabajo, ¿verdad? Con la colaboración y
              dirección de mi compañero de desarrollo y mentor{" "}
              <a
                className="angel"
                href="https://www.linkedin.com/in/angelruben/"
              >
                Ángel Valdeolmos
              </a>
              , creamos una app que Tony Stark aprobaría. Mientras yo me ocupaba
              del backend con NodeJS, mi colega diseñaba el front con Flutter.
              Juntos, fusionamos nuestros poderes tecnológicos para crear una
              app tan inteligente y avanzada que incluso J.A.R.V.I.S. estaría
              celoso.
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
            {/* <p className="iron-p">
              Descárgala en la App Store y únete al futuro de la alimentación
              inteligente, cortesía de dos desarrolladores que no necesitan un
              traje de hierro para hacer magia.
            </p> */}
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default Experience;

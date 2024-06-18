import React from "react";
import CollapsibleSection from "../collapsibleSection/CollapsibleSection";
import "./experience.css";

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
              Desarrollador de e-commerce "
              <a className="human-a" href="https://www.shopify.com/">
                Shopify
              </a>
              " creando soluciones personalizadas para clientes, implementando
              customizaciones más funcionales y avanzadas en temas de Shopify,
              utilizando Liquid, CSS, HTML y JavaScript. Gestionando
              repositorios en GitHub.
            </p>
          </div>
          <div className="iron">
            <h4 className="iron-h4">
              Proyecto Personal -{" "}
              <a
                className="our-app"
                href="https://www.linkedin.com/in/angelruben/"
              >
                “smartfoodinsight”
              </a>
            </h4>
            <h6 className="iron-h6">Octubre 2023 - Junio 2024</h6>
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
            <p className="iron-p">
              Descárgala en la App Store y únete al futuro de la alimentación
              inteligente, cortesía de dos desarrolladores que no necesitan un
              traje de hierro para hacer magia.
            </p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default Experience;

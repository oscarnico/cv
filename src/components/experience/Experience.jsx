import React from "react";
import CollapsibleSection from "../collapsibleSection/CollapsibleSection";
import "./experience.css";
import { Card, CardHeader, CardBody } from "../card/Card";

const Experience = () => {
  return (
    <section className="experience-section">
      <CollapsibleSection title="Experiencia profesional">
        <div className="timeline">
          {/* SHOPIMASTERS */}
          <div className="timeline-item">
            <div className="timeline-dot" />

            <Card>
              <CardHeader>
                <h3>
                  <a
                    href="https://shopimasters.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ShopiMasters
                  </a>
                </h3>
                <span>Enero 2026 - Actualidad</span>
              </CardHeader>

              <CardBody>
                <h4>Shopify Developer · Project Coordination</h4>
                <ul>
                  <li>
                    Desarrollo de funcionalidades personalizadas en Shopify
                    utilizando JavaScript y Liquid, optimizando flujos de
                    trabajo y rendimiento en entornos eCommerce.
                  </li>
                  <li>
                    Coordinación entre negocio y desarrollo como enlace técnico
                    en proyectos multidisciplinares.
                  </li>
                  <li>
                    Gestión de sprints (Monday) y control de versiones con
                    Git/GitHub
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>

          {/* PEANUT BUTTER */}
          <div className="timeline-item">
            <div className="timeline-dot" />

            <Card>
              <CardHeader>
                <h3>
                  <a
                    href="https://peanutbutter.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Peanut Butter
                  </a>
                </h3>
                <span>Enero 2025 - Diciembre 2025</span>
              </CardHeader>

              <CardBody>
                <h4>Frontend Developer & Support Coordinator (Shopify)</h4>
                <ul>
                  <li>
                    Desarrollo de funcionalidades en Shopify con JavaScript y
                    Liquid, creando interfaces responsive optimizadas para
                    rendimiento y experiencia de usuario.
                  </li>
                  <li>
                    Soporte técnico y resolución de incidencias para clientes,
                    asegurando continuidad operativa.
                  </li>
                  <li>
                    Participación en planificación de sprints, gestión de tareas
                    y coordinación de proyectos mediante ClickUp.
                  </li>
                  <li>
                    Control de versiones y flujos de trabajo con Git y GitHub.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>

          {/* SMART FOOD */}
          <div className="timeline-item">
            <div className="timeline-dot" />

            <Card>
              <CardHeader>
                <h3>
                  <a
                    href="https://play.google.com/store/apps/details?id=es.smartfoodinsight.smartfoodinsight&hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Smart Food Insight
                  </a>
                </h3>
                <span>Septiembre 2024 - Diciembre 2024</span>
              </CardHeader>

              <CardBody>
                <h4>Backend Developer · Mobile App Project</h4>
                <ul>
                  <li>
                    Desarrollo de una API RESTful con Node.js y MongoDB para una
                    aplicación móvil.
                  </li>
                  <li>
                    Diseño de arquitectura backend siguiendo buenas prácticas de
                    desarrollo.
                  </li>
                  <li>
                    Gestión de lógica de negocio, endpoints y persistencia de
                    datos.
                  </li>
                  <li>Documentación de la API mediante Swagger</li>
                </ul>

                <a
                  className="playstore-btn"
                  href="https://play.google.com/store/apps/details?id=es.smartfoodinsight.smartfoodinsight&hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📲 Disponible en Google Play
                </a>
              </CardBody>
            </Card>
          </div>

          {/* WEBMEFY */}
          <div className="timeline-item">
            <div className="timeline-dot" />

            <Card>
              <CardHeader>
                <h3>
                  <a
                    href="https://www.webmefy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Webmefy
                  </a>
                </h3>
                <span>Febrero 2024 - Agosto 2024</span>
              </CardHeader>

              <CardBody>
                <h4>Junior Frontend Developer (Shopify)</h4>
                <ul>
                  <li>
                    Desarrollo y mantenimiento de tiendas Shopify con Liquid,
                    HTML, CSS y JavaScript.
                  </li>
                  <li>
                    Implementación de diseños responsive optimizados para UX y
                    SEO.
                  </li>
                  <li>
                    Colaboración con equipos UX/UI en la mejora de interfaces y
                    rendimiento
                  </li>
                  <li>
                    Gestión de versiones con Git y coordinación de flujos de
                    trabajo en GitHub y Monday.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </CollapsibleSection>
    </section>
  );
};

export default Experience;

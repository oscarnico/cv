// import React from "react";
// import "./project.css";

// const Projects = () => {
//   return (
//     <section className="projects-container">
//       <h1>Mis Proyectos</h1>
//       <p>Aquí encontrarás una selección de mis trabajos y colaboraciones.</p>

//       <div className="projects-grid">
//         <div className="project-card">
//           <h2>Smart Food Insight</h2>
//           <p>
//             App de gestión de alimentos con escaneo de productos y comparación
//             de precios.
//           </p>
//           <a
//             href="https://smartfoodinsight.github.io/smart-food-insight-web/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Ver proyecto
//           </a>
//         </div>

//         <div className="project-card">
//           <h2>Tienda Shopify</h2>
//           <p>Ejemplo de desarrollo frontend y personalización con Liquid.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
import smartFoodLogo from "../../images/smart-food.png";

const Projects = () => {
  return (
    <section className="projects-container">
      <h1>Mis Proyectos</h1>
      <p className="projects-intro">
        Proyectos destacados de desarrollo y colaboración en entornos reales.
      </p>

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
              className="btn"
            >
              Ver en Play Store
            </a>
            <Link to="/Cv" className="btn secondary">
              Ver CV
            </Link>
          </div>
        </div>

        <div className="project-card">
          <h2>Tienda Shopify</h2>
          <p>Ejemplo de desarrollo frontend y personalización con Liquid.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

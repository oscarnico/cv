// import React, { useState } from "react";
// import "./about-me.css";
// import github from "../../images/github_original_wordmark_logo_icon_146506.png";
// import linkedin from "../../images/1495493940-linkedinsocialmedialogo_84449.png";

// const AboutMe = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };
//   return (
//     <div className="about-me">
//       <div className="about-header">
//         <h2 className="about-me-h2" onClick={toggleVisibility}>
//           Sobre mí{" "}
//           {isVisible ? (
//             <span className="arrow">&uarr;</span>
//           ) : (
//             <span className="arrow">&darr;</span>
//           )}
//         </h2>
//         <a href="https://github.com/oscarnico/">
//           <img src={github} alt="git" className="github" />
//         </a>
//         <a href="https://www.linkedin.com/in/oscarnicolasbocero/">
//           <img src={linkedin} alt="linkedin" className="linkedin" />
//         </a>
//       </div>
//       {isVisible && (
//         <p className="p-about">
//           Hola! Soy Óscar, un Desarrollador Full Stack especializado en el Stack
//           MERN. Actualmente estoy trabajando en,{" "}
//           <a
//             className="our-app"
//             href="https://play.google.com/store/apps/details?id=es.smartfoodinsight.smartfoodinsight&hl=es"
//           >
//             “Smart Food Insight”
//           </a>
//           , una app disponible en la Play Store que ayuda a los usuarios a
//           gestionar sus compras, controlar su alimentación y reducir el
//           desperdicio de alimentos.<br></br>
//           <br></br>Apasionado por la programación, siempre estoy en busca de
//           aprender nuevas herramientas y lenguajes. En estos momentos, estoy
//           sumergido en el estudio de C# con .NET, lo que me permite seguir
//           fortaleciendo mis habilidades backend y mantenerme actualizado como
//           programador versátil.<br></br>
//           <br></br> Mi compromiso con la mejora continua me ha llevado a lograr
//           importantes hitos, como ganar un hackathon organizado por{" "}
//           <a href="https://www.caixabank.es">LA Caixa</a> y{" "}
//           <a href="https://nuclio.school">Nuclio Digital School</a>, donde
//           destaqué por ofrecer soluciones innovadoras y efectivas.<br></br>
//           <br></br>Si buscas a un programador que combina persistencia,
//           creatividad y pasión por el código, ¡estás en el lugar indicado!
//           ¡Let's code and make things happen! 🚀
//         </p>
//       )}
//     </div>
//   );
// };

// export default AboutMe;

import React, { useState } from "react";
import "./about-me.css";
import github from "../../images/git_original_wordmark_logo_icon_146510.png";
import linkedin from "../../images/1495493940-linkedinsocialmedialogo_84449.png";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="about-me">
      <div className="about-header">
        <h2
          className={`about-me-h2 ${isVisible ? "open" : ""}`}
          onClick={toggleVisibility}
        >
          Sobre mí{" "}
          {isVisible ? (
            <span className="arrow">&uarr;</span>
          ) : (
            <span className="arrow">&darr;</span>
          )}
        </h2>
        <div className="social-icons">
          <a
            href="https://github.com/oscarnico"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscarnicolasbocero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {isVisible && (
        <div className="about-content">
          <p>
            Soy un profesional con formación en desarrollo Full Stack,
            especializado en el stack MERN y en Liquid para Shopify. Actualmente
            trabajo en una agencia de e-commerce, donde no solo desarrollo y
            mantengo tiendas online aplicando Liquid, HTML, CSS y JavaScript,
            sino que también participo en la coordinación de soporte y la
            gestión de proyectos, asegurando entregas eficientes y experiencias
            escalables.
          </p>

          <p>📌 Lo que me define:</p>
          <ul>
            <li>
              Capacidad para combinar el desarrollo técnico con la gestión de
              equipos y proyectos
            </li>
            <li>Alta productividad y entrega consistente de resultados</li>
            <li>
              Aprendizaje rápido y adaptación a nuevas metodologías y
              tecnologías
            </li>
            <li>
              Habilidades de comunicación y organización para entornos dinámicos
            </li>
            <li>Pasión por el desarrollo… y por escalar montañas 😉</li>
          </ul>

          <p>🏆 Logros:</p>
          <ul>
            <li>
              Ganador de hackathon organizado por La Caixa y Nuclio Digital
              School
            </li>
            <li>Mejor nota de mi promoción</li>
            <li>Certificación Shopify Development Fundamentals (2025)</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default AboutMe;

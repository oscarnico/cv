// import React from "react";
// import "./header.css";
// import personalPhoto from "../../images/iron-man-cv.jpg";
// import "@fortawesome/fontawesome-free/css/all.css";

// const Header = () => {
//   return (
//     <div className="div-header">
//       <div className="text-human">
//         <h2>Óscar Nicolás</h2>
//         <h3>Full Stack (MERN)</h3>
//       </div>
//       <img src={personalPhoto} alt="ojos de iron man" className="image" />
//       <div className="text-machine">
//         <h2 className="h2-shine">IRON D3V3L0P3R</h2>
//         <h3></h3>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import "./header.css";
import personalPhoto from "../../images/oscar.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <h1 className="name">Óscar Nicolás</h1>
        <h2 className="role">Full Stack Developer · Shopify Expert</h2>
        <p className="tagline">
          Coordinador de soporte & creador de experiencias digitales enfocadas
          en e-commerce
        </p>
        <Link to="/projects" className="btn">
          Ver Proyectos
        </Link>
      </div>

      <div className="header-right">
        <img src={personalPhoto} alt="Foto de Óscar" className="avatar" />
      </div>
    </header>
  );
};

export default Header;

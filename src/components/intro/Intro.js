import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";
import image from "../../images/Captura de pantalla 2024-05-27 223548.png";

const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <h3 className="shine">
          ¡BIENVENIDO A
          <br />
          LA TORRE STARK
          <br />
          DEL CÓDIGO!
        </h3>
        <h5>
          Este portfolio/CV es más que eso; es mi propio homenaje a la
          genialidad de Tony Stark. Aquí, el desarrollo y la creatividad se
          mezclan en una armadura de líneas de código diseñada para sorprender
          y, por qué no, arrancar una sonrisa.
          <br />
          <br />
          **Aviso a las empresas serias**: <br />
          Sí, es friki, y sí, está hecho a propósito. Mi pasión por la
          tecnología es tan real como mi aprecio por el universo Marvel. Así
          que, adelante, echen un vistazo y descubran el ingeniero detrás de la
          pantalla. ¡Nos vemos en el campo de batalla digital!
        </h5>
        <div className="div-button">
          <Link to="/cv" className="animated-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ¡Despegar!
          </Link>
        </div>
        <img src={image} alt="ojos de iron man" className="eyes" />
      </div>
    </>
  );
};

export default Intro;

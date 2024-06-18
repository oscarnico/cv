import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";
import image from "../../images/Captura de pantalla 2024-05-27 223548.png";

const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <h3 className="shine">¡SALUDOS, TERRÍCOLA!</h3>
        <h5>Estás a punto de entrar en el mundo de un programador...</h5>
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

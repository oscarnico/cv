import React from "react";
import "./footer.css";
import arc from "../../images/ARC.png";
import construction from "../../images/construction.png";
import mail from "../../images/Mail_icon-icons.com_76887.png";

export const Footer = () => {
  return (
    <footer className="arc-reactor-footer">
      <div className="arc-reactor-container">
        <div className="arc-reactor">
          <img src={arc} alt="Arc Reactor" className="arc-reactor-img" />
        </div>
        <div className="arc-reactor-text">
          <p>"Mantente energizado con café y código."</p>
        </div>
      </div>
      <div className="last-div">
        <div>
          <p className="footer-credits">
            <img
              src={construction}
              alt="icon-construction"
              className="foot-icon"
            />
            Construido con React ®, sin terminar.
          </p>
        </div>
        <div className="footer-links">
          <a href="mailto:nicolas.oscar@outlook.es?subject=Consulta&body=Hola, me gustaría saber más sobre tus servicios.">
            <img src={mail} alt="mail" className="foot-icon" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

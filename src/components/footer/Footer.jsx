import React from "react";
import "./footer.css";
import mail from "../../images/Mail_icon-icons.com_76887.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Óscar Nicolás</h3>
          <p>Full Stack Developer · Shopify · Salesforce (in progress)</p>

          <div className="status">
            <span className="status-dot"></span>
            <span>Open to opportunities</span>
          </div>
        </div>

        <p className="footer-quote">
          Construyendo experiencias de e-commerce eficientes y escalables.
        </p>

        <div className="footer-links">
          <a href="mailto:nicolas.oscar@outlook.es?subject=Consulta&body=Hola, me gustaría saber más sobre tus servicios.">
            <img src={mail} alt="mail" />
            Email
          </a>
        </div>

        <span className="footer-meta">
          Construido con React · Portfolio personal
        </span>
      </div>
    </footer>
  );
};

export default Footer;

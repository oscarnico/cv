import React from "react";
import CollapsibleSection from "../collapsibleSection/CollapsibleSection";
import "./premiosLogros.css";

import gold from "../../images/medal_champion_award_winner_olympic_icon_207803.png";
import shopifyBadge from "../../images/Shopify_icon.png";
import clickupBadge from "../../images/629e24f2974c5f2c1ceaa620.png";
import notionBadge from "../../images/62cc1585150d5de9a3dad5eb.png";

const PremiosLogros = () => {
  return (
    <section className="pyl-section">
      <CollapsibleSection title="Logros & Certificaciones">
        <div className="pyl-grid">
          <div className="pyl-card">
            <div className="pyl-header">
              <img src={shopifyBadge} alt="Shopify" />
              <h3>Shopify Development Fundamentals</h3>
              <span>ago 2025</span>
            </div>
            <p>Certificación oficial Shopify con puntuación del 100%.</p>
          </div>

          <div className="pyl-card">
            <div className="pyl-header">
              <img src={clickupBadge} alt="ClickUp" />
              <h3>ClickUp Advanced AI Certificate</h3>
              <span>may 2025</span>
            </div>
            <p>Gestión avanzada de proyectos y uso de IA en ClickUp.</p>
          </div>

          <div className="pyl-card">
            <div className="pyl-header">
              <img src={clickupBadge} alt="ClickUp" />
              <h3>ClickUp Novice & Guest Certificates</h3>
              <span>feb–may 2025</span>
            </div>
            <p>
              Competencias en metodologías ágiles y coordinación de proyectos.
            </p>
          </div>

          <div className="pyl-card">
            <div className="pyl-header">
              <img src={clickupBadge} alt="ClickUp" />
              <h3>ClickUp Expert Certificate</h3>
              <span>abr 2025</span>
            </div>
            <p>Usuario avanzado en gestión de proyectos y workflows.</p>
          </div>

          <div className="pyl-card">
            <div className="pyl-header">
              <img src={notionBadge} alt="Notion" />
              <h3>Productividad con Notion</h3>
              <span>mar 2025</span>
            </div>
            <p>Sistemas de productividad y organización de proyectos.</p>
          </div>

          <div className="pyl-card">
            <div className="pyl-header">
              <img src={gold} alt="Award" />
              <h3>Mejor nota de promoción</h3>
              <span>2023</span>
            </div>
            <p>Mejor calificación del máster y portavoz estudiantil.</p>
          </div>

          <div className="pyl-card">
            <div className="pyl-header">
              <img src={gold} alt="Award" />
              <h3>Ganador Hackathon La Caixa</h3>
              <span>nov 2023</span>
            </div>
            <p>Primer puesto en hackathon con solución en equipo.</p>
          </div>
        </div>
      </CollapsibleSection>
    </section>
  );
};

export default PremiosLogros;

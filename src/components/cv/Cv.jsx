import React from "react";
import Header from "../header/Header";
import AboutMe from "../about-me/About-me";
import Tech from "../tech/Tech";
import Experience from "../experience/Experience";
import Education from "../education/Education";
import PremiosLogros from "../premiosLogros/PremiosLogros";
import Footer from "../footer/Footer";
import "./cv.css";

const Cv = () => {
  return (
    <div className="cv-container">
      <Header />

      <main className="cv-content">
        <section className="cv-section">
          <Tech />
        </section>

        <section className="cv-section">
          <AboutMe />
        </section>

        <section className="cv-section">
          <Experience />
        </section>

        <section className="cv-section">
          <Education />
        </section>

        <section className="cv-section">
          <PremiosLogros />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cv;

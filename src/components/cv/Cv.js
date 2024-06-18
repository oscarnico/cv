import React from "react";
import "./cv.css";
import Header from "../header/Header";
import AboutMe from "../about-me/About-me";
import Tech from "../tech/Tech";
import Experience from "../experience/Experience";
import Education from "../education/Education";
import PremiosLogros from "../premiosLogros/PremiosLogros";
import Footer from "../footer/Footer";

const Cv = () => {
  return (
    <>
      <Header />
      <Tech />
      <AboutMe />
      <Experience />
      <Education />
      <PremiosLogros />
      <Footer />
    </>
  );
};

export default Cv;

import React, { useState } from "react";
import "./about-me.css";
import github from "../../images/github_original_wordmark_logo_icon_146506.png";
import linkedin from "../../images/1495493940-linkedinsocialmedialogo_84449.png";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="about-me">
      <div className="about-header">
        <h2 className="about-me-h2" onClick={toggleVisibility}>
          Sobre mí{" "}
          {isVisible ? (
            <span className="arrow">&uarr;</span>
          ) : (
            <span className="arrow">&darr;</span>
          )}
        </h2>
        <a href="https://github.com/oscarnico/">
          <img src={github} alt="git" className="github" />
        </a>
        <a href="https://www.linkedin.com/in/oscarnicolasbocero/">
          <img src={linkedin} alt="linkedin" className="linkedin" />
        </a>
      </div>
      {isVisible && (
        <p className="p-about">
          ¡Hola! Soy Óscar, un Desarrollador Full Stack especializado en el
          Stack MERN. Durante la semana, trabajo en la agencia
          <a href="https://www.webmefy.com">Webmefy</a>, desarrollando
          bussines-software para importantes clientes. Pero en mi tiempo libre,
          me convierto en un super héroe del código, investigando y creando mis
          propios proyectos como un verdadero Tony Stark del desarrollo.
          Actualmente, estoy inmerso en una formación en C# con .NET, porque al
          igual que Stark con sus múltiples trajes, me apasiona tener diversas
          herramientas en mi arsenal, especialmente en el backend. Mi carrera
          esta siendo una emocionante aventura llena de desafíos. Al igual que
          Stark en sus laboratorios, estoy demostrando consistencia y
          productividad en la entrega de proyectos. Tengo una capacidad casi
          arc-reactor-ial para aprender, adaptarme a nuevas tecnologías y
          enfrentar cualquier desafío. Fuera de la oficina, disfruto escalando
          las montañas más altas. 😅 Mi compromiso con la formación continua
          refleja mi pasión por el desarrollo y mi deseo de ser la mejor versión
          de mí mismo. Entre mis logros, me enorgullece decir que gané un
          hackathon organizado por{" "}
          <a href="https://www.caixabank.es">LA Caixa</a> y{" "}
          <a href="https://nuclio.school">Nuclio Digital School</a>. ¡Sí, me
          siento un poco como si hubiera salvado el mundo de nuevo!🏆 Así que,
          si buscas a alguien que combine la persistencia de un programador con
          la genialidad y el sentido del humor de Tony Stark, ¡estás en el lugar
          correcto! ¡Let's code like it's the Stark Expo!🚀
        </p>
      )}
    </div>
  );
};

export default AboutMe;

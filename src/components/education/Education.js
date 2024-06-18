import React from "react";
import "./education.css";
import CollapsibleSection from "../collapsibleSection/CollapsibleSection";
import book from "../../images/book_books_school_read_icon_210070.png";

const Education = () => {
  return (
    <div className="education-div">
      <CollapsibleSection title="Educación">
        <div className="education">
          <div className="educ-human">
            <div>
              <h3>
                <img src={book} alt="book" className="book" />
                2023 - Máster Full Stack Developer
              </h3>
              <h4>
                <a href="https://nuclio.school" class="educ-a">
                  Nuclio School
                </a>
                , Madrid
              </h4>
              <p>Titulación: Desarrollo de SoftwareTitulación:</p>
              <p>
                Fui elegido portavoz estudiantil, destacando por entusiasmo y
                esfuerzo, obteniendo la mejor nota de mi promoción.
              </p>
              <p>
                *TFM Grupal: "Finantial Challenge" (Juego) Desarrollando una
                aplicación web de juego financiero, demostrando habilidades en
                trabajo en equipo, metodologías ágiles y colaboración efectiva.
              </p>
              <p>
                *TFM Individual: "Gym Management" (BackOffice) Diseñé una
                aplicación web para gestionar clientes y servicios, resaltando
                habilidades en desarrollo full stack y soluciones prácticas.
              </p>
              <p>
                Tuvimos que superar seis desafíos, incluyendo ejercicios con
                pruebas, calculadoras en JavaScript y React, maquetación de un
                periódico, una app de ToDos, y el TFM grupal e individual. Nos
                especializamos en la tecnología MERN, creando un entorno de
                trabajo tipo startup con herramientas como JavaScript, React,
                MongoDB, Node.js, Git, Jira, Render, entre otras.
              </p>
              <p>
                Este máster me impulsó a dar lo mejor de mí, mejorando mis
                habilidades para resolver problemas y proporcionándome una
                visión amplia del desarrollo. Enfrenté numerosos y emocionantes
                desafíos, consolidando mi capacidad en el campo.
              </p>
            </div>
            <div>
              <h3>
                <img src={book} alt="book" className="book" />
                2015 - Máster Scale-Up para emprendedores y empresarios
              </h3>
              <h4>
                <a
                  className="educ-a"
                  href="https://www.iese.edu/es/conoce-iese/campus/madrid/"
                >
                  IESE Business School
                </a>
                , Madrid
              </h4>
              <ul>
                <li>Formación en técnicas de comunicación y negociación</li>
                <li>Análisis de formas de financiación</li>
                <li>
                  Estudio de casos reales, como el de{" "}
                  <a
                    className="natur-house"
                    href="https://b2b.naturhouse.es/?_ga=2.127876489.549688909.1718053712-1081343536.1718053712"
                  >
                    Natur House
                  </a>
                </li>
                <li>Encuentros con Business Angels</li>
              </ul>
            </div>
          </div>
          <div className="educ-iron">
            <div>
              <h3>
                <img src={book} alt="book" className="book" />
                Minors de Superhéroe: Implementación Analítica en Marketing
                Digital y UX Research (2023)
              </h3>
              <h4>
                <a href="https://nuclio.school" class="iron-a">
                  Nuclio School
                </a>
                , Madrid
              </h4>
              <p>Implementación Analítica en Marketing Digital:</p>
              <p>
                Aprendí a ser el Tony Stark de la analítica web: Google
                Analytics y GTM son mis J.A.R.V.I.S. personales. Conocimiento de
                CRO (no es un villano, pero hace maravillas): convierto visitas
                en conversiones más rápido que Iron Man diseñando una nueva
                armadura.
              </p>
              <p>Todo el tema de research:</p>
              <p>
                Desde encuestas hasta pruebas de usabilidad, me aseguré de que
                los usuarios no se sintieran como Pepper Potts con un mal día.
                Convertí datos crudos en insights valiosos, porque hasta Tony
                Stark necesita un buen plan para salvar el día.
              </p>
            </div>
            <div>
              <h3>
                <img src={book} alt="book" className="book" />
                Cursos Completados:
              </h3>
              <h4>
                <a href="https://open-bootcamp.com/" class="iron-a">
                  OpenBootCamp (Enero 2023)
                </a>
              </h4>
              <p>
                En novienbre de 2022, mientras Tony Stark salvaba el mundo, yo
                me embarqué en mi propia misión de alto riesgo: completar los
                cursos de OpenBootCamp desde la comodidad de mi Batcueva… digo,
                mi habitación. Armado con mi teclado y mi sentido del humor, me
                lancé al mundo de la programación.
              </p>
              <p>
                Introducción a la Programación: Aquí es donde aprendí que "Hola,
                Mundo" es básicamente el Jarvis de los principiantes.
              </p>
              <p>
                Conceptos de la Programación: Esta fase fue como construir mi
                propio traje de Iron Man, pieza por pieza. Bueno, menos
                explosiones, más líneas de código.
              </p>
              <p>
                Javascript con HTML y CSS: Transformé simples páginas web en
                obras maestras, o al menos en algo que Stark Industries no se
                avergonzaría de mostrar.
              </p>
              <p>
                Todo esto, por supuesto, lo hice online y por mi cuenta. Porque
                cuando no tienes a Jarvis para ayudarte, solo te queda Google. Y
                café. Mucho café.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default Education;

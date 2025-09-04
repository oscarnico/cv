// import React from "react";
// import CollapsibleSection from "../collapsibleSection/CollapsibleSection";
// import "./premiosLogros.css";
// import master from "../../images/certificated_toga_diploma_university_school_graduated_icon_209310.png";
// import gold from "../../images/medal_champion_award_winner_olympic_icon_207803.png";
// const PremiosLogros = () => {
//   return (
//     <div>
//       <CollapsibleSection title={"Premios & Logros"}>
//         <div className="pyl">
//           <h3>
//             Elegido portavoz de los estudiantes del máster (2023)
//             <img src={master} alt="school" className="master" />
//           </h3>
//           <p>
//             En el universo de los desarrolladores, ser elegido portavoz de los
//             estudiantes del máster es como ser nombrado líder de los
//             Vengadores... pero con menos trajes de alta tecnología... Mis
//             compañeros decidieron que "ElSargento" y yo eramos los indicados
//             para representar nuestras voces (y quejas sobre el café de la
//             máquina) y también me dieron el honor de dar el discurso de
//             graduación. Ah, y no quiero presumir (bueno, tal vez un poco), pero
//             obtuve la mejor nota de esa graduación. ¡Alguien tiene que ser el
//             Tony Stark de los nerds!
//           </p>
//           <h3>
//             Ganador del Hackathon de La Caixa (noviembre 2023)
//             <img src={gold} alt="metal" className="metal" />
//           </h3>
//           <p>
//             Imagina un laboratorio lleno de tecnología punta, un equipo de
//             brillantes desarrolladores y la presión de crear algo increíble en
//             tiempo récord. No, no es una escena de una película de Marvel, fue
//             el Hackathon de La Caixa 2023. Como desarrollador full stack, fui
//             una pieza clave en el diseño e implementación de una funcionalidad
//             que revolucionó la programación de citas. Nuestra solución, permitió
//             a los usuarios solicitar citas de manera eficiente y redujo visitas
//             innecesarias a la oficina, nos llevó al primer lugar. Fue como si
//             hubiéramos armado el Guantelete del Infinito... pero con líneas de
//             código en lugar de Gemas del Infinito.
//           </p>
//         </div>
//       </CollapsibleSection>
//     </div>
//   );
// };

// export default PremiosLogros;

import React from "react";
import CollapsibleSection from "../collapsibleSection/CollapsibleSection";
import "./premiosLogros.css";

// Iconos / insignias
import gold from "../../images/medal_champion_award_winner_olympic_icon_207803.png";
import shopifyBadge from "../../images/Shopify_icon.png";
import clickupBadge from "../../images/629e24f2974c5f2c1ceaa620.png";
import notionBadge from "../../images/62cc1585150d5de9a3dad5eb.png";

const PremiosLogros = () => {
  return (
    <div>
      <CollapsibleSection title={"Premios & Logros"}>
        <div className="pyl">
          <div>
            <h3>
              <img src={shopifyBadge} alt="Shopify Badge" />
              Shopify Development Fundamentals (ago 2025)
            </h3>
            <p>
              Insignia oficial obtenida tras completar con éxito el examen
              Shopify Development Fundamentals, con una puntuación del 100%.
            </p>
          </div>

          <div>
            <h3>
              <img src={clickupBadge} alt="ClickUp Badge" />
              ClickUp Advanced AI Certificate (may 2025)
            </h3>
            <p>
              Certificación oficial de ClickUp que avala mis conocimientos en
              metodologías ágiles y gestión avanzada con ClickUp.
            </p>
          </div>

          <div>
            <h3>
              <img src={clickupBadge} alt="ClickUp Badge" />
              ClickUp for Guests & Novice Certificates (feb-may 2025)
            </h3>
            <p>
              Certificaciones que demuestran competencias en coordinación de
              proyectos y metodologías ágiles dentro de ClickUp.
            </p>
          </div>

          <div>
            <h3>
              <img src={clickupBadge} alt="ClickUp Badge" />
              ClickUp Expert Certificate (abr 2025)
            </h3>
            <p>
              Reconocimiento oficial como usuario avanzado de ClickUp, aplicando
              buenas prácticas en gestión de proyectos y coordinación.
            </p>
          </div>

          <div>
            <h3>
              <img src={notionBadge} alt="Notion Badge" />
              Sistemas de Productividad con Notion (mar 2025)
            </h3>
            <p>
              Curso intensivo que acredita mi capacidad para crear sistemas de
              productividad y gestión eficiente de proyectos utilizando Notion.
            </p>
          </div>

          <div>
            <h3>
              <img src={gold} alt="medal" />
              Mejor nota de la promoción del Máster (2023)
            </h3>
            <p>
              Fui elegido portavoz de los estudiantes y obtuve la mejor
              calificación del máster. Este logro refleja mi compromiso y
              dedicación durante el programa.
            </p>
          </div>

          <div>
            <h3>
              <img src={gold} alt="medal" />
              Ganador del Hackathon de La Caixa (nov 2023)
            </h3>
            <p>
              Participé en un hackathon competitivo organizado por La Caixa,
              donde nuestro equipo presentó una solución innovadora y logramos
              el primer puesto.
            </p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default PremiosLogros;

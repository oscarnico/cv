import React from "react";
import CollapsibleSection from "../collapsibleSection/CollapsibleSection";
import "./education.css";
import book from "../../images/book_books_school_read_icon_210070.png";
import { Card, CardHeader, CardBody } from "../card/Card";

const Education = () => {
  const educationData = [
    {
      title: "Salesforce Administrator (Trailhead)",
      year: "2026",
      school: "Trailhead by Salesforce",
      schoolLink: "https://trailhead.salesforce.com/",
      description: [
        "Formación práctica en Salesforce CRM a través de Trailhead.",
        "Gestión de usuarios y permisos",
        "Modelado de datos y objetos",
        "Automatización de procesos (Flows)",
        "Informes y dashboards",
        "+18 badges completadas",
        "En progreso hacia nivel avanzado",
      ],
    },
    {
      title: "Máster Full Stack Developer",
      year: "2023",
      school: "Nuclio School, Madrid",
      schoolLink: "https://nuclio.school/",
      description: [
        "Desarrollo de Software, elegido portavoz estudiantil y mejor nota de promoción.",
        'TFM Grupal: "Finantial Challenge" (Juego) - Aplicación web de juego financiero, demostrando habilidades en trabajo en equipo y metodologías ágiles.',
        'TFM Individual: "Gym Management" (BackOffice) - Aplicación web para gestión de clientes y servicios, destacando habilidades full stack.',
        "Se trabajó con el stack MERN, metodologías ágiles y herramientas como Git, Render...",
      ],
    },
    {
      title:
        "Minors de Superhéroe: Implementación Analítica en Marketing Digital y UX Research",
      year: "2023",
      school: "Nuclio School, Madrid",
      schoolLink: "https://nuclio.school/",
      description: [
        "Google Analytics y GTM: Analítica web avanzada.",
        "CRO: Optimización de conversiones.",
        "UX Research: Encuestas y pruebas de usabilidad para insights de usuario.",
      ],
    },
    {
      title: "Cursos Completados OpenBootCamp",
      year: "2023",
      school: "OpenBootCamp",
      schoolLink: "https://www.youtube.com/openbootcamp",
      description: [
        "Introducción a la Programación.",
        "Conceptos de Programación: fundamentos y buenas prácticas.",
        "Javascript con HTML y CSS: Proyectos prácticos.",
      ],
    },
    {
      title: "Máster Scale-Up para emprendedores y empresarios",
      year: "2015",
      school: "IESE Business School, Madrid",
      schoolLink: "https://www.iese.edu/es/conoce-iese/campus/madrid/",
      description: [
        "Formación en técnicas de comunicación y negociación.",
        "Análisis de formas de financiación.",
        "Estudio de casos reales, como Natur House.",
        "Encuentros con Business Angels.",
      ],
    },
  ];

  return (
    <section className="education-section">
      <CollapsibleSection title="Educación">
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />

              <Card>
                <CardHeader>
                  <h3>
                    <a
                      href={edu.schoolLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {edu.school}
                    </a>
                  </h3>
                  <span>{edu.year}</span>
                </CardHeader>

                <CardBody>
                  <h4>
                    <img src={book} alt="book" className="edu-icon" />
                    {edu.title}
                  </h4>

                  <ul>
                    {edu.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </CollapsibleSection>
    </section>
  );
};

export default Education;

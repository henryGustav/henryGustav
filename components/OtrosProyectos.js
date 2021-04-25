import React from "react";
import OtherProject from "./OtherProject";
const OtrosProyectos = () => {
  const otherProjects = [
    {
      title: "Journal Aplicacion",
      description:
        "Aplicación de un Diario, para anotar informacion relevante de tu dia.Realizado con React, Cloudinary, Firebase/Firestore, SASS, patrón de arquitectura Redux.",
      tools: ["React", "Firebase", "Cloudinary", "SASS", "Redux"],
      url: "https://henry-gustav-react.gitlab.io/journal-app/",
      git: "https://gitlab.com/henry-gustav-react/journal-app",
    },
    {
      title: "Lading Page",
      description:
        "Pagina de presentacion responsive, implementable a diversas empresas. Realizado con HTML, CSS, Javascript y Bootstrap 5",
      tools: ["HTML", "CSS", "Java Script", "Bootstrap 5"],
      url: "https://web-landing-page.gitlab.io/landing-shala/",
      git: "https://gitlab.com/web-landing-page/landing-shala",
    },
    {
      title: "Journal Aplicacion",
      description:
        "Aplicación de un Diario, para anotar informacion relevante de tu dia.Realizado con React , Cloudinary , Firebase/Firestore, SASS, patrón de arquitectura Redux.",
      tools: ["React", "Firebase", "Cloudinary"],
    },
  ];
  return (
    <div className="container-otros-proyectos">
      <h1 className="title">Algunos Proyectos que he Construido</h1>

      <div className="otros-proyectos">
        {otherProjects.map((otherpr, index) => (
          <OtherProject otherProject={otherpr} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OtrosProyectos;

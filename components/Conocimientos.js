import React from "react";

const conocimientos = [
  {
    title: "TECNOLOGIAS DEL LADO DEL SERVIDOR - BACKEND",
    tecnologies: [
      { name: "Java" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "JPA" },
      { name: "Laravel 5+" },
      { name: "API REST" },
    ],
    icon: "fas fa-laptop-code",
  },

  {
    title: "Tecnologias del lado del Cliente - FrontEnd",
    tecnologies: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Angular 4 o superior" },
      { name: "HTML5" },
      { name: "CSS 3" },
      { name: "Flexbox" },
      { name: "Grid" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
    icon: "fas fa-file-code text-4xl",
  },

  {
    title: "Tecnologias de Bases de datos",
    tecnologies: [
      { name: "MySql" },
      { name: "PostgreSQL" },
      { name: "Oracle" },
      { name: "Diseño de tablas" },
      { name: "Consultas SQL" },
      { name: "Diagramas relacionales" },
    ],
    icon: "fas fa-database text-4xl",
  },
  {
    title: "Tecnologías auxiliares de trabajo",
    tecnologies: [
      { name: "GIT control de versiones" },
      { name: "Jboss - WildFly" },
      { name: "Apache" },
      { name: "Visual Studio Code" },
      { name: "Docker" },
    ],
    icon: "fas fa-tools text-4xl",
  },
];

const Conocimientos = () => {
  return (
    <div className="container-conocimientos section-padding">
      <h1 className="title">Conocimientos</h1>
      <div className="conocimientos">
        {conocimientos.map((con) => (
          <div className="item-conocimiento  ">
            <div className="header-conocimiento">
              <p className="title-conocimiento ">{con.title}</p>
              <i className={con.icon}></i>
            </div>

            <ul className="list-tecnologias list-inside	ml-12 pt-3">
              {con.tecnologies.map((tecnologia) => (
                <>
                  <li>
                    <p>{tecnologia.name}</p>
                  </li>
                </>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conocimientos;

import React, { useState } from "react";

const recentTecnologies = [
  {
    code: "java",
    name: "Java",
    img: "https://bchiang7.github.io/v1/img/skills/java.png",
  },
  {
    code: "node",
    name: "Node.js",
    img: "https://bchiang7.github.io/v1/img/skills/node.png",
  },
  {
    code: "mysql",
    name: "MySql",
    img: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  },
  {
    code: "mongo",
    name: "Mongo",
    img: "https://bchiang7.github.io/v1/img/skills/mongodb.png",
  },
  {
    code: "react",
    name: "React",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
  },
  {
    code: "next",
    name: "Next.js",
    img:
      "https://res.cloudinary.com/avatarhzh/image/upload/v1523067665/portfolio/tech-stack/nextjs.png",
  },

  {
    code: "angular",
    name: "Angular",
    img: "https://bchiang7.github.io/v1/img/skills/angular.png",
  },

  {
    code: "git",
    name: "Git",
    img: "https://bchiang7.github.io/v1/img/skills/github.png",
  },
  {
    code: "html",
    name: "Html",
    img: "https://bchiang7.github.io/v1/img/skills/html.png",
  },
  {
    code: "css",
    name: "Css",
    img: "https://bchiang7.github.io/v1/img/skills/css.png",
  },
  {
    code: "js",
    name: "JavaScript",
    img: "https://bchiang7.github.io/v1/img/skills/js.png",
  },
  {
    code: "tailwind",
    name: "Tailwindcss",
    img:
      "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
  },
  {
    code: "12",
    name: "Linux",
    img: "https://bchiang7.github.io/v1/img/skills/linux.png",
  },
];
const About = () => {
  return (
    <div className="container-about  section-padding ">
      <h1 className="title">Algo acerca de mí</h1>

      <p className="font-montserrat text-lg font-medium	">
        Hola ! mi nombre es Henry Tipantuña, Ingeniero informatico. A lo largo
        de mi carrera profesional he desarrollado aplicaciones, con distintas
        tecnologias en las empresas a las cuales he pertenecido. Me gusta
        aprender siempre de nuevas herramientas y tendencias de programacịon que
        puedan aportar a los proyectos que desarrollo.
      </p>
      <br />
      <p className="font-montserrat text-lg font-medium">
        Entre las tecnologías que he trabajado recientemente están:{" "}
      </p>

      <div className="tecnologias ">
        {/* <ul>
          <li>Java 8</li>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>Mongo DB</li>
        </ul>

        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Angular v8</li>
        </ul>

        <ul>
          <li>HTML CSS JavaScript</li>
          <li>Tailwindcss</li>
        </ul> */}
        <ul className="stack-tecnologies">
          {recentTecnologies.map((tecno) => (
            <li key={tecno.code} className="tecno-content">
              <img className="mx-auto  " src={tecno.img} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;

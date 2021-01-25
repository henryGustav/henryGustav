import React from 'react'

const Conocimientos = () => {
  return (
    <div className='container-conocimientos'>
      <h1 className='text-lg'>Conocimientos</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
        <div className='item-conocimiento conocimientos-front-end '>
          <div className='flex justify-between items-center px-4  py-2 '>
            <p className='uppercase font-bold '>
              Tecnologias del lado del Servidor - BackEnd
            </p>
            <i className='fas fa-laptop-code text-4xl '></i>
          </div>
          <ul className='list-tecnologias list-inside	ml-12 pt-3'>
            <li>Java</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>JPA</li>
            <li>Laravel 5+</li>
            <li>API REST</li>
          </ul>
        </div>

        <div className='item-conocimiento conocimientos-front-end'>
          <div className='flex justify-between items-center px-4  py-2'>
            <p className='uppercase font-bold'>
              Tecnologias del lado del Cliente - FrontEnd
            </p>
            <i className='fas fa-file-code text-4xl'></i>
          </div>
          <ul className='list-tecnologias list-inside	ml-12 pt-3'>
            <li>React</li>
            <li>Next.js</li>
            <li>Angular 4 o superior</li>
            <li>HTML5</li>
            <li>CSS 3 </li>
            <li>Flexbox</li>
            <li>Grid</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className='item-conocimiento conocimientos-bd'>
          <div className='flex justify-between items-center px-4  py-2'>
            <p className='uppercase font-bold'>Tecnologias de Bases de datos</p>
            <i className='fas fa-database text-4xl'></i>
          </div>
          <ul className='list-tecnologias list-inside	ml-12 pt-3'>

            <li>MySql</li>
            <li>PostgreSQL</li>
            <li>Oracle</li>
            <ul>
              <li>Diseño de tablas</li>
              <li>Consultas SQL</li>
              <li>Diagramas relacionales</li>
            </ul>
          </ul>
          <ul></ul>
        </div>

        <div className='item-conocimiento conocimientos-tecnologias'>
          <div className='flex justify-between items-center px-4  py-2'>
            <p className='uppercase font-bold'>
              Tecnologías auxiliares de trabajo
            </p>
            <i className='fas fa-tools text-4xl'></i>
          </div>
          <ul className='list-tecnologias list-inside	ml-12 pt-3'>

            <li>GIT control de versiones</li>
            <li>Jboss - WildFly </li>
            <li>Apache</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Conocimientos

import React from 'react'
import OtherProject from './OtherProject'
const OtrosProyectos = () => {
  const otherProjects = [
    {
      title: 'Journal Aplicacion',
      description:
        'Aplicación de un Diario, para anotar información relevante de tu dia. Realizado con React, Cloudinary, Firebase/Firestore, SASS, patrón de arquitectura Redux.',
      tools: ['React', 'Firebase', 'Cloudinary', 'SASS', 'Redux'],
      url: 'https://henry-gustav-react.gitlab.io/journal-app/',
      git: 'https://gitlab.com/henry-gustav-react/journal-app'
    },
    {
      title: 'Lading Page',
      description:
        'Pagina de presentacion responsive, implementable a diversas empresas. Realizado con HTML, CSS, Javascript y Bootstrap 5',
      tools: ['HTML', 'CSS', 'Java Script', 'Bootstrap 5'],
      url: 'https://henrygustavo1514.gitlab.io/landing-page-appmovil',
      git: 'https://gitlab.com/henryGustavo1514/landing-page-appmovil'
    },
    {
      title: 'Landing Page Fashion',
      description:
        'Landing page responsive para productos de moda, adaptable a otros productos. HTML, CSS, Javascript',
      tools: ['HTML', 'CSS', 'Java Script'],
      url: 'https://henrygustavo1514.gitlab.io/landing-page-fashion',
      git: 'https://gitlab.com/henryGustavo1514/landing-page-fashion'
    }
  ]
  return (
    <div className='container-otros-proyectos'>
      <h1 className='title'>Algunos Proyectos Personales que he Construido</h1>

      <div className='otros-proyectos'>
        {otherProjects.map((otherpr, index) => (
          <OtherProject otherProject={otherpr} key={index} />
        ))}
      </div>
    </div>
  )
}

export default OtrosProyectos

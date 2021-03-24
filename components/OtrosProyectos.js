import React from 'react'
import OtherProject from './OtherProject'
const OtrosProyectos = () => {
  const otherProjects = [
    {
      title: 'Journal Aplicacion',
      description:
        'Aplicación de un Diario, para anotar informacion relevante de tu dia.Realizado con React, Cloudinary, Firebase/Firestore, SASS, patrón de arquitectura Redux.',
      tools: ['React', 'Firebase', 'Cloudinary','SASS', 'Redux'],
      url: 'https://henry-gustav-react.gitlab.io/journal-app/',
      git: 'https://gitlab.com/henry-gustav-react/journal-app'
    },
    {
      title: 'Journal Aplicacion',
      description:
        'Aplicación de un Diario, para anotar informacion relevante de tu dia.Realizado con React , Cloudinary , Firebase/Firestore, SASS, patrón de arquitectura Redux.',
      tools: ['React', 'Firebase', 'Cloudinary']
    },
    {
      title: 'Journal Aplicacion',
      description:
        'Aplicación de un Diario, para anotar informacion relevante de tu dia.Realizado con React , Cloudinary , Firebase/Firestore, SASS, patrón de arquitectura Redux.',
      tools: ['React', 'Firebase', 'Cloudinary']
    }
  ]
  return (
    <div className='container-otros-proyectos'>
      <h1 className=''>Otros Proyectos</h1>

      <div className='otros-proyectos'>
        {otherProjects.map(otherpr => (
          <OtherProject otherProject={otherpr} />
        ))}
      </div>
    </div>
  )
}

export default OtrosProyectos

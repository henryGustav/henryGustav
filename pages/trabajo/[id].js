import React from 'react'

const arrayTrabajos = [
  {
    title: 'Tecnomega Store',
    description:
      'Este proyecto se basó en la creación de un sistema Ecommerce para la empresa Tecnomega C.A. El objetivo del proyecto fue reemplazar un sistema obsoleto y desarrollar uno nuevo con más funcionalidades un mejor diseño y una mejor funcionalidad. El proyecto abarcó tanto trabajo de front-End como de Back-end, así como despliegue y alojamiento del sistema en un VPS de AWS Amazon Web Services. ',
    img: '/img/tecnomega.png',
    code: 'tecnomega'
  },

  {
    title: 'Quasad Tech',
    description:
      'Mientras trabajaba en el departamento de desarrollo de Tecnomega C.A, como desarrollodor Web, realicé varias funcionalidades tanto de front-end como back-end del sito Quasad Tech',
    code: 'quasad',
    img: '/img/quasad.png'
  },
  {
    title: 'Easybox',
    description:
      'El sistema de Ecommerce Easybox es uno de los sitos Web para los que trabaje durante mi estancia en la empresa Sisoftel. Trabajé en todo el diseño , funcionalidad interna de la aplicacion ademas de desarrollar varios modulos en el lado del backendy mentenimiento de la aplicación en sí',
    code: 'easybox',
    img: '/img/easybox.png'
  }
]

const Trabajo = ({ idTrabajo }) => {
  console.log(idTrabajo)
  const workSelect = arrayTrabajos.find(trabajo => trabajo.code === idTrabajo)
  console.log(workSelect)
  return (
    <div>
      <h1 className='text-white'>{workSelect.title}</h1>
      <p className='text-white items-center'>{workSelect.description}</p>
      <img src={workSelect.img} alt='' />
    </div>
  )
}

Trabajo.getInitialProps = async ctx => {
  const { id } = await ctx.query

  return { idTrabajo: id }
}
export default Trabajo

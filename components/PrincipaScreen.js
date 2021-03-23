import React from 'react'

const PrincipalScreen = () => {
  return (
    <div className='container-infoprincipal'>
      <div className='contenedor'>
        <div className='contenido text-center'>
          <p className='font-montserrat  text-lg sm:text-3xl'>Hola, mi nombre es</p>
          <h1 className='text-white text-5xl sm:text-8xl font-arvo font-medium mt-3'>
            Henry Tipantuña
          </h1>

          <div className='info-personal '>
            <p className='font-montserrat  text-lg sm:text-3xl mt-4'>
              Soy un Ingeniero Informatico, recidente en la ciudad de Quito -
              Ecuador
            </p>
            <br/>
            <p className='font-montserrat   text-lg sm:text-3xl mt-3'>Bienvenido a mi Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrincipalScreen

import React, { useContext } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Router from 'next/router'
import { ModalContext } from '../context/ModalContext'

const Trabajos = () => {
  const { modalTrabajo, setmodalTrabajo, settrabajo } = useContext(ModalContext)

  const trabajos = [
    {
      code: 'tecnomega',
      name: 'Tecnomega',
      img: 'https://tecnomegastore.ec/img/tms_logovw.svg'
    },

    {
      code: 'quasad',
      name: 'Quasad',
      img: 'https://quasad.tech/img/logos/TM.svg'
    },
    {
      code: 'easybox',
      name: 'Easybox',
      img: 'img/logoWork/easybox.png'
    }
  ]

  const handleClicTrabajo = trabajo => {
    // Router.push('/trabajo/[id]', `/trabajo/${trabajo}`)
    setmodalTrabajo(true)
    settrabajo(trabajo)
  }
  return (
    <div className='container-trabajos section-padding' id='container-trabajos'>
      <h1 className='title'>Trabajos</h1>

      <div className='slide-app'>
        <Carousel
          autoPlay
          autoFocus={true}
          infiniteLoop
          interval='4000'
          isMouseEntered={false}
          stopOnHover={false}
        >
          {trabajos.map(trabajo => (
            <div
              key={trabajo.code}
              onClick={() => handleClicTrabajo(trabajo.code)}
            >
              <img src={trabajo.img} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className='trabajos'>
        {trabajos.map(trabajo => (
          <div
            className='trabajo cursor-pointer'
            key={trabajo.code}
            onClick={() => handleClicTrabajo(trabajo.code)}
          >
            <img src={trabajo.img} alt='' />
            <p>{trabajo.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trabajos

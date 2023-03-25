// import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import React, { useContext, useState, useEffect } from 'react'
import { ModalContext } from '../context/ModalContext'
import { DatosContext } from '../context/DatosContext'
import axios from 'axios'
const ModalTrabajo = () => {
  //   const alert = useAlert()

  const arrayTrabajos = [
    {
      title: 'Tecnomega Store',
      description:
        'Este proyecto se basó en la creación de un sistema Ecommerce para la empresa Tecnomega C.A. El objetivo del proyecto fue reemplazar un sistema obsoleto y desarrollar uno nuevo con más funcionalidades un mejor diseño y una mejor funcionalidad. El proyecto abarcó tanto trabajo de front-End como de Back-end, así como despliegue y alojamiento del sistema en un VPS de AWS Amazon Web Services. ',
      img: '/img/tecnomega.png',
      code: 'tecnomega',
      link: 'https://tecnomegastore.ec/',
    },

    {
      title: 'Quasad Tech',
      description:
        'Mientras trabajaba en el departamento de desarrollo de Tecnomega C.A, como desarrollodor Web, realicé varias funcionalidades tanto de front-end como back-end del sito Quasad Tech',
      code: 'quasad',
      img: '/img/quasad.png',
      link: 'https://quasad.tech/',
    },
    {
      title: 'Easybox',
      description:
        'El sistema de Ecommerce Easybox es uno de los sitos Web para los que trabaje durante mi estancia en la empresa Sisoftel. Trabajé en todo el diseño , funcionalidad interna de la aplicacion ademas de desarrollar varios modulos en el lado del backend',
      code: 'easybox',
      img: '/img/easybox.png',
      link: 'https://www.easybox.com.ec/',
    },
  ]

  const { modalTrabajo, setmodalTrabajo, trabajo, settrabajo } =
    useContext(ModalContext)

  const workSelect = arrayTrabajos.find((job) => job.code === trabajo)

  const isGithubActions = process.env.GITHUB_ACTIONS || false

  return (
    <Modal
      open={modalTrabajo}
      onClose={() => {
        setmodalTrabajo(false)
      }}
      top
      blockScroll={false}
      closeOnOverlayClick={true}
      showCloseIcon={true}
      closeOnEsc={true}
      classNames={{
        overlay: 'customOverlay',
        modal: 'customModal',
      }}
      center
    >
      {modalTrabajo && (
        <div className="p-3 ">
          <h1 className="font-arvo font-normal text-2xl sm:text-3xl mb-3 text-white text-center">
            {workSelect.title}
          </h1>
          <p className="font-montserrat text-lg font-medium	text-white">
            {workSelect.description}
          </p>

          <img
            src={
              isGithubActions ? `/henryGustav${workSelect.img}` : workSelect.img
            }
            alt=""
            className="p-4 modal-img"
          />

          <a
            target="_blank"
            href={workSelect.link}
            className="mx-auto block text-white button-sitio"
          >
            Visitar el Sitio
          </a>
          {/* <a href=""></a> */}
        </div>
      )}
    </Modal>
  )
}

export default ModalTrabajo

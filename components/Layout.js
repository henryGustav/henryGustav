import React from 'react'
import Head from 'next/head'
import ModalTrabajo from '../components/ModalTrabajo'

const Layout = props => {
  return (
    <div className='mega-home flex flex-col'>
      <Head>
        <title>Henry Tipantuna </title>

        <meta httpEquiv='Content-Type' content='text / html; charset = utf-8' />
        <meta
          name='viewport'
          content='width = device-width, initial-scale = 1'
        />
      </Head>
      <ModalTrabajo />
      {props.children}
    </div>
  )
}

export default Layout

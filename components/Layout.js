import React from 'react'
import Head from 'next/head'


const Layout = props => {

  return (
    <div className='mega-home'>
      <Head>
        <title>Henry Tipantuna </title>

        <meta httpEquiv='Content-Type' content='text / html; charset = utf-8' />
        <meta
          name='viewport'
          content='width = device-width, initial-scale = 1'
        />

     
      </Head>
      {props.children}
    </div>
  )
}

export default Layout

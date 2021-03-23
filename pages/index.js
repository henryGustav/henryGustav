import React from 'react'
import About from '../components/About'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Trabajos from '../components/Trabajos'
import PrincipalScreen from '../components/PrincipaScreen'
import OtrosProyectos from '../components/OtrosProyectos'
import Conocimientos from '../components/Conocimientos'
import Footer from '../components/Footer'
import RedesFloat from '../components/RedesFloat'
const index = () => {
  return (
    <Layout>
      <NavBar />
      <PrincipalScreen />
      <div className='sub-components flex flex-col '>
        <RedesFloat />
        <About />
        <Trabajos />
        <Conocimientos />
        <OtrosProyectos />
      </div>

      <Footer />
      {/* <Nav /> */}
      {/* <Categories/> */}
    </Layout>
  )
}

export default index

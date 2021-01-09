
import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Trabajos from "../components/Trabajos";
import PrincipalScreen from "../components/PrincipaScreen";
import OtrosProyectos from "../components/OtrosProyectos";
const index = () => {
  return (
    <Layout>

      <NavBar />
      <PrincipalScreen />
      <div className="sub-components">

        <About />
        <Trabajos />
        <OtrosProyectos/>
      </div>

      {/* <Nav /> */}
      {/* <Categories/> */}


    </Layout>
  );
};

export default index;

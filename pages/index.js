
import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import PortFolio from "../components/PortFolio";
import PrincipalScreen from "../components/PrincipaScreen";
const index = () => {
  return (
    <Layout>
      <div className="mega-contenedor">
        <NavBar />
        <PrincipalScreen />
        <About />
        <PortFolio />

        {/* <Nav /> */}
        {/* <Categories/> */}

      </div>
    </Layout>
  );
};

export default index;


import React from "react";
import Layout from "../components/Layout";
import PortFolio from "../components/PortFolio";
import PrincipalScreen from "../components/PrincipaScreen";
const index = () => {
  return (
    <Layout>
      <div className="mega-contenedor">
        <PrincipalScreen />
        <PortFolio />
        {/* <Nav /> */}
        {/* <Categories/> */}

      </div>
    </Layout>
  );
};

export default index;

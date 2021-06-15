import React from "react";

const PrincipalScreen = () => {
  return (
    <div className="container-infoprincipal">
      <div className="contenedor">
        <div className="contenido text-center">
          <p className="info-parrafo">Hola, mi nombre es</p>
          <h1 className="info-name">Henry Tipantuña</h1>

          <div className="info-personal">
            <p className="info-parrafo mt-4">
              Soy un Ingeniero Informático, residente en la ciudad de
            </p>
            <p>Quito - Ecuador</p>
            <br />
            <p className="info-parrafo">Bienvenido a mi Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalScreen;

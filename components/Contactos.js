import React from "react";

const Contactos = () => {
  return (
    <div className="container-contactos section-padding">
      <h1 className="title">Contacto</h1>
      <div className="image">
        <img src="img/vectores/message.svg" alt="" width="250" />
      </div>

      <p className="mb-4">
        Podemos establecer conversación, con gusto responderé tus preguntas.
      </p>

      <div className="btn-contact">
        <a href="https://api.whatsapp.com/send?phone=+593969719186&amp;text=Hola!%20podemos%20conversar%20sobre%20un%20proyecto">
          Ponerse en contacto
        </a>
      </div>
    </div>
  );
};

export default Contactos;

import React from "react";

const RedesFloat = () => {
  return (
    <div className="redes-float-container">
      {/* <i className="fab fa-github"></i> */}
      <a href="mailto:gustavo_1514@outlook.es">
        <i className="fas fa-envelope"></i>
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/henry-tipantu%C3%B1a-07b041203/"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=+593969719186&amp;text=Hola!%20podemos%20conversar%20sobre%20un%20proyecto"
        target="_blank"
      >
          <i className='fab fa-whatsapp'></i>
      </a>
      {/* <h1 className='text-white'>Redes Float</h1> */}
    </div>
  );
};

export default RedesFloat;

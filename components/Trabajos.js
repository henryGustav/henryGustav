import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Trabajos = () => {

    const trabajos = [
        {
            code: 'Tecnomega',
            img: 'https://compras.easybox.com.ec/images/Logo/logobox_easy.png'
        },

        {
            code: 'Easybox',
            img: 'https://tecnomegastore.ec/img/tms_logovw.svg'
        },
        {
            code: 'Quasad',
            img: 'https://quasad.tech/img/logos/TM.svg'
        }


    ]
    return (

        <div className='container-trabajos'>
            <h1>Trabajos</h1>

            <div className="slide-app">
                <Carousel
                    autoPlay
                    autoFocus={true}
                    infiniteLoop
                    interval="4000"
                    isMouseEntered={false}
                    stopOnHover={false}
                >
                    {trabajos.map((trabajo) => (
                        <div key={trabajo.code} onClick={() => { console.log("Gojdf") }}>
                            <img src={trabajo.img} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Trabajos;
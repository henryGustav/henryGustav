import React from 'react';

const About = () => {
    return (

        <div className='container-about'>
            <h1>Sobre mi</h1>

            <p>
                Hola ! mi nombre es Henry Tipantuña, Ingeniero informatico. A lo largo de mi carrera profesional he
                desarrollado aplicaciones, con distintas tecnologias en las empresas a las cuales he pertenecido.

                Me gusta aprender siempre de nuevas herramientas y tendencias de programacịon que puedan aportar a los proyectos
                que desarrollo.



            </p>

            <p>Entre las tecnologias que he trabajado recientemente estan: </p>

            <div className='tecnologias'>



                <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Mongo DB</li>
                </ul>

                <ul>
                    <li>Java 8</li>
                    <li>Angular v8</li>
                    <li>MySQL</li>
                </ul>

                <ul>
                    <li>HTML CSS JavaScript</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
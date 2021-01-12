import React from 'react';

const Conocimientos = () => {


    return (

        <div className="container-conocimientos">

            <h1>Conocimientos</h1>
            <div className="items-conocimientos">
                <div className="item-conocimiento conocimientos-front-end">
                    <p>Tecnologias del lado del Servidor - BackEnd</p>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>JPA</li>
                        <li>Laravel 5+</li>
                        <li>API REST</li>

                    </ul>
                </div>

                <div className="item-conocimiento conocimientos-front-end">
                    <p>Tecnologias del lado del Cliente - FrontEnd</p>
                    <ul>

                        <li>React</li>
                        <li>Next.js</li>
                        <li>Angular 4 o superior</li>
                        <li>HTML5</li>
                        <li>CSS 3 </li>
                        <li>Flexbox</li>
                        <li>Grid</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>

                    </ul>
                </div>

                <div className="item-conocimiento conocimientos-bd">
                    <p>Tecnologias  de Bases de datos</p>

                    <ul>
                        <li>MySql</li>
                        <li>PostgreSQL</li>
                        <li>Oracle</li>
                        <ul>
                            <li>Diseño de tablas</li>
                            <li>Consultas SQL</li>
                            <li>Diagramas relacionales</li>
                        </ul>
                    </ul>
                    <ul>

                    </ul>
                </div>

                <div className="item-conocimiento conocimientos-tecnologias">
                    <p>Tecnolog̬ias auxiliares de trabajo</p>

                    <ul>
                        <li>GIT control de versiones</li>
                        <li>Jboss - WildFly </li>
                        <li>Apache</li>
                        <li>Visuak Studio Code</li>
                    </ul>

                </div>
            </div>

          

        </div>
    );
}

export default Conocimientos;
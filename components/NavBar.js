import React, { useEffect, useState } from 'react';
import $ from "jquery";
const NavBar = () => {


    const [flag, setflag] = useState('stycky')
    const listNav = [{
        code: '.container-about',
        name: 'Acerca de Mi',

    },
    {
        code: '.container-trabajos ',
        name: 'Trabajos',

    }, {
        code: 3,
        name: 'Otros Proyectos',

    },
    {
        code: 4,
        name: 'Contacto',

    },
    ]

    const handleClickNav = (code) => {
        const jumbotron = document.querySelector(`${code}`);
        jumbotron.scrollIntoView({ behavior: "smooth" });
    }


    useEffect(() => {

        
        handleClickNav('.container-infoprincipal')

        let scroll = $(document).scrollTop()
        let navHeight = $('.container-navbar').outerHeight()

        $(window).scroll(function () {
            // console.log(scroll);
            let scrolled = $(document).scrollTop()
            if (scrolled > navHeight) {
                $('.container-navbar').addClass('animate')

            } else {
                $('.container-navbar').removeClass('animate')

            }
            if ((scrolled > scroll)) {
                $('.container-navbar').removeClass('stycky')
            } else {
                $('.container-navbar').addClass('stycky')

            }
            scroll = $(document).scrollTop()
        })
    }, [])


    return (

        <div className={`container-navbar ${flag}`} id='container-navbar'>

            <h1>Henry Tipantuña</h1>

            <div className='nav-items'>
                <nav>
                    <ul>
                        {listNav.map((item, index) => (
                            <li key={index} onClick={() => handleClickNav(item.code)}>{item.name}</li>
                        ))}


                        <button >Hoja de Vida</button>
                    </ul>
                </nav>
            </div>
            
        </div>
    );
}

export default NavBar;
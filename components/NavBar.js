import React from 'react';
const NavBar = () => {

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
    return (

        <div className='container-navbar'>

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
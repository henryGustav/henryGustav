import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { Drawer, Button, Radio, Space } from 'antd'

const NavBar = () => {
  const [visible, setvisible] = useState(false)

  const [flag, setflag] = useState('stycky')
  const listNav = [
    {
      code: '.container-about',
      name: 'Acerca de Mi'
    },
    {
      code: '.container-trabajos ',
      name: 'Trabajos'
    },
    {
      code: '.container-otros-proyectos',
      name: 'Otros Proyectos'
    },
    {
      code: 4,
      name: 'Contacto'
    }
  ]

  const handleClickNav = code => {
    const jumbotron = document.querySelector(`${code}`)
    jumbotron.scrollIntoView({ behavior: 'smooth' })
  }

  const showDrawer = () => {
    setvisible(true)
  }

  const onClose = () => {
    setvisible(false)
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
      if (scrolled > scroll) {
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
              <li key={index} onClick={() => handleClickNav(item.code)}>
                {item.name}
              </li>
            ))}

            <a href='files/HojaVida_HenryTipantuna.pdf' download>
              Hoja de Vida
            </a>
          </ul>
        </nav>
      </div>

      <div className='menu-hamburguesa'>
        <button className='btn-icon-hamburguesa ' onClick={showDrawer}>
          <i className='fas fa-bars'></i>
        </button>
      </div>

      <Drawer
        title='Basic Drawer'
        placement={'left'}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={'left'}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default NavBar

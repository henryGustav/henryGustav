import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Drawer, Button, Radio, Space } from "antd";
import { Link } from "react-scroll";

const NavBar = () => {
  const [visible, setvisible] = useState(false);

  const [flag, setflag] = useState("stycky");
  const listNav = [
    {
      code: "container-about",
      name: "Acerca de Mi",
      icon: "fas fa-user",
    },
    {
      code: "container-trabajos ",
      name: "Trabajos",
      icon: "fas fa-briefcase",
    },
    {
      code: "container-otros-proyectos",
      name: "Otros Proyectos",
      icon: "fas fa-tasks",
    },
    {
      code: "container-contactos",
      name: "Contacto",
      icon: "fas fa-phone-square",
    },
  ];

  const handleClickNav = (code) => {
    const jumbotron = document.querySelector(`${code}`);
    jumbotron.scrollIntoView({ behavior: "smooth" });
  };

  const showDrawer = () => {
    setvisible(true);
  };

  const onClose = () => {
    setvisible(false);
  };
  useEffect(() => {
    handleClickNav(".container-infoprincipal");

    let scroll = $(document).scrollTop();
    let navHeight = $(".container-navbar").outerHeight();

    $(window).scroll(function () {
      // console.log(scroll);
      let scrolled = $(document).scrollTop();
      if (scrolled > navHeight) {
        $(".container-navbar").addClass("animate");
      } else {
        $(".container-navbar").removeClass("animate");
      }
      if (scrolled > scroll) {
        $(".container-navbar").removeClass("stycky");
      } else {
        $(".container-navbar").addClass("stycky");
      }
      scroll = $(document).scrollTop();
    });
  }, []);

  const infoDrawer = (
    <ul>
      {listNav.map((item, index) => {
        console.log(item.code);
        return (
          <Link
            key={item.code}
            activeClass="active"
            to={item.code}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-55}
            duration={500}
            delay={250}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            <i className={item.icon}></i>
            <p key={index} onClick={() => setvisible(false)}>
              {item.name}
            </p>
          </Link>
        );
      })}

      <a
        href="files/HojaVida_HenryTipantuna.pdf"
        download
        onClick={() => setvisible(false)}
      >
        Hoja de Vida
      </a>
    </ul>
  );

  return (
    <div className={`container-navbar ${flag}`} id="container-navbar">
      <div className="image-logo">
        <img src="img/android-chrome-192x192.png" alt="" width="45" />
      </div>
      <div className="nav-items">
        <nav>{infoDrawer}</nav>
      </div>

      <div className="menu-hamburguesa">
        <button className="btn-icon-hamburguesa " onClick={showDrawer}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <Drawer
        title="Henry Tipantuña"
        placement={"left"}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={"left"}
        className="draw-menu"
      >
        {infoDrawer}
      </Drawer>
    </div>
  );
};

export default NavBar;

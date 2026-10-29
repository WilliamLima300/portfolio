import React, { useEffect, useState } from 'react';
import "./header.css";

const Header = () => {
    const [toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            document.querySelector(".header")?.classList.toggle("scroll-header", window.scrollY >= 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <header className="header">
        <nav className="nav container">
            <a href="#home" className="nav__logo">W<span>.</span></a>
        
            <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === "#home" ? " nav__link active-link" : "nav__link" } >
                            <i className="uil uil-estate nav__icon"></i>Início
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? " nav__link active-link" : "nav__link" }>
                            <i className="uil uil-user nav__icon"></i>Sobre
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? " nav__link active-link" : "nav__link" }>
                            <i className="uil uil-file-alt nav__icon"></i>Habilidades
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? " nav__link active-link" : "nav__link" }>
                            <i className="uil uil-scenery nav__icon"></i>Projetos
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? " nav__link active-link" : "nav__link" }>
                            <i className="uil uil-message nav__icon"></i>Contato
                        </a>
                    </li>
                </ul>
                
                <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
                
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header;

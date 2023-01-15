import React, { useState } from 'react'; //Importar react
import "./header.css";//importar css do APP



const Header = () => {
    /* =====Mudar background do Menu selecionado=== */
        
        window.addEventListener("scroll",function(){
            const header = document.querySelector(".header");
    
            if(this.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        });
    

    /* =====Toggle Menu=== */
       const [Toggle, showMenu] = useState(false);
       const[activeNav,setActiveNav] = useState("#home")


  return (

    
    
    // Adicionar tag header com todos menus e logo
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">&lt;&frasl;William&gt;</a>
        
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
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
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? " nav__link active-link" : "nav__link" }>
                            <i className="uil uil-message nav__icon"></i>Contato
                        </a>
                    </li>
                </ul>
                
                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header;

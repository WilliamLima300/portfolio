import React from 'react';
import "./scrollup.css";

const Scrollup = () => {
    //adicionar o botão para scroll quando a pagina for "rolada" para baixo

    window.addEventListener("scroll",function(){
        const scrollUp = document.querySelector(".scrollup");

        if(this.scrollY >= 500) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup;

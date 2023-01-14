import React from 'react';


const Social = () => {
  return (
    //Adicionar os links e icones para redes Sociais 
    <div className="home__social">

        <a href="https://www.instagram.com/williamlima300/"  rel="noopener noreferrer" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/william-lima-alves-1139bb219/" rel="noopener noreferrer" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/WilliamLima300" rel="noopener noreferrer" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social;

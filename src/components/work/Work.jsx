import React from 'react';
import "./work.css";//importar css da pagina works
import Works from './Works';//importaros trabalhos do portfolio

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfólio</h2>
        <span className="section__subtitle">Meus trabalhos recentes</span>

        <Works />
    </section>
  )
}

export default Work;

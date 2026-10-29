import React from 'react';
import "./work.css";//importar css da pagina works
import Works from './Works';//importaros trabalhos do portfolio

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Produtos que ganharam vida</h2>
        <span className="section__subtitle">Projetos recentes onde aprofundei TypeScript, inteligência artificial e construção de produtos digitais.</span>

        <Works />
    </section>
  )
}

export default Work;

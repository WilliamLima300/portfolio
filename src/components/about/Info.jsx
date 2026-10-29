import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">Evolução contínua</span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Projetos realizados</h3>
            <span className="about__subtitle">20+ entregas</span>
        </div>

        <div className="about__box">
            <i className='bx bx-support about__icon' ></i>
            <h3 className="about__title">Produtos</h3>
            <span className="about__subtitle">Web e mobile</span>
        </div>
    </div>
  )
}

export default Info;

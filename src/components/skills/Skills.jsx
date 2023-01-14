import React from 'react';
import "./skills.css"; // importar estilo para habilidades
import Frontend from "./Frontend"; //importar habilidades frontend
import Backend from "./Backend"
const Skills = () => {
  return (
    <section className="skills section" id="skills">

        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Meu nível técnico</span>


        <div className="skills__container container grid">
        {/* Adicionar Habilidades front end */}
        <Frontend />

        {/* Adicionar Habilidades back end*/}
        <Backend />

        </div>
    </section>
  )
}

export default Skills;

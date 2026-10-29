import React from 'react';
import "./skills.css"; // importar estilo para habilidades
const skillGroups = [
  {
    icon: "bx bx-code-alt",
    title: "Front-end",
    description: "Interfaces responsivas, acessíveis e orientadas à experiência.",
    skills: ["TypeScript", "JavaScript", "React", "HTML & CSS"]
  },
  {
    icon: "bx bx-server",
    title: "Back-end",
    description: "APIs, regras de negócio, integrações e persistência de dados.",
    skills: ["Node.js", "PHP", "MySQL", "APIs REST"]
  },
  {
    icon: "bx bx-brain",
    title: "IA & automação",
    description: "IA aplicada a produtos, chatbots e fluxos de atendimento.",
    skills: ["Inteligência Artificial", "Chatbots", "Automação", "Prompt engineering"]
  }
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">

        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Tecnologias que uso para levar uma ideia até a produção.</span>


        <div className="skills__container container grid">
          {skillGroups.map((group) => (
            <article className="skills__content" key={group.title}>
              <i className={`${group.icon} skills__icon`}></i>
              <h3 className="skills__title">{group.title}</h3>
              <p className="skills__description">{group.description}</p>
              <div className="skills__tags">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
    </section>
  )
}

export default Skills;

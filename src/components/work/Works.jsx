import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {projectsData} from './Data'; //importar dados dos projetos de DATA
import { projectsNav } from './Data';//importar tipo dos projetos de DATA
import WorksItems from './WorksItems';

const Works = () => {
    const[ item,setItem] = useState({name: 'Destaques'});
    const[ projects, setProjects] = useState(projectsData.filter((project) => project.featured));
    const[active,setActive] = useState(0);

    useEffect(() =>{
        if(item.name === "Todos"){
            setProjects(projectsData);
        } else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    },[item]);

    const handleClick = (name,index) => {
        setItem({name});
        setActive(index);
    }

  return (
    <div>
        <div className="work__filters">
            {projectsNav.map((item, index) => {
                return (
                    <button onClick={() => handleClick(item.name,index)}
                      className={`${active === index ? 'active-work ' : ""}work__item`}
                      key={item.name}>{item.name}</button>
                )
            })}
        </div>

        <div className="work__container container grid">
            {projects.map((item)=> {
                return <WorksItems item={item} key={item.id} />
            })}
        </div>
    </div>
  );
};

export default Works;

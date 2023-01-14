import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {projectsData} from './Data'; //importar dados dos projetos de DATA
import { projectsNav } from './Data';//importar tipo dos projetos de DATA
import WorksItems from './WorksItems';

const Works = () => {
    const[ item,setItem] = useState({name: 'Todos'});
    const[ projects, setProjects] = useState([]);
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

    const handleClick = (e,index) => {
        setItem({name:e.target.textContent });
        setActive(index);
    }

  return (
    <div>
        <div className="work__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span onClick={(e)=>{
                        handleClick(e,index);
                    }} className={`${active === index ? 'active-work' : ""}work__item`} key={index}>{item.name}</span>
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

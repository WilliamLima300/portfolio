import React from 'react';

const WorksItems = ({item}) => {
  return (
    <article className={`work__card ${item.featured ? "work__card--featured" : ""}`} key={item.id}>
      {item.featured ? (
        <div className="work__visual">
          <span>{item.type}</span>
          <i className={item.icon}></i>
        </div>
      ) : (
        <img src={item.image} alt={`Prévia do projeto ${item.title}`} className="work__img" />
      )}
      <div className="work__body">
      <h3 className="work__title">{item.title}</h3>
      {item.description && <p className="work__description">{item.description}</p>}
      {item.tags && <div className="work__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
      <a href={item.demo} target="_blank" rel="noopener noreferrer" className='work__button'>
        Conhecer projeto <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      </div>
    </article>
  )
}

export default WorksItems;

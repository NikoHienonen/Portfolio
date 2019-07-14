import React from 'react'

const renderStack = (stack) => {
  let stackArray = [];
  stack.forEach(technology => {
    stackArray.push(<i className={"fab fa-"+technology} key={technology}></i>);
  });
  return (
    <React.Fragment>{stackArray}</React.Fragment>
  )
}
const renderLink = (link) => {
  return !link 
  ? null
  : <a href={link}><i className="fas fa-link"></i></a>
}

const renderImgLink = (link, img, alt) => {
  return !link 
  ?  <img alt={alt} src={"/projects/"+img}/>
  : (<a href={link}>
      <img alt={alt} src={"/projects/"+img}/>
    </a>)
}

const Project = (project) => {
  const {id, name, description, stack, alt, img, link, github } = project;
    return (
      <div className="project-card" key={id}>
      <div className="card-head">
        {renderImgLink(link, img, alt)}
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <p className="stack">
          {renderStack(stack)}
        </p>
        <div className="links">
          {renderLink(link)}
          <a href={github}><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    )
}

export default Project 

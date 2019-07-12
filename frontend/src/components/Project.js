import React from 'react';

const Project = (project) => {
  const { id, name, img, description, github, link } = project
  return (
    <div className="project-card" key={id}>
      <img href={'/'+img}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={github}><i className="fab fa-github"></i></a>
      <a href={link}><i class="fas fa-link"></i></a>
    </div>
  );
};

export default Project;
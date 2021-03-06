import React from 'react';
import { NavLink } from 'react-router-dom';

const Introduction = () => {
  return (
    <div className="section introduction">
      <h1>Introduction</h1>
      <img src='/meitsi.jpg' alt="Niko"/>
      <p>Welcome to my portfolio! I'm Niko Hienonen, a 23-year old web developer from Tampere. 
      I'm currently finishing my degree in web development in Tampere University and working
      on projects alongside school. I'm also open to job and project proposals, so 
      <NavLink to="/contact" activeClassName="active"> contact </NavLink> 
      me!</p>
      <p>My main strengths are my passion to web development, my aspiration to evolve and learn new 
      techniques and my desire to create beautiful things.</p>
      <p>Here are some of the techniques I use:</p>
      <div className="techniques">
        <i className="fab fa-react"></i>
        <i className="fab fa-angular"></i>
        <i className="fab fa-vuejs"></i>
        <i className="fab fa-sass"></i>
        <i className="fab fa-node"></i>
        <i class="fab fa-swift"></i>
        <i className="fab fa-js-square"></i>
        <i className="fab fa-python"></i>
      </div>
    </div>
  );
};

export default Introduction;
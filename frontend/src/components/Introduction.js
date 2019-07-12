import React from 'react';

const Introduction = () => {
  return (
    <div className="section introduction">
      <h1>Introduction</h1>
      <img src='/meitsi.jpg' alt="A picture of me"/>
      <p>Welcome to my portfolio! I'm Niko Hienonen, a 22-year old web developer from Tampere. 
      I'm currently finishing my degree in web development in Tampere University and working
      on projects alongside school. I'm also open to job and project proposals, so see the 
      contact-page to contact me!</p>
      <p>My main strengths are my passion to web development, my aspiration to evolve and learn new 
      techniques and my desire to create beautiful things.</p>
      <p>Here are some of the techniques I use:</p>
      <div className="techniques">
        <i className="fab fa-react"></i>
        <i className="fab fa-angular"></i>
        <i className="fab fa-vuejs"></i>
        <i className="fab fa-sass"></i>
        <i className="fab fa-node"></i>
        <i className="fab fa-js-square"></i>
        <i className="fab fa-python"></i>
      </div>
    </div>
  );
};

export default Introduction;
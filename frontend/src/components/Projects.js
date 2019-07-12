import React, { Component } from 'react';

class Projects extends Component {
  state = {
    projects: [
      {id: 0
      , name: 'Exotic Snackstore'
      , description: ```Exotic Snackstore is a dummy webstore that sells foreign snacks. 
      Users can create accounts and place dummy orders while admins can edit the products, 
      view orders and manage users.```
      , }
    ]
  }
  render() {
    return (
      <div id="projects" className="section">
        <h1>Projects</h1>
      </div>
    );
  }
}

export default Projects;
import React, { Component } from 'react';

import GetProjects from './GetProjects';
import Project from './Project';

class Projects extends Component {
  state = { projects: [] };

  componentDidMount() {
    const projects = GetProjects();
    this.setState({projects});
  }
  renderProjects = () => {
    let projectsArray = [];
    this.state.projects.forEach(project => {
      projectsArray.push(Project(project));
    })
  }
  render() {
    return (
      <div className="section">
        <h1>Projects</h1>
        <div className="projects">
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default Projects;
import React, { Component } from 'react';

import GetProjects from './GetProjects';
import Project from './Project';

class Projects extends Component {
  state = { projects: [], projectElements: []};

  componentDidMount() {
    this.getProjects();
  }
  getProjects = () => {
    const projects = GetProjects();
    this.setState({projects}, () => {this.turnProjectsToJSX();});
  }
  turnProjectsToJSX = () => {
    const array = this.state.projects.map(project => Project(project))
    this.setState({projectElements: array});
  }
  render() {
    return (
      <div className="section">
        <h1>Projects</h1>
        <div className="projects">
          {this.state.projectElements}
        </div>
      </div>
    );
  }
}

export default Projects;
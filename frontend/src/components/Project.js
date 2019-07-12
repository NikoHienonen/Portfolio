import React, { Component } from 'react'


export default class Project extends Component {

  renderStack = (stack) => {
    let stackArray = [];
    stack.forEach(stack => {
      stackArray.push(<li><i className={"fab fa-"+stack}></i></li>);
    });
    return (
      <ul>{stackArray}</ul>
    )
  }
  render() {
    const {id, name, description, stack, alt, img, link, github } = this.props.project;
    return (
      <div className="project-card" key={id}>
      <div className="card-head">
        <a href={link}>
          <img alt={alt} src={"/projects/"+img}/>
        </a>
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="tags">
          {this.renderStack(stack)}
        </p>
        <a href={link}><i className="fas fa-link"></i></a>
        <a href={github}><i className="fab fa-github"></i></a>
      </div>
    </div>
    )
  }
}

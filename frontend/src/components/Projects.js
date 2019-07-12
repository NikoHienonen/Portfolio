import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="section">
        <h1>Projects</h1>
        <div className="projects">
          <div className="project-card" key='231'>
            <img href="/exotic.jpg"/>
            <h2>Exotic Snackstore</h2>
            <p>Exotic Snackstore is a demo webstore that sells foreign snacks. 
               Users can create accounts and place demo orders while admins can edit the products, 
               view orders and manage users. Done with Teemu Tannerma.</p>
            <a href='https://github.com/NikoHienonen/Exotic-Snackstore'><i className="fab fa-github"></i></a>
            <a href='https://pacific-escarpment-25047.herokuapp.com/'><i class="fas fa-link"></i></a>
          </div>
          <div className="project-card" key='331'>
            <img href="/audio.jpg"/>
            <h2>Audio Coursestore</h2>
            <p>Audio Coursestore is a demo portal for teachers to view and sign up for courses
              that I created for a client. This is not the real version, just a showcase version of the real one
              with all the data changed to placeholder and dummy info about audio production.</p>
            <a href='https://github.com/NikoHienonen/audiocourse-store'><i className="fab fa-github"></i></a>
            <a href='https://rocky-tor-98553.herokuapp.com/'><i class="fas fa-link"></i></a>
          </div>
          <div className="project-card" key='321'>
            <img href="/audio.jpg"/>
            <h2>Guess The Rick and Morty Character!</h2>
            <p>Guess the Rick and Morty Character! is the first project that I ever created, I made 
               it to train my REST-skills. Obviously it isn't perfect since it doesn't work with a sufficiently fast
               connection, but acts as a memento for where I've come from.</p>
            <a href='https://github.com/NikoHienonen/R-M'><i className="fab fa-github"></i></a>
            <a href='https://nikohienonen.github.io/R-M/index.html'><i class="fas fa-link"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
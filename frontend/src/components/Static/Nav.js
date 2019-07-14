import React from 'react';
import { NavLink } from 'react-router-dom';

import NavToggler from './NavToggler';

const closeNav = (event) => {
  event.target.parentNode.classList.toggle('closed');
}

const Nav = () => {
  return (
    <nav>
      <div className="links closed" onClick={(event) => {closeNav(event)}}>
        <NavLink to="/home" activeClassName="active">Home</NavLink>
        <NavLink to="/introduction" activeClassName="active">Introduction</NavLink>
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </div>
      <NavToggler/>
    </nav>
  );
};

export default Nav;
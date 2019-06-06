import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="links">
        <NavLink to="/home" activeClassName="active">Home</NavLink>
        <NavLink to="/introduction" activeClassName="active">Introduction</NavLink>
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
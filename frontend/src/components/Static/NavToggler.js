import React, { Component } from 'react'

export default class NavToggler extends Component {
  state = {navClosed: true}
  ToggleNav = () => {
    const nav = document.querySelector('.links');
    nav.classList.toggle('closed');
  }
  render() {
    return (
      <button className="navToggler" onClick={() => {this.ToggleNav()}}><i className="fas fa-bars"></i></button>
    )
  }
}

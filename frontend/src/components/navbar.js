import React from 'react';
import "../css/navbar.css";
import mainlogo from "../img/mainlogo.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* <p className="logo">
          Portfolio
        </p> */}
        <img className="logo-img" src={mainlogo} alt="logo" height="50" width="50"></img>
      </div>
      <div className="link-container">
        <a href="#about" className="nav-text">
          About me
        </a><a href="#goals" className="nav-text">
          Goals
        </a>
        <a href="#stack" className="nav-text">
          Tech Stack
        </a>
        <a href="#projects" className="nav-text">
          Projects
        </a>
        <a href="#contact" className="nav-text">
          Contacts
        </a>
      </div>
    </div>
  );
}

export default Navbar;

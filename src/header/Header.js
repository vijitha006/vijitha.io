import React from "react";
import './header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import 'bootstrap-icons/font/bootstrap-icons.css'; 
// import { Github } from 'bootstrap-icons/react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const move = (contact) => {
    return window.location.href = '#contact';
  }
  return (
    <div className="intro">
      {/* <div className="opacity-25">
        <FontAwesomeIcon icon={faGithub} size='3x' />
      </div> */}
      <div className="icons">
        <a href="https://github.com/vijitha006/vijitha006.github.io" target="_blank" rel="noreferrer" className="text-decoration-none"><span className="bi bi-github custom_github" ></span></a>
        <a href="https://www.linkedin.com/in/vijitha-santhosh-a06969269/" target="_blank" rel="noreferrer" className="text-decoration-none"><span className="bi bi-linkedin custom_linkedin"></span></a>
      </div >
      <div className="introduction">
      <h2 className="heading2"> Welcome</h2>
      <h1 className="heading1">I'm <span className="name">Vijitha </span> Santhosh</h1>
      <h2 className="heading2">Web Developer</h2>
      <div className="button_div">
        <button onClick={() => move('contact')}>Contact Me</button>
      </div>
      </div>
    </div>
  )
}
export default Header;
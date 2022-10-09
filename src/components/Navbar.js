import React from 'react';
import "../styles/Navbar.css"

function Navbar() {
  return (
    <header className="top fixed-top">
    <nav className="topBar">
      <ul className="pageChangers d-flex px-2" id="mine">
        <a className="socialIcons socialIcons2" href='#projects'>My Projects</a>
        <a className="socialIcons socialIcons2" href='#contact'>Contact me</a>
      </ul>
      <p className='socialIcons2'>Nicholas Oettinger</p>
      <ul className="social-links mine3" id="mine2">
        <a className="facebookLink mine3" href='#resume'><span className="facebook-text socialIcons2">Resume</span></a>
        <a className="instagramLink mine3" href='#about'><span className="instagram-text socialIcons2">About me</span></a>
      </ul>
    </nav>
  </header>
  );
}

export default Navbar;

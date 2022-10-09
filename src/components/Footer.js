import React from 'react';
import "../styles/Navbar.css"

function Navbar() {
  return (
    <header className="top fixed-top">
    <nav className="topBar">
      <ul className="pageChangers d-flex px-2" id="mine">
        <a className="socialIcons socialIcons2" href='https://github.com/Galdronis'>My Github</a>
      </ul>
      <a href='https://www.instagram.com/nich3215/'className='socialIcons2'>My instagram</a>
      <ul className="social-links mine3" id="mine2">
        <a className="facebookLink mine3" href='linkedin.com/in/nich-oettinger-b659b8245'><span className="facebook-text socialIcons2">My linkedin</span></a>
      </ul>
    </nav>
  </header>
  );
}

export default Navbar;
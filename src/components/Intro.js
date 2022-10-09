import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Intro.css';

const styles = {
  headerStyle: {
    background: 'red'
  },
  headingStyle: {
    fontSize: '100px'
  }
}
function Header() {

  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome to my Portfolio!</h1>
    </header>
  );
}

export default Header;

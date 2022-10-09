import React from 'react';
// Here we import the Section.css file to grant access to some additional classNames
import '../styles/Section.css';



function Section() {
  return (
    <section className="section" id='about'>
      <h2>About Me</h2>
      <p>
       My name is Nicholas Oettinger and I am a 21 year old junior Web Developer! I live in a small town in central Ohio and I started my coding journey with the fullstack development bootcamp through OSU! I have fair experience in HTML, Javascript, and CSS as well as knowledge of many different tools for each language and I have some experience coding in various other languages and javascript extensions like JSX, SQL, and GraphQL. I have a distinct interest in lower level programming languages and would love the opportunity to learn languages like C++ and Assembly. I hope my projects prove interesting to you!
      </p>
    </section>
  );
}

export default Section;

import React from "react";
import Intro from "./src/components/Intro";
import About from "./src/components/About";
import Navbar from "./src/components/Navbar";
import Portfolio from "./src/components/Portfolio";
import Contact from "./src/components/Contact"
import Footer from "./src/components/Footer"
import { Modal } from "bootstrap";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

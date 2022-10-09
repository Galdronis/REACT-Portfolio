import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
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

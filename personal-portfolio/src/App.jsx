import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Banner />

      <About />

      <Skills />

      <Projects />

      <Newsletter />

      {/* Add an id to the Contact section for scrolling */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

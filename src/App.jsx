import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useAppLogic } from './Components/AppLogic';
import ScrollTop from './Components/ScrollTop';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';

function App() {
  const { isDarkMode, toggleDarkMode, showScrollButton } = useAppLogic();

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <BrowserRouter>
        {showScrollButton && <ScrollTop />}
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <About />
        <Skills />
        <Projects isDarkMode={isDarkMode} />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

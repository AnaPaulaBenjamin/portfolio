import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import StyledScroll from './Components/StyledComponents/ScrollTop';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import { HeroPattern } from './Components/HeroPattern';

function PageWithHeroPattern({ children }) {
  return (
    <div>
      <HeroPattern />
      {children}
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    function customizeScrollbar() {
      const bgMode = isDarkMode ? '#020617' : '#fdfdfd';
      const mode = isDarkMode ? '#6649a7' : '#ad6ddf';
      const scrollbarStyle = `
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${mode};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-track {
          background: ${bgMode};
        }
      `;

      const style = document.createElement('style');
      style.textContent = scrollbarStyle;
      document.head.appendChild(style);
    }

    customizeScrollbar();
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const scrollPosition = window.scrollY;
        const homeSectionHeight = homeSection.clientHeight;
        const halfwayPoint = homeSectionHeight / 6;
        setShowScrollButton(scrollPosition > halfwayPoint);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <BrowserRouter>
        {showScrollButton && <StyledScroll />}
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <About />
        <Skills />
        <Projects isDarkMode={isDarkMode} />
        <Contact />
        <Footer />
      </BrowserRouter>
      <HeroPattern />
    </div>
  );
}

export default App;

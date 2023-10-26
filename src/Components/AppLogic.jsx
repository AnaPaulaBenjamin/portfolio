import { useState, useEffect } from 'react';

export function useAppLogic() {
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

  return {
    isDarkMode,
    toggleDarkMode,
    showScrollButton,
  };
}

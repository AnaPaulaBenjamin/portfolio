import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Sobre from './Components/Sobre/Sobre';
// import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Sobre />
        <Routes>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;

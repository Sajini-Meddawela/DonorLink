import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CareHomeLogin from './pages/CareHomeLogin';
import DonorLogin from './pages/DonorLogin'

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path = "/login" element={<Login />} />
          <Route path = "/carelogin" element={<CareHomeLogin />} />
          <Route path = "/donorlogin" element={<DonorLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './about.jsx';

function App() {
  const [home, setHome] = useState(<h1>Home</h1>)
  const location = useLocation();

  return (
    <>
      <nav className='navbar'>
        <Link to={'/'} className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Go to Home</Link>
        <Link to={'/about'} className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>Go to About</Link>
      </nav>
      <Routes>
        <Route path="/" element={home} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

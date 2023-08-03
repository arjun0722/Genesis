import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://estimate.geniusee.com/images/logo.webp" alt="Logo" className="logo" />
        <span>ESTIMATOR</span>
      </div>
      <div className="nav-links">
        <a href="#about" className="nav-link">ABOUT</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <GraduationCap size={32} />
          Rahul EduConsultancy
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#destinations" className="nav-link">Destinations</a>
          <a href="#universities" className="nav-link">Universities</a>
          <a href="#services" className="nav-link">Services</a>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Book Consultation
          </button>
        </nav>
        <button className="menu-toggle">
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

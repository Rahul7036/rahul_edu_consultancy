import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ color: 'white', marginBottom: '1.5rem' }}>
              <GraduationCap size={32} />
              Rahul EduConsultancy
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
              Your premier study abroad consultancy offering end-to-end guidance to secure your future globally.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">About Us</Link>
              <a href="#services" className="footer-link">Services</a>
              <a href="#universities" className="footer-link">Top Universities</a>
              <Link to="/" className="footer-link">Blog & Resources</Link>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Study Destinations</h4>
            <div className="footer-links">
              <span className="footer-link">Study in USA 🇺🇸</span>
              <span className="footer-link">Study in UK 🇬🇧</span>
              <span className="footer-link">Study in Canada 🇨🇦</span>
              <span className="footer-link">Study in Australia 🇦🇺</span>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-links">
              <span className="footer-link" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <MapPin size={16} /> New Delhi, India
              </span>
              <span className="footer-link" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={16} /> +91 98765 43210
              </span>
              <span className="footer-link" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={16} /> info@rahuledu.com
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Rahul EduConsultancy. All rights reserved. Built with passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

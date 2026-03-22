import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="popup-overlay" onClick={onClose}>
          <motion.div 
            className="popup-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="popup-close" onClick={onClose}>&times;</button>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>Don't Miss Out!</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Get a free profile evaluation from our expert counselors. Find your true potential.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Phone Number" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Get Free Evaluation
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;

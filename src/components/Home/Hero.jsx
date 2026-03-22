import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlaneTakeoff } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
            #1 Overseas Education Consultant
          </span>
          <h1 className="hero-title">
            Your Dream <br />
            <span className="gradient-text">University Abroad</span> <br />
            Starts Here.
          </h1>
          <p className="hero-subtitle">
            Get expert guidance for USA, UK, Canada, and Australia. We streamline your journey from university shortlisting to visa success.
          </p>
          <div className="hero-cta">
            <button 
              className="btn btn-primary" 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Consultation <ArrowRight size={20} />
            </button>
            <button 
              className="btn btn-white"
              onClick={() => document.getElementById('universities').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Universities
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-images"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Students on campus" 
            style={{ width: '100%', maxWidth: '500px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-2xl)' }}
          />
          <motion.div 
            className="hero-floating-card"
            style={{ bottom: '-20px', left: '-40px' }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <PlaneTakeoff size={32} color="var(--primary)" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>95%+</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Visa Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

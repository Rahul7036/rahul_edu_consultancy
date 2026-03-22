import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MapContact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    course: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => { if(step === 1 && formData.name && formData.email) setStep(2); };
  const prevStep = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our expert will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start your journey? Visit our office or drop us a message.</p>

        <div className="contact-layout">
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ overflow: 'hidden', position: 'relative' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Book a Free Session</h3>
            
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
              <div style={{ flex: 1, height: '4px', background: 'var(--primary)', borderRadius: '2px' }} />
              <div style={{ flex: 1, height: '4px', background: step > 1 ? 'var(--primary)' : 'var(--border-color)', borderRadius: '2px', transition: 'background 0.3s' }} />
            </div>

            <form onSubmit={handleSubmit} style={{ position: 'relative', minHeight: '320px' }}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="john@example.com" required />
                    </div>
                    <button type="button" onClick={nextStep} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={!formData.name || !formData.email}>
                      Next Step
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Destination</label>
                      <select name="destination" value={formData.destination} onChange={handleChange} className="form-control" required style={{ backgroundColor: 'white' }}>
                        <option value="">Select Country</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Desired Course</label>
                      <input type="text" name="course" value={formData.course} onChange={handleChange} className="form-control" placeholder="e.g. MS in Computer Science" />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                      <button type="button" onClick={prevStep} className="btn btn-outline" style={{ flex: 1 }}>
                        Back
                      </button>
                      <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>
                        Submit Inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div 
            className="map-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.6136804825!2d77.06889969034423!3d28.527022203761353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1689532501000!5m2!1sen!2sus" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapContact;

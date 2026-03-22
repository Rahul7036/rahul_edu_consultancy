import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ListTodo, FileText, FileBadge, BookOpenCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase size={32} />,
      title: "Career Counseling",
      desc: "Expert guidance to find the perfect course and university matching your career goals."
    },
    {
      icon: <ListTodo size={32} />,
      title: "University Shortlisting",
      desc: "Data-driven shortlisting to maximize your chances of securing scholarships & admission."
    },
    {
      icon: <FileText size={32} />,
      title: "SOP & LOR Assistance",
      desc: "Craft compelling statements of purpose and letters of recommendation that stand out."
    },
    {
      icon: <FileBadge size={32} />,
      title: "Visa Processing",
      desc: "End-to-end visa application support, mock interviews, and document verification."
    },
    {
      icon: <BookOpenCheck size={32} />,
      title: "IELTS/TOEFL Coaching",
      desc: "Comprehensive coaching with guaranteed high band scores to meet university requirements."
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">End-to-End Services</h2>
        <p className="section-subtitle">We guide you through every step of your study abroad journey, ensuring a seamless experience.</p>

        <div className="services-grid">
          {services.map((srv, idx) => (
            <motion.div 
              key={idx} 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="service-icon">{srv.icon}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>
              <button 
                className="btn btn-outline" 
                style={{ display: 'block', width: '100%', padding: '0.5rem', fontSize: '0.875rem' }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

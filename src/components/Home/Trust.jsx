import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
  const stats = [
    { label: "Students Placed", value: "5000+" },
    { label: "Visa Success Rate", value: "95%" },
    { label: "Partner Universities", value: "300+" },
    { label: "Countries", value: "15+" }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;

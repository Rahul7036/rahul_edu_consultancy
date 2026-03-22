import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      uni: "Harvard University, USA",
      text: "The guidance I received was phenomenal. They helped me craft an SOP that highlighted my strengths perfectly. I secured admission with a 50% scholarship!",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rohan Patel",
      uni: "University of Toronto, Canada",
      text: "From university selection to visa approval, the entire process was seamless. The visa mock interviews gave me the confidence I needed.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sneha Reddy",
      uni: "University of Melbourne, Australia",
      text: "I was confused about which country to choose, but the expert counseling helped me align my career goals with the perfect university and course.",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">Student Success Stories</h2>
        <p className="section-subtitle">Read what our successful admits have to say about their journey with us.</p>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className="testi-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="testi-header">
                <img src={t.img} alt={t.name} className="testi-avatar" />
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-uni">{t.uni}</div>
                </div>
              </div>
              <p className="testi-body">"{t.text}"</p>
              <div className="stars">
                ★★★★★
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

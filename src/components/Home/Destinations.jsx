import React from 'react';
import { motion } from 'framer-motion';

const Destinations = ({ setUniFilter }) => {
  const destinations = [
    {
      country: "USA",
      flag: "🇺🇸",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tuition: "$20k - $50k / yr",
      living: "$10k - $15k / yr",
      postStudy: "3 Yrs OPT",
      visaRate: "92%"
    },
    {
      country: "UK",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tuition: "£15k - £35k / yr",
      living: "£9k - £12k / yr",
      postStudy: "2 Yrs PSW",
      visaRate: "96%"
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      image: "https://images.unsplash.com/photo-1503899036067-dcbd381d6fbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tuition: "CAD 15k - 40k / yr",
      living: "CAD 10k - 15k / yr",
      postStudy: "Up to 3 Yrs PGWP",
      visaRate: "94%"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tuition: "AUD 20k - 45k / yr",
      living: "AUD 15k - 20k / yr",
      postStudy: "Up to 4 Yrs PSW",
      visaRate: "95%"
    }
  ];

  const handleExplore = (country) => {
    if (setUniFilter) setUniFilter(country);
    document.getElementById('universities').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="destinations" className="section">
      <div className="container">
        <h2 className="section-title">Top Study Destinations</h2>
        <p className="section-subtitle">Discover world-class education systems and choose the right country for your aspirations.</p>
        
        <div className="destinations-grid">
          {destinations.map((dest, idx) => (
            <motion.div 
              key={idx} 
              className="dest-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div style={{ position: 'relative' }}>
                <img src={dest.image} alt={dest.country} className="dest-image" />
                <div className="dest-flag">{dest.flag}</div>
              </div>
              <div className="dest-content">
                <h3 className="dest-title">{dest.country} Overview</h3>
                <div className="dest-stats">
                  <div className="dest-stat">
                    Tuition Fees
                    <strong>{dest.tuition}</strong>
                  </div>
                  <div className="dest-stat">
                    Living Cost
                    <strong>{dest.living}</strong>
                  </div>
                  <div className="dest-stat">
                    Post-Study Work
                    <strong>{dest.postStudy}</strong>
                  </div>
                  <div className="dest-stat">
                    Visa Success
                    <strong>{dest.visaRate}</strong>
                  </div>
                </div>
                <button 
                  className="btn btn-outline" 
                  style={{ width: '100%' }}
                  onClick={() => handleExplore(dest.country)}
                >
                  Explore Universities
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;

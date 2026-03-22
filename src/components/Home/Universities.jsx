import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Trophy, BookOpen, Banknote } from 'lucide-react';

const Universities = ({ filter = 'All', setFilter }) => {
  const filters = ['All', 'USA', 'UK', 'Canada', 'Australia'];

  const unis = [
    {
      name: "Harvard University",
      country: "USA",
      location: "Cambridge, Massachusetts",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.331593457904!2d-71.11894908453472!3d42.3770028791855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377427d7f0199%3A0x5937c65cee2427f0!2sHarvard%20University!5e0!3m2!1sen!2sin!4v1689531853685!5m2!1sen!2sin",
      ranking: "#1 in World",
      courses: "300+ Programs",
      fees: "$55,000 / yr",
      img: "https://images.unsplash.com/photo-1555529771-8b2c4ece6295?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "University of Oxford",
      country: "UK",
      location: "Oxford, England",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39546.61111029891!2d-1.2891392652758169!3d51.7548163539745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1689531983050!5m2!1sen!2sin",
      ranking: "#2 in World",
      courses: "250+ Programs",
      fees: "£28,000 / yr",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "University of Toronto",
      country: "Canada",
      location: "Toronto, Ontario",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4382583279155!2d-79.3976378844967!3d43.66289167912061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b8f3d11b3b%3A0x6fbcd3ab549f225!2sUniversity%20of%20Toronto%20-%20St.%20George%20Campus!5e0!3m2!1sen!2sin!4v1689532050993!5m2!1sen!2sin",
      ranking: "#1 in Canada",
      courses: "400+ Programs",
      fees: "CAD 45,000 / yr",
      img: "https://images.unsplash.com/photo-1533038612988-5182052f7823?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      location: "Melbourne, Victoria",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12607.747183069156!2d144.9547012624467!3d-37.79813958925526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642d453008ab9%3A0xe5a3c93ee4fdb0d0!2sThe%20University%20of%20Melbourne!5e0!3m2!1sen!2sin!4v1689532101344!5m2!1sen!2sin",
      ranking: "#1 in Australia",
      courses: "280+ Programs",
      fees: "AUD 40,000 / yr",
      img: "https://images.unsplash.com/photo-1544485122-835af26848be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredUnis = filter === 'All' ? unis : unis.filter(u => u.country === filter);

  return (
    <section id="universities" className="section univ-section">
      <div className="container">
        <h2 className="section-title">Top Partner Universities</h2>
        <p className="section-subtitle">We collaborate with the world's most prestigious institutions to bring you the best opportunities.</p>

        <div className="univ-filters">
          {filters.map(f => (
            <button 
              key={f}
              className={`univ-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="univ-grid">
          {filteredUnis.map((uni, idx) => (
            <motion.div 
              key={uni.name} 
              className="univ-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="univ-map-embed">
                <iframe 
                  src={uni.mapUrl} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${uni.name} map`}
                  style={{ width: '100%', height: '100%', border: 0 }}
                ></iframe>
              </div>
              <div className="univ-content">
                <h3 className="univ-title">{uni.name}</h3>
                <div className="univ-location">
                  <MapPin size={14} /> {uni.location}
                </div>
                
                <div className="univ-meta">
                  <div className="univ-meta-item">
                    <span><Trophy size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Ranking</span>
                    <span>{uni.ranking}</span>
                  </div>
                  <div className="univ-meta-item">
                    <span><BookOpen size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Courses</span>
                    <span>{uni.courses}</span>
                  </div>
                  <div className="univ-meta-item">
                    <span><Banknote size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> Avg. Fees</span>
                    <span>{uni.fees}</span>
                  </div>
                </div>

                <div className="univ-actions">
                  <button 
                    className="btn btn-primary" 
                    style={{ width: '100%' }}
                    onClick={() => {
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                      // Add a small highlight effect to the form later if needed
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;

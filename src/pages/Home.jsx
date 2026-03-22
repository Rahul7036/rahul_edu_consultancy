import React, { useEffect, useState } from 'react';
import Hero from '../components/Home/Hero';
import Destinations from '../components/Home/Destinations';
import Universities from '../components/Home/Universities';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';
import Trust from '../components/Home/Trust';
import BlogRes from '../components/Home/BlogRes';
import MapContact from '../components/Home/MapContact';
import WhatsAppButton from '../components/Widgets/WhatsAppButton';
import LeadPopup from '../components/Widgets/LeadPopup';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [uniFilter, setUniFilter] = useState('All');

  useEffect(() => {
    // Popup lead form after few seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Exit intent popup
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Hero />
      <Trust />
      <Destinations setUniFilter={setUniFilter} />
      <Universities filter={uniFilter} setFilter={setUniFilter} />
      <Services />
      <Testimonials />
      <BlogRes />
      <MapContact />
      
      <WhatsAppButton />
      <LeadPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Home;

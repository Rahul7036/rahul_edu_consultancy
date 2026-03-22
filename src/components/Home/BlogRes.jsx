import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const BlogRes = () => {
  const articles = [
    {
      title: "How to Study in Canada: A Complete Guide",
      excerpt: "Everything you need to know about Canadian universities, student visas, and post-study work opportunities.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "Oct 15, 2023"
    },
    {
      title: "Top 10 Courses in USA for Indian Students",
      excerpt: "Discover the most sought-after programs in the US, from Computer Science to Data Analytics.",
      img: "https://images.unsplash.com/photo-1596496054944-a02d41b027fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      date: "Nov 02, 2023"
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title">Latest Resources & Guides</h2>
        <p className="section-subtitle">Stay updated with the latest trends and download our free comprehensive guides.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)' }}
            >
              <img src={article.img} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{article.date}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary)' }}>{article.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{article.excerpt}</p>
                <button 
                  className="btn" 
                  style={{ padding: '0', color: 'var(--primary)' }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', color: 'white' }}
          >
            <Download size={48} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Free Study Abroad Guide</h3>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Get our ultimate 50-page guide covering everything from IELTS prep to visa interviews.</p>
            <button 
              className="btn btn-white" 
              style={{ width: '100%' }}
              onClick={() => {
                alert("Please fill out the contact form to download the guide.");
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Download Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogRes;

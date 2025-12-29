import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const LazyYouTube = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          obs.disconnect();
        }
      });
    }, { rootMargin: '200px' });

    if (containerRef.current) {
      obs.observe(containerRef.current);
    }

    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {loaded ? (
        <iframe
          src={src}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="w-full h-full bg-[#001219]/60 flex items-center justify-center text-[#94d2bd]">
          Loading...
        </div>
      )}
    </div>
  );
};

const Gaming = () => {
  const shorts = [
    'https://www.youtube.com/embed/p3KCH__vn98',
    'https://www.youtube.com/embed/utU4ROOaxNU',
    'https://www.youtube.com/embed/VzxZcgVHTck'
  ];

  return (
    <section id="gaming" className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#005f73] to-[#001219]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#94d2bd] to-[#ee9b00] bg-clip-text text-transparent">
              Gaming & Esports
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@Siremurphy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-[#0a9396] hover:text-[#ee9b00] transition-colors inline-flex items-center gap-2"
          >
            YouTube Channel: Murphy
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shorts.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#0a9396] shadow-lg hover:shadow-[#ee9b00]/50"
            >
              <LazyYouTube src={url} title={`Gaming Short ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gaming;
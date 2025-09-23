import React, { useEffect, useRef } from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SpecialComponent = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    console.log(container)
  
    const cloneItems = () => {
      const items = container.querySelectorAll('.duplicate-item');
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
      });
    };

    cloneItems();

  
    let scrollInterval;
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; 
        }
      }, 20); 
    };

    startScroll();


    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="section-padding text-slate-700" id="speciality">
      <div className="container-padding">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="badge-professional">
              <span>🏥</span>
              <span>Medical Specialties</span>
            </div>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-display mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="gradient-text">Expert Medical</span>
            <br />
            <span className="text-slate-800">Specialties</span>
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Our board-certified physicians and specialists provide comprehensive care across 
            multiple medical disciplines, ensuring you receive expert treatment tailored to your needs.
          </motion.p>
        </div>
      
        <div ref={scrollContainerRef} className="flex sm:justify-start gap-8 w-full overflow-x-hidden whitespace-nowrap">
          {specialityData.map((item, index) => (
            <Link 
              onClick={()=>scrollTo(0,0)} 
              key={index} 
              to={`/doctors/${item.speciality}`} 
              className="duplicate-item flex-shrink-0 group cursor-pointer" 
            >
              <motion.div 
                className="card-modern w-64 h-72 flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-slate-200/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-full blur-xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div
                    className="relative w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg border border-slate-200/50"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      className="w-16 h-16 object-cover rounded-xl"
                      src={item.image}
                      alt={item.speciality}
                    />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <motion.h3 
                    className="text-lg font-heading text-slate-800 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.speciality}
                  </motion.h3>
                  <p className="text-sm text-slate-500 font-body">
                    Expert care in {item.speciality.toLowerCase()}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="badge-certified">
                      <span>✓</span>
                      <span>Board Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialComponent;

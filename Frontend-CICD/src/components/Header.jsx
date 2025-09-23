import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl mx-4 mb-16">
      {/* Professional background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/40 via-transparent to-blue-100/20"></div>
      
      <div className="relative flex flex-col lg:flex-row items-center min-h-[80vh] container-padding py-20">
        {/* Left Side */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-start justify-center gap-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <div className="badge-professional">
              <span>🏥</span>
              <span>Trusted Healthcare Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[0.9]">
              <span className="gradient-text">Premium</span>
              <br />
              <span className="text-slate-800">Healthcare</span>
              <br />
              <span className="text-slate-600 text-4xl md:text-5xl lg:text-6xl">Experience</span>
            </h1>
          </motion.div>
          
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-body">
              Connect with board-certified physicians and specialists through our secure, 
              state-of-the-art telemedicine platform.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="badge-certified">
                  <span>✓</span>
                  <span>Board Certified</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge-professional">
                  <span>🔒</span>
                  <span>HIPAA Compliant</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge-professional">
                  <span>⏰</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <a
              href="#speiality"
              className="btn-modern flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Appointment
              <img className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" src={assets.arrow_icon} alt="" />
            </a>
            <button className="btn-secondary flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg">
              Learn More
              <span>→</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative max-w-2xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-3xl blur-3xl"
              animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="relative glass rounded-3xl p-8 shadow-lg border border-slate-200/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-auto rounded-2xl shadow-sm"
                src={assets.main}
                alt="Healthcare professionals providing care"
              />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Dr. Sarah Johnson</p>
                    <p className="font-caption text-slate-600">Chief Medical Officer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;

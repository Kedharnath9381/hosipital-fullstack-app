import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='relative mt-32'>
      {/* Professional background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      <div className='relative container-padding'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 py-20 text-sm'>
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img className="w-12 h-12" src={assets.h} alt="MediCare Logo" />
                <div>
                  <h3 className='font-display text-2xl text-white mb-1'>
                    MediCare
                  </h3>
                  <p className="text-slate-400 font-caption">Healthcare Excellence</p>
                </div>
              </div>
              <p className='text-slate-300 leading-relaxed mb-8 max-w-md font-body'>
                Leading the future of healthcare through innovative technology, 
                compassionate care, and unwavering commitment to patient outcomes. 
                Your health is our mission.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer border border-white/10">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer border border-white/10">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer border border-white/10">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h4 className='font-heading text-lg text-white mb-6'>Quick Links</h4>
              <ul className='space-y-4'>
                <li className="text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform font-body">
                  Find a Doctor
                </li>
                <li className="text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform font-body">
                  Schedule Appointment
                </li>
                <li className="text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform font-body">
                  Emergency Services
                </li>
                <li className="text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform font-body">
                  Patient Portal
                </li>
                <li className="text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform font-body">
                  Health Records
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h4 className='font-heading text-lg text-white mb-6'>Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Emergency Line</p>
                    <p className="text-sm text-slate-400">+1-212-456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-sm text-slate-400">support@medicare.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Main Campus</p>
                    <p className="text-sm text-slate-400">123 Healthcare Blvd, Medical City</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-white/10 pt-8 pb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className='text-slate-400 text-sm font-body'>
              © 2024 MediCare Healthcare System. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="hover:text-white cursor-pointer transition-colors duration-300">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors duration-300">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors duration-300">HIPAA Compliance</span>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 font-body">
            Made with ❤️ for better healthcare • HIPAA Compliant • SOC 2 Certified
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer

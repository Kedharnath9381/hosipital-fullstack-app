import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Doctor = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [specialityFilter, setSpecialityFilter] = useState(speciality || "");

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors, nameFilter, specialityFilter]);

  const applyFilter = () => {
    let filtered = doctors;

    if (specialityFilter) {
      filtered = filtered.filter((doc) =>
        doc.speciality.toLowerCase().includes(specialityFilter.toLowerCase())
      );
    }

    if (nameFilter) {
      filtered = filtered.filter((doc) =>
        doc.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilterDoc(filtered);
  };

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div className="mx-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Your Doctor</h2>
        <p className="text-gray-600">Search through our verified medical specialists</p>
      </motion.div>

      {/* Professional Search Filters */}
      <motion.div 
        className="flex flex-col lg:flex-row gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative flex-1">
          <label className="block font-medium text-slate-700 mb-2">Search by Doctor Name</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter doctor's name..."
              className="input-professional w-full pr-12"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <label className="block font-medium text-slate-700 mb-2">Medical Speciality</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Select speciality..."
              className="input-professional w-full pr-12"
              value={specialityFilter}
              onChange={(e) => setSpecialityFilter(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Professional Speciality Filter */}
        <motion.div 
          className="flex flex-col gap-4 min-w-[320px]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="glass rounded-xl p-6">
            <h3 className="font-heading text-xl text-slate-800 mb-4">Medical Specialties</h3>
            <div className="space-y-2">
              {specialities.map((spec) => (
                <motion.button
                  key={spec}
                  onClick={() => {
                    setSpecialityFilter(spec);
                    navigate(`/doctors/${spec}`);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer font-medium border ${
                    speciality === spec 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-lg" 
                      : "bg-white/80 border-slate-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="capitalize">{spec}</span>
                    {speciality === spec && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Doctors List */}
        <div className="w-full grid grid-cols-auto gap-6 gap-y-8">
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="card-modern rounded-2xl overflow-hidden cursor-pointer group border border-slate-200/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    className="w-full h-56 object-cover bg-gradient-to-br from-slate-50 to-blue-50 transition-transform duration-500 group-hover:scale-105" 
                    src={item.image} 
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="badge-professional">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Available</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="badge-certified">
                      <span>✓</span>
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-xl text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="font-medium text-slate-600 mb-2">{item.speciality}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Downtown Medical Center</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>4.9</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span>150+ Reviews</span>
                      </div>
                    </div>
                    <button className="btn-modern px-4 py-2 rounded-lg text-white font-medium text-sm hover:scale-105 transition-transform duration-300">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="glass rounded-2xl p-8 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <p className="text-gray-600 text-lg">
                  No doctors found matching your criteria.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Try adjusting your search filters
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctor;

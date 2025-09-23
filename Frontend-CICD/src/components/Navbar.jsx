import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "./../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [token, setToken] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="glass rounded-2xl mx-4 mt-6 mb-12 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            onClick={() => navigate("/")}
            className="w-16 h-16 cursor-pointer hover:scale-105 transition-transform duration-300"
            src={assets.h}
            alt="Hospital Logo"
          />
          <div className="hidden sm:block">
            <h1 className="font-display text-xl text-slate-800">MediCare</h1>
            <p className="font-caption text-slate-600">Healthcare Excellence</p>
          </div>
        </div>
        
        <ul className="hidden lg:flex items-center gap-1">
          <NavLink to="/" className="group">
            <li className="py-3 px-6 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-sm font-medium text-slate-700 hover:text-slate-900">
              Home
            </li>
          </NavLink>
          <NavLink to="/doctors" className="group">
            <li className="py-3 px-6 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-sm font-medium text-slate-700 hover:text-slate-900">
              Physicians
            </li>
          </NavLink>
          <NavLink to="/about" className="group">
            <li className="py-3 px-6 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-sm font-medium text-slate-700 hover:text-slate-900">
              About Us
            </li>
          </NavLink>
          <NavLink to="/contact" className="group">
            <li className="py-3 px-6 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-sm font-medium text-slate-700 hover:text-slate-900">
              Contact
            </li>
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 border border-slate-200/50"
              >
                <img className="w-8 h-8 rounded-full border-2 border-slate-200" src={assets.upload_area} alt="User" />
                <div className="hidden sm:block">
                  <p className="font-medium text-sm text-slate-700">John Doe</p>
                  <p className="font-caption text-xs text-slate-500">Patient</p>
                </div>
                <img 
                  className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} 
                  src={assets.dropdown_icon} 
                  alt="" 
                />
              </button>
              
              {showDropdown && (
                <div className="absolute top-0 right-0 pt-16 text-sm z-50">
                  <div className="min-w-56 glass rounded-xl flex flex-col gap-1 p-2 shadow-lg border border-slate-200/50">
                    <button
                      onClick={() => {
                        navigate("my-profile");
                        setShowDropdown(false);
                      }}
                      className="hover:bg-white/60 p-3 rounded-lg cursor-pointer transition-all duration-300 text-left font-medium text-slate-700 hover:text-slate-900"
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        navigate("my-appointment");
                        setShowDropdown(false);
                      }}
                      className="hover:bg-white/60 p-3 rounded-lg cursor-pointer transition-all duration-300 text-left font-medium text-slate-700 hover:text-slate-900"
                    >
                      My Appointments
                    </button>
                    <button
                      onClick={() => {
                        navigate("/doctor-login");
                        setShowDropdown(false);
                      }}
                      className="hover:bg-white/60 p-3 rounded-lg cursor-pointer transition-all duration-300 text-left font-medium text-slate-700 hover:text-slate-900"
                    >
                      Admin Portal
                    </button>
                    <hr className="my-2 border-slate-200" />
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setShowDropdown(false);
                      }}
                      className="hover:bg-red-50 p-3 rounded-lg cursor-pointer transition-all duration-300 text-left font-medium text-red-600 hover:text-red-700"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="btn-secondary px-6 py-2.5 rounded-xl font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/login")}
                className="btn-modern text-white px-6 py-2.5 rounded-xl font-medium"
              >
                Get Started
              </button>
            </div>
          )}
          <button
            onClick={() => setShowMenu(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/40 transition-all duration-300"
          >
            <img className="w-6 h-6" src={assets.menu_icon} alt="Menu" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 glass rounded-l-2xl shadow-lg border-l border-slate-200/50 transition-transform duration-500 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200/30">
          <div>
            <h2 className="font-display text-lg text-slate-800">MediCare</h2>
            <p className="font-caption text-slate-600">Healthcare Excellence</p>
          </div>
          <button
            onClick={() => setShowMenu(false)}
            className="w-10 h-10 rounded-full bg-white/60 hover:bg-white/80 transition-all duration-300 flex items-center justify-center border border-slate-200/50"
          >
            <img className="w-5 h-5" src={assets.cross_icon} alt="Close" />
          </button>
        </div>
        <ul className="flex flex-col gap-1 mt-6 px-4">
          <NavLink
            className="px-6 py-4 rounded-xl transition-all duration-300 font-medium text-slate-700 hover:bg-white/60 hover:text-slate-900"
            onClick={() => setShowMenu(false)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="px-6 py-4 rounded-xl transition-all duration-300 font-medium text-slate-700 hover:bg-white/60 hover:text-slate-900"
            onClick={() => setShowMenu(false)}
            to="/doctors"
          >
            Physicians
          </NavLink>
          <NavLink
            className="px-6 py-4 rounded-xl transition-all duration-300 font-medium text-slate-700 hover:bg-white/60 hover:text-slate-900"
            onClick={() => setShowMenu(false)}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className="px-6 py-4 rounded-xl transition-all duration-300 font-medium text-slate-700 hover:bg-white/60 hover:text-slate-900"
            onClick={() => setShowMenu(false)}
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

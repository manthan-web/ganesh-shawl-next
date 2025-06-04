"use client"
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { Phone, Instagram, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md py-4'
          : 'bg-black bg-opacity-90 backdrop-blur-md py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className={`text-xl md:text-2xl font-semibold ${isScrolled ? 'text-amber-600' : 'text-white'}`}>
              Ganesh Shawl Emporium
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://www.instagram.com/ganesh_shawl_emporiums_/?igsh=b2FhdjRvM2ZvZmJx"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}
            >
              <Instagram size={24} />
            </a>
            <a
              href="tel:+919872531240"
              className={`flex items-center space-x-2 transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}
            >
              <Phone size={24} />
              <span className="font-medium hidden lg:block">+91 9872531240</span>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-lg bg-white bg-opacity-80 backdrop-blur-md shadow-lg">
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.instagram.com/ganesh_shawl_emporiums_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Instagram size={20} />
                <span className="font-medium">Follow us on Instagram</span>
              </a>
              <a
                href="tel:+919872531240"
                className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={20} />
                <span className="font-medium">+91 9872531240</span>
              </a>
              <a
                href="tel:+919872531240"
                className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={20} />
                <span className="font-medium">+91 9803457668</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
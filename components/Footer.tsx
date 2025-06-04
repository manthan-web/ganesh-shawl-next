import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ganesh Shawl Emporium</h3>
            <p className="text-gray-400 mb-6">
              Exquisite handcrafted shawls, stoles, and mufflers that blend tradition with luxury.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ganesh_shawl_emporiums_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 9872531240, 9803457668</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@ganeshshawls.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                Street No.8, Mochpura Bazar, Chaura Bazar, <br /> Old Ludhiana, Ludhiana, Punjab 141008
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ganesh Shawl Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
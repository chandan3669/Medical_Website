import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-textPrimary text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="text-2xl font-bold text-surfaceStrong">Dr. <span className="text-white">Mukta</span></span>
          <p className="mt-4 text-gray-300 text-sm">
            Compassionate care, advanced medical solutions, and dedicated professionals ready to assist you.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-surfaceStrong rounded">About Us</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-surfaceStrong rounded">Services</Link></li>
            <li><Link to="/book" className="text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-surfaceStrong rounded">Appointments</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>La-24, East Merul Badda</li>
            <li>Dhaka 1212, Bangladesh</li>
            <li>01521255495</li>
            <li>drbarman0708@gmail.com</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Hours</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Mon - Fri: 8:00 AM - 8:00 PM</li>
            <li>Sat - Sun: 10:00 AM - 4:00 PM</li>
            <li>Emergency: 24/7</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} Dr. Mukta Barman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

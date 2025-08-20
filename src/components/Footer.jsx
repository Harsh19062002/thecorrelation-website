'use client';

import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>PG Programs</li>
            <li>Certification</li>
            <li>Career Acceleration</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Information</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Our Director</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Student Code of Conduct</li>
            <li>Admission Policy</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Get In Touch</h4>
          <p className="text-sm text-gray-300 mb-4">
            Stay connected with us and let’s know more about our service platform and explore more.
          </p>
          <div className="flex space-x-4">
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <Facebook size={20} />
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <Twitter size={20} />
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <Instagram size={20} />
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <Linkedin size={20} />
            </span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © TheCorrelation 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

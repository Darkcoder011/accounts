import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Groww Book</h3>
            <p className="text-gray-400">Simplify Your Accounting Journey</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link to="/api" className="text-gray-400 hover:text-white">API Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <div className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 rounded-md"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Groww Book. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

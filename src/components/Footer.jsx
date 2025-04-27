import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <p className="text-gray-300 mb-2">
              Tech Dynamos is your destination for electronics and clothing.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} Tech Dynamos. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-300">
              <li className="mb-2">
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="text-gray-300">
              <li className="mb-2">Electronics</li>
              <li className="mb-2">Clothing - Men</li>
              <li className="mb-2">Clothing - Women</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              Email: <a href="mailto:support@yourstore.com" className="hover:text-white">support@yourstore.com</a>
            </p>
            <p className="text-gray-300">
              Mobile No: 03052374486
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-white text-2xl">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="hover:text-white text-2xl">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#" className="hover:text-white text-2xl">
                <i className="fab fa-instagram-square"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

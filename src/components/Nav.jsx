import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from './../redux/cartSlices'; // Corrected import path

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = useSelector(selectCartCount);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:bg-red-300 font-extrabold text-2xl tracking-tight">
          TechDynamos
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.828 4.828 4.829-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.829 4.829z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          }  md:flex md:items-center mt-4 md:mt-0`}
        >
          <Link
            to="/"
            className="block md:inline-block text-white hover:text-gray-300 px-4 py-2 rounded-md transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/Login"
            className="block md:inline-block text-white hover:text-gray-300 px-4 py-2 rounded-md transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/About"
            className="block md:inline-block text-white hover:text-gray-300 px-4 py-2 rounded-md transition duration-300"
          >
            About
          </Link>
          <Link
            to="/Cart"
            className="block md:inline-block text-white hover:text-gray-300 px-4 py-2 rounded-md transition duration-300"
          >
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
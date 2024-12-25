import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/download', label: 'Download' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleGetStarted = () => {
    navigate('/signup');
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="w-10 h-10" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-2xl font-bold ${
                isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
              }`}
            >
              Groww Book
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  to={link.path}
                  className={`hover:text-blue-600 transition-colors ${
                    isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
              }`}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  className={`absolute w-6 h-0.5 ${
                    isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
                  }`}
                  style={{ top: "30%" }}
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: 45, y: 5 }
                  }}
                />
                <motion.span
                  className={`absolute w-6 h-0.5 ${
                    isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
                  }`}
                  style={{ top: "70%" }}
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: -45, y: -5 }
                  }}
                />
              </motion.div>
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              onClick={handleLogin}
              className={`px-4 py-2 transition-colors ${
                isScrolled || isMobileMenuOpen
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-white hover:text-blue-100'
              }`}
            >
              Login
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleGetStarted}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-900 hover:text-blue-600 transition-colors px-4 py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <button
                    onClick={handleLogin}
                    className="w-full px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={handleGetStarted}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;

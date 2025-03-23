
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/success-stories', label: 'Success Stories' },
    { path: '/blog', label: 'Blog & News' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-snpw-pink">SNPW</span>
          <span className="hidden md:inline-block h-5 w-px bg-gray-300"></span>
          <span className="hidden md:block text-sm text-gray-600">Stitching New Paths for Women</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `nav-link text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-snpw-pink active' 
                    : 'text-gray-900 hover:text-snpw-pink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button className="fancy-button bg-snpw-pink hover:bg-snpw-pink-dark text-white">Donate</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <nav className="flex flex-col space-y-4 mt-8">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-lg font-medium py-2 border-b border-gray-100 ${
                    isActive ? 'text-snpw-pink' : 'text-gray-900'
                  }`
                }
                onClick={toggleMobileMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto">
            <Button className="w-full fancy-button bg-snpw-pink hover:bg-snpw-pink-dark text-white">Donate</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

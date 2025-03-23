
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-snpw-pink">SNPW</span>
          <span className="hidden md:inline-block h-5 w-px bg-gray-300"></span>
          <span className="hidden md:block text-sm text-gray-600">Stitching New Paths for Women</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="nav-link text-sm font-medium text-gray-900 hover:text-snpw-pink transition-colors">Home</a>
          <a href="/about" className="nav-link text-sm font-medium text-gray-900 hover:text-snpw-pink transition-colors">About Us</a>
          <a href="/programs" className="nav-link text-sm font-medium text-gray-900 hover:text-snpw-pink transition-colors">Programs</a>
          <a href="/get-involved" className="nav-link text-sm font-medium text-gray-900 hover:text-snpw-pink transition-colors">Get Involved</a>
          <a href="/success-stories" className="nav-link text-sm font-medium text-gray-900 hover:text-snpw-pink transition-colors">Success Stories</a>
          <a href="/blog" className="nav-link text-sm font-medium text-gray-900 hover:text-snpw-pink transition-colors">Blog & News</a>
          <a href="/events" className="nav-link text-sm font-medium text-gray-900 hover:text-snpw-pink transition-colors">Events</a>
          <a href="/contact" className="nav-link text-sm font-medium text-gray-900 hover:text-snpw-pink transition-colors">Contact</a>
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
            <a href="/" className="text-lg font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Home</a>
            <a href="/about" className="text-lg font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>About Us</a>
            <a href="/programs" className="text-lg font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Programs</a>
            <a href="/get-involved" className="text-lg font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Get Involved</a>
            <a href="/success-stories" className="text-lg font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Success Stories</a>
            <a href="/blog" className="text-lg font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Blog & News</a>
            <a href="/events" className="text-lg font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Events</a>
            <a href="/contact" className="text-lg font-medium py-2 border-b border-gray-100" onClick={toggleMobileMenu}>Contact</a>
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

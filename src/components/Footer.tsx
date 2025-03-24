
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-snpw-blue text-white">
      {/* Upper Footer */}
      <div className="container-padding py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-10 w-10 bg-white rounded-full p-1">
              <img 
                src="/lovable-uploads/0eb8d14e-a11e-45a1-b579-f83f7b594790.png" 
                alt="SNPWS Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xl font-bold">SNPWS</span>
          </div>
          <p className="text-white/80 mb-4">
            Sindhuther Public Welfare Society empowers women through skill development and sustainable livelihood opportunities.
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-white hover:text-snpw-green transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-snpw-green transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-snpw-green transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-snpw-green transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-snpw-green"></span>
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/programs" className="text-white/80 hover:text-white transition-colors">Our Programs</Link>
            </li>
            <li>
              <Link to="/success-stories" className="text-white/80 hover:text-white transition-colors">Success Stories</Link>
            </li>
            <li>
              <Link to="/events" className="text-white/80 hover:text-white transition-colors">Upcoming Events</Link>
            </li>
            <li>
              <Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog & News</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-snpw-green"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin size={20} className="mr-3 text-snpw-green mt-1 flex-shrink-0" />
              <span className="text-white/80">123 NGO Street, City, State, Country - 123456</span>
            </li>
            <li className="flex items-center">
              <Mail size={20} className="mr-3 text-snpw-green flex-shrink-0" />
              <a href="mailto:info@snpws.org" className="text-white/80 hover:text-white transition-colors">info@snpws.org</a>
            </li>
            <li className="flex items-center">
              <Phone size={20} className="mr-3 text-snpw-green flex-shrink-0" />
              <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">+123 456 7890</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-6 relative inline-block">
            Newsletter
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-snpw-green"></span>
          </h3>
          <p className="text-white/80 mb-4">
            Subscribe to our newsletter for updates on our work and impact.
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:border-snpw-green text-white placeholder:text-white/60"
            />
            <Button className="w-full bg-snpw-green hover:bg-snpw-green-dark text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-white/10">
        <div className="container-padding py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Sindhuther Public Welfare Society. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-white/70 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-snpw-green" /> for a better tomorrow
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

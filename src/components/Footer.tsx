
import { ArrowRight, Mail, Instagram, Twitter, Facebook, Linkedin, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setIsSubmitting(false);
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="container-padding py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-6">
            Stay updated with our latest news, events, and success stories.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="fancy-button bg-snpw-pink hover:bg-snpw-pink-dark text-white"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="border-t border-gray-800">
        <div className="container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Column 1: About */}
            <div>
              <h4 className="text-xl font-bold mb-4">SNPW</h4>
              <p className="text-gray-400 mb-6">
                Empowering women through sewing skills for financial independence and a brighter future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-snpw-pink transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-snpw-pink transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-snpw-pink transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-snpw-pink transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
                <li><a href="/success-stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog & News</a></li>
                <li><a href="/events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            
            {/* Column 3: Resources */}
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sewing Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Legal Resources</a></li>
              </ul>
            </div>
            
            {/* Column 4: Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                123 Empowerment Street<br />
                Suite 101<br />
                San Francisco, CA 94103
              </address>
              <p className="text-gray-400 mt-3">
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:info@snpw.org" className="hover:text-white transition-colors">info@snpw.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-padding text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SNPW - Stitching New Paths for Women. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-snpw-pink" /> for a better future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

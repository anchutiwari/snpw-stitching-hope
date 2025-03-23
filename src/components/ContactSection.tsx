
import { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative bg-gray-50">
      <div className="container-padding">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip animate-fade-in">Get In Touch</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div 
            className={`bg-white rounded-xl shadow-md p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  required
                  className="w-full rounded-lg"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full rounded-lg resize-none"
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="fancy-button w-full bg-snpw-pink hover:bg-snpw-pink-dark text-white flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact info */}
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-snpw-pink-light rounded-lg p-3 mr-4">
                  <MapPin className="text-snpw-pink h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Our Location</h4>
                  <p className="text-gray-600 mt-1">
                    123 Empowerment Street<br />
                    Suite 101<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-snpw-orange-light rounded-lg p-3 mr-4">
                  <Phone className="text-snpw-orange h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone Number</h4>
                  <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri from 9am to 5pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-snpw-teal-light rounded-lg p-3 mr-4">
                  <Mail className="text-snpw-teal h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email Address</h4>
                  <p className="text-gray-600 mt-1">info@snpw.org</p>
                  <p className="text-sm text-gray-500">We'll respond as soon as possible</p>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-8 bg-gray-200 rounded-xl h-56 flex items-center justify-center">
              <p className="text-gray-500">Google Map will be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

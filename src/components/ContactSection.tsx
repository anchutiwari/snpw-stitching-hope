
import { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-snpw-green-light text-snpw-green">Get In Touch</span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">Let's Get in Touch!</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have questions, want to volunteer, or support us – we'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-6 text-snpw-blue relative inline-block">
                Contact Information
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-snpw-green"></span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-snpw-green-light/50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-snpw-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600 mt-1">123 NGO Street, City, State, Country - 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-snpw-green-light/50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-snpw-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <a href="mailto:info@snpws.org" className="text-gray-600 mt-1 hover:text-snpw-green transition-colors">
                      info@snpws.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-snpw-green-light/50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-snpw-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <a href="tel:+1234567890" className="text-gray-600 mt-1 hover:text-snpw-green transition-colors">
                      +123 456 7890
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-snpw-blue/10 hover:bg-snpw-blue p-2.5 rounded-full text-snpw-blue hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-snpw-blue/10 hover:bg-snpw-blue p-2.5 rounded-full text-snpw-blue hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-snpw-blue/10 hover:bg-snpw-blue p-2.5 rounded-full text-snpw-blue hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-snpw-blue/10 hover:bg-snpw-blue p-2.5 rounded-full text-snpw-blue hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-snpw-blue p-6 rounded-xl shadow-md text-white">
              <h2 className="text-xl font-bold mb-6 relative inline-block">
                Office Hours
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-snpw-green"></span>
              </h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-6 text-snpw-blue relative inline-block">
                Send Us a Message
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-snpw-green"></span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snpw-green"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snpw-green"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snpw-green"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snpw-green"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="bg-snpw-green hover:bg-snpw-green-dark text-white py-3 px-6 rounded-md transition-colors w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-md h-[400px] relative">
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600">Google Maps would be embedded here</p>
          </div>
          {/* Replace with actual Google Maps embed */}
          {/* <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30589679857!2d-74.25986548248684!3d40.69714941887058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1625147454801!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen 
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

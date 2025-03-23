
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Programs = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-snpw-teal-light to-white">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Transforming Lives Through Skill Development
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our programs empower women to become financially independent through hands-on training and support.
          </p>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Key Initiatives</h2>
          
          {/* Sewing & Tailoring Training */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-snpw-pink-light p-2 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <span className="text-2xl">🧵</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sewing & Tailoring Training</h3>
              <p className="text-gray-700 mb-4">
                Our comprehensive training program teaches women the art of sewing and tailoring, from basic stitches to advanced pattern making and garment construction. This hands-on program provides both technical skills and creative design knowledge.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-snpw-pink mr-2">✓</span>
                  <span>Basic to advanced sewing techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-pink mr-2">✓</span>
                  <span>Pattern making and design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-pink mr-2">✓</span>
                  <span>Fabric selection and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-pink mr-2">✓</span>
                  <span>Quality control practices</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Women in sewing training" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Entrepreneurship Support */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg animate-fade-in-left">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Women entrepreneurs" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in-right">
              <div className="bg-snpw-orange-light p-2 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Entrepreneurship Support</h3>
              <p className="text-gray-700 mb-4">
                We don't just teach women how to sew - we teach them how to build sustainable businesses. Our entrepreneurship program provides the knowledge, tools, and mentorship needed to establish and grow successful sewing enterprises.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-snpw-orange mr-2">✓</span>
                  <span>Business planning and strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-orange mr-2">✓</span>
                  <span>Marketing and customer acquisition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-orange mr-2">✓</span>
                  <span>Pricing and financial management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-orange mr-2">✓</span>
                  <span>Sustainable business practices</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Legal & Financial Guidance */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-snpw-teal-light p-2 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Legal & Financial Guidance</h3>
              <p className="text-gray-700 mb-4">
                Navigating the legal and financial aspects of business ownership can be challenging. We provide expert guidance to help women entrepreneurs overcome these hurdles and establish legally sound, financially stable businesses.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-snpw-teal mr-2">✓</span>
                  <span>Business registration assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-teal mr-2">✓</span>
                  <span>Tax compliance education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-teal mr-2">✓</span>
                  <span>Access to microfinance opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-teal mr-2">✓</span>
                  <span>Financial literacy training</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-right">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Legal and financial guidance" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join one of our programs today and start your journey toward financial independence and empowerment.
          </p>
          <Button className="fancy-button bg-snpw-pink hover:bg-snpw-pink-dark text-white px-8 py-6 h-auto text-lg">
            Explore Our Programs <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;

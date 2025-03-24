
import { useRef, useState, useEffect } from 'react';
import { Scissors, Briefcase, Scale, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
  
  const services = [
    {
      icon: <Scissors size={36} className="text-snpw-white" />,
      title: "Sewing & Tailoring Training",
      description: "Comprehensive hands-on learning programs that teach essential sewing skills, from basic techniques to advanced design.",
      delay: "0.1s",
      bgClass: "from-snpw-green to-snpw-green-light"
    },
    {
      icon: <Briefcase size={36} className="text-snpw-white" />,
      title: "Entrepreneurship Support",
      description: "Business guidance, mentorship, and resources to help women transform their sewing skills into profitable ventures.",
      delay: "0.3s",
      bgClass: "from-snpw-blue to-snpw-blue-light"
    },
    {
      icon: <Scale size={36} className="text-snpw-white" />,
      title: "Legal & Financial Assistance",
      description: "Expert consultation and support for business registration, financial planning, and access to microfinance opportunities.",
      delay: "0.5s",
      bgClass: "from-snpw-green to-snpw-green-light"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding relative">
      {/* Background decor */}
      <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGMkYyRjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGMyLjIxIDAgNC0xLjc5IDQtNHptLTI0IDRoLTh2LTJoOHYyem0wLThoLTh2LTJoOHYyem0wLThoLTh2LTJoOHYyem0wLThoLTh2LTJoOHYyeiIvPjwvZz48L2c+PC9zdmc+')] bg-fixed"></div>
      
      <div className="container-padding relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-snpw-green text-white animate-fade-in">What We Do</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our Core Services
          </h2>
          <p className="mt-4 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We provide comprehensive support to empower women through skill development, business guidance, and essential resources.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md hover-scale transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: service.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${service.bgClass} opacity-90`}></div>
              <div className="relative z-10 p-8">
                <div className="bg-white/20 rounded-xl p-4 w-16 h-16 flex items-center justify-center shadow-sm mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/90 mb-6">{service.description}</p>
                <a href="/programs" className="inline-flex items-center text-white font-medium hover:text-snpw-white transition-colors">
                  Learn More
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/programs" className="inline-flex items-center fancy-button bg-snpw-blue hover:bg-snpw-blue-dark text-white px-6 py-3 rounded-lg shadow-md">
            Explore Our Programs
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TrainingSection = () => {
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
  
  const trainings = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Basic Sewing Skills",
      description: "Learn essential techniques including simple stitching, fabric cutting, and pattern making. Perfect for beginners.",
      features: ["Hand Stitching", "Machine Basics", "Pattern Reading", "Simple Projects"],
      color: "bg-snpw-pink",
      delay: "0.1s"
    },
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Advanced Tailoring & Fashion Design",
      description: "Develop professional tailoring techniques, complex garment construction, and creative fashion design principles.",
      features: ["Dressmaking", "Embroidery", "Design Principles", "Fashion Trends"],
      color: "bg-snpw-orange",
      delay: "0.3s"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Sewing for Business",
      description: "Master the business aspects of sewing including pricing, marketing, customer service, and business operations.",
      features: ["Pricing Strategy", "Marketing Basics", "Client Management", "Quality Control"],
      color: "bg-snpw-teal",
      delay: "0.5s"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding relative bg-gray-50">
      <div className="container-padding">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip animate-fade-in">Our Curriculum</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Trainings We Offer
          </h2>
          <p className="mt-4 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our comprehensive training programs are designed to meet you at your skill level and guide you toward mastery and independence.
          </p>
        </div>
        
        {/* Training cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover-scale transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: training.delay }}
            >
              {/* Image */}
              <div className="image-zoom h-48 overflow-hidden">
                <img 
                  src={training.image} 
                  alt={training.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className={`w-16 h-1 ${training.color} mb-4 rounded-full`}></div>
                <h3 className="text-xl font-bold mb-3">{training.title}</h3>
                <p className="text-gray-600 mb-4">{training.description}</p>
                
                {/* Features list */}
                <ul className="mb-6 space-y-2">
                  {training.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className={`w-2 h-2 ${training.color} rounded-full mr-2`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="/programs" className="story-link text-gray-800 font-medium hover:text-snpw-pink">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="fancy-button bg-snpw-pink hover:bg-snpw-pink-dark text-white px-8 py-6 h-auto text-lg">
            Enroll in Training Now!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;

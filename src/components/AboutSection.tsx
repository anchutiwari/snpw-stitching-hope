
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [counters, setCounters] = useState({
    womenTrained: 0,
    businessesStarted: 0,
    incomeIncrease: 0
  });
  
  const targets = {
    womenTrained: 500,
    businessesStarted: 200,
    incomeIncrease: 80
  };
  
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
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // Animation duration in ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCounters({
        womenTrained: Math.floor(targets.womenTrained * progress),
        businessesStarted: Math.floor(targets.businessesStarted * progress),
        incomeIncrease: Math.floor(targets.incomeIncrease * progress)
      });
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative bg-white">
      <div className="container-padding">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip animate-fade-in">About SNPW</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our Mission & Impact
          </h2>
          <p className="mt-4 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            SNPW is dedicated to uplifting women by providing sewing training and entrepreneurship support, creating pathways to economic independence.
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Women Trained */}
          <div className={`rounded-xl p-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s', backgroundColor: 'rgba(255, 146, 165, 0.1)' }}>
            <div className="text-4xl md:text-5xl font-bold text-snpw-pink counter-value">
              {counters.womenTrained}+
            </div>
            <p className="mt-3 text-gray-700 font-medium">Women Trained</p>
          </div>
          
          {/* Businesses Started */}
          <div className={`rounded-xl p-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s', backgroundColor: 'rgba(255, 159, 90, 0.1)' }}>
            <div className="text-4xl md:text-5xl font-bold text-snpw-orange counter-value">
              {counters.businessesStarted}+
            </div>
            <p className="mt-3 text-gray-700 font-medium">Small Businesses Started</p>
          </div>
          
          {/* Income Increase */}
          <div className={`rounded-xl p-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s', backgroundColor: 'rgba(64, 191, 189, 0.1)' }}>
            <div className="text-4xl md:text-5xl font-bold text-snpw-teal counter-value">
              {counters.incomeIncrease}%
            </div>
            <p className="mt-3 text-gray-700 font-medium">Increase in Women's Income</p>
          </div>
        </div>
        
        {/* About content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`image-zoom rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Women learning sewing skills" 
              className="w-full h-auto object-cover"
              style={{ minHeight: '300px' }}
            />
          </div>
          
          {/* Text content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '0.5s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Empowering Women Through Skill & Independence
            </h3>
            <p className="text-gray-600 mb-4">
              At SNPW, we believe in the power of skills to transform lives. Our comprehensive training programs equip women with practical sewing skills, business knowledge, and ongoing support.
            </p>
            <p className="text-gray-600 mb-6">
              We work with women from diverse backgrounds, helping them overcome barriers to economic independence and build sustainable livelihoods through craftsmanship and entrepreneurship.
            </p>
            <a href="/about" className="story-link inline-flex items-center text-snpw-pink font-medium hover:text-snpw-pink-dark transition-colors">
              Learn More About Us
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

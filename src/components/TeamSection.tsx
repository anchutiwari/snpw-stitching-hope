
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
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
  
  const team = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces",
      name: "Sarah Johnson",
      role: "Lead Sewing Instructor",
      bio: "Master tailor with 15 years of experience and a passion for teaching traditional techniques.",
      delay: "0.1s"
    },
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=faces",
      name: "Maria Rodriguez",
      role: "Business Mentor",
      bio: "Former fashion entrepreneur who guides women through the process of starting their own businesses.",
      delay: "0.3s"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=faces",
      name: "Emily Chen",
      role: "Program Coordinator",
      bio: "Passionate advocate who ensures our programs effectively meet the needs of the women we serve.",
      delay: "0.5s"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="container-padding">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="chip animate-fade-in">Our People</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our dedicated team of experts brings together diverse skills and a shared passion for empowering women.
          </p>
        </div>
        
        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover-scale transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: member.delay }}
            >
              <div className="relative group">
                <div className="image-zoom overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Social media overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110">
                      <Instagram size={16} className="text-gray-800" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110">
                      <Linkedin size={16} className="text-gray-800" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110">
                      <Mail size={16} className="text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-snpw-pink font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/about" className="story-link inline-flex items-center text-gray-800 font-medium hover:text-snpw-pink">
            Meet Our Full Team 
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

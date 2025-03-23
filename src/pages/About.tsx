
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Heart, BookOpen, Users, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const [isVisible, setIsVisible] = useState({
    impact: false,
    mission: false,
    process: false,
    team: false
  });
  
  const impactRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  
  const [counters, setCounters] = useState({
    womenTrained: 0,
    businessesStarted: 0,
    successRate: 0
  });
  
  const targets = {
    womenTrained: 500,
    businessesStarted: 200,
    successRate: 80
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const targetId = entry.target.id;
            setIsVisible(prev => ({
              ...prev,
              [targetId]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const refs = [
      { ref: impactRef, id: 'impact' },
      { ref: missionRef, id: 'mission' },
      { ref: processRef, id: 'process' },
      { ref: teamRef, id: 'team' }
    ];
    
    refs.forEach(({ ref, id }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isVisible.impact) return;
    
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
        successRate: Math.floor(targets.successRate * progress)
      });
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
    
    return () => clearInterval(timer);
  }, [isVisible.impact]);

  const founders = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces",
      name: "Maria Rodriguez",
      role: "Founder & CEO",
      bio: "Former fashion designer who started SNPW after witnessing the transformative power of skills training in her community.",
      delay: "0.1s"
    },
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=faces",
      name: "Jennifer Chang",
      role: "Co-Founder & Program Director",
      bio: "Passionate advocate for women's economic empowerment with 15 years of experience in community development.",
      delay: "0.3s"
    }
  ];
  
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
      name: "Emily Chen",
      role: "Business Mentor",
      bio: "Former fashion entrepreneur who guides women through the process of starting their own businesses.",
      delay: "0.3s"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=faces",
      name: "Lisa Williams",
      role: "Program Coordinator",
      bio: "Passionate advocate who ensures our programs effectively meet the needs of the women we serve.",
      delay: "0.5s"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center">
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Women sewing in training session"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-padding relative z-20 text-white">
            <div className="max-w-3xl">
              <div className="chip animate-fade-in">About SNPW</div>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Empowering Women Through Skill & Independence!
              </h1>
              <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                SNPW is dedicated to uplifting women by providing sewing training and entrepreneurship support, creating pathways to economic independence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section id="impact" ref={impactRef} className="section-padding bg-white">
          <div className="container-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="chip animate-fade-in">Our Impact</div>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Measurable Change in Women's Lives
              </h2>
              <p className="mt-4 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Since our founding, we've created significant positive impact through our programs:
              </p>
            </div>
            
            {/* Stats grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Women Trained */}
              <div className={`rounded-xl p-8 text-center transition-all duration-700 ${isVisible.impact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s', backgroundColor: 'rgba(255, 146, 165, 0.1)' }}>
                <div className="text-4xl md:text-5xl font-bold text-snpw-pink counter-value">
                  {counters.womenTrained}+
                </div>
                <p className="mt-3 text-gray-700 font-medium">Women Trained</p>
              </div>
              
              {/* Businesses Started */}
              <div className={`rounded-xl p-8 text-center transition-all duration-700 ${isVisible.impact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s', backgroundColor: 'rgba(255, 159, 90, 0.1)' }}>
                <div className="text-4xl md:text-5xl font-bold text-snpw-orange counter-value">
                  {counters.businessesStarted}+
                </div>
                <p className="mt-3 text-gray-700 font-medium">Small Businesses Started</p>
              </div>
              
              {/* Success Rate */}
              <div className={`rounded-xl p-8 text-center transition-all duration-700 ${isVisible.impact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s', backgroundColor: 'rgba(64, 191, 189, 0.1)' }}>
                <div className="text-4xl md:text-5xl font-bold text-snpw-teal counter-value">
                  {counters.successRate}%
                </div>
                <p className="mt-3 text-gray-700 font-medium">Success Rate in Financial Growth</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section id="mission" ref={missionRef} className="section-padding bg-gray-50">
          <div className="container-padding">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={`image-zoom rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${isVisible.mission ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '0.1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Women empowered through SNPW programs" 
                  className="w-full h-auto object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              
              {/* Content */}
              <div className={`transition-all duration-700 ${isVisible.mission ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '0.3s' }}>
                <div className="chip">Our Mission & Vision</div>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Stitching a Better Future</h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <Heart className="text-snpw-pink mr-2" size={24} />
                      Our Mission
                    </h3>
                    <p className="text-gray-700">
                      To empower women through practical skill development, business training, and ongoing support, enabling them to achieve financial independence and improve their lives.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <BookOpen className="text-snpw-orange mr-2" size={24} />
                      Our Vision
                    </h3>
                    <p className="text-gray-700">
                      A world where every woman has the skills, resources, and confidence to create economic opportunities for herself and her community.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <Users className="text-snpw-teal mr-2" size={24} />
                      Our Values
                    </h3>
                    <p className="text-gray-700">
                      Empowerment, Sustainability, Excellence, Community, and Respect guide everything we do at SNPW.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How We Work Section */}
        <section id="process" ref={processRef} className="section-padding">
          <div className="container-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="chip animate-fade-in">Our Process</div>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                How We Work
              </h2>
              <p className="mt-4 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Our comprehensive approach ensures women receive the support they need at every step:
              </p>
            </div>
            
            {/* Process steps */}
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.1s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-snpw-pink"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-snpw-pink-light flex items-center justify-center text-snpw-pink font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Identify Women in Need</h3>
                  <p className="text-gray-600">
                    We work with community organizations to identify women who can benefit most from our programs.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.2s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-snpw-orange"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-snpw-orange-light flex items-center justify-center text-snpw-orange font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Provide Skill-Based Training</h3>
                  <p className="text-gray-600">
                    Our comprehensive sewing and tailoring curriculum gives women practical, marketable skills.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.3s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-snpw-yellow"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-snpw-yellow-light flex items-center justify-center text-snpw-yellow-dark font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Offer Mentorship & Support</h3>
                  <p className="text-gray-600">
                    Business mentorship, legal guidance, and ongoing support help women overcome challenges.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.4s' }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-snpw-teal"></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-snpw-teal-light flex items-center justify-center text-snpw-teal font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-3">Help Start Businesses</h3>
                  <p className="text-gray-600">
                    We assist with business setup, marketing, and access to microfinance opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Founders & Team Section */}
        <section id="team" ref={teamRef} className="section-padding bg-gray-50">
          <div className="container-padding">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="chip animate-fade-in">Our People</div>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Meet Our Founders & Team
              </h2>
              <p className="mt-4 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                The passionate individuals behind SNPW who are dedicated to empowering women:
              </p>
            </div>
            
            {/* Founders */}
            <h3 className="text-2xl font-bold mb-6">Our Founders</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {founders.map((founder, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden shadow-md hover-scale transition-all duration-700 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: founder.delay }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 image-zoom">
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-full h-full object-cover"
                        style={{ maxHeight: '300px' }}
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h4 className="text-xl font-bold">{founder.name}</h4>
                      <p className="text-snpw-pink font-medium mb-3">{founder.role}</p>
                      <p className="text-gray-600">{founder.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Team members */}
            <h3 className="text-2xl font-bold mb-6">Our Core Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden shadow-md hover-scale transition-all duration-700 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: member.delay }}
                >
                  <div className="image-zoom h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-snpw-pink font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-snpw-pink text-white">
          <div className="container-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
              Join Our Mission
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/90 text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Be part of our journey to empower women through skills and entrepreneurship. Together, we can create lasting change.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button className="fancy-button bg-white text-snpw-pink hover:bg-gray-100 px-6 py-6 h-auto">
                Volunteer With Us <ArrowRight size={18} className="ml-1" />
              </Button>
              <Button className="fancy-button bg-snpw-pink-dark hover:bg-snpw-pink-dark/90 text-white border border-white/20 px-6 py-6 h-auto">
                Donate Now <ArrowRight size={18} className="ml-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

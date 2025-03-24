
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-snpw-green-light/30 to-white"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDgwMDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGMyLjIxIDAgNC0xLjc5IDQtNHptLTIwIDBoMTB2MkgxNnYtMnptMjAgMGgxMHYySDM2di0yek0zNiAyNGg4djJoLTh2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

      <div className="container-padding relative z-10 pt-20 pb-16 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-8 mt-12 lg:mt-0">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-snpw-green text-white animate-fade-in-left" style={{ animationDelay: '0.3s' }}>Empowerment Through Skills</div>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
            <span className="text-snpw-blue">SNPWS</span> – Sindhuther Public Welfare Society
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
            Empowering women through skills development for financial independence and a brighter future. Join our community and transform lives.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
            <Button className="fancy-button bg-snpw-green hover:bg-snpw-green-dark text-white px-6 py-6 h-auto">
              Join Our Training
            </Button>
            <Button className="fancy-button bg-white hover:bg-gray-50 text-snpw-green border border-snpw-green px-6 py-6 h-auto">
              Donate Now
            </Button>
            <Button className="fancy-button bg-snpw-blue hover:bg-snpw-blue-dark text-white px-6 py-6 h-auto">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Woman learning new skills"
              className="w-full h-auto object-cover"
              style={{ minHeight: '300px', maxHeight: '80vh' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-snpw-green opacity-30 blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-snpw-blue opacity-30 blur-xl"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium text-gray-500 mb-2">Scroll to explore</span>
        <ArrowRight size={20} className="text-gray-500 transform rotate-90" />
      </div>
    </div>
  );
};

export default HeroSection;

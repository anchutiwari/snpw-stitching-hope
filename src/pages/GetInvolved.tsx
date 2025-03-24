
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  HandHeart, 
  Handshake, 
  Package, 
  ArrowRight, 
  Heart, 
  Users, 
  Scissors
} from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#008000] to-[#1A237E]">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <HandHeart className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Make a Difference - Get Involved
          </h1>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover the many ways you can support our mission to empower women through skills development.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" 
                  alt="Volunteer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center mb-2">
                      <Users className="text-white mr-2" size={24} />
                      <h2 className="text-2xl font-bold text-white">Volunteer</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Share your skills and time with women eager to learn. Whether you can teach sewing, help with business development, or assist with events, your contribution makes a difference.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Teach sewing and tailoring skills</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Mentor women entrepreneurs</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Provide marketing and business guidance</span>
                  </li>
                </ul>
                <Link to="/volunteer">
                  <Button className="w-full bg-[#008000] hover:bg-[#006400] text-white">
                    Apply to Volunteer <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Become a Partner */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600" 
                  alt="Partnerships" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center mb-2">
                      <Handshake className="text-white mr-2" size={24} />
                      <h2 className="text-2xl font-bold text-white">Partner With Us</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Create meaningful impact through corporate partnerships, CSR initiatives, or collaborative projects that empower women through skills development.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Corporate Social Responsibility (CSR) projects</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Sponsorship of training programs</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Event collaborations and community initiatives</span>
                  </li>
                </ul>
                <Link to="/partnership">
                  <Button className="w-full bg-[#1A237E] hover:bg-[#0F1752] text-white">
                    Become a Partner <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Donate Materials */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600" 
                  alt="Donate Materials" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center mb-2">
                      <Package className="text-white mr-2" size={24} />
                      <h2 className="text-2xl font-bold text-white">Donate Materials</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Support our programs by donating sewing machines, fabrics, threads, and other materials needed for training women in sewing and tailoring skills.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Sewing machines (new or gently used)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Fabrics, threads, and notions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Business and sewing education materials</span>
                  </li>
                </ul>
                <Link to="/donate-materials">
                  <Button className="w-full bg-[#008000] hover:bg-[#006400] text-white">
                    Donate Materials <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Financial Support */}
      <section className="py-16 bg-[#1A237E]/10">
        <div className="container-padding max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Financial support" 
                  className="w-full h-full object-cover"
                  style={{ minHeight: "300px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                  <div className="p-8">
                    <Heart className="text-white mb-4" size={40} />
                    <h2 className="text-3xl font-bold text-white mb-2">Financial Support</h2>
                    <p className="text-white/90">Your donation empowers women through skills development.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">Make a Financial Contribution</h3>
                <p className="text-gray-700 mb-6">
                  Your generous donation directly supports women's empowerment through skills training, business development, and community initiatives.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-[#008000] mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold">One-Time Donation</h4>
                      <p className="text-sm text-gray-600">Support our programs with a one-time contribution of any amount.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-[#008000] mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold">Monthly Giving</h4>
                      <p className="text-sm text-gray-600">Join our Impact Circle with a recurring monthly donation.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-[#008000] mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold">Sponsor a Woman</h4>
                      <p className="text-sm text-gray-600">Support a woman's complete training journey for $500.</p>
                    </div>
                  </li>
                </ul>
                <Link to="/donate">
                  <Button className="w-full bg-[#008000] hover:bg-[#006400] text-white py-6 h-auto">
                    Donate Now <Heart className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Advocacy */}
      <section className="py-16 bg-white">
        <div className="container-padding max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Scissors className="w-12 h-12 text-[#008000] mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Spread the Word</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Help us raise awareness about women's empowerment through skills development by sharing our mission with your network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#008000]" size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <p className="text-gray-600">
                Follow our social media accounts and share our posts to help spread our message.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#008000]" size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Share Stories</h3>
              <p className="text-gray-600">
                Share the inspiring success stories of women who have transformed their lives through our programs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-[#008000]" size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Host an Event</h3>
              <p className="text-gray-600">
                Organize an awareness or fundraising event in your community to support our cause.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#008000]">
        <div className="container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <HandHeart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/90 mb-8">
              No matter how you choose to get involved, your support helps empower women through skills development and creates lasting positive change in communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/volunteer">
                <Button className="bg-white text-[#008000] hover:bg-white/90 px-6 py-6 h-auto fancy-button">
                  Volunteer <Users className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/donate">
                <Button className="bg-[#1A237E] text-white hover:bg-[#0F1752] px-6 py-6 h-auto fancy-button">
                  Donate <Heart className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-6 h-auto fancy-button">
                  Contact Us <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;

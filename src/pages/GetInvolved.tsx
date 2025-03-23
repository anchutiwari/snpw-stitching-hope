
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Briefcase, Gift } from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-snpw-orange-light to-white">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Be a Part of the Change!
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your support can help women gain skills, independence, and confidence. There are many ways to get involved with SNPW.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Get Involved</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Become a Volunteer */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-scale">
              <Heart className="w-12 h-12 text-snpw-pink mb-6" />
              <h3 className="text-xl font-bold mb-4">Become a Volunteer</h3>
              <p className="text-gray-700 mb-6">
                Share your skills and time to support our mission. Whether you're a sewing expert, business mentor, or general helper, we have opportunities for you.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-snpw-pink mr-2">✓</span>
                  <span>Teach sewing classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-pink mr-2">✓</span>
                  <span>Provide business mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-pink mr-2">✓</span>
                  <span>Help with events and logistics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-pink mr-2">✓</span>
                  <span>Assist with administrative tasks</span>
                </li>
              </ul>
              <Button className="w-full bg-snpw-pink-light hover:bg-snpw-pink text-snpw-pink hover:text-white">
                Apply to Volunteer
              </Button>
            </div>
            
            {/* Corporate Partnerships */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-scale">
              <Briefcase className="w-12 h-12 text-snpw-orange mb-6" />
              <h3 className="text-xl font-bold mb-4">Corporate Partnerships</h3>
              <p className="text-gray-700 mb-6">
                Partner with SNPW as part of your corporate social responsibility initiatives. Your company can make a significant impact while gaining meaningful visibility.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-snpw-orange mr-2">✓</span>
                  <span>CSR program collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-orange mr-2">✓</span>
                  <span>Employee volunteer opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-orange mr-2">✓</span>
                  <span>Event sponsorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-orange mr-2">✓</span>
                  <span>Program funding partnerships</span>
                </li>
              </ul>
              <Button className="w-full bg-snpw-orange-light hover:bg-snpw-orange text-snpw-orange hover:text-white">
                Become a Partner
              </Button>
            </div>
            
            {/* Donate Materials */}
            <div className="bg-white rounded-xl shadow-md p-8 hover-scale">
              <Gift className="w-12 h-12 text-snpw-teal mb-6" />
              <h3 className="text-xl font-bold mb-4">Donate Sewing Materials</h3>
              <p className="text-gray-700 mb-6">
                We welcome in-kind donations of sewing machines, fabrics, and other materials that help us equip women with the tools they need to succeed.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-snpw-teal mr-2">✓</span>
                  <span>Sewing machines (new or gently used)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-teal mr-2">✓</span>
                  <span>Fabrics and textiles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-teal mr-2">✓</span>
                  <span>Sewing tools and equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-snpw-teal mr-2">✓</span>
                  <span>Educational materials</span>
                </li>
              </ul>
              <Button className="w-full bg-snpw-teal-light hover:bg-snpw-teal text-snpw-teal hover:text-white">
                Donate Materials
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-xl shadow-md">
            <div className="text-4xl text-snpw-pink mb-4">"</div>
            <p className="text-lg italic text-gray-700 mb-6">
              Volunteering with SNPW has been one of the most rewarding experiences of my life. Seeing the direct impact of our work on women's lives and watching them grow their confidence and skills is truly amazing.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces" 
                  alt="Volunteer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold">Maria Garcia</p>
                <p className="text-sm text-gray-600">Volunteer Sewing Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-snpw-pink-light">
        <div className="container-padding text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of supporters and help us empower more women through skills training and business development.
          </p>
          <Button className="fancy-button bg-snpw-pink hover:bg-snpw-pink-dark text-white px-8 py-6 h-auto text-lg">
            Sign Up to Help <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;

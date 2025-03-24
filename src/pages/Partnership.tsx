
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Handshake, 
  ArrowRight, 
  Award, 
  PiggyBank, 
  CircleDollarSign,
  Users,
  Package,
  BriefCase
} from "lucide-react";

const Partnership = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.companyName || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Success toast
    toast({
      title: "Partnership inquiry sent!",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    
    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: ""
    });
  };
  
  const partnershipBenefits = [
    {
      title: "CSR Alignment",
      icon: Award,
      description: "Align your corporate social responsibility initiatives with impactful women's empowerment programs."
    },
    {
      title: "Impact-Driven Programs",
      icon: Users,
      description: "Partner with proven programs that create measurable positive change in communities."
    },
    {
      title: "Brand Visibility",
      icon: CircleDollarSign,
      description: "Gain recognition as a socially responsible brand that supports women's economic empowerment."
    }
  ];
  
  const partnershipTypes = [
    {
      title: "Corporate Sponsorship",
      description: "Fund women's training programs and help create sustainable livelihoods for marginalized women.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"
    },
    {
      title: "Material Donations",
      description: "Provide essential sewing machines, fabrics, and materials needed for our training programs.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600"
    },
    {
      title: "Skilled Expertise",
      description: "Share professional expertise in business, marketing, or design to strengthen our programs.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600"
    }
  ];
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#1A237E] to-[#008000]">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <Handshake className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Let's Build a Better Future Together!
          </h1>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Partner with SNPWS for CSR projects, sponsorships, and collaborative community initiatives.
          </p>
          <Button 
            className="bg-white text-[#1A237E] hover:bg-white/90 px-6 py-6 h-auto text-lg fancy-button"
            onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Partner With Us <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create meaningful impact while aligning with your organization's social responsibility goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover-scale">
                <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-[#1A237E]" size={30} />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Types of Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Types of Partnerships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the various ways your organization can collaborate with SNPWS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex items-center mb-2">
                        {index === 0 && <CircleDollarSign className="text-white mr-2" size={20} />}
                        {index === 1 && <Package className="text-white mr-2" size={20} />}
                        {index === 2 && <BriefCase className="text-white mr-2" size={20} />}
                        <h3 className="text-lg font-bold text-white">{type.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partnership Inquiry Form */}
      <section id="partnership-form" className="py-16 bg-white">
        <div className="container-padding max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Partnership Inquiry Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company/Organization Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  
                  {/* Contact Name */}
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Enter contact name"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                
                {/* Partnership Type */}
                <div className="space-y-2">
                  <Label htmlFor="partnershipType">Type of Partnership</Label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select partnership type</option>
                    <option value="sponsorship">Corporate Sponsorship</option>
                    <option value="materials">Material Donations</option>
                    <option value="expertise">Skilled Expertise</option>
                    <option value="other">Other (please specify)</option>
                  </select>
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-24 rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Please provide details about your partnership interests and objectives"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#1A237E] hover:bg-[#0F1752] text-white py-6 h-auto"
                >
                  Submit Inquiry <ArrowRight className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#008000]">
        <div className="container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <Handshake className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Hands with SNPWS Today!
            </h2>
            <p className="text-white/90 mb-8">
              Together, we can create meaningful impact and transform the lives of women in our communities. Let's collaborate for a better tomorrow.
            </p>
            <Button 
              className="bg-white text-[#008000] hover:bg-white/90 px-8 py-6 h-auto text-lg fancy-button"
              onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Partner With Us <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;

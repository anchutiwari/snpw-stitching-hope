
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Scissors, 
  ArrowRight, 
  Package, 
  ArrowDown,
  Check,
  Heart
} from "lucide-react";

const DonateMaterials = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    items: "",
    pickup: false,
    address: "",
    city: "",
    state: "",
    zip: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.items) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Success toast
    toast({
      title: "Material donation form submitted!",
      description: "Thank you for your generosity. We'll contact you shortly to arrange the donation.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      items: "",
      pickup: false,
      address: "",
      city: "",
      state: "",
      zip: "",
      message: ""
    });
  };
  
  const neededItems = [
    {
      title: "Sewing Machines",
      description: "New or used in good working condition",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600"
    },
    {
      title: "Fabrics & Threads",
      description: "Cotton, silk, polyester fabrics and different types of threads",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600"
    },
    {
      title: "Scissors & Accessories",
      description: "Scissors, needles, measuring tapes, and other sewing tools",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600"
    },
    {
      title: "Business Guides",
      description: "Books, guides, and resources for women entrepreneurs",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600"
    }
  ];
  
  const donationSteps = [
    {
      number: 1,
      title: "Fill the Donation Form",
      description: "Complete our simple donation form with details of what you're donating."
    },
    {
      number: 2,
      title: "Schedule a Pickup or Drop-off",
      description: "Choose to have your donation picked up or arrange a convenient time to drop it off."
    },
    {
      number: 3,
      title: "Receive a Donation Receipt",
      description: "Get a tax-deductible receipt and thank you letter acknowledging your contribution."
    }
  ];
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#008000] to-[#1A237E]">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <Package className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Donate Supplies & Equip a Woman for Success!
          </h1>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Support our training programs by donating sewing machines, fabrics, and other essential materials.
          </p>
          <Button 
            className="bg-white text-[#008000] hover:bg-white/90 px-6 py-6 h-auto text-lg fancy-button"
            onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Donate Materials Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These essential materials help women learn sewing skills and start their own businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neededItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                <div className="h-48 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{item.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Donate */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How to Donate Materials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to donate your materials and make an impact.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-[#008000]/20 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {donationSteps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#008000] flex items-center justify-center text-white text-2xl font-bold shrink-0 relative z-10">
                      {step.number}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Material Donation Form */}
      <section id="donation-form" className="py-16 bg-white">
        <div className="container-padding max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Material Donation Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
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
                      placeholder="Enter your email"
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
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                {/* Items to Donate */}
                <div className="space-y-2">
                  <Label htmlFor="items">Items to Donate *</Label>
                  <textarea
                    id="items"
                    name="items"
                    value={formData.items}
                    onChange={handleInputChange}
                    className="w-full min-h-24 rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Please list the items you wish to donate, including quantity and condition"
                    required
                  />
                </div>
                
                {/* Pickup Option */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="pickup"
                      checked={formData.pickup}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300"
                    />
                    <span>I need the items to be picked up</span>
                  </label>
                </div>
                
                {/* Pickup Address (conditional) */}
                {formData.pickup && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-md">
                    <h4 className="font-medium">Pickup Address</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter street address"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Enter city"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="Enter state"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          placeholder="Enter ZIP code"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Additional Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-24 rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Any additional information about your donation"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#008000] hover:bg-[#006400] text-white py-6 h-auto"
                >
                  Submit Donation Form <ArrowRight className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1A237E]">
        <div className="container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Donate Materials & Empower Women Today!
            </h2>
            <p className="text-white/90 mb-8">
              Your donated materials provide valuable resources that help women learn sewing skills and create sustainable livelihoods.
            </p>
            <Button 
              className="bg-white text-[#1A237E] hover:bg-white/90 px-8 py-6 h-auto text-lg fancy-button"
              onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Donate Materials Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateMaterials;


import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  ArrowRight, 
  Scissors, 
  BriefCase, 
  Scale,
  HandHeart
} from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    role: "",
    availability: "part-time",
    message: ""
  });
  
  const [file, setFile] = useState<File | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Success toast
    toast({
      title: "Application submitted!",
      description: "Thank you for volunteering. We'll contact you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      skills: "",
      role: "",
      availability: "part-time",
      message: ""
    });
    setFile(null);
  };
  
  const volunteerRoles = [
    {
      title: "Teach Sewing & Tailoring",
      icon: Scissors,
      description: "Share your sewing expertise with women eager to learn and build their skills."
    },
    {
      title: "Mentor a Woman Entrepreneur",
      icon: BriefCase,
      description: "Guide women as they establish and grow their sewing businesses."
    },
    {
      title: "Help with Marketing & Social Media",
      icon: Users,
      description: "Assist with promoting our cause and helping graduates market their products."
    },
    {
      title: "Provide Business & Legal Guidance",
      icon: Scale,
      description: "Offer professional expertise to help navigate business setup and legal requirements."
    }
  ];
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#008000] to-[#1A237E]">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <Users className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Join Us in Making a Difference!
          </h1>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Volunteer your time, skills, or mentorship to empower women through sewing & business training.
          </p>
          <Button 
            className="bg-white text-[#008000] hover:bg-white/90 px-6 py-6 h-auto text-lg fancy-button"
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Ways You Can Help */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ways You Can Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We welcome volunteers with diverse skills and backgrounds. Find the perfect way to contribute!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover-scale">
                <div className="w-16 h-16 bg-[#008000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <role.icon className="text-[#008000]" size={30} />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{role.title}</h3>
                <p className="text-gray-600 text-center">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section id="application-form" className="py-16 bg-gray-50">
        <div className="container-padding max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Volunteer Application Form</h2>
              
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
                  
                  {/* Skills */}
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Expertise</Label>
                    <Input
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      placeholder="E.g., Sewing, Marketing, Business"
                    />
                  </div>
                </div>
                
                {/* Preferred Role */}
                <div className="space-y-2">
                  <Label htmlFor="role">Preferred Volunteering Role</Label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select a role</option>
                    <option value="teaching">Teach Sewing & Tailoring</option>
                    <option value="mentoring">Mentor a Woman Entrepreneur</option>
                    <option value="marketing">Help with Marketing & Social Media</option>
                    <option value="business">Provide Business & Legal Guidance</option>
                    <option value="other">Other (please specify in message)</option>
                  </select>
                </div>
                
                {/* Availability */}
                <div className="space-y-2">
                  <Label>Availability</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="availability"
                        value="part-time"
                        checked={formData.availability === "part-time"}
                        onChange={handleInputChange}
                        className="rounded border-gray-300"
                      />
                      <span>Part-time</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="availability"
                        value="full-time"
                        checked={formData.availability === "full-time"}
                        onChange={handleInputChange}
                        className="rounded border-gray-300"
                      />
                      <span>Full-time</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="availability"
                        value="remote"
                        checked={formData.availability === "remote"}
                        onChange={handleInputChange}
                        className="rounded border-gray-300"
                      />
                      <span>Remote</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="availability"
                        value="on-site"
                        checked={formData.availability === "on-site"}
                        onChange={handleInputChange}
                        className="rounded border-gray-300"
                      />
                      <span>On-site</span>
                    </label>
                  </div>
                </div>
                
                {/* Resume/Portfolio Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/Portfolio (Optional)</Label>
                  <Input
                    id="resume"
                    type="file"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-gray-500">
                    Upload your resume, portfolio, or any relevant documents (PDF, DOC, DOCX)
                  </p>
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-24 rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Tell us about your motivation to volunteer and any other relevant information"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#008000] hover:bg-[#006400] text-white py-6 h-auto"
                >
                  Submit Application <ArrowRight className="ml-2" size={18} />
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
            <HandHeart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Volunteer Journey Today!
            </h2>
            <p className="text-white/90 mb-8">
              Your skills and time can transform lives. Join our community of volunteers and be part of a movement that empowers women through education and skills development.
            </p>
            <Button 
              className="bg-white text-[#1A237E] hover:bg-white/90 px-8 py-6 h-auto text-lg fancy-button"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;

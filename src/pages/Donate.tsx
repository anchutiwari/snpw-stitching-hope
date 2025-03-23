
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CreditCard, Shield, Heart } from "lucide-react";

const Donate = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  
  const handleDonationSelection = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount(null);
  };
  
  const handleDonate = () => {
    const amount = donationAmount || (customAmount ? parseFloat(customAmount) : 0);
    
    if (amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for your donation!",
      description: `Your donation of $${amount.toFixed(2)} will help empower women in our community.`,
    });
    
    // Reset form
    setDonationAmount(null);
    setCustomAmount("");
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-snpw-pink-light to-white">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <Heart className="w-16 h-16 text-snpw-pink mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Your Donation Empowers Women!
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Every contribution helps us provide training, resources, and support for women seeking financial independence through sewing skills.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-white">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Side */}
              <div className="md:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Woman with her sewing business" 
                  className="w-full h-full object-cover"
                  style={{ minHeight: "300px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Make an Impact</h3>
                  <p>Your donation directly supports women's empowerment through skills training.</p>
                </div>
              </div>
              
              {/* Donation Form Side */}
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-6">Select Donation Amount</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button 
                    variant={donationAmount === 10 ? "default" : "outline"}
                    className={`h-auto py-4 ${donationAmount === 10 ? 'bg-snpw-pink text-white' : 'border-snpw-pink text-snpw-pink'}`}
                    onClick={() => handleDonationSelection(10)}
                  >
                    <span className="text-lg font-bold">$10</span>
                    <span className="text-xs block mt-1">Provides Materials</span>
                  </Button>
                  
                  <Button 
                    variant={donationAmount === 25 ? "default" : "outline"}
                    className={`h-auto py-4 ${donationAmount === 25 ? 'bg-snpw-pink text-white' : 'border-snpw-pink text-snpw-pink'}`}
                    onClick={() => handleDonationSelection(25)}
                  >
                    <span className="text-lg font-bold">$25</span>
                    <span className="text-xs block mt-1">Sponsors Training</span>
                  </Button>
                  
                  <Button 
                    variant={donationAmount === 50 ? "default" : "outline"}
                    className={`h-auto py-4 ${donationAmount === 50 ? 'bg-snpw-pink text-white' : 'border-snpw-pink text-snpw-pink'}`}
                    onClick={() => handleDonationSelection(50)}
                  >
                    <span className="text-lg font-bold">$50</span>
                    <span className="text-xs block mt-1">Helps Start Business</span>
                  </Button>
                  
                  <Button 
                    variant={donationAmount === 100 ? "default" : "outline"}
                    className={`h-auto py-4 ${donationAmount === 100 ? 'bg-snpw-pink text-white' : 'border-snpw-pink text-snpw-pink'}`}
                    onClick={() => handleDonationSelection(100)}
                  >
                    <span className="text-lg font-bold">$100</span>
                    <span className="text-xs block mt-1">Comprehensive Support</span>
                  </Button>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="w-full px-8 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snpw-pink focus:border-transparent"
                    />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-snpw-pink hover:bg-snpw-pink-dark text-white py-6 h-auto"
                  onClick={handleDonate}
                >
                  Donate Now <ArrowRight className="ml-2" size={18} />
                </Button>
                
                <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust & Security Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-6">Trust & Security</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <Shield className="w-10 h-10 text-snpw-pink mx-auto mb-4" />
                <h4 className="font-bold mb-2">Secure Payment</h4>
                <p className="text-sm text-gray-600">All transactions are encrypted and secure.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <CreditCard className="w-10 h-10 text-snpw-orange mx-auto mb-4" />
                <h4 className="font-bold mb-2">Multiple Payment Options</h4>
                <p className="text-sm text-gray-600">Credit card, PayPal, and bank transfers accepted.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <Heart className="w-10 h-10 text-snpw-teal mx-auto mb-4" />
                <h4 className="font-bold mb-2">Tax-Deductible</h4>
                <p className="text-sm text-gray-600">All donations are tax-deductible where applicable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">The Impact of Your Donation</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400" 
                alt="Training impact" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Maria's Story</h3>
                <p className="text-gray-700">
                  "The training I received changed my life. I now run my own tailoring business and can support my family."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400" 
                alt="Business impact" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Community Growth</h3>
                <p className="text-gray-700">
                  "Our community has transformed as women gain financial independence and create jobs for others."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400" 
                alt="Technology impact" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Future Generation</h3>
                <p className="text-gray-700">
                  "The impact goes beyond one generation. Children now have access to education and opportunities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

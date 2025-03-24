
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  Heart, 
  Shield, 
  CreditCard, 
  PiggyBank, 
  CircleDollarSign,
  HandCoins,
  Users,
  Award
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Donate = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"oneTime" | "monthly">("oneTime");
  
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
      description: `Your ${donationType === "monthly" ? "monthly" : "one-time"} donation of $${amount.toFixed(2)} will help empower women in our community.`,
    });
    
    // Reset form
    setDonationAmount(null);
    setCustomAmount("");
  };

  const fundAllocationData = [
    { name: 'Programs', value: 80, color: '#008000' },
    { name: 'Operations', value: 15, color: '#1A237E' },
    { name: 'Fundraising', value: 5, color: '#6ECC94' }
  ];
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Women being empowered through sewing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#008000]/80 to-[#1A237E]/80"></div>
        </div>
        
        <div className="container-padding relative z-10 text-center max-w-4xl mx-auto">
          <Heart className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            Your Support, Their Future!
          </h1>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Every contribution helps a woman build a better future through skill training and financial independence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-white text-[#008000] hover:bg-white/90 px-6 py-6 h-auto fancy-button"
              onClick={() => document.getElementById('donation-tiers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Donate Now <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              className="border-2 border-white bg-transparent text-white hover:bg-white/10 px-6 py-6 h-auto fancy-button"
              onClick={() => document.getElementById('sponsor')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Sponsor a Woman <Users className="ml-2" size={18} />
            </Button>
            <Button 
              className="border-2 border-white bg-transparent text-white hover:bg-white/10 px-6 py-6 h-auto fancy-button"
              onClick={() => document.getElementById('impact-stories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Our Impact <Award className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section id="donation-tiers" className="py-16 bg-white">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Make Your Contribution</h2>
            <p className="text-gray-600">Choose a donation amount or enter your own</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-8 bg-gray-100 p-1 rounded-full w-full max-w-xs mx-auto">
                <button 
                  className={`py-2 px-6 rounded-full text-sm font-medium ${donationType === "oneTime" ? 'bg-[#008000] text-white' : 'text-gray-600'}`}
                  onClick={() => setDonationType("oneTime")}
                >
                  One-time
                </button>
                <button 
                  className={`py-2 px-6 rounded-full text-sm font-medium ${donationType === "monthly" ? 'bg-[#008000] text-white' : 'text-gray-600'}`}
                  onClick={() => setDonationType("monthly")}
                >
                  Monthly
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Button 
                  variant={donationAmount === 10 ? "default" : "outline"}
                  className={`h-auto py-4 ${donationAmount === 10 ? 'bg-[#008000] text-white' : 'border-[#008000] text-[#008000]'}`}
                  onClick={() => handleDonationSelection(10)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">$10</span>
                    <span className="text-xs block mt-1">Provides Materials</span>
                    <PiggyBank className="mt-2" size={20} />
                  </div>
                </Button>
                
                <Button 
                  variant={donationAmount === 25 ? "default" : "outline"}
                  className={`h-auto py-4 ${donationAmount === 25 ? 'bg-[#008000] text-white' : 'border-[#008000] text-[#008000]'}`}
                  onClick={() => handleDonationSelection(25)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">$25</span>
                    <span className="text-xs block mt-1">Sponsors Training</span>
                    <Users className="mt-2" size={20} />
                  </div>
                </Button>
                
                <Button 
                  variant={donationAmount === 50 ? "default" : "outline"}
                  className={`h-auto py-4 ${donationAmount === 50 ? 'bg-[#008000] text-white' : 'border-[#008000] text-[#008000]'}`}
                  onClick={() => handleDonationSelection(50)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">$50</span>
                    <span className="text-xs block mt-1">Starts Business</span>
                    <HandCoins className="mt-2" size={20} />
                  </div>
                </Button>
                
                <Button 
                  variant={donationAmount === 100 ? "default" : "outline"}
                  className={`h-auto py-4 ${donationAmount === 100 ? 'bg-[#008000] text-white' : 'border-[#008000] text-[#008000]'}`}
                  onClick={() => handleDonationSelection(100)}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">$100</span>
                    <span className="text-xs block mt-1">Full Training</span>
                    <Award className="mt-2" size={20} />
                  </div>
                </Button>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount"
                    className="pl-8"
                  />
                </div>
              </div>
              
              <Button 
                className="w-full bg-[#008000] hover:bg-[#006400] text-white py-6 h-auto"
                onClick={handleDonate}
              >
                {donationType === "monthly" ? "Donate Monthly" : "Donate Now"} <ArrowRight className="ml-2" size={18} />
              </Button>
              
              <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2" />
                <span>Secure payment processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust & Transparency Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Trust & Transparency</h2>
            <p className="text-gray-600">See how your donation makes an impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fund Allocation Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-center">Fund Allocation</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={fundAllocationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {fundAllocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                We are committed to transparency and maximizing the impact of your donations.
              </p>
            </div>
            
            {/* Payment Methods & Tax Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg w-24 h-16 flex items-center justify-center">
                    <span className="font-semibold text-gray-800">Visa</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg w-24 h-16 flex items-center justify-center">
                    <span className="font-semibold text-gray-800">PayPal</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg w-24 h-16 flex items-center justify-center">
                    <span className="font-semibold text-gray-800">Stripe</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg w-24 h-16 flex items-center justify-center">
                    <span className="font-semibold text-gray-800">UPI</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1A237E]/10 p-4 rounded-lg">
                <div className="flex items-start">
                  <CircleDollarSign className="text-[#1A237E] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Tax Deductible Contributions</h4>
                    <p className="text-sm text-gray-700">
                      All donations to SNPWS are tax-deductible to the extent permitted by law. You will receive a receipt for your tax records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Donate Section */}
      <section id="impact-stories" className="py-16 bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Donate?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your contribution creates lasting change in the lives of women and their communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Impact Story 1 */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" 
                  alt="Woman learning sewing skills" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Transform Lives Through Education</h3>
                <p className="text-gray-600 mb-4">
                  "Learning to sew changed my life. I can now earn income for my family and send my children to school."
                </p>
                <p className="text-sm text-[#008000] font-medium">— Priya, Program Graduate</p>
              </CardContent>
            </Card>
            
            {/* Impact Story 2 */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600" 
                  alt="Woman entrepreneur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Help Women Achieve Financial Freedom</h3>
                <p className="text-gray-600 mb-4">
                  "With my sewing business, I have achieved financial independence and can support myself and my two daughters."
                </p>
                <p className="text-sm text-[#008000] font-medium">— Meera, Small Business Owner</p>
              </CardContent>
            </Card>
            
            {/* Impact Story 3 */}
            <Card className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600" 
                  alt="Community development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Support Community Development</h3>
                <p className="text-gray-600 mb-4">
                  "The women trained by SNPWS are now training others, creating a ripple effect of positive change across our community."
                </p>
                <p className="text-sm text-[#008000] font-medium">— Rajiv, Community Leader</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Recurring Donations & Sponsorship */}
      <section id="sponsor" className="py-16 bg-[#1A237E]/10">
        <div className="container-padding max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Make a Lasting Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our Impact Circle with monthly giving or sponsor a woman's journey to independence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Giving */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" 
                  alt="Monthly giving impact" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-2xl font-bold text-white p-6">Join Our Impact Circle</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Make a difference every month with a recurring donation. Your sustained support helps us plan and grow our programs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Predictable funding for our programs</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Exclusive updates on the impact of your donation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Special recognition in our annual report</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-[#008000] hover:bg-[#006400] text-white"
                  onClick={() => {
                    setDonationType("monthly");
                    document.getElementById('donation-tiers')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Become a Monthly Donor <Heart className="ml-2" size={16} />
                </Button>
              </div>
            </div>
            
            {/* Sponsor a Woman */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600" 
                  alt="Sponsor a woman" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-2xl font-bold text-white p-6">Sponsor a Woman's Training</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Fully sponsor a woman's year-long journey through training, business setup, and mentorship for $500.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Complete sewing and business training</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Starter kit with sewing machine and materials</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-[#008000] mr-2 mt-1" />
                    <span>Regular updates and connection with your sponsored woman</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-[#1A237E] hover:bg-[#0F1752] text-white"
                  onClick={() => {
                    setDonationAmount(500);
                    setCustomAmount("");
                    document.getElementById('donation-tiers')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Sponsor a Woman <Users className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-[#008000]">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Donate Now & Make a Difference!
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Your contribution today will help empower women through skills training, creating a ripple effect of positive change in communities.
          </p>
          <Button 
            className="bg-white text-[#008000] hover:bg-white/90 px-8 py-6 h-auto text-lg fancy-button"
            onClick={() => document.getElementById('donation-tiers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Make Your Donation <Heart className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Donate;

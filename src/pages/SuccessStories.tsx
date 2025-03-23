
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Maria Gonzalez",
      location: "San Francisco",
      beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      shortStory: "From struggling to make ends meet to owning a thriving tailoring business that employs three other women.",
      fullStory: "Maria joined our program three years ago after losing her job as a housekeeper. With three children to support and limited English skills, she struggled to find stable employment. Through our sewing training program, Maria discovered her natural talent for detailed work and design. After completing the advanced course, she received a microloan to purchase professional equipment. Today, Maria runs a successful tailoring business from her home studio, specializing in wedding dress alterations and custom designs. She has hired three other program graduates and mentors new students in their journey.",
      quote: "SNPW didn't just teach me to sew – they taught me to believe in myself as a businesswoman."
    },
    {
      id: 2,
      name: "Fatima Ali",
      location: "Oakland",
      beforeImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
      afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
      shortStory: "A refugee who transformed her traditional embroidery skills into a modern fashion business that celebrates her heritage.",
      fullStory: "Fatima arrived in the U.S. as a refugee, bringing with her the incredible embroidery skills passed down through generations in her family. While she possessed extraordinary talent, she lacked the business knowledge and connections to turn these skills into a livelihood. Through SNPW's entrepreneurship program, Fatima learned how to create a business model that showcases her unique cultural designs while appealing to the American market. She now sells her hand-embroidered pieces through an online shop and at local boutiques, and has been featured in several fashion blogs for her unique fusion of traditional techniques with modern styles.",
      quote: "I never thought my traditional skills could become a modern business. SNPW helped me bridge my past with my future."
    },
    {
      id: 3,
      name: "Lakshmi Patel",
      location: "San Jose",
      beforeImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      afterImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      shortStory: "Single mother who built a school uniform business that now supplies five local schools and provides stable income.",
      fullStory: "When Lakshmi's husband passed away unexpectedly, she was left to support her two children with no income source. Although she had basic sewing skills, she lacked the confidence and business knowledge to turn this into a sustainable income. Through SNPW's training program, Lakshmi not only improved her technical skills but also identified a gap in the market for affordable, quality school uniforms. With guidance from our business mentors, she approached local schools with samples and competitive pricing. Five schools now contract with her small company for their uniform needs, providing Lakshmi with stable, predictable income throughout the year. She has expanded to hire two assistants and plans to add sports uniforms to her product line next year.",
      quote: "Finding a niche market changed everything for me. Now I don't just have a job – I have a growing company."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-snpw-teal-light to-white">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Real Stories, Real Impact
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Meet the women whose lives have been transformed through SNPW's programs. Their journeys inspire our work every day.
          </p>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-full relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>
                  <div className="h-full flex">
                    <div className="w-1/2 h-full">
                      <img 
                        src={stories[0].beforeImage}
                        alt={`${stories[0].name} before`}
                        className="w-full h-full object-cover opacity-75"
                      />
                      <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium z-20">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 h-full">
                      <img 
                        src={stories[0].afterImage}
                        alt={`${stories[0].name} after`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-snpw-pink/90 text-white px-3 py-1 rounded-full text-xs font-medium z-20">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="chip mb-4">Featured Story</div>
                <h2 className="text-2xl font-bold mb-2">{stories[0].name}</h2>
                <p className="text-sm text-gray-500 mb-4">{stories[0].location}</p>
                <p className="text-gray-700 mb-6">{stories[0].fullStory}</p>
                <blockquote className="border-l-4 border-snpw-pink pl-4 italic text-gray-700 mb-6">
                  "{stories[0].quote}"
                </blockquote>
                <Button className="bg-snpw-pink hover:bg-snpw-pink-dark text-white">
                  Watch Her Video Testimony <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">More Inspiring Journeys</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {stories.slice(1).map(story => (
              <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                <div className="h-64 relative">
                  <img 
                    src={story.afterImage}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-sm opacity-90">{story.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{story.shortStory}</p>
                  <blockquote className="border-l-4 border-snpw-pink pl-4 italic text-gray-700 mb-4 text-sm">
                    "{story.quote}"
                  </blockquote>
                  <a href="#" className="text-snpw-pink font-medium hover:underline inline-flex items-center">
                    Read Full Story <ArrowRight className="ml-1" size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-snpw-pink mb-4">500+</div>
              <h3 className="text-xl font-medium mb-2">Women Trained</h3>
              <p className="text-gray-600">Skilled women ready to enter the workforce or start their own businesses</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-snpw-orange mb-4">200+</div>
              <h3 className="text-xl font-medium mb-2">Businesses Started</h3>
              <p className="text-gray-600">Successful small enterprises providing sustainable income</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-snpw-teal mb-4">80%</div>
              <h3 className="text-xl font-medium mb-2">Income Growth</h3>
              <p className="text-gray-600">Average increase in household income after program completion</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-snpw-pink-light">
        <div className="container-padding text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Help Create More Success Stories</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Your contribution can help more women transform their lives through skills development and entrepreneurship support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="fancy-button bg-snpw-pink hover:bg-snpw-pink-dark text-white px-8 py-6 h-auto text-lg">
              Donate Now
            </Button>
            <Button className="fancy-button bg-white hover:bg-gray-50 text-snpw-pink border border-snpw-pink px-8 py-6 h-auto text-lg">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;

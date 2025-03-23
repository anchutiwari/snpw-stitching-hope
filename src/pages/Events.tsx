
import { useState } from "react";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Introduction to Sewing Workshop",
      date: "July 15, 2023",
      time: "10:00 AM - 1:00 PM",
      location: "SNPW Training Center, San Francisco",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      description: "A beginner-friendly workshop that introduces essential sewing skills and provides hands-on practice with sewing machines. All materials provided.",
      available: 12,
      total: 20
    },
    {
      id: 2,
      title: "Business Planning for Sewing Entrepreneurs",
      date: "July 22, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event (Zoom)",
      category: "Webinar",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
      description: "Learn how to create a business plan specific to sewing-based enterprises. Topics include pricing, market research, and growth strategies.",
      available: 25,
      total: 50
    },
    {
      id: 3,
      title: "Annual SNPW Fundraising Gala",
      date: "August 5, 2023",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hotel Ballroom, San Francisco",
      category: "Fundraiser",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
      description: "Join us for an evening of celebration, featuring success stories, a fashion show by our graduates, dinner, and silent auction to support our programs.",
      available: 75,
      total: 200
    }
  ];
  
  const pastEvents = [
    {
      id: 4,
      title: "Advanced Pattern Making Workshop",
      date: "June 10, 2023",
      location: "SNPW Training Center, San Francisco",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600",
      attendees: 18,
      highlights: "Participants created custom patterns and learned advanced fitting techniques."
    },
    {
      id: 5,
      title: "Sustainable Fashion Panel Discussion",
      date: "May 25, 2023",
      location: "Community Art Center, Oakland",
      category: "Panel",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      attendees: 45,
      highlights: "Industry experts discussed eco-friendly practices and how small businesses can incorporate sustainability."
    },
    {
      id: 6,
      title: "Spring Showcase of Student Work",
      date: "April 15, 2023",
      location: "City Park Gallery, San Francisco",
      category: "Exhibition",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600",
      attendees: 120,
      highlights: "Featured garments and accessories created by program graduates, with several pieces sold to attendees."
    }
  ];
  
  const handleRegister = (eventId: number) => {
    toast({
      title: "Registration Successful!",
      description: "You've been registered for the event. Check your email for details.",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-snpw-yellow-light to-white">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Join Our Events & Be a Part of the Change!
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From sewing workshops to fundraising campaigns, our events bring together our community of supporters, volunteers, and program participants.
          </p>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <div className="flex border-b border-gray-200 mb-12">
            <button
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === "upcoming" 
                  ? "border-b-2 border-snpw-pink text-snpw-pink" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === "past" 
                  ? "border-b-2 border-snpw-pink text-snpw-pink" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past Events
            </button>
          </div>
          
          {/* Upcoming Events */}
          {activeTab === "upcoming" && (
            <div className="space-y-12">
              {upcomingEvents.map(event => (
                <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden md:flex hover-scale">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "250px" }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.category === "Workshop" ? "bg-snpw-pink-light text-snpw-pink" :
                        event.category === "Webinar" ? "bg-snpw-teal-light text-snpw-teal" :
                        "bg-snpw-orange-light text-snpw-orange"
                      }`}>
                        {event.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar size={14} className="mr-1" /> {event.date}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock size={14} className="mr-1" /> {event.time}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                      <MapPin size={16} className="mr-1" />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex items-center mb-4 md:mb-0">
                        <Users size={16} className="mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {event.available} spots available of {event.total}
                        </span>
                        <div className="ml-3 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-snpw-pink" 
                            style={{ width: `${100 - (event.available / event.total * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <Button 
                        className="bg-snpw-pink hover:bg-snpw-pink-dark text-white"
                        onClick={() => handleRegister(event.id)}
                      >
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Past Events */}
          {activeTab === "past" && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Past Event Highlights</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pastEvents.map(event => (
                  <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                    <div className="relative">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gray-800/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {event.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar size={14} className="mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <MapPin size={14} className="mr-1" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg mb-4">
                        <div className="flex items-center mb-2">
                          <Users size={14} className="mr-1 text-gray-500" />
                          <span className="text-sm font-medium">{event.attendees} Attendees</span>
                        </div>
                        <p className="text-sm text-gray-700">{event.highlights}</p>
                      </div>
                      
                      <a href="#" className="text-snpw-pink font-medium hover:underline inline-flex items-center text-sm">
                        View Event Gallery <ArrowRight className="ml-1" size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Host an Event Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Want to Host an Event for SNPW?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We welcome community-organized events that support our mission. From fundraisers to awareness campaigns, your initiative can make a difference.
          </p>
          <Button className="fancy-button bg-snpw-teal hover:bg-snpw-teal-dark text-white px-8 py-6 h-auto text-lg">
            Learn How to Host an Event
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;
